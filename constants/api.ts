export const API = {
  auth: {
    login: "/api/auth/login",
    logout: "/api/auth/logout",
    refresh: "/api/auth/refresh",
  },
  backend: {
    me: "Auth/me",
    changePassword: "Auth/changePassword",
    updateProfile: "Auth/profile",
  },
  proxy: (path: string) => `/api/proxy/${path.replace(/^\/+/, "")}`,
} as const;