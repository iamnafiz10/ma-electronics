export type UserRole = "Admin" | "LocalAdmin" | "User";

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  userId: string;
  email: string;
  userRole: UserRole;
  token?: string;
  roles?: string[];
};

export type MeResponse = {
  id: string;
  email: string;
  userName: string;
  fullName: string;
  phoneNumber?: string;
  imageUrl?: string;
  roles?: string[];
  userRole?: string;
};

export type UpdateProfileRequest = {
  fullName: string;
  phoneNumber?: string;
  imageBase64?: string;
};

export type ChangePasswordRequest = {
  currentPassword: string;
  newPassword: string;
};

export type MessageResponse = {
  message: string;
};
