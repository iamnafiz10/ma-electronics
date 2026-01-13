"use client";

import React, { useState, useEffect, useMemo } from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import toast from "react-hot-toast";
import { rolesService } from "@/app/features/auth/Service/roles.service";

/* ================= TYPES ================= */

type RoleItem = {
  id: number;
  title: string;
};

type MenuItem = {
  id: number;
  title: string;
};

type MenuPermissionSelection = {
  [menuId: number]: number[]; // 1=View,2=Create,3=Edit,4=Delete
};

/* ================= COMPONENT ================= */

export default function RolePage() {
  const [roles, setRoles] = useState<RoleItem[]>([]);
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesCount, setEntriesCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  /* ===== MODALS ===== */
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [newRoleName, setNewRoleName] = useState("");

  const [openEditModal, setOpenEditModal] = useState(false);
  const [editRole, setEditRole] = useState<RoleItem | null>(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteRoleId, setDeleteRoleId] = useState<number | null>(null);

  const [assignMenuModalOpen, setAssignMenuModalOpen] = useState(false);
  const [currentAssignRoleId, setCurrentAssignRoleId] = useState<number | null>(null);

  /* ===== MENU PERMISSION ===== */
  const [selectedMenuIds, setSelectedMenuIds] = useState<number[]>([]);
  const [menuPermissions, setMenuPermissions] =
    useState<MenuPermissionSelection>({});

  /* ================= LOAD ROLES ================= */

  const loadRoles = async () => {
    setIsLoading(true);
    try {
      const res = await rolesService.list();
      setRoles(
        (res || []).map((r: any) => ({
          id: Number(r.id),
          title: String(r.title),
        }))
      );
    } catch {
      toast.error("Failed to load roles");
    } finally {
      setIsLoading(false);
    }
  };

  /* ================= LOAD MENUS ================= */

  const loadMenus = async () => {
    try {
      const res = await fetch("/api/proxy/Menu/getAll").then((r) => r.json());
      setMenus(
        (res || []).map((m: any) => ({
          id: Number(m.id),
          title: String(m.title),
        }))
      );
    } catch {
      toast.error("Failed to load menus");
    }
  };

  useEffect(() => {
    loadRoles();
    loadMenus();
  }, []);

  /* ================= FILTER & PAGINATION ================= */

  const filteredRoles = useMemo(
    () =>
      roles.filter((r) =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [roles, searchTerm]
  );

  const paginatedRoles = useMemo(() => {
    const start = (currentPage - 1) * entriesCount;
    return filteredRoles.slice(start, start + entriesCount);
  }, [filteredRoles, currentPage, entriesCount]);

  /* ================= CHECKBOX ================= */

  const handleSelectRow = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectedIds(checked ? paginatedRoles.map((r) => r.id) : []);
  };

  /* ================= CRUD ================= */

  const handleCreateRole = async () => {
    if (!newRoleName.trim()) return toast.error("Role name required");

    await rolesService.create({
      title: newRoleName,
    });

    toast.success("Role created");
    setOpenCreateModal(false);
    setNewRoleName("");
    loadRoles();
  };

  const handleUpdateRole = async () => {
    if (!editRole) return;

    await rolesService.update({
      id: editRole.id,
      title: editRole.title,
    });

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

  /* ================= ASSIGN MENU ================= */

  const handleAssignMenu = async () => {
    if (!currentAssignRoleId) return;

    const payload = {
      roleId: currentAssignRoleId,
      menus: selectedMenuIds.map((menuId) => ({
        menuId,
        permissions: menuPermissions[menuId] || [],
      })),
    };

    try {
      await rolesService.assignMenu(payload);
      toast.success("Menu & permissions assigned");
      setAssignMenuModalOpen(false);
      setSelectedMenuIds([]);
      setMenuPermissions({});
    } catch {
      toast.error("Failed to assign menu & permissions");
    }
  };

  /* ================= MODAL ================= */

  const Modal = ({
    title,
    children,
    onClose,
  }: {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
  }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div
        className="relative bg-white rounded shadow-lg w-96 p-6 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <RxCross1 />
        </button>
        <h3 className="font-semibold text-lg mb-3">{title}</h3>
        {children}
      </div>
    </div>
  );

  /* ================= RENDER ================= */

  return (
    <section className="container_wrap mt-10">
      {/* --- UI unchanged --- */}
    </section>
  );
}
