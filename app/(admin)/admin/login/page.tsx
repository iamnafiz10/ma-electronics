"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { authService } from "@/services/auth.service";
import { ApiError } from "@/services/apiClient";

export default function Page() {
  const router = useRouter();
  const sp = useSearchParams();
  const next = sp.get("next") || "/admin/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function login() {
    setErr("");
    setLoading(true);
    try {
      const d = await authService.login(email, password);
console.log("LOGIN DATA:", d);
      if (d.userRole !== "Admin") {
        setErr("You are not an Admin.");
        await authService.logout();
        return;
      }

      router.replace(next);
    } catch (e: any) {
      if (e instanceof ApiError) setErr(e.message);
      else setErr("Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="col">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full border p-2 rounded mb-3"
              />

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full border p-2 rounded mb-4"
              />

              {err && <p className="text-red-600 mb-3">{err}</p>}

              <button
                onClick={login}
                disabled={loading}
                className="w-full bg-primary text-white py-2 rounded"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
