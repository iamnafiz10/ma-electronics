import { useState, useEffect, useMemo } from "react";
import toast from "react-hot-toast";
import { rolesService } from "@/app/features/auth/Service/roles.service";

// --- TYPES ---
export type RoleItem = { id: number; title: string };
export type MenuItem = { id: number; title: string };
export type MenuPermissionSelection = { [menuId: number]: number[] };

// --- HOOK ---
export const useRoles = () => {
  // STATE
  const [roles, setRoles] = useState<RoleItem[]>([]);
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesCount, setEntriesCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // MODALS
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [newRoleName, setNewRoleName] = useState("");
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editRole, setEditRole] = useState<RoleItem | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteRoleId, setDeleteRoleId] = useState<number | null>(null);

  const [assignMenuModalOpen, setAssignMenuModalOpen] = useState(false);
  const [currentAssignRoleId, setCurrentAssignRoleId] = useState<number | null>(null);

  // MENU ASSIGN
  const [selectedMenuIds, setSelectedMenuIds] = useState<number[]>([]);
  const [menuPermissions, setMenuPermissions] = useState<MenuPermissionSelection>({});

  // ---- LOAD DATA ----
  const loadRoles = async () => {
    setIsLoading(true);
    try {
      const res = await rolesService.list();
      setRoles((res || []).map((r: any) => ({ id: Number(r.id), title: String(r.title) })));
    } catch {
      toast.error("Failed to load roles");
    } finally {
      setIsLoading(false);
    }
  };

  const loadMenus = async () => {
    try {
      const res = await fetch("/api/proxy/Menu/getAll").then((r) => r.json());
      setMenus(res || []);
    } catch {
      toast.error("Failed to load menus");
    }
  };

  useEffect(() => {
    loadRoles();
    loadMenus();
  }, []);

  // ---- FILTER + PAGINATION ----
  const filteredRoles = useMemo(
    () => roles.filter((r) => r.title.toLowerCase().includes(searchTerm.toLowerCase())),
    [roles, searchTerm]
  );

  const totalPages = Math.ceil(filteredRoles.length / entriesCount);

  const paginatedRoles = useMemo(() => {
    const start = (currentPage - 1) * entriesCount;
    return filteredRoles.slice(start, start + entriesCount);
  }, [filteredRoles, currentPage, entriesCount]);

  // ---- TABLE CHECKBOX ----
  const handleSelectRow = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectedIds(checked ? paginatedRoles.map((r) => r.id) : []);
  };

  // ---- CRUD ----
  const handleCreateRole = async () => {
    if (!newRoleName) return toast.error("Role name required");
    await rolesService.create({ title: newRoleName });
    toast.success("Role created");
    setOpenCreateModal(false);
    setNewRoleName("");
    loadRoles();
  };

  const handleUpdateRole = async () => {
    if (!editRole) return;
    await rolesService.update(editRole);
    toast.success("Role updated");
    setOpenEditModal(false);
    loadRoles();
  };

  const handleDeleteRole = async () => {
    if (!deleteRoleId) return;
    await rolesService.remove(deleteRoleId);
    toast.success("Role deleted");
    setDeleteModalOpen(false);
    loadRoles();
  };

  // ---- ASSIGN MENU ----
  const handleAssignMenu = async () => {
    if (!currentAssignRoleId) return;

    const payload = {
      roleId: currentAssignRoleId.toString(),
      menus: selectedMenuIds.map((menuId) => ({
        menuId,
        permissions: menuPermissions[menuId] || [],
      })),
    };

    console.log("ASSIGN PAYLOAD:", payload);

    try {
      await rolesService.assignMenu(payload);
      toast.success("Menu assigned successfully");
      setAssignMenuModalOpen(false);
      setSelectedMenuIds([]);
      setMenuPermissions({});
    } catch {
      toast.error("Assign menu failed");
    }
  };

  return {
    roles,
    menus,
    paginatedRoles,
    currentPage,
    entriesCount,
    selectedIds,
    handleSelectRow,
    handleSelectAll,

    openCreateModal,
    setOpenCreateModal,
    newRoleName,
    setNewRoleName,
    handleCreateRole,

    openEditModal,
    editRole,
    setEditRole,
    setOpenEditModal,
    handleUpdateRole,

    deleteModalOpen,
    setDeleteModalOpen,
    setDeleteRoleId,
    handleDeleteRole,

    assignMenuModalOpen,
    setAssignMenuModalOpen,
    currentAssignRoleId,
    setCurrentAssignRoleId,
    selectedMenuIds,
    setSelectedMenuIds,
    menuPermissions,
    setMenuPermissions,
    handleAssignMenu,
  };
};
