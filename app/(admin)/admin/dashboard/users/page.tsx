"use client";

import React, {useEffect, useMemo, useState} from "react";
import {FaTrashAlt, FaCheck, FaPlus, FaPen} from "react-icons/fa";
import {RxCross1} from "react-icons/rx";
import toast from "react-hot-toast";

// ---------- TYPES ----------
type UserItem = {
    id: number;
    name: string;
    email: string;
    phone: string;
    status: "Active" | "Inactive";
};

export default function Page() {
    const [users, setUsers] = useState<UserItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [entriesCount, setEntriesCount] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    // ---------- MOCK DATA ----------
    useEffect(() => {
        setIsLoading(true);

        const data: UserItem[] = Array.from({length: 20}, (_, i) => ({
            id: i + 1,
            name: `User ${i + 1}`,
            email: `user${i + 1}@example.com`,
            phone: `01700${100000 + i}`,
            status: i % 2 === 0 ? "Active" : "Inactive",
        }));

        setTimeout(() => {
            setUsers(data);
            setIsLoading(false);
        }, 500);
    }, []);

    // ---------- FILTER + PAGINATION ----------
    const filteredUsers = useMemo(() => {
        return users.filter(
            (u) =>
                u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                u.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [users, searchTerm]);

    const totalPages = Math.ceil(filteredUsers.length / entriesCount);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * entriesCount;
        return filteredUsers.slice(start, start + entriesCount);
    }, [filteredUsers, currentPage, entriesCount]);

    // ---------- CHECKBOX ----------
    const CustomCheckbox = ({
                                checked,
                                onChange,
                            }: {
        checked: boolean;
        onChange: (v: boolean) => void;
    }) => (
        <label className="flex items-center justify-center cursor-pointer select-none">
            <input
                type="checkbox"
                className="peer hidden"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <div
                className="w-4 h-4 border border-gray-200 rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
                {checked && <FaCheck className="text-white text-[9px]"/>}
            </div>
        </label>
    );

    const handleSelectAll = (checked: boolean) => {
        if (checked) setSelectedIds(paginatedData.map((i) => i.id));
        else setSelectedIds([]);
    };

    const handleSelectRow = (id: number) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    // ---------- STATUS TOGGLE ----------
    const toggleStatus = (id: number) => {
        setUsers((prev) =>
            prev.map((u) =>
                u.id === id
                    ? {...u, status: u.status === "Active" ? "Inactive" : "Active"}
                    : u
            )
        );
        toast.success("Status updated");
    };

    // ---------- DELETE MODAL ----------
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    useEffect(() => {
        document.body.style.overflow = deleteModalOpen ? 'hidden' : '';
    }, [deleteModalOpen]);

    const handleDelete = () => {
        if (!selectedId) return;
        setUsers(prev => prev.filter(r => r.id !== selectedId));
        toast.success('User deleted successfully!');
        setDeleteModalOpen(false);
    };

    // ---------- CREATE User ----------
    const [openCreateUserModal, setOpenCreateUserModal] = useState(false);
    const [newUserName, setNewUserName] = useState('');

    // ---------- EDIT User ----------
    const [openEditUserModal, setOpenEditUserModal] = useState(false);
    useEffect(() => {
        document.body.style.overflow =
            openCreateUserModal || openEditUserModal ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openCreateUserModal, openEditUserModal]);

    const handleOpenEdit = (User: UserItem) => {
        setSelectedId(User.id);
        setOpenEditUserModal(true);
    };
    return (
        <section id="user-section">
            <div className="container_wrap mt-10 md:mt-0">
                <div
                    className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                    <h2>Users</h2>
                </div>

                <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6">
                    {/* CREATE */}
                    <div className="flex justify-end">
                        <button onClick={() => setOpenCreateUserModal(true)}
                                className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                            <FaPlus/> Create User
                        </button>
                    </div>

                    {/* FILTER */}
                    <div className="flex flex-col md:flex-row justify-between items-center my-6 gap-4">
                        <div className="text-[14px] text-gray-500">
                            Show
                            <select
                                value={entriesCount}
                                onChange={(e) => {
                                    setEntriesCount(Number(e.target.value));
                                    setCurrentPage(1);
                                }}
                                className="mx-2 border border-gray-200 rounded px-2 py-1 outline-none focus:border-primary cursor-pointer bg-white"
                            >
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                            </select>
                            entries
                        </div>

                        <div className="flex items-center text-[14px] text-gray-500">
                            Search:
                            <input
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="ml-2 border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary"
                                placeholder="Search by Name..."
                            />
                        </div>
                    </div>

                    {/* TABLE */}
                    <div className="overflow-x-auto rounded">
                        <table className="w-full min-w-[900px] border-collapse text-[14px] text-gray-800">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="border border-gray-200 p-4 w-12">
                                    <CustomCheckbox
                                        checked={
                                            paginatedData.length > 0 &&
                                            selectedIds.length === paginatedData.length
                                        }
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="border border-gray-200 p-4">SI</th>
                                <th className="border border-gray-200 p-4">User Name</th>
                                <th className="border border-gray-200 p-4">Email</th>
                                <th className="border border-gray-200 p-4">Phone</th>
                                <th className="border border-gray-200 p-4">Status</th>
                                <th className="border border-gray-200 p-4">Action</th>
                            </tr>
                            </thead>

                            <tbody>
                            {!isLoading ? (
                                paginatedData.map((user, idx) => (
                                    <tr key={user.id}>
                                        <td className="border border-gray-200 p-4 text-center">
                                            <CustomCheckbox
                                                checked={selectedIds.includes(user.id)}
                                                onChange={() => handleSelectRow(user.id)}
                                            />
                                        </td>
                                        <td className="border border-gray-200 p-4 text-center">
                                            {(currentPage - 1) * entriesCount + idx + 1}
                                        </td>
                                        <td className="border border-gray-200 p-4 text-center">{user.name}</td>
                                        <td className="border border-gray-200 p-4 text-center">{user.email}</td>
                                        <td className="border border-gray-200 p-4 text-center">{user.phone}</td>
                                        <td className="border border-gray-200 p-4 text-center">
                                                <span
                                                    className={`px-3 py-1 rounded text-white text-[12px] cursor-pointer ${
                                                        user.status === "Active"
                                                            ? "bg-green-500"
                                                            : "bg-gray-400"
                                                    }`}
                                                    onClick={() => toggleStatus(user.id)}
                                                >
                                                    {user.status}
                                                </span>
                                        </td>
                                        <td className="border border-gray-200 p-4 text-center">
                                            <div className="flex justify-center gap-2">
                                                <button onClick={() => handleOpenEdit(user)}
                                                        className="bg-blue-500 p-2 rounded text-white cursor-pointer">
                                                    <FaPen size={12}/>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSelectedId(user.id);
                                                        setDeleteModalOpen(true);
                                                    }}
                                                    className="bg-red-500 p-2 rounded text-white cursor-pointer"
                                                >
                                                    <FaTrashAlt size={12}/>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="p-10 text-center text-gray-400">
                                        Loading data...
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>

                    {/* PAGINATION */}
                    <div className="mt-6 flex justify-between items-center text-[14px] text-gray-500">
                        <p>
                            Showing {paginatedData.length} of {filteredUsers.length} entries
                        </p>
                        <div className="flex">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage((p) => p - 1)}
                                className="px-3 py-2 border border-gray-200 cursor-pointer disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <button className="px-4 py-2 border border-gray-200 bg-primary text-white">
                                {currentPage}
                            </button>
                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage((p) => p + 1)}
                                className="px-3 py-2 border border-gray-200 cursor-pointer disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* CREATE User MODAL */}
            {openCreateUserModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-modal-opacity"
                         onClick={() => setOpenCreateUserModal(false)}/>
                    <div className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10">
                        <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                onClick={() => setOpenCreateUserModal(false)}>
                            <RxCross1/>
                        </button>
                        <h3 className="text-[16px] font-semibold mb-4">Create New User</h3>
                        <div className="py-4 border-b border-t border-gray-200 text-[14px]">
                            <form action="" method="">
                                <div className="input_box block md:flex items-center gap-2">
                                    <div className="w-full">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Full Name<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Full Name"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Username<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Username"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="input_box mt-4 block md:flex items-center gap-2">
                                    <div className="w-full">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Phone<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="Enter Phone"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Email<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter Email"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="input_box mt-4 block md:flex items-center gap-2">
                                    <div className="w-full">
                                        <label className="block mb-1 font-medium">Role</label>
                                        <select
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary">
                                            <option value="">-- Select Role --</option>
                                            <option>Admin</option>
                                            <option>User</option>
                                        </select>
                                    </div>
                                    <div className="w-full mt-4 md:mt-0">
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="flex justify-end gap-3 mt-4 text-[14px]">
                            <button onClick={() => setOpenCreateUserModal(false)}
                                    className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                Cancel
                            </button>
                            <button onClick={() => setOpenCreateUserModal(false)}
                                    className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                Add User
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* EDIT User MODAL */}
            {openEditUserModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-modal-opacity"
                         onClick={() => setOpenEditUserModal(false)}/>
                    <div className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10">
                        <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                onClick={() => setOpenEditUserModal(false)}>
                            <RxCross1/>
                        </button>
                        <h3 className="text-[16px] font-semibold mb-4">Edit User</h3>
                        <div className="py-4 border-b border-t border-gray-200 text-[14px]">
                            <form action="" method="">
                                <div className="input_box block md:flex items-center gap-2">
                                    <div className="w-full">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Full Name<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Full Name"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Username<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Username"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="input_box mt-4 block md:flex items-center gap-2">
                                    <div className="w-full">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Phone<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="Enter Phone"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Email<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter Email"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="input_box mt-4 block md:flex items-center gap-2">
                                    <div className="w-full">
                                        <label className="block mb-1 font-medium">Role</label>
                                        <select
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary">
                                            <option value="">-- Select Role --</option>
                                            <option>Admin</option>
                                            <option>User</option>
                                        </select>
                                    </div>
                                    <div className="w-full mt-4 md:mt-0">
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="flex justify-end gap-3 mt-4 text-[14px]">
                            <button onClick={() => setOpenEditUserModal(false)}
                                    className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                Cancel
                            </button>
                            <button onClick={() => setOpenEditUserModal(false)}
                                    className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                Update User
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* DELETE MODAL */}
            {deleteModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-custom-opacity"
                    onClick={() => setDeleteModalOpen(false)}
                >
                    <div
                        className="bg-white rounded shadow w-lg mx-4 px-6 py-4 relative"
                        onClick={e => e.stopPropagation()}
                    >
                        <button type='button'
                                className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                onClick={() => setDeleteModalOpen(false)}
                        >
                            <RxCross1 size={18}/>
                        </button>
                        <h3 className="text-[16px] text-gray-800 font-semibold mb-4">
                            Confirm Delete?
                        </h3>
                        <div className="body_text py-4 border-b border-t border-gray-200">
                            <p className="text-gray-500 text-[14px]">
                                You are going to delete this User.<br/>
                                You want to delete it?
                            </p>
                        </div>
                        <div className="flex justify-end gap-3 mt-4 text-[14px]">
                            <button
                                onClick={() => setDeleteModalOpen(false)}
                                className="px-4 py-2 rounded cursor-pointer bg-primary text-white hover:bg-dark-primary transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 rounded cursor-pointer bg-red-500 text-white hover:bg-red-700 transition"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}