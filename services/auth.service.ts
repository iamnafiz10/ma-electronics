import { API } from "@/constants/api";
import { apiFetch, proxyGet, proxyPost, proxyPut } from "@/services/apiClient";
import type {
  LoginRequest,
  LoginResponse,
  MeResponse,
  UpdateProfileRequest,
  ChangePasswordRequest,
  MessageResponse,
} from "../app/features/auth/Dto/types";

export const authService = {
  // -------- LOGIN --------
  login: (payload: LoginRequest) =>
    apiFetch<LoginResponse>(API.auth.login, {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  // -------- LOGOUT --------
  logout: () =>
    apiFetch<{ ok: true }>(API.auth.logout, {
      method: "POST",
    }),

  // -------- GET ME --------
  me: () => proxyGet<MeResponse>(API.backend.me),

  // -------- UPDATE PROFILE --------
  updateProfile: (payload: UpdateProfileRequest) =>
    proxyPut<MessageResponse>(API.backend.updateProfile, payload),

  // -------- CHANGE PASSWORD --------
  changePassword: (payload: ChangePasswordRequest) =>
    proxyPost<MessageResponse>(API.backend.changePassword, payload),
};
