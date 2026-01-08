import { cookies } from "next/headers";
import { NextResponse } from "next/server";

type AnyObj = Record<string, any>;

function pickToken(data: AnyObj) {
  const t = data?.tokens ?? data ?? {};

  const accessToken =
    t.accessToken ??
    t.AccessToken ??
    t.token ??
    t.Token ??
    data?.accessToken ??
    data?.AccessToken;

  const refreshToken =
    t.refreshToken ??
    t.RefreshToken ??
    data?.refreshToken ??
    data?.RefreshToken;

  const accessExpiresInSec =
    t.accessExpiresInSec ??
    t.AccessExpiresInSec ??
    data?.accessExpiresInSec ??
    data?.AccessExpiresInSec;

  return { accessToken, refreshToken, accessExpiresInSec };
}

async function readJsonSafe(res: Response) {
  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function clearAuthCookies(res: NextResponse) {
  res.cookies.set("access_token", "", { path: "/", maxAge: 0 });
  res.cookies.set("refresh_token", "", { path: "/", maxAge: 0 });
  res.cookies.set("user_role", "", { path: "/", maxAge: 0 });
}

function setAuthCookies(
  res: NextResponse,
  accessToken: string,
  refreshToken?: string,
  accessExpiresInSec?: number
) {
  res.cookies.set("access_token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: accessExpiresInSec ?? 900,
  });

  if (refreshToken) {
    res.cookies.set("refresh_token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 15,
    });
  }
}

async function callBackend(req: Request, backendUrl: string, accessToken?: string) {
  const headers = new Headers(req.headers);

  headers.delete("host");
  headers.delete("content-length");

  // Authorization overwrite
  if (accessToken) headers.set("authorization", `Bearer ${accessToken}`);
  else headers.delete("authorization");

  // Don’t forward cookies to backend (we use bearer)
  headers.delete("cookie");

  const method = req.method.toUpperCase();
  const body =
    method === "GET" || method === "HEAD" ? undefined : await req.arrayBuffer();

  return fetch(backendUrl, {
    method,
    headers,
    body,
  });
}

async function refreshAccessToken(base: string) {
  // ✅ cookies() is a Promise in newer Next.js
  const cookieStore = await cookies();
  const refresh = cookieStore.get("refresh_token")?.value;

  if (!refresh) return { ok: false as const, reason: "No refresh token" };

  const r = await fetch(`${base}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken: refresh }),
  });

  if (!r.ok) {
    const data = await readJsonSafe(r);
    const msg = (data && (data.message || data.title)) || `Refresh failed (${r.status})`;
    return { ok: false as const, reason: msg };
  }

  const data = await r.json().catch(() => ({}));
  const { accessToken, refreshToken, accessExpiresInSec } = pickToken(data);

  if (!accessToken) return { ok: false as const, reason: "No access token in refresh response" };

  return { ok: true as const, accessToken, refreshToken, accessExpiresInSec };
}

async function handler(req: Request, ctx: any) {
  const base = process.env.BACKEND_API_URL;
  if (!base) {
    return NextResponse.json({ message: "BACKEND_API_URL is missing" }, { status: 500 });
  }

  const incomingUrl = new URL(req.url);

  // ✅ params may be a Promise in newer Next.js
  const resolvedParams = await Promise.resolve(ctx?.params);
  const parts: string[] | undefined = resolvedParams?.path;

  if (!parts?.length) {
    return NextResponse.json(
      {
        message: "Missing proxy path",
        hint: "Use /api/proxy/<path>. Example: /api/proxy/auth/me",
      },
      { status: 400 }
    );
  }

  const backendUrl = `${base}/${parts.join("/")}${incomingUrl.search}`;
console.log("Proxying to backend URL:", backendUrl);
  // ✅ cookies() may be a Promise
  const cookieStore = await cookies();
  const access = cookieStore.get("access_token")?.value;

  // 1) first attempt
  let backendRes = await callBackend(req, backendUrl, access);

  // 2) if unauthorized => refresh once => retry once
  if (backendRes.status === 401) {
    const refreshed = await refreshAccessToken(base);

    if (!refreshed.ok) {
      const out = NextResponse.json(
        { message: "Unauthorized (refresh failed)", reason: refreshed.reason },
        { status: 401 }
      );
      clearAuthCookies(out);
      return out;
    }

    backendRes = await callBackend(req, backendUrl, refreshed.accessToken);
    

    if (backendRes.status === 401) {
      const out = NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      clearAuthCookies(out);
      return out;
    }

    const contentType = backendRes.headers.get("content-type") ?? "application/json";
    const body = await backendRes.arrayBuffer();

    const out = new NextResponse(body, {
      status: backendRes.status,
      headers: { "content-type": contentType },
    });

    setAuthCookies(out, refreshed.accessToken, refreshed.refreshToken, refreshed.accessExpiresInSec);
    return out;
  }

  // Normal passthrough
  const contentType = backendRes.headers.get("content-type") ?? "application/json";
  const body = await backendRes.arrayBuffer();

  return new NextResponse(body, {
    status: backendRes.status,
    headers: { "content-type": contentType },
  });
}

export async function GET(req: Request, ctx: any) {
  return handler(req, ctx);
}
export async function POST(req: Request, ctx: any) {
  return handler(req, ctx);
}
export async function PUT(req: Request, ctx: any) {
  return handler(req, ctx);
}
export async function PATCH(req: Request, ctx: any) {
  return handler(req, ctx);
}
export async function DELETE(req: Request, ctx: any) {
  return handler(req, ctx);
}
