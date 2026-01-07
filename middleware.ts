import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const access = req.cookies.get("access_token")?.value;
  const role = req.cookies.get("user_role")?.value; // "Admin" | "User"
  const path = req.nextUrl.pathname;

  const isAdminRoute = path.startsWith("/admin");
  const isAdminLogin = path === "/admin/login";
  const isUserRoute = path.startsWith("/user");
  const isUserLogin = path === "/user/login";

  if (isAdminRoute && !isAdminLogin) {
    if (!access) return NextResponse.redirect(new URL(`/admin/login?next=${path}`, req.url));
    if (role !== "Admin") return NextResponse.redirect(new URL("/", req.url));
  }

  if (isUserRoute && !isUserLogin) {
    if (!access) return NextResponse.redirect(new URL(`/user/login?next=${path}`, req.url));
    if (role !== "User") return NextResponse.redirect(new URL("/", req.url));
  }

  if (isAdminLogin && access && role === "Admin") {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }
  if (isUserLogin && access && role === "User") {
    return NextResponse.redirect(new URL("/user/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};
