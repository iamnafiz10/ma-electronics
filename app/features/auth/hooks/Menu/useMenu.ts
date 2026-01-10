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


import { menuService, type MenuDTO } from "@/services/menu.service";

function toInt(v: any): number | null {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

async function loadMenus(setMenus: any, setIsLoading: any) {
  setIsLoading(true);
  try {
    const res = await menuService.list();

    // backend কখনও wrapper দেয়, কখনও raw list দেয় — safe normalize
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


const parentOptions = useMemo(() => {
  // root ছাড়া অন্য সব menu কে parent হিসেবে allow
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
