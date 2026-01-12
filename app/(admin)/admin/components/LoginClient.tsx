"use client";

import React from "react";
import Link from "next/link";
import { FiMail, FiLock } from "react-icons/fi";
import { useLogin } from "@/app/features/auth/hooks/useLogin";

export default function LoginClient() {
  const { email, setEmail, password, setPassword, loading, err, submit } =
    useLogin();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-md p-6">
        
        <h2 className="text-2xl font-semibold text-center mb-6">
          Admin Login
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
          
          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full pl-10 pr-3 py-2 border rounded-md text-sm
                         focus:outline-none focus:border-primary"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-10 pr-3 py-2 border rounded-md text-sm
                         focus:outline-none focus:border-primary"
            />
          </div>

          {/* Error */}
          {err && (
            <p className="text-sm text-red-600 text-center">
              {err}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"              // 🔥 MUST
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded-md
                       hover:bg-primary/90 transition
                       disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-4">
          <Link
            href="/admin/forgot"
            className="text-sm text-primary hover:underline"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </section>
  );
}
