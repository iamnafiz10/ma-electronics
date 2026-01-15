import { API } from "@/constants/api";
import { apiFetch, proxyGet } from "@/services/apiClient";
import type { MenuDTO } from "@/app/features/auth/Dto/MenuDTO"; 
import { MenuNode } from "../Dto/MenuNode";

export const menuService = {
//   list: () => apiFetch<any>(API.menu.list, { method: "GET" }),

list: async () => {
  const url = API.menu.list;
  console.log("[menuService.list] GET:", url);
  debugger; 
  const res = await apiFetch<any>(url, { method: "GET" });
  console.log("[menuService.list] Response:", res);
  return res;
},

  create: (payload: MenuDTO) =>
    apiFetch<any>(API.menu.menucreate, {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  getById: (id: number) =>
    apiFetch<any>(API.menu.menuedit(id), {
      method: "GET",
    }),

update: (payload: MenuDTO) =>
  apiFetch<any>(API.menu.menuupdate, {
    method: "POST",  
    body: JSON.stringify(payload),
  }),

  remove: (id: number) =>
    apiFetch<any>(API.menu.menudelete(id), {
      method: "DELETE",
    }),
       
  my: async () => {
  const res = await proxyGet<any>(API.menu.myMenus);
  console.log("[menuService.my] raw response:", res);
  return res;
},

};
