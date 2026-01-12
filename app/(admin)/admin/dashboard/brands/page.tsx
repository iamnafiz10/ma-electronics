"use client";

import React, {useState, useEffect, useMemo, useRef} from 'react';
import {FaTrashAlt, FaCheck, FaPlus} from 'react-icons/fa';
import {FaPencil} from "react-icons/fa6";
import toast from "react-hot-toast";
import {RxCross1} from "react-icons/rx";
import {IoImageOutline} from "react-icons/io5";

// --- TYPES ---
type BrandItem = {
    id: number;
    title: string;
    logo: string;
    status: 'Active' | 'Inactive';
};

export default function BrandsPage() {
    const [brands, setBrands] = useState<BrandItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const [searchTerm, setSearchTerm] = useState('');
    const [entriesCount, setEntriesCount] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    // ---------- MOCK DATA ----------
    useEffect(() => {
        setIsLoading(true);
        const data: BrandItem[] = Array.from({length: 15}, (_, i) => ({
            id: i + 1,
            title: `Brand ${i + 1}`,
            logo: `https://via.placeholder.com/40`,
            status: i % 2 === 0 ? 'Active' : 'Inactive',
        }));
        setTimeout(() => {
            setBrands(data);
            setIsLoading(false);
        }, 500);
    }, []);

    // ---------- STATUS TOGGLE LOGIC ----------
    const toggleStatus = (id: number) => {
        setBrands(prevBrands =>
            prevBrands.map(brand =>
                brand.id === id
                    ? {...brand, status: brand.status === 'Active' ? 'Inactive' : 'Active'}
                    : brand
            )
        );
        toast.success("Status Updated");
    };

    // ---------- FILTER + PAGINATION ----------
    const filteredBrands = useMemo(() => {
        return brands.filter(brand =>
            brand.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [brands, searchTerm]);

    const totalPages = Math.ceil(filteredBrands.length / entriesCount);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * entriesCount;
        return filteredBrands.slice(start, start + entriesCount);
    }, [filteredBrands, currentPage, entriesCount]);

    // ---------- CHECKBOX LOGIC ----------
    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedIds(paginatedData.map(brand => brand.id));
        } else {
            setSelectedIds([]);
        }
    };

    const handleSelectRow = (id: number) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

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
        setBrands(prev => prev.filter(r => r.id !== selectedId));
        toast.success('Brand deleted successfully!');
        setDeleteModalOpen(false);
    };

    // ---------- CREATE Brand ----------
    const [openCreateBrandModal, setOpenCreateBrandModal] = useState(false);

    // ---------- EDIT Brand ----------
    const [openEditBrandModal, setOpenEditBrandModal] = useState(false);
    useEffect(() => {
        document.body.style.overflow =
            openCreateBrandModal || openEditBrandModal ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openCreateBrandModal, openEditBrandModal]);

    // Image preview
    const [preview, setPreview] = useState<string | null>(null);
    const fileRef = useRef<HTMLInputElement | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleRemove = () => {
        setPreview(null);
        if (fileRef.current) {
            fileRef.current.value = "";
        }
    };
    return (
        <section id="brands-section">
            <div className="container_wrap mt-10 md:mt-0">
                <div
                    className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                    <h2>Brands</h2>
                </div>
                <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6">
                    <div className="flex justify-end">
                        <button onClick={() => setOpenCreateBrandModal(true)}
                                className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                            <FaPlus/> Create Brand
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
                                placeholder="Search brands..."
                                className="ml-2 border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary w-full md:w-64"
                            />
                        </div>
                    </div>

                    {/* TABLE */}
                    <div className="overflow-x-auto rounded">
                        <table className="w-full min-w-[800px] border-collapse text-[14px] text-gray-800">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="border border-gray-200 p-4 w-12 text-center">
                                    <CustomCheckbox
                                        checked={paginatedData.length > 0 && selectedIds.length === paginatedData.length}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="border border-gray-200 p-4 text-center w-16">SI</th>
                                <th className="border border-gray-200 p-4 text-center w-24">Logo</th>
                                <th className="border border-gray-200 p-4 text-left px-6">Brand Name</th>
                                <th className="border border-gray-200 p-4 text-center w-32">Status</th>
                                <th className="border border-gray-200 p-4 text-center w-32">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {!isLoading ? paginatedData.map((brand, idx) => (
                                <tr key={brand.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="border border-gray-200 p-4 text-center">
                                        <CustomCheckbox
                                            checked={selectedIds.includes(brand.id)}
                                            onChange={() => handleSelectRow(brand.id)}
                                        />
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">
                                        {(currentPage - 1) * entriesCount + idx + 1}
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">
                                        <div className="flex justify-center">
                                            <img src={brand.logo} alt=""
                                                 className="w-10 h-10 rounded object-cover border border-gray-200"/>
                                        </div>
                                    </td>
                                    <td className="border border-gray-200 p-4 px-6 font-medium text-gray-700">
                                        {brand.title}
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">
                                            <span
                                                onClick={() => toggleStatus(brand.id)} // Link logic here
                                                className={`px-3 py-1 rounded text-white text-[12px] cursor-pointer inline-block min-w-[70px] transition select-none ${
                                                    brand.status === "Active" ? "bg-green-500" : "bg-gray-400"
                                                }`}
                                            >
                                                {brand.status}
                                            </span>
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">
                                        <div className="flex justify-center gap-2">
                                            <button onClick={() => setOpenEditBrandModal(true)}
                                                    className="bg-blue-500 p-2 rounded text-white cursor-pointer hover:bg-blue-600 transition">
                                                <FaPencil size={12}/>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setSelectedId(brand.id);
                                                    setDeleteModalOpen(true);
                                                }}
                                                className="bg-red-500 p-2 rounded text-white cursor-pointer hover:bg-red-600 transition">
                                                <FaTrashAlt size={12}/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={6} className="p-10 text-center text-gray-400">Loading brands...</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>

                    {/* PAGINATION */}
                    <div
                        className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[14px] text-gray-500">
                        <p>Showing {paginatedData.length} of {filteredBrands.length} entries</p>
                        <div className="flex rounded overflow-hidden text-[12px]">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(p => p - 1)}
                                className="px-3 py-2 border border-gray-200 bg-white cursor-pointer disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <button className="px-4 py-2 border border-gray-200 bg-primary text-white">
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

            {/* CREATE Brand MODAL */}
            {openCreateBrandModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-modal-opacity"
                         onClick={() => setOpenCreateBrandModal(false)}/>
                    <div className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10 text-[14px]">
                        <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                onClick={() => setOpenCreateBrandModal(false)}>
                            <RxCross1 size={18}/>
                        </button>
                        <h3 className="text-[16px] font-semibold mb-4">Create New Brand</h3>
                        <div className="py-4 border-b border-t border-gray-200">
                            <form action="" method="">
                                <div className="input_box block md:flex items-center gap-4">
                                    <div className="w-full">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Logo <span className="text-red-400">*</span>
                                        </label>

                                        <div className="flex items-center gap-4 my-4">
                                            {/* Image Preview Box */}
                                            <div
                                                className="w-[120px] h-[120px] border border-gray-200 rounded flex items-center justify-center overflow-hidden">
                                                {preview ? (
                                                    <img
                                                        src={preview}
                                                        alt="Logo Preview"
                                                        className="w-full h-full object-contain"
                                                    />
                                                ) : (
                                                    <IoImageOutline size={60} className="text-gray-400"/>
                                                )}
                                            </div>

                                            {/* Remove Button */}
                                            {preview && (
                                                <button
                                                    type="button"
                                                    onClick={handleRemove}
                                                    className="px-4 py-2 text-[13px] bg-red-500 text-white rounded cursor-pointer hover:bg-red-600"
                                                >
                                                    Remove
                                                </button>
                                            )}
                                        </div>

                                        <input
                                            ref={fileRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="w-full text-[12px] border border-gray-300 rounded p-3 py-2
                focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full"></div>
                                </div>

                                <div className="input_box mt-4 block md:flex items-center gap-4">
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Name<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Name"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full"></div>
                                </div>
                                <div className="input_box mt-4 block md:flex items-center gap-4">
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Slug<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Slug"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full"></div>
                                </div>
                            </form>
                        </div>
                        <div className="flex justify-end gap-3 mt-4 text-[14px]">
                            <button onClick={() => setOpenCreateBrandModal(false)}
                                    className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                Cancel
                            </button>
                            <button onClick={() => setOpenCreateBrandModal(false)}
                                    className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                Add Brand
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* EDIT Brand MODAL */}
            {openEditBrandModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-modal-opacity"
                         onClick={() => setOpenEditBrandModal(false)}/>
                    <div className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10 text-[14px]">
                        <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                onClick={() => setOpenEditBrandModal(false)}>
                            <RxCross1 size={18}/>
                        </button>
                        <h3 className="text-[16px] font-semibold mb-4">Edit Brand</h3>
                        <div className="py-4 border-b border-t border-gray-200">
                            <form action="" method="">
                                <div className="input_box block md:flex items-center gap-4">
                                    <div className="w-full">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Logo <span className="text-red-400">*</span>
                                        </label>

                                        <div className="flex items-center gap-4 my-4">
                                            {/* Image Preview Box */}
                                            <div
                                                className="w-[120px] h-[120px] border border-gray-200 rounded flex items-center justify-center overflow-hidden">
                                                {preview ? (
                                                    <img
                                                        src={preview}
                                                        alt="Logo Preview"
                                                        className="w-full h-full object-contain"
                                                    />
                                                ) : (
                                                    <IoImageOutline size={60} className="text-gray-400"/>
                                                )}
                                            </div>

                                            {/* Remove Button */}
                                            {preview && (
                                                <button
                                                    type="button"
                                                    onClick={handleRemove}
                                                    className="px-4 py-2 text-[13px] bg-red-500 text-white rounded cursor-pointer hover:bg-red-600"
                                                >
                                                    Remove
                                                </button>
                                            )}
                                        </div>

                                        <input
                                            ref={fileRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="w-full text-[12px] border border-gray-300 rounded p-3 py-2
                focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full"></div>
                                </div>

                                <div className="input_box mt-4 block md:flex items-center gap-4">
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Name<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Name"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full"></div>
                                </div>
                                <div className="input_box mt-4 block md:flex items-center gap-4">
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Slug<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Slug"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full"></div>
                                </div>
                            </form>
                        </div>
                        <div className="flex justify-end gap-3 mt-4 text-[14px]">
                            <button onClick={() => setOpenEditBrandModal(false)}
                                    className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                Cancel
                            </button>
                            <button onClick={() => setOpenEditBrandModal(false)}
                                    className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                Update Brand
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
                                You are going to delete this Brand.<br/>
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