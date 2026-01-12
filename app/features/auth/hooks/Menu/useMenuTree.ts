import { useEffect, useState } from "react";
import { menuService } from "@/app/features/auth/Service/menu.service";
import { pickArray } from "@/app/features/auth/utils/menu.utils";
import type { MenuNode } from "../../Dto/MenuNode";

export function useMenuTree() {
  const [menus, setMenus] = useState<MenuNode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    menuService
      .my()
      .then(res => setMenus(pickArray(res)))
      .catch(() => setMenus([]))
      .finally(() => setLoading(false));
  }, []);

  return { menus, loading };
}
