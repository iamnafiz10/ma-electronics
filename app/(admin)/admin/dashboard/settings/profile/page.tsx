"use client";

import { useProfile } from "@/app/features/auth/hooks/useProfile";

export default function Page() {
  const p = useProfile();

  if (p.loading) {
    return (
      <section className="p-4">
        <div className="bg-white border border-gray-200 rounded p-6">Loading...</div>
      </section>
    );
  }

  return (
    <section className="p-4">
      <div className="page_header bg-gray-100 border border-gray-200 text-gray-800 py-3 px-4 rounded font-semibold text-[16px]">
        <h2>Update Profile</h2>
      </div>

      <div className="mt-4 bg-white border border-gray-200 rounded p-6">
        {p.err && <div className="mb-3 text-red-600 text-sm">{p.err}</div>}
        {p.ok && <div className="mb-3 text-green-600 text-sm">{p.ok}</div>}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* left */}
          <div>
            <div className="text-sm font-semibold text-gray-700 mb-2">Current Image</div>
            <div className="flex items-center gap-4">
              <img
                src={p.previewSrc}
                alt="avatar"
                className="w-20 h-20 rounded border border-gray-200 object-cover"
              />
              <div className="text-xs text-gray-500">Image Size Should Be 40 × 40 (optional)</div>
            </div>

            <div className="mt-4">
              <input type="file" accept="image/*" onChange={p.onPickImage} className="block w-full text-sm" />
            </div>
          </div>

          {/* right */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">User Name *</label>
              <input
                value={p.fullName}
                onChange={(e) => p.setFullName(e.target.value)}
                className="w-full border border-gray-200 rounded px-3 py-2"
                placeholder="Full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
              <input value={p.email} readOnly className="w-full border border-gray-200 rounded px-3 py-2 bg-gray-50" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
              <input
                value={p.phoneNumber}
                onChange={(e) => p.setPhoneNumber(e.target.value)}
                className="w-full border border-gray-200 rounded px-3 py-2"
                placeholder="+880..."
              />
            </div>

            <button onClick={p.save} disabled={p.saving} className="w-full bg-primary text-white py-2 rounded">
              {p.saving ? "Saving..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
