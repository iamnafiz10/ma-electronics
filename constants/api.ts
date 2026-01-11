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

  
 
  proxy: (path: string) => `/api/proxy/${path.replace(/^\/+/, "")}`,
} as const;