import { API } from "@/constants/api";
import { apiFetch } from "@/services/apiClient";
import type {
  UserCreateDto,
  UserUpdateDto,
  UserStatusUpdateDto,
} from "../Dto/userdto";

export const usersService = {
  // -----------------------------
  // GET ALL USERS
  // -----------------------------
  list: async () => {
    const url = API.users.list;
    console.log("[usersService.list] GET:", url);

    const res = await apiFetch<any>(url, {
      method: "GET",
    });

    console.log("[usersService.list] Response:", res);
    return res;
  },

  // -----------------------------
  // CREATE USER
  // -----------------------------
  create: async (payload: UserCreateDto) => {
    const url = API.users.create;
    console.log("[usersService.create] POST:", url, payload);

    return apiFetch<any>(url, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  // -----------------------------
  // UPDATE USER
  // -----------------------------
  update: async (payload: UserUpdateDto) => {
    const url = API.users.update;
    console.log("[usersService.update] PUT:", url, payload);

    return apiFetch<any>(url, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
  },

  // -----------------------------
  // UPDATE USER STATUS
  // -----------------------------
  updateStatus: async (payload: UserStatusUpdateDto) => {
    const url = API.users.status;
    console.log("[usersService.updateStatus] PATCH:", url, payload);

    return apiFetch<any>(url, {
      method: "PATCH",
      body: JSON.stringify(payload),
    });
  },

  // -----------------------------
  // DELETE USER
  // -----------------------------
  remove: async (id: string) => {
    const url = API.users.delete(id);
    console.log("[usersService.remove] DELETE:", url);

    return apiFetch<any>(url, {
      method: "DELETE",
    });
  },


  // 🔥 DYNAMIC ROLES
  getRoles: async (): Promise<string[]> => {
    const res = API.roles.list;
    if (!res.ok) throw new Error("Failed to load roles");
    return res.json();
  },
};
