"use client";

import React, { useState, useMemo, useRef } from 'react';
import { FaTrashAlt, FaCheck, FaPlus } from 'react-icons/fa';
import { FaPencil } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { IoImageOutline } from "react-icons/io5";
import { useBrands } from "@/app/features/auth/hooks/Brand/useBrands"; // Update path as needed
import { BrandDTO } from "@/app/features/auth/Dto/Brand.dto";
import { withApiUrl } from '@/utils/withApiUrl';

export default function BrandsPage() {
    // --- HOOK INTEGRATION ---
    const { brands, loading, create, update, remove, toggleStatus } = useBrands();

    // --- LOCAL STATE ---
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [entriesCount, setEntriesCount] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    
    // Form State
    const [formData, setFormData] = useState({ name: '', slug: '', id: '' });
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const fileRef = useRef<HTMLInputElement | null>(null);

    // Modals
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [openCreateBrandModal, setOpenCreateBrandModal] = useState(false);
    const [openEditBrandModal, setOpenEditBrandModal] = useState(false);
    const [targetId, setTargetId] = useState<string | null>(null);

    // ---------- FILTER + PAGINATION ----------
    const filteredBrands = useMemo(() => {
        return brands.filter(brand =>
            brand.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [brands, searchTerm]);

    const totalPages = Math.ceil(filteredBrands.length / entriesCount);
    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * entriesCount;
        return filteredBrands.slice(start, start + entriesCount);
    }, [filteredBrands, currentPage, entriesCount]);

    // ---------- HANDLERS ----------
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const resetForm = () => {
        setFormData({ name: '', slug: '', id: '' });
        setSelectedFile(null);
        setPreview(null);
        if (fileRef.current) fileRef.current.value = "";
    };

    const handleCreateSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedFile) return;
        await create(formData.name, selectedFile);
        setOpenCreateBrandModal(false);
        resetForm();
    };

    const handleUpdateSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await update(formData.id, formData.name, formData.slug, selectedFile || undefined);
        setOpenEditBrandModal(false);
        resetForm();
    };

    const openEdit = (brand: BrandDTO) => {
        setFormData({ name: brand.name, slug: brand.slug, id: brand.id });
        setPreview(brand.logoUrl);
        setOpenEditBrandModal(true);
    };

    const confirmDelete = async () => {
        if (targetId) {
            await remove(targetId);
            setDeleteModalOpen(false);
            setTargetId(null);
        }
    };

    return (
        <section id="brands-section">
            <div className="container_wrap mt-10 md:mt-0">
                <div className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                    <h2>Brands</h2>
                </div>
                
                <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6">
                    <div className="flex justify-end">
                        <button onClick={() => { resetForm(); setOpenCreateBrandModal(true); }}
                                className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                            <FaPlus/> Create Brand
                        </button>
                    </div>

                    {/* FILTERS */}
                    <div className="flex flex-col md:flex-row justify-between items-center my-6 gap-4">
                        <div className="text-[14px] text-gray-500">
                            Show
                            <select value={entriesCount} onChange={(e) => { setEntriesCount(Number(e.target.value)); setCurrentPage(1); }}
                                className="mx-2 border border-gray-200 rounded px-2 py-1 bg-white">
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                            </select>
                            entries
                        </div>
                        <div className="flex items-center text-[14px] text-gray-500">
                            Search:
                            <input type="text" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                                placeholder="Search brands..."
                                className="ml-2 border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary w-full md:w-64" />
                        </div>
                    </div>

                    {/* TABLE */}
                    <div className="overflow-x-auto rounded">
                        <table className="w-full min-w-[800px] border-collapse text-[14px] text-gray-800">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="border border-gray-200 p-4 text-center w-16">SI</th>
                                    <th className="border border-gray-200 p-4 text-center w-24">Logo</th>
                                    <th className="border border-gray-200 p-4 text-left px-6">Brand Name</th>
                                    <th className="border border-gray-200 p-4 text-center w-32">Status</th>
                                    <th className="border border-gray-200 p-4 text-center w-32">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!loading ? paginatedData.map((brand, idx) => (
                                    <tr key={brand.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="border border-gray-200 p-4 text-center">
                                            {(currentPage - 1) * entriesCount + idx + 1}
                                        </td>
                                        <td className="border border-gray-200 p-4 text-center">
                                            <div className="flex justify-center">
                                                <img  src={withApiUrl(brand.logoUrl)}
  alt={brand.name}
  className="w-10 h-10 rounded object-cover border border-gray-200"
/>
                                            </div>
                                        </td>
                                        <td className="border border-gray-200 p-4 px-6 font-medium text-gray-700">
                                            {brand.name}
                                        </td>
                                        <td className="border border-gray-200 p-4 text-center">
                                            <span onClick={() => toggleStatus(brand.id)}
                                                className={`px-3 py-1 rounded text-white text-[12px] cursor-pointer inline-block min-w-[70px] transition ${
                                                    brand.isActive ? "bg-green-500" : "bg-gray-400"
                                                }`}>
                                                {brand.isActive ? "Active" : "Inactive"}
                                            </span>
                                        </td>
                                        <td className="border border-gray-200 p-4 text-center">
                                            <div className="flex justify-center gap-2">
                                                <button onClick={() => openEdit(brand)}
                                                        className="bg-blue-500 p-2 rounded text-white hover:bg-blue-600 transition">
                                                    <FaPencil size={12}/>
                                                </button>
                                                <button onClick={() => { setTargetId(brand.id); setDeleteModalOpen(true); }}
                                                        className="bg-red-500 p-2 rounded text-white hover:bg-red-600 transition">
                                                    <FaTrashAlt size={12}/>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={5} className="p-10 text-center text-gray-400">Loading brands...</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* CREATE/EDIT MODAL (Simplified logic to reuse the form) */}
            {(openCreateBrandModal || openEditBrandModal) && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/50" onClick={() => { setOpenCreateBrandModal(false); setOpenEditBrandModal(false); }}/>
                    <div className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10 text-[14px]">
                        <h3 className="text-[16px] font-semibold mb-4">{openEditBrandModal ? 'Edit Brand' : 'Create New Brand'}</h3>
                        <form onSubmit={openEditBrandModal ? handleUpdateSubmit : handleCreateSubmit}>
                            <div className="py-4 border-b border-t border-gray-200 space-y-4">
                                <div>
                                    <label className="block mb-1 font-medium">Logo <span className="text-red-400">*</span></label>
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="w-20 h-20 border rounded flex items-center justify-center overflow-hidden">
                                            {preview ? <img src={preview} className="w-full h-full object-contain" /> : <IoImageOutline size={40} className="text-gray-400"/>}
                                        </div>
                                        <input ref={fileRef} type="file" accept="image/*" onChange={handleImageChange} className="text-[12px]" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Name <span className="text-red-400">*</span></label>
                                    <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                                           className="w-full border rounded p-2 focus:border-primary outline-none" placeholder="Enter Name" />
                                </div>
                                {openEditBrandModal && (
                                    <div>
                                        <label className="block mb-1 font-medium">Slug <span className="text-red-400">*</span></label>
                                        <input type="text" required value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})}
                                               className="w-full border rounded p-2 focus:border-primary outline-none" />
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-end gap-3 mt-4">
                                <button type="button" onClick={() => { setOpenCreateBrandModal(false); setOpenEditBrandModal(false); }} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-primary text-white rounded">
                                    {openEditBrandModal ? 'Update Brand' : 'Add Brand'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* DELETE MODAL */}
            {deleteModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded shadow w-lg mx-4 px-6 py-4 relative">
                        <h3 className="text-[16px] font-semibold mb-4">Confirm Delete?</h3>
                        <p className="text-gray-500 py-4 border-t border-b">Are you sure you want to delete this brand? This action cannot be undone.</p>
                        <div className="flex justify-end gap-3 mt-4">
                            <button onClick={() => setDeleteModalOpen(false)} className="px-4 py-2 bg-gray-100 rounded">Cancel</button>
                            <button onClick={confirmDelete} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}