// ---- ROLE DTOS ----
export type RoleDTO = {
  id: number;
  title: string;
};

export type CreateRoleDTO = {
  title: string;
};

// ---- MENU ASSIGN DTOS ----
export type MenuPermissionDTO = {
  menuId: number;
  permissions: number[];
};

export type RoleMenuAssignDTO = {
  roleId: number;
  menus: MenuPermissionDTO[];
};
