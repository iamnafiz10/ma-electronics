import { API } from "@/constants/api";
import { apiFetch, proxyGet, proxyPost, proxyPut } from "@/services/apiClient";
import type {
  LoginRequest,
  LoginResponse,
  MeResponse,
  UpdateProfileRequest,
  ChangePasswordRequest,
  MessageResponse,
} from "..//Dto/types";

export const authService = {
  login: (payload: LoginRequest) =>
    apiFetch<LoginResponse>(API.auth.login, {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  logout: () =>
    apiFetch<{ ok: true }>(API.auth.logout, {
      method: "POST",
    }),

  me: () => proxyGet<MeResponse>(API.backend.me),
  updateProfile: (p) => proxyPut<MessageResponse>(API.backend.updateProfile, p),
  changePassword: (p) => proxyPost<MessageResponse>(API.backend.changePassword, p),
};
