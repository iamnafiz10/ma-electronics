import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const r = await fetch(`${process.env.BACKEND_API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await r.json();
  if (!r.ok) return NextResponse.json(data, { status: r.status });

  const accessToken = data.tokens?.accessToken ?? data.tokens?.access_token;
  const refreshToken = data.tokens?.refreshToken ?? data.tokens?.refresh_token;

  if (!accessToken || !refreshToken) {
    return NextResponse.json({ message: "Token missing in response" }, { status: 500 });
  }

  // ✅ role detect via /me
  const meRes = await fetch(`${process.env.BACKEND_API_URL}/auth/me`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  let userRole = "User";
  if (meRes.ok) {
    const me = await meRes.json();
    userRole = me.roles?.includes("Admin") ? "Admin" : "User";
  }

  const res = NextResponse.json(
    { userId: data.userId, email: data.email, userRole },
    { status: 200 }
  );

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

  res.cookies.set("user_role", userRole, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 15,
  });

  return res;
}
