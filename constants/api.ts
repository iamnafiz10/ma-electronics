export const API = {
  auth: {
    login: "/api/auth/login",
    logout: "/api/auth/logout",
    me: "/api/auth/me",
    refresh: "/api/auth/refresh",
  },
  proxy: (path: string) => `/api/proxy/${path.replace(/^\/+/, "")}`,
} as const;
