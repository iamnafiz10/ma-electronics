"use client";

import React, { useMemo, useState, useEffect } from "react";
import { FaTrashAlt, FaPlus, FaPen } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import toast from "react-hot-toast";

import { useUsers } from "@/app/features/auth/hooks/Users/useUsers";
import { UserWithRolesDto } from "@/app/features/auth/Dto/userdto";
import { usersService } from "@/app/features/auth/Service/users.service";

export default function Page() {
  const { users, loading, toggleStatus, deleteUser, refetch } = useUsers();

  const [searchTerm, setSearchTerm] = useState("");
  const [entriesCount, setEntriesCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  /* ---------------- FILTER ---------------- */
  const filteredUsers = useMemo(() => {
    return users.filter(
      (u) =>
        u.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  /* ---------------- PAGINATION ---------------- */
  const totalPages = Math.ceil(filteredUsers.length / entriesCount);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * entriesCount;
    return filteredUsers.slice(start, start + entriesCount);
  }, [filteredUsers, currentPage, entriesCount]);

  /* ---------------- CREATE ---------------- */
  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await usersService.create({
        fullName: form.fullName.value,
        userName: form.userName.value,
        email: form.email.value,
        password: form.password.value,
        role: form.role.value,
        isActive: true,
      });

      toast.success("User created successfully");
      setOpenCreate(false);
      refetch();
      form.reset();
    } catch {
      toast.error("Failed to create user");
    }
  };

  /* ---------------- UPDATE ---------------- */
  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedId) return;

    const form = e.currentTarget;

    try {
      await usersService.update({
        userId: selectedId,
        userName: form.userName.value,
        email: form.email.value,
        role: form.role.value,
      });

      toast.success("User updated");
      setOpenEdit(false);
      refetch();
    } catch {
      toast.error("Update failed");
    }
  };

  /* ---------------- DELETE ---------------- */
  const handleDelete = async () => {
    if (!selectedId) return;
    await deleteUser(selectedId);
    toast.success("User deleted");
    setOpenDelete(false);
  };

  /* lock scroll */
  useEffect(() => {
    document.body.style.overflow =
      openCreate || openEdit || openDelete ? "hidden" : "auto";
  }, [openCreate, openEdit, openDelete]);

  return (
    <section className="container_wrap mt-10">
      {/* PAGE HEADER */}
      <div className="bg-gray-100 border border-gray-200 px-4 py-3 rounded mb-6">
        <h2 className="font-semibold text-[16px]">Users</h2>
      </div>

      {/* CARD */}
      <div className="bg-white border border-gray-200 rounded p-6">
        {/* TOP BAR */}
        <div className="flex justify-end">
          <button
            onClick={() => setOpenCreate(true)}
            className="flex items-center gap-2 bg-primary hover:bg-dark-primary text-white px-4 py-2 rounded text-[13px]"
          >
            <FaPlus /> Create User
          </button>
        </div>

        {/* FILTER */}
        <div className="flex flex-col md:flex-row justify-between items-center my-6 gap-4 text-[14px] text-gray-500">
          <div>
            Show
            <select
              value={entriesCount}
              onChange={(e) => {
                setEntriesCount(+e.target.value);
                setCurrentPage(1);
              }}
              className="mx-2 border border-gray-200 rounded px-2 py-1 focus:border-primary"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            entries
          </div>

          <input
            placeholder="Search..."
            className="border border-gray-200 rounded px-3 py-1.5 focus:border-primary outline-none"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto rounded">
          <table className="w-full min-w-[900px] border-collapse text-[14px] text-gray-800">
            <thead className="bg-gray-50">
              <tr>
                {["#", "Username", "Email", "Roles", "Status", "Action"].map(
                  (h) => (
                    <th
                      key={h}
                      className="border border-gray-200 p-4 font-medium text-center"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {!loading ? (
                paginatedData.map((user: UserWithRolesDto, idx) => (
                  <tr key={user.id}>
                    <td className="border border-gray-200 p-4 text-center">
                      {(currentPage - 1) * entriesCount + idx + 1}
                    </td>
                    <td className="border border-gray-200 p-4 text-center">
                      {user.userName}
                    </td>
                    <td className="border border-gray-200 p-4 text-center">
                      {user.email}
                    </td>
                    <td className="border border-gray-200 p-4 text-center">
                      {user.roles.join(", ")}
                    </td>
                    <td className="border border-gray-200 p-4 text-center">
                      <span
                        onClick={() =>
                          toggleStatus(user.id, !user.isActive)
                        }
                        className={`px-3 py-1 rounded-full text-white text-[12px] cursor-pointer ${
                          user.isActive
                            ? "bg-green-500"
                            : "bg-gray-400"
                        }`}
                      >
                        {user.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="border border-gray-200 p-4 text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedId(user.id);
                            setOpenEdit(true);
                          }}
                          className="bg-blue-500 hover:bg-blue-600 p-2 rounded text-white"
                        >
                          <FaPen size={12} />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedId(user.id);
                            setOpenDelete(true);
                          }}
                          className="bg-red-500 hover:bg-red-600 p-2 rounded text-white"
                        >
                          <FaTrashAlt size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-10 text-center text-gray-400">
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-between items-center mt-6 text-[14px] text-gray-500">
          <p>
            Showing {paginatedData.length} of {filteredUsers.length}
          </p>
          <div className="flex">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-2 border border-gray-200 disabled:opacity-50"
            >
              Previous
            </button>
            <button className="px-4 py-2 border border-gray-200 bg-primary text-white">
              {currentPage}
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-2 border border-gray-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- MODALS ---------------- */}
      {(openCreate || openEdit || openDelete) && (
        <Modal
          title={
            openCreate
              ? "Create User"
              : openEdit
              ? "Edit User"
              : "Confirm Delete"
          }
          onClose={() => {
            setOpenCreate(false);
            setOpenEdit(false);
            setOpenDelete(false);
          }}
        >
          {openDelete ? (
            <>
              <p className="text-[14px] text-gray-500 mb-6">
                Are you sure you want to delete this user?
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setOpenDelete(false)}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </>
          ) : (
            <form
              onSubmit={openCreate ? handleCreateUser : handleUpdateUser}
              className="space-y-4"
            >
              {openCreate && (
                <input
                  name="fullName"
                  placeholder="Full Name"
                  required
                  className="input"
                />
              )}
              <input
                name="userName"
                placeholder="Username"
                required
                className="input"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="input"
              />
              {openCreate && (
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  className="input"
                />
              )}
              <select name="role" className="input">
                <option>Admin</option>
                <option>User</option>
                 <option>LocalAdmin</option>
              </select>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setOpenCreate(false);
                    setOpenEdit(false);
                  }}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded"
                >
                  {openCreate ? "Create" : "Update"}
                </button>
              </div>
            </form>
          )}
        </Modal>
      )}
    </section>
  );
}

/* ---------------- MODAL ---------------- */
function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-2xl rounded shadow p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <RxCross1 />
        </button>
        <h3 className="text-[16px] font-semibold mb-4 border-b pb-3">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}
