import { API } from "@/constants/api";
import { apiFetch, proxyGet } from "@/services/apiClient";
import {
  RoleDTO,
  CreateRoleDTO,
  RoleMenuAssignDTO,
} from "../Dto/rolesDTO";

export const rolesService = {
  /* ================= LIST ALL ROLES ================= */
  list: async (): Promise<RoleDTO[]> => {
    const res = await apiFetch<RoleDTO[] | { responseObj: RoleDTO[] }>(
      API.roles.list,
      { method: "GET" }
    );

    return Array.isArray(res) ? res : res?.responseObj ?? [];
  },

  /* ================= CREATE ROLE ================= */
  create: async (payload: CreateRoleDTO): Promise<RoleDTO> => {
    try {
      const res = await apiFetch<RoleDTO>(API.roles.rolecreate, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload), // ✅ only title
      });
      return res;
    } catch (err) {
      console.error("[rolesService.create] Error:", err);
      throw err;
    }
  },

  /* ================= GET ROLE BY ID ================= */
  getById: async (id: number): Promise<RoleDTO | null> => {
    try {
      const res = await apiFetch<RoleDTO>(
        API.roles.roleedit(id),
        { method: "GET" }
      );
      return res ?? null;
    } catch (err) {
      console.error("[rolesService.getById] Error:", err);
      return null;
    }
  },

  /* ================= UPDATE ROLE ================= */
  update: async (payload: RoleDTO): Promise<RoleDTO> => {
    try {
      const res = await apiFetch<RoleDTO>(API.roles.roleupdate, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload), // ✅ id + title
      });
      return res;
    } catch (err) {
      console.error("[rolesService.update] Error:", err);
      throw err;
    }
  },

  /* ================= DELETE ROLE ================= */
  remove: async (id: number): Promise<void> => {
    try {
      await apiFetch(API.roles.roledelete(id), {
        method: "DELETE",
      });
    } catch (err) {
      console.error("[rolesService.remove] Error:", err);
      throw err;
    }
  },

  /* ================= ASSIGN MENUS ================= */
  assignMenu: async (payload: RoleMenuAssignDTO): Promise<void> => {
    try {
      await apiFetch(API.roles.assignMenu, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("[rolesService.assignMenu] Error:", err);
      throw err;
    }
  },

  /* ================= MY ROLES / PERMISSIONS ================= */
  my: async (): Promise<RoleDTO[]> => {
    try {
      const res = await proxyGet<RoleDTO[] | { responseObj: RoleDTO[] }>(
        API.menu.myMenus
      );
      return Array.isArray(res) ? res : res?.responseObj ?? [];
    } catch (err) {
      console.error("[rolesService.my] Error:", err);
      return [];
    }
  },
};
