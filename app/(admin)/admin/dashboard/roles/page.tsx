"use client";

import React, { useState, useEffect, useMemo } from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import toast from "react-hot-toast";
import { rolesService } from "@/app/features/auth/Service/roles.service";

// --- TYPES ---
type RoleItem = {
  id: string;
  title: string;
};

type MenuItem = {
  id: number;
  title: string;
};

type MenuPermissionSelection = {
  [menuId: number]: number[]; // Permissions: 1=View,2=Create,3=Edit,4=Delete
};

// ---- COMPONENT ----
export default function RolePage() {
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

  // MENU PERMISSIONS STATE
  const [selectedMenuIds, setSelectedMenuIds] = useState<number[]>([]);
  const [menuPermissions, setMenuPermissions] = useState<MenuPermissionSelection>({});

  // ---- LOAD ROLES ----
  const loadRoles = async () => {
    setIsLoading(true);
    try {
      const res = await rolesService.list();
      const normalized = (res || []).map((r: any) => ({
        id: String(r.id),
        title: String(r.title),
      }));
      setRoles(normalized);
    } catch {
      toast.error("Failed to load roles");
    } finally {
      setIsLoading(false);
    }
  };

  // ---- LOAD MENUS ----
  const loadMenus = async () => {
    try {
      const res: MenuItem[] = await fetch("/api/proxy/Menu/getAll").then((r) => r.json());
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

  // ---- CHECKBOX HANDLERS ----
  const handleSelectRow = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) setSelectedIds(paginatedRoles.map((r) => r.id));
    else setSelectedIds([]);
  };

  // ---- CRUD HANDLERS ----
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
   await rolesService.update({ id: editRole.id, title: editRole.title });
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

  // ---- ASSIGN MENU HANDLER ----
  const handleAssignMenu = async () => {
    if (!currentAssignRoleId) return;
    try {
      const payload = {
        roleId: currentAssignRoleId.toString(),
        menus: selectedMenuIds.map((menuId) => ({
          menuId,
          permissions: menuPermissions[menuId] || [],
        })),
      };
      await rolesService.assignMenu(payload);
      toast.success("Menu & permissions assigned successfully");
      setAssignMenuModalOpen(false);
      setSelectedMenuIds([]);
      setMenuPermissions({});
    } catch (err) {
      console.error(err);
      toast.error("Failed to assign menu & permissions");
    }
  };

  // ---- MODAL COMPONENT ----
  const Modal = ({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded shadow-lg w-96 mx-4 px-6 py-4 z-10" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-3 right-3 text-gray-500 hover:text-red-500" onClick={onClose}><RxCross1 /></button>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        {children}
      </div>
    </div>
  );

  // ---- RENDER ----
  return (
    <section className="container_wrap mt-10">
      {/* HEADER + CREATE */}
      <div className="flex justify-between mb-4 items-center">
        <h2 className="font-semibold text-[16px]">Roles</h2>
        <button onClick={() => setOpenCreateModal(true)} className="flex items-center gap-1 py-2 px-4 bg-primary text-white rounded">
          <FaPlus /> Create Role
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white p-4 rounded border">
        <table className="w-full text-left text-[14px] border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-2 border text-center w-12">
                <input type="checkbox" onChange={(e) => handleSelectAll(e.target.checked)} />
              </th>
              <th className="p-2 border">SI</th>
              <th className="p-2 border">Role</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedRoles.map((role, idx) => (
              <tr key={role.id}>
                <td className="border text-center">
                  <input type="checkbox" checked={selectedIds.includes(role.id)} onChange={() => handleSelectRow(role.id)} />
                </td>
                <td className="border text-center">{(currentPage - 1) * entriesCount + idx + 1}</td>
                <td className="border">{role.title}</td>
                <td className="border text-center flex gap-2 justify-center">
                  <button onClick={() => { setEditRole(role); setOpenEditModal(true); }} className="bg-blue-500 text-white p-1 rounded"><FaPencil size={12} /></button>
                  <button onClick={() => { setDeleteRoleId(role.id); setDeleteModalOpen(true); }} className="bg-red-500 text-white p-1 rounded"><FaTrashAlt size={12} /></button>
                  <button onClick={() => { setCurrentAssignRoleId(role.id); setAssignMenuModalOpen(true); }} className="bg-green-500 text-white p-1 rounded">Assign Menu</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CREATE ROLE MODAL */}
      {openCreateModal && (
        <Modal title="Create Role" onClose={() => setOpenCreateModal(false)}>
          <input type="text" value={newRoleName} onChange={(e) => setNewRoleName(e.target.value)} placeholder="Role name" className="w-full border p-2 rounded" />
          <div className="flex justify-end mt-2 gap-2">
            <button onClick={() => setOpenCreateModal(false)} className="px-3 py-1 bg-red-500 text-white rounded">Cancel</button>
            <button onClick={handleCreateRole} className="px-3 py-1 bg-primary text-white rounded">Add</button>
          </div>
        </Modal>
      )}

      {/* EDIT ROLE MODAL */}
      {openEditModal && editRole && (
        <Modal title="Edit Role" onClose={() => setOpenEditModal(false)}>
          <input type="text" value={editRole.title} onChange={(e) => setEditRole({ ...editRole, title: e.target.value })} placeholder="Role name" className="w-full border p-2 rounded" />
          <div className="flex justify-end mt-2 gap-2">
            <button onClick={() => setOpenEditModal(false)} className="px-3 py-1 bg-red-500 text-white rounded">Cancel</button>
            <button onClick={handleUpdateRole} className="px-3 py-1 bg-primary text-white rounded">Update</button>
          </div>
        </Modal>
      )}

      {/* DELETE ROLE MODAL */}
      {deleteModalOpen && (
        <Modal title="Confirm Delete" onClose={() => setDeleteModalOpen(false)}>
          <p>Are you sure to delete?</p>
          <div className="flex justify-end mt-2 gap-2">
            <button onClick={() => setDeleteModalOpen(false)} className="px-3 py-1 bg-primary text-white rounded">Cancel</button>
            <button onClick={handleDeleteRole} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
          </div>
        </Modal>
      )}

      {/* ASSIGN MENU MODAL */}
      {assignMenuModalOpen && (
        <Modal title="Assign Menu & Permissions" onClose={() => setAssignMenuModalOpen(false)}>
          <div className="max-h-80 overflow-y-auto">
            {menus.map((menu) => {
              const selectedPermissions = menuPermissions[menu.id] || [];
              const isMenuSelected = selectedMenuIds.includes(menu.id);

              const togglePermission = (permId: number) => {
                setMenuPermissions((prev) => {
                  const current = prev[menu.id] || [];
                  const updated = current.includes(permId)
                    ? current.filter((p) => p !== permId)
                    : [...current, permId];
                  return { ...prev, [menu.id]: updated };
                });
              };

              return (
                <div key={menu.id} className="mb-2 border-b pb-1">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isMenuSelected}
                      onChange={() => {
                        if (isMenuSelected) {
                          setSelectedMenuIds((prev) => prev.filter((id) => id !== menu.id));
                          setMenuPermissions((prev) => {
                            const { [menu.id]: _, ...rest } = prev;
                            return rest;
                          });
                        } else {
                          setSelectedMenuIds((prev) => [...prev, menu.id]);
                        }
                      }}
                    />
                    {menu.title}
                  </label>

                  {isMenuSelected && (
                    <div className="flex gap-4 ml-6 mt-1">
                      {[
                        { id: 1, label: "View" },
                        { id: 2, label: "Create" },
                        { id: 3, label: "Edit" },
                        { id: 4, label: "Delete" },
                      ].map((p) => (
                        <label key={p.id} className="flex items-center gap-1">
                          <input
                            type="checkbox"
                            checked={selectedPermissions.includes(p.id)}
                            onChange={() => togglePermission(p.id)}
                          />
                          {p.label}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex justify-end mt-2 gap-2">
            <button onClick={() => setAssignMenuModalOpen(false)} className="px-3 py-1 bg-red-500 text-white rounded">Cancel</button>
            <button onClick={handleAssignMenu} className="px-3 py-1 bg-primary text-white rounded">Save</button>
          </div>
        </Modal>
      )}
    </section>
  );
}
