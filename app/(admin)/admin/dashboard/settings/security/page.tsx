"use client";

import { useChangePassword } from "@/app/features/auth/hooks/useChangePassword";
export default function Page() {
  const p = useChangePassword();

  return (
    <section className="p-4">
      <div className="page_header bg-gray-100 border border-gray-200 text-gray-800 py-3 px-4 rounded font-semibold text-[16px]">
        <h2>Security</h2>
      </div>

      <div className="mt-4 bg-white border border-gray-200 rounded p-6 max-w-xl">
        {p.err && <div className="mb-3 text-red-600 text-sm">{p.err}</div>}
        {p.ok && <div className="mb-3 text-green-600 text-sm">{p.ok}</div>}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Current Password</label>
            <input
              type="password"
              value={p.currentPassword}
              onChange={(e) => p.setCurrentPassword(e.target.value)}
              className="w-full border border-gray-200 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              value={p.newPassword}
              onChange={(e) => p.setNewPassword(e.target.value)}
              className="w-full border border-gray-200 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm New Password</label>
            <input
              type="password"
              value={p.confirm}
              onChange={(e) => p.setConfirm(e.target.value)}
              className="w-full border border-gray-200 rounded px-3 py-2"
            />
          </div>

          <button onClick={p.submit} disabled={p.saving} className="w-full bg-primary text-white py-2 rounded">
            {p.saving ? "Updating..." : "Change Password"}
          </button>
        </div>
      </div>
    </section>
  );
}
