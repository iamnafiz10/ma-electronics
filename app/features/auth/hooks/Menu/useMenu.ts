import { useEffect, useMemo, useState } from "react";
import { type MenuDTO } from "@/app/features/auth/Dto/MenuDTO";
import { menuService } from "@/app/features/auth/Service/menu.service";

type MenuItem = {
  id: number;
  title: string;
  parentId: number | null;
  description: string;
  url: string;
  icon?: string | null;
  sequence?: number | null;
  withoutView?: boolean;
};

function toInt(v: any): number | null {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

async function loadMenus(
  setMenus: React.Dispatch<React.SetStateAction<MenuItem[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  setIsLoading(true);
  try {
    const res = await menuService.list();
    const raw = Array.isArray(res) ? res : (res?.responseObj ?? res?.data ?? []);

    const normalized: MenuItem[] = raw.map((m: any) => ({
      id: Number(m.id ?? m.Id),
      title: String(m.title ?? m.Title ?? ""),
      parentId: toInt(m.parentId ?? m.ParentId),
      description: String(m.description ?? m.Description ?? ""),
      url: String(m.url ?? m.Url ?? ""),
      icon: (m.icon ?? m.Icon) ?? null,
      sequence: (m.sequence ?? m.Sequence) ?? null,
      withoutView: (m.withoutView ?? m.WithoutView) ?? false,
    }));

    setMenus(normalized);
  } finally {
    setIsLoading(false);
  }
}

export function useMenu() {
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadMenus(setMenus, setIsLoading);
  }, []);

  const parentOptions = useMemo(() => {
    return menus.map(m => ({ id: m.id, title: m.title }));
  }, [menus]);

  const menusById = useMemo(() => {
    const map = new Map<number, MenuItem>();
    menus.forEach(m => map.set(m.id, m));
    return map;
  }, [menus]);

  const parentTitle = (pid: number | null) => {
    if (!pid) return "—";
    return menusById.get(pid)?.title ?? "—";
  };

  return {
    menus,
    isLoading,
    parentOptions,
    parentTitle,
  };
}
