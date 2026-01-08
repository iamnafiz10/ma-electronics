"use client";

import { useEffect, useMemo, useState } from "react";
import { authService } from "@/services/auth.service";
import { ApiError } from "@/services/apiClient";
import type { UpdateProfileRequest } from "../Dto/types";

function fileToBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(String(fr.result));
    fr.onerror = reject;
    fr.readAsDataURL(file);
  });
}

export function useProfile() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageBase64, setImageBase64] = useState<string | undefined>(undefined);

  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");

  const previewSrc = useMemo(
    () => imageBase64 || imageUrl || "/avatar.png",
    [imageBase64, imageUrl]
  );

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

    if (!f.type.startsWith("image/")) {
      setErr("Please select an image file");
      return;
    }

    const b64 = await fileToBase64(f);
    setImageBase64(b64);
  }

  async function save() {
    setErr("");
    setOk("");

    if (!fullName.trim()) {
      setErr("Full name is required.");
      return;
    }

    setSaving(true);
    try {
      const payload: UpdateProfileRequest = {
        fullName,
        phoneNumber: phoneNumber || undefined,
        imageBase64,
      };
      const r = await authService.updateProfile(payload);
      setOk(r?.message ?? "Profile updated successfully.");
      // চাইলে: save successful হলে base64 clear করতে পারো
      // setImageBase64(undefined);
    } catch (e: any) {
      setErr(e instanceof ApiError ? e.message : "Update failed");
    } finally {
      setSaving(false);
    }
  }

  return {
    loading,
    saving,
    fullName,
    setFullName,
    email,
    phoneNumber,
    setPhoneNumber,
    previewSrc,
    onPickImage,
    save,
    err,
    ok,
  };
}
