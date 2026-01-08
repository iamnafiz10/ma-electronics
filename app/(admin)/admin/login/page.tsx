"use client";

import { useLogin } from "@/app/features/auth/hooks/useLogin";

export default function Page() {
  const { email, setEmail, password, setPassword, loading, err, submit } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div />
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
              onClick={submit}
              disabled={loading}
              className="w-full bg-primary text-white py-2 rounded"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
