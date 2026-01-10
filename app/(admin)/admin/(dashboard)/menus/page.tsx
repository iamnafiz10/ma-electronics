"use client";

import React, {useState, useEffect, useMemo} from 'react';
import {FaTrashAlt, FaCheck, FaPlus} from 'react-icons/fa';
import {RxCross1} from "react-icons/rx";
import toast from "react-hot-toast";
import {FaPencil} from "react-icons/fa6";

// --- TYPES ---
type MenuItem = {
    id: number;
    title: string;
    parentMenu: string;
    description: string;
    url: string;
};

const parentmenus = [
    "Home", "About", "Contact", "Privacy"
];

export default function Page() {

    const [menus, setMenus] = useState<MenuItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const [searchTerm, setSearchTerm] = useState('');
    const [entriesCount, setEntriesCount] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    // ---------- MOCK DATA (20 ITEMS) ----------
    useEffect(() => {
        setIsLoading(true);

        const titles = [
            'one', 'two', 'three', 'four', 'five',
            'six', 'seven', 'eight', 'nine', 'ten',
            'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
            'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'
        ];

        const data: MenuItem[] = titles.map((title, index) => ({
            id: index + 1,
            title,
            parentMenu: index % 2 === 0 ? 'Main Menu' : 'Footer Menu',
            description: 'description text',
            url: '#',
        }));

        setTimeout(() => {
            setMenus(data);
            setIsLoading(false);
        }, 500);
    }, []);

    // ---------- FILTER + PAGINATION ----------
    const filteredMenus = useMemo(() => {
        return menus.filter(menu =>
            menu.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [menus, searchTerm]);

    const totalPages = Math.ceil(filteredMenus.length / entriesCount);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * entriesCount;
        return filteredMenus.slice(start, start + entriesCount);
    }, [filteredMenus, currentPage, entriesCount]);

    const handleSelectAll = (checked: boolean) => {
        if (checked) setSelectedIds(paginatedData.map(i => i.id));
        else setSelectedIds([]);
    };

    const handleSelectRow = (id: number) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    // ---------- CHECKBOX ----------
    const CustomCheckbox = ({checked, onChange}: { checked: boolean, onChange: (v: boolean) => void }) => (
        <label className="flex items-center justify-center cursor-pointer select-none">
            <input
                type="checkbox"
                className="peer hidden"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <div
                className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-primary">
                {checked && <FaCheck className="text-white text-[9px] font-light"/>}
            </div>
        </label>
    );

    // ---------- DELETE MODAL ----------
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    useEffect(() => {
        document.body.style.overflow = deleteModalOpen ? 'hidden' : '';
    }, [deleteModalOpen]);

    const handleDelete = () => {
        if (!selectedId) return;
        setMenus(prev => prev.filter(m => m.id !== selectedId));
        toast.success('Menu deleted successfully!');
        setDeleteModalOpen(false);
    };

    // Create Menu popup ----------
    const [openCreateMenuModal, setOpenCreateMenuModal] = useState(false);
    useEffect(() => {
        document.body.style.overflow = openCreateMenuModal ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openCreateMenuModal]);

    // Edit Menu popup ----------
    const [openEditMenuModal, setOpenEditMenuModal] = useState(false);
    useEffect(() => {
        document.body.style.overflow = openEditMenuModal ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openEditMenuModal]);
    return (
        <section>
            <div className="container_wrap mt-10 md:mt-0">

                <div
                    className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                    <h2>Menus</h2>
                </div>

                <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6">

                    {/* CREATE BUTTON */}
                    <div className="flex justify-end">
                        <button onClick={() => setOpenCreateMenuModal(true)} type='button'
                                className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                            <FaPlus/> Create Menu
                        </button>
                    </div>

                    {/* FILTERS */}
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
                                type="text"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                placeholder="Search by title..."
                                className="ml-2 border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary w-full"
                            />
                        </div>
                    </div>

                    {/* TABLE */}
                    <div className="overflow-x-auto rounded">
                        <table className="w-full min-w-[900px] border-collapse text-[14px] text-gray-800">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="border-r border border-gray-200 p-4 w-12 text-center">
                                    <CustomCheckbox
                                        checked={paginatedData.length > 0 && selectedIds.length === paginatedData.length}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="border border-gray-200 p-4 text-center">SI</th>
                                <th className="border border-gray-200 p-4 text-center">Title</th>
                                <th className="border border-gray-200 p-4 text-center">Parent Menu</th>
                                <th className="border border-gray-200 p-4 text-center">Description</th>
                                <th className="border border-gray-200 p-4 text-center">URL</th>
                                <th className="border border-gray-200 p-4 text-center">Actions</th>
                            </tr>
                            </thead>

                            <tbody>
                            {!isLoading ? paginatedData.map((menu, idx) => (
                                <tr key={menu.id}>
                                    <td className="border border-gray-200 p-4 text-center">
                                        <CustomCheckbox
                                            checked={selectedIds.includes(menu.id)}
                                            onChange={() => handleSelectRow(menu.id)}
                                        />
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">{(currentPage - 1) * entriesCount + idx + 1}</td>
                                    <td className="border border-gray-200 p-4 text-center">{menu.title}</td>
                                    <td className="border border-gray-200 p-4 text-center">{menu.parentMenu}</td>
                                    <td className="border border-gray-200 p-4 text-center">{menu.description}</td>
                                    <td className="border border-gray-200 p-4 text-center">{menu.url}</td>
                                    <td className="border border-gray-200 p-4 text-center">
                                        <div className="flex justify-center gap-2">
                                            <button onClick={() => setOpenEditMenuModal(true)} type='button'
                                                    className="bg-blue-500 p-2 rounded text-white cursor-pointer">
                                                <FaPencil size={12}/>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setSelectedId(menu.id);
                                                    setDeleteModalOpen(true);
                                                }}
                                                className="bg-red-500 p-2 rounded text-white cursor-pointer"
                                            >
                                                <FaTrashAlt size={12}/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={7} className="p-10 text-center text-gray-400">
                                        Loading data from server...
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>

                    {/* PAGINATION */}
                    <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[14px] text-gray-500">
                        <p>Showing {paginatedData.length} of {filteredMenus.length} entries</p>
                        <div className="flex rounded overflow-hidden text-[12px]">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(p => p - 1)}
                                className="px-3 py-2 border border-gray-200 bg-white cursor-pointer disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <button
                                className="px-4 py-2 border border-gray-200 bg-primary text-white cursor-pointer"
                            >
                                {currentPage}
                            </button>
                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(p => p + 1)}
                                className="px-3 py-2 border border-gray-200 bg-white cursor-pointer disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Create Modal*/}
            {openCreateMenuModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">

                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-modal-opacity"
                        onClick={() => setOpenCreateMenuModal(false)}
                    />

                    {/* Address Modal */}
                    <div
                        className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                            onClick={() => setOpenCreateMenuModal(false)}
                        >
                            <RxCross1 size={18}/>
                        </button>

                        <h3 className="text-[16px] text-gray-800 font-semibold mb-4">
                            Create New Menu
                        </h3>

                        <div className="py-4 border-b border-t border-gray-200">
                            <form action="" method="">
                                <div className="input_box text-[14px] block md:flex items-center gap-2">
                                    <div className="w-full">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Title<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Title"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            URL<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="Enter Url"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="input_box text-[14px] block md:flex items-center gap-2 mt-4">
                                    <div className="w-full">
                                        <label className="block mb-1 font-medium">
                                            Parent Menu
                                        </label>
                                        <select
                                            required
                                            className="w-full border border-gray-300 rounded-md px-3 py-2
                                                    focus:outline-none focus:border-primary"
                                        >
                                            <option value="">-- Select Parent Menu --</option>
                                            {parentmenus.map((parentmenu) => (
                                                <option key={parentmenu} value={parentmenu}>
                                                    {parentmenu}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Icon
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Copy and Paste (i) Tag Here"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="input_box text-[14px] block md:flex items-center gap-2 mt-4">
                                    <div className="w-full">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Sequence
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Sequence"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full"></div>
                                </div>

                                <div className="input_box text-[14px] block md:flex items-center gap-2 mt-4">
                                    <div className="w-full">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Description<span className="text-red-400">*</span>
                                        </label>
                                        <textarea rows={3}
                                                  placeholder="Enter Description"
                                                  className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                  focus:outline-none focus:border-primary"
                                        >

                                        </textarea>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="flex justify-end gap-3 mt-4 text-[14px]">
                            <button
                                onClick={() => setOpenCreateMenuModal(false)}
                                className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setOpenCreateMenuModal(false)}
                                className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition"
                            >
                                Add Menu
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Menu Edit Modal*/}
            {openEditMenuModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">

                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-modal-opacity"
                        onClick={() => setOpenEditMenuModal(false)}
                    />

                    {/* Address Modal */}
                    <div
                        className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                            onClick={() => setOpenEditMenuModal(false)}
                        >
                            <RxCross1 size={18}/>
                        </button>

                        <h3 className="text-[16px] text-gray-800 font-semibold mb-4">
                            Edit Menu
                        </h3>

                        <div className="py-4 border-b border-t border-gray-200">
                            <form action="" method="">
                                <div className="input_box text-[14px] block md:flex items-center gap-2">
                                    <div className="w-full">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Title<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Title"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            URL<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="Enter Url"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="input_box text-[14px] block md:flex items-center gap-2 mt-4">
                                    <div className="w-full">
                                        <label className="block mb-1 font-medium">
                                            Parent Menu
                                        </label>
                                        <select
                                            required
                                            className="w-full border border-gray-300 rounded-md px-3 py-2
                                                    focus:outline-none focus:border-primary"
                                        >
                                            <option value="">-- Select Parent Menu --</option>
                                            {parentmenus.map((parentmenu) => (
                                                <option key={parentmenu} value={parentmenu}>
                                                    {parentmenu}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Icon
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Copy and Paste (i) Tag Here"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="input_box text-[14px] block md:flex items-center gap-2 mt-4">
                                    <div className="w-full">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Sequence
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Sequence"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full"></div>
                                </div>

                                <div className="input_box text-[14px] block md:flex items-center gap-2 mt-4">
                                    <div className="w-full">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Description<span className="text-red-400">*</span>
                                        </label>
                                        <textarea rows={3}
                                                  placeholder="Enter Description"
                                                  className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                  focus:outline-none focus:border-primary"
                                        >

                                        </textarea>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="flex justify-end gap-3 mt-4 text-[14px]">
                            <button
                                onClick={() => setOpenEditMenuModal(false)}
                                className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setOpenEditMenuModal(false)}
                                className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition"
                            >
                                Update Menu
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
                                You are going to delete this Menu. All contents related to this order will be lost.
                                Do
                                you want to delete it?
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