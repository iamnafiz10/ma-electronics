"use client";

import React from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useRoles } from "@/app/features/auth/hooks/Roles/useRoles";

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
      className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-6 right-6 text-gray-500 hover:text-red-500"
        onClick={onClose}
      >
        <RxCross1 size={18} />
      </button>
      <h3 className="text-[16px] font-semibold mb-4">{title}</h3>
      {children}
    </div>
  </div>
);

/* ================= PAGE ================= */

export default function RolePage() {
  const {
    roles,
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
    menus,
    selectedMenuIds,
    setSelectedMenuIds,
    menuPermissions,
    setMenuPermissions,
    handleAssignMenu,
  } = useRoles();

  return (
    <section className="container_wrap mt-10">
      {/* ---------- HEADER ---------- */}
      <div className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
        <h2>Roles</h2>
      </div>

      {/* ---------- CREATE BUTTON ---------- */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => setOpenCreateModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded text-[13px]"
        >
          <FaPlus /> Create Role
        </button>
      </div>

      {/* ---------- TABLE ---------- */}
      <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse text-[14px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="border p-3 w-12 text-center">
                <input
                  type="checkbox"
                  checked={
                    paginatedRoles.length > 0 &&
                    selectedIds.length === paginatedRoles.length
                  }
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </th>
              <th className="border p-3 text-center">SI</th>
              <th className="border p-3 text-center">Role Name</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedRoles.map((role, idx) => (
              <tr key={role.id}>
                <td className="border p-3 text-center">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(role.id)}
                    onChange={() => handleSelectRow(role.id)}
                  />
                </td>

                <td className="border p-3 text-center">
                  {(currentPage - 1) * entriesCount + idx + 1}
                </td>

                <td className="border p-3 text-center font-medium">
                  {role.title}
                </td>

                <td className="border p-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => {
                        setEditRole(role);
                        setOpenEditModal(true);
                      }}
                      className="bg-blue-500 p-2 rounded text-white"
                    >
                      <FaPencil size={12} />
                    </button>

                    <button
                      onClick={() => {
                        setDeleteRoleId(role.id);
                        setDeleteModalOpen(true);
                      }}
                      className="bg-red-500 p-2 rounded text-white"
                    >
                      <FaTrashAlt size={12} />
                    </button>

                    <button
                      onClick={() => {
                        setCurrentAssignRoleId(role.id);
                        setAssignMenuModalOpen(true);
                      }}
                      className="bg-green-600 px-3 py-2 rounded text-white text-[12px]"
                    >
                      Assign
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------- CREATE MODAL ---------- */}
      {openCreateModal && (
        <Modal title="Create Role" onClose={() => setOpenCreateModal(false)}>
          <input
            value={newRoleName}
            onChange={(e) => setNewRoleName(e.target.value)}
            placeholder="Role name"
            className="w-full border rounded px-3 py-2 mb-4"
          />
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setOpenCreateModal(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleCreateRole}
              className="px-4 py-2 bg-primary text-white rounded"
            >
              Create
            </button>
          </div>
        </Modal>
      )}

      {/* ---------- EDIT MODAL ---------- */}
      {openEditModal && editRole && (
        <Modal title="Edit Role" onClose={() => setOpenEditModal(false)}>
          <input
            value={editRole.title}
            onChange={(e) =>
              setEditRole({ ...editRole, title: e.target.value })
            }
            className="w-full border rounded px-3 py-2 mb-4"
          />
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setOpenEditModal(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdateRole}
              className="px-4 py-2 bg-primary text-white rounded"
            >
              Update
            </button>
          </div>
        </Modal>
      )}

      {/* ---------- DELETE MODAL ---------- */}
      {deleteModalOpen && (
        <Modal title="Confirm Delete" onClose={() => setDeleteModalOpen(false)}>
          <p className="text-gray-600 mb-4">
            Are you sure you want to delete this role?
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setDeleteModalOpen(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteRole}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        </Modal>
      )}

      {/* ---------- ASSIGN MENU MODAL ---------- */}
      {assignMenuModalOpen && (
        <Modal
          title="Assign Menus & Permissions"
          onClose={() => setAssignMenuModalOpen(false)}
        >
          <div className="max-h-[400px] overflow-y-auto space-y-3">
            {menus.map((menu) => (
              <div key={menu.id} className="border rounded p-3">
                <label className="flex items-center gap-2 font-medium">
                  <input
                    type="checkbox"
                    checked={selectedMenuIds.includes(menu.id)}
                    onChange={(e) =>
                      setSelectedMenuIds((prev) =>
                        e.target.checked
                          ? [...prev, menu.id]
                          : prev.filter((id) => id !== menu.id)
                      )
                    }
                  />
                  {menu.title}
                </label>

                {selectedMenuIds.includes(menu.id) && (
                  <div className="flex gap-4 mt-2 text-[13px] text-gray-600">
                    {["View", "Create", "Edit", "Delete"].map((label, idx) => {
                      const p = idx + 1;
                      return (
                        <label key={p} className="flex items-center gap-1">
                          <input
                            type="checkbox"
                            checked={
                              (menuPermissions[menu.id] || []).includes(p)
                            }
                            onChange={(e) => {
                              setMenuPermissions((prev) => {
                                const set = new Set(prev[menu.id] || []);
                                e.target.checked ? set.add(p) : set.delete(p);
                                return {
                                  ...prev,
                                  [menu.id]: Array.from(set),
                                };
                              });
                            }}
                          />
                          {label}
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={() => setAssignMenuModalOpen(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleAssignMenu}
              className="px-4 py-2 bg-primary text-white rounded"
            >
              Save
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
}
