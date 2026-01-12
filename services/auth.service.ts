import { API } from "@/constants/api";
import { apiFetch } from "@/services/apiClient";
import type {
  LoginRequest,
  LoginResponse,
  MeResponse,
  UpdateProfileRequest,
  ChangePasswordRequest,
  MessageResponse,
} from "@/app/features/auth/Dto/types";

export const authService = {
  // -------- LOGIN --------
  login: async (payload: LoginRequest): Promise<LoginResponse> => {
    const res = await apiFetch<LoginResponse>(API.auth.login, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    // token store
    if ((res as any).tokens) {
      const tokens: any = (res as any).tokens;
      if (tokens.accessToken)
        localStorage.setItem("access_token", tokens.accessToken);
      if (tokens.refreshToken)
        localStorage.setItem("refresh_token", tokens.refreshToken);
    }

    if ((res as any).userRole) {
      localStorage.setItem("role", (res as any).userRole);
    }

    return res;
  },

  // -------- LOGOUT --------
  logout: async () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("role");
  },

  // -------- GET ME --------
  me: (): Promise<MeResponse> =>
    apiFetch<MeResponse>(API.backend.me, {
      method: "GET",
    }),

  // -------- UPDATE PROFILE --------
  updateProfile: (payload: UpdateProfileRequest): Promise<MessageResponse> =>
    apiFetch<MessageResponse>(API.backend.updateProfile, {
      method: "PUT",
      body: JSON.stringify(payload),
    }),

  // -------- CHANGE PASSWORD --------
  changePassword: (
    payload: ChangePasswordRequest
  ): Promise<MessageResponse> =>
    apiFetch<MessageResponse>(API.backend.changePassword, {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
