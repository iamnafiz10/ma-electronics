// constants/api.ts
export const API = {
  auth: {
    login: "/api/auth/login",
    logout: "/api/auth/logout",
    refresh: "/api/auth/refresh",
  },

  backend: {
    me: "/api/Auth/me",
    changePassword: "/api/Auth/changePassword",
    updateProfile: "/api/Auth/profile",
    profile: "/api/Auth/profile",
  },

  menu: {
    list: "/api/Menu/getAll",
    menucreate: "/api/Menu/create",
    menuedit: (id: number) => `/api/proxy/Menu/edit/${id}`,
    menuupdate: "/api/Menu/update",
    menudelete: (id: number) => `/api/Menu/delete/${id}`,
    myMenus: "/api/Menu/my",
  },

  roles: {
    list: "/api/Role/GetAll",
    rolecreate: "/api/Role/create",
    roleedit: (id: number) => `/api/Role/${id}`,
    roleupdate: "/api/Role",
    roledelete: (id: string | number) => `/api/Role/${id}`,
    assignMenu: "/api/Role/assignMenu",
    permissions: (roleId: string | number) =>
      `/api/Role/${roleId}/permissions`,
  },
} as const;
