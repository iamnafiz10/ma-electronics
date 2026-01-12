import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  // ✅ cookies() is async in latest Next.js
  const cookieStore = await cookies();
  const refresh = cookieStore.get("refresh_token")?.value;

  if (!refresh) {
    return NextResponse.json(
      { message: "No refresh token" },
      { status: 401 }
    );
  }

  const r = await fetch(`${process.env.BACKEND_API_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken: refresh }),
  });

  const data = await r.json();

  if (!r.ok) {
    return NextResponse.json(data, { status: r.status });
  }

  const res = NextResponse.json({ ok: true }, { status: 200 });

  // ✅ set access token cookie
  res.cookies.set("access_token", data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: data.accessExpiresInSec ?? 900, // 15 min default
  });

  // ✅ refresh token rotation (if backend sends new one)
  if (data.refreshToken) {
    res.cookies.set("refresh_token", data.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 15, // 15 days
    });
  }

  return res;
}
