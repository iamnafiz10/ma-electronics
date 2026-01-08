// import { API } from "@/constants/api";
// import { apiFetch, proxyGet, proxyPost, proxyPut } from "@/services/apiClient";
// import type {
//   LoginRequest,
//   LoginResponse,
//   MeResponse,
//   UpdateProfileRequest,
//   ChangePasswordRequest,
//   MessageResponse,
// } from "../Dto/types";

// export const authApi = {
//   login: (payload: LoginRequest) =>
//     apiFetch<LoginResponse>(API.auth.login, {
//       method: "POST",
//       body: JSON.stringify(payload),
//     }),

//   logout: () =>
//     apiFetch<{ ok: true }>(API.auth.logout, {
//       method: "POST",
//     }),

//   me: () => proxyGet<MeResponse>("auth/me"),

//   updateProfile: (payload: UpdateProfileRequest) =>
//     proxyPut<MessageResponse>("auth/profile", payload),

//   changePassword: (payload: ChangePasswordRequest) =>
//     proxyPost<MessageResponse>("auth/changePassword", payload),
// };
