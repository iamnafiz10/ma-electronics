"use client";

import { useState } from "react";
import { authService } from "@/services/auth.service";
import { ApiError } from "@/services/apiClient";
import type { ChangePasswordRequest } from "../Dto/types";

export function useChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");

  async function submit() {
    setErr("");
    setOk("");

    if (!currentPassword || !newPassword) {
      setErr("Current and new password are required.");
      return;
    }
    if (newPassword.length < 6) {
      setErr("New password must be at least 6 characters.");
      return;
    }
    if (newPassword !== confirm) {
      setErr("New password and confirm password do not match.");
      return;
    }

    setSaving(true);
    try {
      const payload: ChangePasswordRequest = { currentPassword, newPassword };
      const r = await authService.changePassword(payload);
      setOk(r?.message ?? "Password changed successfully.");

      setCurrentPassword("");
      setNewPassword("");
      setConfirm("");
    } catch (e: any) {
      setErr(e instanceof ApiError ? e.message : "Change password failed");
    } finally {
      setSaving(false);
    }
  }

  return {
    currentPassword,
    setCurrentPassword,

    newPassword,
    setNewPassword,

    confirm,
    setConfirm,

    saving,
    err,
    ok,

    submit,
  };
}
