"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { authService } from "@/services/auth.service";
import { ApiError } from "@/services/apiClient";

type LoginMode = "admin" | "user";

export function useLogin({ mode = "user" }: { mode?: LoginMode }) {
  const router = useRouter();
  const sp = useSearchParams();

  // redirect target
  const next =
    sp.get("next") ||
    (mode === "admin" ? "/admin/dashboard" : "/");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function submit() {
    setErr("");
    setLoading(true);

    try {
      const d = await authService.login({ email, password });
      if (mode === "admin") {
  if (d.userRole?.toLowerCase() === "user") {
    setErr("Admin access only");
    await authService.logout();
    return;
  } 
  router.replace("/admin/dashboard");
}

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
