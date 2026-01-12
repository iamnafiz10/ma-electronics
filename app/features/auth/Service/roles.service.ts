import { API } from "@/constants/api";
import { apiFetch } from "@/services/apiClient";
import {
  RoleDTO,
  CreateRoleDTO,
  RoleMenuAssignDTO,
} from "../Dto/rolesDTO";

export const rolesService = {
  list: async (): Promise<RoleDTO[]> => {
    const res = await apiFetch<RoleDTO[] | { responseObj: RoleDTO[] }>(
      API.roles.list,
      { method: "GET" }
    );
    return Array.isArray(res) ? res : res.responseObj ?? [];
  },

  create: (payload: CreateRoleDTO) =>
    apiFetch(API.roles.rolecreate, {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  update: (payload: RoleDTO) =>
    apiFetch(API.roles.roleupdate, {
      method: "PUT",
      body: JSON.stringify(payload),
    }),

  remove: (id: number) =>
    apiFetch(API.roles.roledelete(id), { method: "DELETE" }),

  assignMenu: (payload: RoleMenuAssignDTO) =>
    apiFetch(API.roles.assignMenu, {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  getMenus: async () => {
    const res = await apiFetch<any>(API.menu.list, { method: "GET" });
    return Array.isArray(res) ? res : res.responseObj ?? [];
  },
};
