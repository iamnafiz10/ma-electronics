import { API } from "@/constants/api";
import { apiFetch, proxyGet } from "@/services/apiClient";
import { rolesDTO, RoleMenuAssignDTO } from "../Dto/rolesDTO";

export const rolesService = {
  // ---------------- LIST ALL ROLES ----------------
 list: async (): Promise<rolesDTO[]> => {
  const res = await apiFetch<rolesDTO[]>(API.roles.list, {
    method: "GET", 
  });

  return Array.isArray(res) ? res : res?.responseObj ?? [];
},

  // ---------------- CREATE ROLE ----------------
  create: async (payload: rolesDTO): Promise<rolesDTO> => {
    try {
      const res = await apiFetch<rolesDTO>(API.roles.rolecreate, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      return res;
    } catch (err) {
      console.error("[rolesService.create] Error:", err);
      throw err;
    }
  },

  // ---------------- GET ROLE BY ID ----------------
  getById: async (id: string | number): Promise<rolesDTO | null> => {
    try {
      const res = await apiFetch<rolesDTO>(API.roles.roleedit(id as number), { method: "GET" });
      return res ?? null;
    } catch (err) {
      console.error("[rolesService.getById] Error:", err);
      return null;
    }
  },

  // ---------------- UPDATE ROLE ----------------
  update: async (payload: rolesDTO): Promise<rolesDTO> => {
  try {
    const res = await apiFetch<rolesDTO>(API.roles.roleupdate, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload), // must include id & title
    });
    return res;
  } catch (err) {
    console.error("[rolesService.update] Error:", err);
    throw err;
  }
},


  // ---------------- DELETE ROLE ----------------
  remove: async (id: string | number): Promise<void> => {
    try {
      await apiFetch(API.roles.roledelete(id as number), { method: "DELETE" });
    } catch (err) {
      console.error("[rolesService.remove] Error:", err);
      throw err;
    }
  },

  // ---------------- ASSIGN MENUS TO ROLE ----------------
  assignMenu: async (payload: RoleMenuAssignDTO): Promise<void> => {
  await apiFetch(API.roles.assignMenu, {
    method: "POST",
    body: JSON.stringify(payload),
  });
},




  // ---------------- GET MY ROLES OR PERMISSIONS ----------------
  my: async (): Promise<rolesDTO[]> => {
    try {
      const res = await proxyGet<rolesDTO[]>(API.roles.myMenus);
      return Array.isArray(res) ? res : res?.responseObj ?? [];
    } catch (err) {
      console.error("[rolesService.my] Error:", err);
      return [];
    }
  },


  
// getPermissions: async (roleId: string | number): Promise<{ menuId: number; permissions: number[] }[]> => {
//   try {
//     const res = await apiFetch<{ menuId: number; permissions: number[] }[]>(
//       `${API.roles.permissions}/${roleId}`,
//       { method: "GET" }
//     );
//     return Array.isArray(res) ? res : [];
//   } catch (err) {
//     console.error("[rolesService.getPermissions] Error:", err);
//     return [];
//   }},

};
