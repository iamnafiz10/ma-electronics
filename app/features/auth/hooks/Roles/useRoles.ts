"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { rolesService } from "@/app/features/auth/Service/roles.service";

export type RoleItem = { id: number; title: string };
export type MenuItem = { id: number; title: string };
export type MenuPermissionSelection = { [menuId: number]: number[] };

export const useRoles = () => {
  const [roles, setRoles] = useState<RoleItem[]>([]);
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const entriesCount = 10;

  // selection
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // modals
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openAssignModal, setOpenAssignModal] = useState(false);

  // form states
  const [newRoleName, setNewRoleName] = useState("");
  const [editRole, setEditRole] = useState<RoleItem | null>(null);
  const [deleteRoleId, setDeleteRoleId] = useState<number | null>(null);
  const [currentAssignRoleId, setCurrentAssignRoleId] = useState<number | null>(null);

  // assign menu
  const [selectedMenuIds, setSelectedMenuIds] = useState<number[]>([]);
  const [menuPermissions, setMenuPermissions] =
    useState<MenuPermissionSelection>({});

  /* ================= LOAD ================= */

  const loadRoles = async () => {
    try {
      setIsLoading(true);
      const res = await rolesService.list();
      setRoles(res);
    } catch (e: any) {
      toast.error(e?.message || "Failed to load roles");
    } finally {
      setIsLoading(false);
    }
  };

  const loadMenus = async () => {
    try {
      const res = await rolesService.getMenus();
      setMenus(res);
    } catch {
      toast.error("Failed to load menus");
    }
  };

  useEffect(() => {
    loadRoles();
    loadMenus();
  }, []);

  /* ================= PAGINATION ================= */

  const paginatedRoles = useMemo(() => {
    const start = (currentPage - 1) * entriesCount;
    return roles.slice(start, start + entriesCount);
  }, [roles, currentPage]);

  /* ================= TABLE ================= */

  const handleSelectRow = (id: number) => {
    setSelectedIds((p) =>
      p.includes(id) ? p.filter((x) => x !== id) : [...p, id]
    );
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectedIds(checked ? paginatedRoles.map((r) => r.id) : []);
  };

  /* ================= CRUD ================= */

  const handleCreateRole = async () => {
    if (!newRoleName.trim()) return toast.error("Role name required");

    try {
      await rolesService.create({ title: newRoleName });
      toast.success("Role created successfully");
      setOpenCreateModal(false);
      setNewRoleName("");
      await loadRoles(); // ✅ realtime refresh
    } catch (e: any) {
      toast.error(e?.message || "Create failed");
    }
  };

  const handleUpdateRole = async () => {
    if (!editRole) return;

    try {
      await rolesService.update(editRole);
      toast.success("Role updated successfully");
      setOpenEditModal(false);
      setEditRole(null);
      await loadRoles(); // ✅
    } catch (e: any) {
      toast.error(e?.message || "Update failed");
    }
  };

  const handleDeleteRole = async () => {
    if (!deleteRoleId) return;

    try {
      await rolesService.remove(deleteRoleId);
      toast.success("Role deleted successfully");
      setOpenDeleteModal(false);
      setDeleteRoleId(null);
      await loadRoles(); // ✅
    } catch (e: any) {
      toast.error(e?.message || "Delete failed");
    }
  };

  const handleAssignMenu = async () => {
    if (!currentAssignRoleId) return;

    try {
      await rolesService.assignMenu({
        roleId: currentAssignRoleId,
        menus: selectedMenuIds.map((id) => ({
          menuId: id,
          permissions: menuPermissions[id] || [],
        })),
      });

      toast.success("Menu assigned successfully");
      setOpenAssignModal(false);
      setSelectedMenuIds([]);
      setMenuPermissions({});
    } catch {
      toast.error("Assign menu failed");
    }
  };

  return {
    roles,
    menus,
    isLoading,
    paginatedRoles,
    currentPage,
    entriesCount,
    selectedIds,

    setCurrentPage,
    handleSelectRow,
    handleSelectAll,

    // modals
    openCreateModal,
    setOpenCreateModal,
    openEditModal,
    setOpenEditModal,
    openDeleteModal,
    setOpenDeleteModal,
    openAssignModal,
    setOpenAssignModal,

    // forms
    newRoleName,
    setNewRoleName,
    editRole,
    setEditRole,
    setDeleteRoleId,
    setCurrentAssignRoleId,

    selectedMenuIds,
    setSelectedMenuIds,
    menuPermissions,
    setMenuPermissions,

    // actions
    handleCreateRole,
    handleUpdateRole,
    handleDeleteRole,
    handleAssignMenu,
  };
};
