// app/features/users/hooks/useUsers.ts
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { usersService } from "@/app/features/auth/Service/users.service";
import { UserWithRolesDto } from "@/app/features/auth/Dto/userdto";

export const useUsers = () => {
  const [users, setUsers] = useState<UserWithRolesDto[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await usersService.list();
      setUsers(data);
    } catch {
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (userId: string, isActive: boolean) => {
    await usersService.updateStatus({ userId, isActive });
    toast.success("Status updated");
    fetchUsers();
  };

  const deleteUser = async (id: string) => {
    await usersService.remove(id);
    toast.success("User deleted");
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    loading,
    toggleStatus,
    deleteUser,
    refetch: fetchUsers,
  };
};
