"use client";

import { useEffect, useMemo, useState } from "react";
import { authService } from "@/services/auth.service";
import { ApiError } from "@/services/apiClient";

function fileToBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(String(fr.result));
    fr.onerror = reject;
    fr.readAsDataURL(file);
  });
}

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageBase64, setImageBase64] = useState<string | undefined>(undefined);

  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");

  const previewSrc = useMemo(() => imageBase64 || imageUrl || "/avatar.png", [imageBase64, imageUrl]);

  useEffect(() => {
    (async () => {
      try {
        const me = await authService.me();
        setFullName(me.fullName ?? "");
        setEmail(me.email ?? "");
        setPhoneNumber(me.phoneNumber ?? "");
        setImageUrl(me.imageUrl ?? "");
      } catch (e: any) {
        setErr(e instanceof ApiError ? e.message : "Failed to load profile");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function onPickImage(e: React.ChangeEvent<HTMLInputElement>) {
    setErr("");
    setOk("");
    const f = e.target.files?.[0];
    if (!f) return;

    // ✅ simple validation (optional)
    if (!f.type.startsWith("image/")) {
      setErr("Please select an image file");
      return;
    }

    // base64 (backend যদি support করে)
    const b64 = await fileToBase64(f);
    setImageBase64(b64);
  }

  async function save() {
    setErr("");
    setOk("");
    setSaving(true);
    try {
      await authService.updateProfile({
        fullName,
        phoneNumber,
        imageBase64, // backend support করলে save হবে
      });
      setOk("Profile updated successfully.");
      // after save, you can clear base64 to force reload imageUrl later if backend returns it
    } catch (e: any) {
      setErr(e instanceof ApiError ? e.message : "Update failed");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
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
        {err && <div className="mb-3 text-red-600 text-sm">{err}</div>}
        {ok && <div className="mb-3 text-green-600 text-sm">{ok}</div>}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* left: image */}
          <div>
            <div className="text-sm font-semibold text-gray-700 mb-2">Current Image</div>
            <div className="flex items-center gap-4">
              <img
                src={previewSrc}
                alt="avatar"
                className="w-20 h-20 rounded border border-gray-200 object-cover"
              />
              <div className="text-xs text-gray-500">
                Image Size Should Be 40 × 40 (optional)
              </div>
            </div>

            <div className="mt-4">
              <input
                type="file"
                accept="image/*"
                onChange={onPickImage}
                className="block w-full text-sm"
              />
            </div>
          </div>

          {/* right: fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">User Name *</label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-gray-200 rounded px-3 py-2"
                placeholder="Full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
              <input
                value={email}
                readOnly
                className="w-full border border-gray-200 rounded px-3 py-2 bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full border border-gray-200 rounded px-3 py-2"
                placeholder="+880..."
              />
            </div>

            <button
              onClick={save}
              disabled={saving}
              className="w-full bg-primary text-white py-2 rounded"
            >
              {saving ? "Saving..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
