import { API } from "@/constants/api";
import { apiFetch } from "@/services/apiClient";
import type { MenuDTO } from "@/app/features/auth/Dto/MenuDTO";
import type { MenuNode } from "../Dto/MenuNode";

export const menuService = {
  list: () =>
    apiFetch<MenuNode[]>(API.menu.list, { method: "GET" }),

  my: () =>
    apiFetch<MenuNode[]>(API.menu.myMenus, { method: "GET" }),

  create: (payload: MenuDTO) =>
    apiFetch(API.menu.menucreate, {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  update: (payload: MenuDTO) =>
    apiFetch(API.menu.menuupdate, {
      method: "PUT",
      body: JSON.stringify(payload),
    }),

  remove: (id: number) =>
    apiFetch(API.menu.menudelete(id), {
      method: "DELETE",
    }),

  getById: (id: number) =>
    apiFetch<MenuDTO>(API.menu.menuedit(id), {
      method: "GET",
    }),
};
