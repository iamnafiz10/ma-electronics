"use client";

import React from "react";
import Link from "next/link";
import { FiMail, FiLock } from "react-icons/fi";
import { useLogin } from "@/app/features/auth/hooks/useLogin";

export default function Page() {
  const { email, setEmail, password, setPassword, loading, err, submit } =
    useLogin();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  return (
    <section
      id="login-section"
      className="min-h-screen flex items-center justify-center bg-gray-50"
    >
      <div className="w-full max-w-md mx-4 bg-white border border-gray-300 rounded-lg p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-[20px] font-semibold text-primary">
            Maa Electronics!
          </h1>
          <h2 className="text-[22px] font-bold mt-2">Login To Admin</h2>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-[14px] font-medium"
            >
              Email
            </label>

            <div className="relative">
              <FiMail
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                autoComplete="email"
                className="w-full text-[14px] border border-gray-300 rounded pl-9 pr-3 py-2
                           focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-[14px] font-medium"
            >
              Password
            </label>

            <div className="relative">
              <FiLock
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="current-password"
                className="w-full text-[14px] border border-gray-300 rounded pl-9 pr-3 py-2
                           focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Error */}
          {err && <p className="text-red-600 text-[14px]">{err}</p>}

          {/* Forgot */}
          <div className="flex items-center justify-center text-[14px]">
            <Link href="/admin/forgot" className="text-primary hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary border border-primary cursor-pointer text-white py-2 rounded-md
                       hover:bg-transparent hover:text-primary transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
}
