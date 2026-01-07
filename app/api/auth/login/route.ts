import { NextResponse } from "next/server";

function pickToken(data: any) {
  const t = data?.tokens ?? {};
  const accessToken =
    t.accessToken ?? t.AccessToken ?? data?.accessToken ?? data?.AccessToken;
  const refreshToken =
    t.refreshToken ?? t.RefreshToken ?? data?.refreshToken ?? data?.RefreshToken;

  return { accessToken, refreshToken };
}

export async function POST(req: Request) {
  try {
    const base = process.env.BACKEND_API_URL;
    if (!base) {
      return NextResponse.json({ message: "BACKEND_API_URL is missing" }, { status: 500 });
    }

    const body = await req.json();

    const r = await fetch(`${base}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await r.json().catch(() => ({}));

    if (!r.ok) {
      return NextResponse.json(
        { message: data?.message ?? "Login failed", data },
        { status: r.status }
      );
    }

    // ✅ backend sends userRole here
    const userRole = data.userRole; // "Admin" | "User" | ...

    const { accessToken, refreshToken } = pickToken(data);
    if (!accessToken || !refreshToken) {
      return NextResponse.json(
        { message: "Token missing in backend response", data },
        { status: 502 }
      );
    }

    const res = NextResponse.json(
      { userId: data.userId, email: data.email, userRole },
      { status: 200 }
    );

    // ✅ cookies
    res.cookies.set("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 900,
    });

    res.cookies.set("refresh_token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 15,
    });

    // ✅ IMPORTANT: set cookie from backend role
    res.cookies.set("user_role", userRole ?? "User", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 15,
    });

    return res;
  } catch (e: any) {
    console.error("LOGIN ROUTE CRASH:", e);
    return NextResponse.json(
      { message: "Next auth route crashed", error: String(e?.message ?? e) },
      { status: 500 }
    );
  }
}
