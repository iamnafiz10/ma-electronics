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
    Profile: "Auth/profile",
  },
 menu: {
    list: "/api/proxy/Menu/getAll",
    menucreate: "/api/proxy/Menu/create",
    menuedit: (id: number) => `/api/proxy/Menu/edit/${id}`,
    menuupdate: "/api/proxy/Menu/update",
    menudelete: (id: number) => `/api/proxy/Menu/delete/${id}`,    
    myMenus: "/Menu/my",
  },
  roles: {
    list: "/api/proxy/Role/GetAll",            
    rolecreate: "/api/proxy/Role/create",   
    roleedit: (id: number) => `/api/proxy/Role/${id}`,
    roleupdate: "/api/proxy/Role",           
    roledelete: (id: string | number) => `/api/proxy/Role/${id}`,
    assignMenu: "/api/proxy/Role/assignMenu",  
    permissions: (roleId: string | number) => `/api/proxy/Role/${roleId}/permissions`,
},

 users: {
    list: "/api/proxy/users/GetAll",
    create: "/api/proxy/users/create",
    update: "/api/proxy/users",
    status: "/api/proxy/users/status",
    delete: (id: string) => `/api/proxy/users/${id}`,
  },  
  brands: {
    list: "/api/proxy/brands/getAll",
    create: "/api/proxy/brands/create",
    update: (id: string) => `/api/proxy/brands/${id}`,
    delete: (id: string) => `/api/proxy/brands/${id}`,
    status: (id: string) => `/api/proxy/brands/${id}/status`,
  },
  categories: {
    list: "/api/proxy/categories/getAll",
    create: "/api/proxy/categories/create",
    update: (id: string) => `/api/proxy/categories/${id}`,
    delete: (id: string) => `/api/proxy/categories/${id}`,
    toggleStatus: (id: string) => `/api/proxy/categories/${id}/toggle-status`,
  },
  proxy: (path: string) => `/api/proxy/${path.replace(/^\/+/, "")}`,
} as const;