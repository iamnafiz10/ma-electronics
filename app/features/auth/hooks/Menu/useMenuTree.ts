"use client";
import { useEffect, useState } from "react";
import { menuService } from "@/app/features/auth/Service/menu.service";
import type { MenuNode } from "../../Dto/MenuNode";

function pickMenuArray(res: any): any[] {
  // ✅ support: {responseObj: []}, {data:{responseObj:[]}}, {responseObj:{responseObj:[]}}, direct []
  const arr =
    res?.responseObj ??
    res?.data?.responseObj ??
    res?.responseObj?.responseObj ??
    res?.data ??
    res;

  return Array.isArray(arr) ? arr : [];
}

export function useMenuTree() {
  const [menus, setMenus] = useState<MenuNode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        const res = await menuService.my();
        const arr = pickMenuArray(res);

        console.log("[useMenuTree] picked menus:", arr);

        if (!cancelled) setMenus(arr as MenuNode[]);
      } catch (e) {
        console.log("[useMenuTree] error:", e);
        if (!cancelled) setMenus([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { menus, loading };
}
