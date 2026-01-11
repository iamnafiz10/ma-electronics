"use client";

import React, {useState, useEffect, useMemo} from 'react';
import {FaTrashAlt, FaCheck, FaPlus} from 'react-icons/fa';
import {RxCross1} from "react-icons/rx";
import toast from "react-hot-toast";
import {FaPencil} from "react-icons/fa6";

// --- TYPES ---
type BrandItem = {
    id: number;
    title: string;
    logo: string;
    status: 'active' | 'inactive';
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
        const data: BrandItem[] = Array.from({length: 20}, (_, i) => ({
            id: i + 1,
            title: `Brand ${i + 1}`,
            logo: `https://via.placeholder.com/40`, // Placeholder logo
            status: i % 2 === 0 ? 'active' : 'inactive',
        }));

        setTimeout(() => {
            setBrands(data);
            setIsLoading(false);
        }, 500);
    }, []);

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

    const handleSelectAll = (checked: boolean) => {
        if (checked) setSelectedIds(paginatedData.map(i => i.id));
        else setSelectedIds([]);
    };

    const handleSelectRow = (id: number) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    // Toggle Status Logic
    const toggleStatus = (id: number) => {
        setBrands(prev => prev.map(brand =>
            brand.id === id ? {...brand, status: brand.status === 'active' ? 'inactive' : 'active'} : brand
        ));
        toast.success("Status updated!");
    };

    // ---------- CHECKBOX ----------
    const CustomCheckbox = ({checked, onChange}: { checked: boolean, onChange: (v: boolean) => void }) => (
        <label className="flex items-center justify-center cursor-pointer select-none">
            <input type="checkbox" className="peer hidden" checked={checked}
                   onChange={(e) => onChange(e.target.checked)}/>
            <div
                className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-primary">
                {checked && <FaCheck className="text-white text-[9px] font-light"/>}
            </div>
        </label>
    );

    // ---------- MODAL STATES ----------
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [openCreateBrandModal, setOpenCreateBrandModal] = useState(false);
    const [openEditBrandModal, setOpenEditBrandModal] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [newBrandName, setNewBrandName] = useState('');
    const [editBrandName, setEditBrandName] = useState('');

    const handleDelete = () => {
        if (!selectedId) return;
        setBrands(prev => prev.filter(b => b.id !== selectedId));
        toast.success('Brand deleted successfully!');
        setDeleteModalOpen(false);
    };

    const handleOpenEdit = (brand: BrandItem) => {
        setSelectedId(brand.id);
        setEditBrandName(brand.title);
        setOpenEditBrandModal(true);
    };

    return (
        <section>
            <div className="container_wrap mt-10 md:mt-0">
                <div
                    className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                    <h2>Brands Management</h2>
                </div>

                <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6">
                    {/* CREATE BUTTON */}
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
                            <select value={entriesCount} onChange={(e) => {
                                setEntriesCount(Number(e.target.value));
                                setCurrentPage(1);
                            }} className="mx-2 border border-gray-200 rounded px-2 py-1 bg-white">
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                            </select>
                            entries
                        </div>
                        <div className="flex items-center text-[14px] text-gray-500">
                            Search:
                            <input type="text" value={searchTerm} onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }} placeholder="Search brand..."
                                   className="ml-2 border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary w-full"/>
                        </div>
                    </div>

                    {/* TABLE */}
                    <div className="overflow-x-auto rounded">
                        <table className="w-full min-w-[900px] border-collapse text-[14px] text-gray-800">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="border border-gray-200 p-4 w-12 text-center">
                                    <CustomCheckbox
                                        checked={paginatedData.length > 0 && selectedIds.length === paginatedData.length}
                                        onChange={handleSelectAll}/>
                                </th>
                                <th className="border border-gray-200 p-4 text-center">SI</th>
                                <th className="border border-gray-200 p-4 text-center">Logo</th>
                                <th className="border border-gray-200 p-4 text-center">Brand Name</th>
                                <th className="border border-gray-200 p-4 text-center">Status</th>
                                <th className="border border-gray-200 p-4 text-center">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {!isLoading ? paginatedData.map((brand, idx) => (
                                <tr key={brand.id} className="hover:bg-gray-50">
                                    <td className="border border-gray-200 p-4 text-center">
                                        <CustomCheckbox checked={selectedIds.includes(brand.id)}
                                                        onChange={() => handleSelectRow(brand.id)}/>
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">{(currentPage - 1) * entriesCount + idx + 1}</td>
                                    <td className="border border-gray-200 p-4 text-center">
                                        <div className="flex justify-center">
                                            <img src={brand.logo} alt={brand.title}
                                                 className="w-10 h-10 rounded object-cover border border-gray-100"/>
                                        </div>
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center font-medium">{brand.title}</td>
                                    <td className="border border-gray-200 p-4 text-center">
                                        <button
                                            onClick={() => toggleStatus(brand.id)}
                                            className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider cursor-pointer ${brand.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                            {brand.status}
                                        </button>
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center w-[150px]">
                                        <div className="flex justify-center gap-2">
                                            <button onClick={() => handleOpenEdit(brand)}
                                                    className="bg-blue-500 p-2 rounded text-white cursor-pointer hover:bg-blue-600">
                                                <FaPencil size={12}/></button>
                                            <button onClick={() => {
                                                setSelectedId(brand.id);
                                                setDeleteModalOpen(true);
                                            }}
                                                    className="bg-red-500 p-2 rounded text-white cursor-pointer hover:bg-red-600">
                                                <FaTrashAlt size={12}/></button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={6} className="p-10 text-center text-gray-400">Loading data...</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}