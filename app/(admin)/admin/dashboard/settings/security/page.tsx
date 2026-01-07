"use client";

import { useState } from "react";
import { authService } from "@/services/auth.service";
import { ApiError } from "@/services/apiClient";

export default function Page() {
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
      const r = await authService.changePassword({ currentPassword, newPassword });
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

  return (
    <section className="p-4">
      <div className="page_header bg-gray-100 border border-gray-200 text-gray-800 py-3 px-4 rounded font-semibold text-[16px]">
        <h2>Security</h2>
      </div>

      <div className="mt-4 bg-white border border-gray-200 rounded p-6 max-w-xl">
        {err && <div className="mb-3 text-red-600 text-sm">{err}</div>}
        {ok && <div className="mb-3 text-green-600 text-sm">{ok}</div>}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full border border-gray-200 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-200 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm New Password</label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full border border-gray-200 rounded px-3 py-2"
            />
          </div>

          <button
            onClick={submit}
            disabled={saving}
            className="w-full bg-primary text-white py-2 rounded"
          >
            {saving ? "Updating..." : "Change Password"}
          </button>
        </div>
      </div>
    </section>
  );
}
