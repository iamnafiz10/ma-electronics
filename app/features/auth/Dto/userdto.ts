export interface UserWithRolesDto {
  id: string;
  userName: string;
  email: string;
  isActive: boolean;
  roles: string[];
}

export interface UserCreateDto {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
}

export interface UserUpdateDto {
  userId: string;
  userName?: string;
  email?: string;
  role?: string;
}

export interface UserStatusUpdateDto {
  userId: string;
  isActive: boolean;
}
