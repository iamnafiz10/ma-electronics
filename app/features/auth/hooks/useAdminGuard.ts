"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useAdminGuard() {
  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "Admin") {
      router.replace("/admin/login");
    } else {
      setOk(true);
    }
  }, [router]);

  return ok;
}
