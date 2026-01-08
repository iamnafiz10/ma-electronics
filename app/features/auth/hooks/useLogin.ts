"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
// import { authApi } from "../api/auth.api";
import { authService } from "@/services/auth.service";
import { ApiError } from "@/services/apiClient";

export function useLogin() {
  const router = useRouter();
  const sp = useSearchParams();
  const next = sp.get("next") || "/admin/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function submit() {
    setErr("");
    setLoading(true);
    try {
      const d = await authService.login({ email, password });

      // ✅ Admin guard
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

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    err,
    submit,
  };
}
