import { useEffect, useMemo, useState } from "react";
import { menuService } from "@/app/features/auth/Service/menu.service";
import { normalizeMenus, MenuItem } from "@/app/features/auth/utils/menu.utils";

export function useMenu() {
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    menuService
      .list()
      .then(res => setMenus(normalizeMenus(res)))
      .catch(() => setMenus([]))
      .finally(() => setIsLoading(false));
  }, []);

  const parentOptions = useMemo(
    () => menus.map(m => ({ id: m.id, title: m.title })),
    [menus]
  );

  const menusById = useMemo(() => {
    const map = new Map<number, MenuItem>();
    menus.forEach(m => map.set(m.id, m));
    return map;
  }, [menus]);

  const parentTitle = (pid: number | null) =>
    pid ? menusById.get(pid)?.title ?? "—" : "—";

  return { menus, isLoading, parentOptions, parentTitle };
}
