import { API } from "@/constants/api";
import { apiFetch, proxyGet, proxyPost, proxyPut } from "@/services/apiClient";

export type LoginResponse = {
  userId: string;
  email: string;
  userRole: "Admin" | "LocalAdmin" | "User";
};

export type MeResponse = {
  id: string;
  email: string;
  userName: string;
  fullName: string;
  phoneNumber?: string;
  imageUrl?: string;
  roles?: string[];
  userRole?: string;
};

export const authService = {
  login: (email: string, password: string) =>
    apiFetch<LoginResponse>(API.auth.login, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  logout: () => apiFetch<{ ok: true }>(API.auth.logout, { method: "POST" }),
  me: () => proxyGet<MeResponse>("auth/me"), 
  updateProfile: (payload: { fullName: string; phoneNumber?: string; imageBase64?: string }) =>
    proxyPut<{ message: string }>("auth/profile", payload),
  changePassword: (payload: { currentPassword: string; newPassword: string }) =>
    proxyPost<{ message: string }>("auth/changePassword", payload),
};

