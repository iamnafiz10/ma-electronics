export type MenuPermissionDTO = {
  menuId: number;
  permissions: number[]; 
};
export type rolesDTO = {
  id: string;
  title: string;
};


export type RoleMenuAssignDTO = {
  roleId: string;
  menus: MenuPermissionDTO[];
};
