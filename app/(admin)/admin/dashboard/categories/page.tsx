"use client";

import React, {useState, useEffect, useMemo, useRef} from 'react';
import {FaTrashAlt, FaCheck, FaPlus} from 'react-icons/fa';
import {FaPencil} from "react-icons/fa6";
import toast from "react-hot-toast";
import Image from 'next/image';
import {RxCross1} from "react-icons/rx";
import {IoImageOutline} from "react-icons/io5";

// --- TYPES ---
type CategoryItem = {
    id: number;
    title: string;
    icon: string;
    status: 'Active' | 'Inactive';
    highlight: boolean; // Changed from parent_id to highlight
};

export default function CategoriesPage() {
    const [categories, setCategories] = useState<CategoryItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [entriesCount, setEntriesCount] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    // ---------- MOCK DATA ----------
    useEffect(() => {
        setIsLoading(true);
        const data: CategoryItem[] = [
            {id: 1, title: "Electronics", icon: "/icons/electronics.svg", status: "Active", highlight: true},
            {id: 2, title: "Clothing", icon: "/icons/clothing.svg", status: "Active", highlight: false},
            {id: 3, title: "Home & Garden", icon: "/icons/home.svg", status: "Active", highlight: true},
            {id: 4, title: "Laptops", icon: "/icons/laptop.svg", status: "Active", highlight: true},
            {id: 5, title: "Smartphones", icon: "/icons/phone.svg", status: "Active", highlight: false},
            {id: 6, title: "Men's Clothing", icon: "/icons/shirt.svg", status: "Active", highlight: true},
            {id: 7, title: "Women's Clothing", icon: "/icons/dress.svg", status: "Active", highlight: false},
            {id: 8, title: "Kitchen", icon: "/icons/kitchen.svg", status: "Active", highlight: true},
            {id: 9, title: "Furniture", icon: "/icons/furniture.svg", status: "Inactive", highlight: false},
            {id: 10, title: "Gaming Laptops", icon: "/icons/gaming.svg", status: "Active", highlight: true},
            {id: 11, title: "Business Laptops", icon: "/icons/business.svg", status: "Active", highlight: false},
            {id: 12, title: "Android Phones", icon: "/icons/android.svg", status: "Active", highlight: true},
            {id: 13, title: "iPhones", icon: "/icons/apple.svg", status: "Active", highlight: false},
            {id: 14, title: "T-Shirts", icon: "/icons/tshirt.svg", status: "Active", highlight: true},
            {id: 15, title: "Jeans", icon: "/icons/jeans.svg", status: "Active", highlight: false},
        ];
        setTimeout(() => {
            setCategories(data);
            setIsLoading(false);
        }, 500);
    }, []);

    // ---------- STATUS TOGGLE ----------
    const toggleStatus = (id: number) => {
        setCategories(prevCategories =>
            prevCategories.map(category =>
                category.id === id
                    ? {...category, status: category.status === 'Active' ? 'Inactive' : 'Active'}
                    : category
            )
        );
        toast.success("Status Updated");
    };

    // ---------- FILTER + PAGINATION ----------
    const filteredCategories = useMemo(() => {
        return categories.filter(category =>
            category.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [categories, searchTerm]);

    const totalPages = Math.ceil(filteredCategories.length / entriesCount);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * entriesCount;
        return filteredCategories.slice(start, start + entriesCount);
    }, [filteredCategories, currentPage, entriesCount]);

    // ---------- CHECKBOX LOGIC ----------
    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedIds(paginatedData.map(category => category.id));
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
        setCategories(prev => prev.filter(r => r.id !== selectedId));
        toast.success('Category deleted successfully!');
        setDeleteModalOpen(false);
    };

    // ---------- CREATE Category ----------
    const [openCreateCategoryModal, setOpenCreateCategoryModal] = useState(false);

    // ---------- EDIT Category ----------
    const [openEditCategoryModal, setOpenEditCategoryModal] = useState(false);
    useEffect(() => {
        document.body.style.overflow =
            openCreateCategoryModal || openEditCategoryModal ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openCreateCategoryModal, openEditCategoryModal]);

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
    // Category Checkbox
    const [selected, setSelected] = useState<"sub" | "child" | null>(null);
    return (
        <section id="categories-section">
            <div className="container_wrap mt-10 md:mt-0">
                <div
                    className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                    <h2>Categories</h2>
                </div>

                <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6">
                    {/* Create Category Button */}
                    <div className="flex justify-end mb-6">
                        <button onClick={() => setOpenCreateCategoryModal(true)}
                                className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                            <FaPlus/> Create Category
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
                                placeholder="Search categories..."
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
                                <th className="border border-gray-200 p-4 text-center w-16">Icon</th>
                                <th className="border border-gray-200 p-4 text-left px-6">Category Name</th>
                                <th className="border border-gray-200 p-4 text-center w-32">HIGHLIGHT</th>
                                <th className="border border-gray-200 p-4 text-center w-32">Status</th>
                                <th className="border border-gray-200 p-4 text-center w-32">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {!isLoading ? paginatedData.map((category, idx) => (
                                <tr key={category.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="border border-gray-200 p-4 text-center">
                                        <CustomCheckbox
                                            checked={selectedIds.includes(category.id)}
                                            onChange={() => handleSelectRow(category.id)}
                                        />
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">
                                        {(currentPage - 1) * entriesCount + idx + 1}
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">
                                        <div className="flex justify-center">
                                            <Image
                                                src={category.icon}
                                                alt={category.title}
                                                width={32}
                                                height={32}
                                                className="rounded"
                                            />
                                        </div>
                                    </td>
                                    <td className="border border-gray-200 p-4 px-6 font-medium text-gray-700">
                                        {category.title}
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">
                                        <span
                                            className={`px-3 py-1 rounded text-white text-[12px] inline-block min-w-[70px] transition select-none ${
                                                category.highlight
                                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-md"
                                                    : "bg-gradient-to-r from-gray-400 to-gray-600"
                                            }`}>
                                            {category.highlight ? "Yes" : "No"}
                                        </span>
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">
                                        <span
                                            onClick={() => toggleStatus(category.id)}
                                            className={`px-3 py-1 rounded text-white text-[12px] cursor-pointer inline-block min-w-[70px] transition select-none ${
                                                category.status === "Active" ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 hover:bg-gray-500"
                                            }`}
                                        >
                                            {category.status}
                                        </span>
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">
                                        <div className="flex justify-center gap-2">
                                            <button onClick={() => setOpenEditCategoryModal(true)}
                                                    className="bg-blue-500 p-2 rounded text-white cursor-pointer hover:bg-blue-600 transition">
                                                <FaPencil size={12}/>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setSelectedId(category.id);
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
                                    <td colSpan={7} className="p-10 text-center text-gray-400">Loading categories...
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>

                    {/* PAGINATION */}
                    <div
                        className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[14px] text-gray-500">
                        <p>Showing {paginatedData.length} of {filteredCategories.length} entries</p>
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


            {/* CREATE Category MODAL */}
            {openCreateCategoryModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-modal-opacity"
                         onClick={() => setOpenCreateCategoryModal(false)}/>
                    <div
                        className="relative bg-white rounded shadow w-2xl mx-4 max-h-[90vh] flex flex-col z-10 text-[14px]">
                        {/* Modal Header - Fixed */}
                        <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenCreateCategoryModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold">Create New Category</h3>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="overflow-y-auto px-6 py-4 flex-grow">
                            <form action="" method="">
                                <div className="input_box block md:flex items-center gap-8">
                                    {/* Sub Category */}
                                    <label className="flex items-center gap-2 cursor-pointer select-none text-[14px]">
                                        <input
                                            type="checkbox"
                                            className="peer hidden"
                                            checked={selected === "sub"}
                                            onChange={() =>
                                                setSelected(selected === "sub" ? null : "sub")
                                            }
                                        />
                                        <div
                                            className="w-4 h-4 border border-gray-300 rounded
                                            flex items-center justify-center
                                            transition
                                            peer-checked:bg-primary
                                            peer-checked:border-primary"
                                        >
                                            <FaCheck className="text-white text-[10px]"/>
                                        </div>
                                        <span className="text-gray-800">Sub Category</span>
                                    </label>

                                    {/* Child Category */}
                                    <label className="flex items-center gap-2 cursor-pointer select-none text-[14px]">
                                        <input
                                            type="checkbox"
                                            className="peer hidden"
                                            checked={selected === "child"}
                                            onChange={() =>
                                                setSelected(selected === "child" ? null : "child")
                                            }
                                        />
                                        <div
                                            className="w-4 h-4 border border-gray-300 rounded
                                            flex items-center justify-center
                                            transition
                                            peer-checked:bg-primary
                                            peer-checked:border-primary"
                                        >
                                            <FaCheck className="text-white text-[10px]"/>
                                        </div>
                                        <span className="text-gray-800">Child Category</span>
                                    </label>
                                </div>

                                <div className="input_box mt-4 block md:flex items-center gap-4">
                                    <div className="w-full">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Set Icon <span className="text-red-400">*</span>
                                        </label>

                                        <div className="flex items-center gap-4 my-4">
                                            {/* Image Preview Box */}
                                            <div
                                                className="w-[80px] h-[80px] border border-gray-200 rounded flex items-center justify-center overflow-hidden">
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

                                {selected === "sub" && (
                                    <div className="sub_category_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 font-medium">Sub Category</label>
                                            <select
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                            >
                                                <option value="">-- Select Sub Category --</option>
                                                <option>Sub Category 1</option>
                                                <option>Sub Category 2</option>
                                                <option>Sub Category 3</option>
                                            </select>
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                        </div>
                                    </div>
                                )}

                                {selected === "child" && (
                                    <div className="child_category_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 font-medium">Child Category</label>
                                            <select
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                            >
                                                <option value="">-- Select Child Category --</option>
                                                <option>Child Category 1</option>
                                                <option>Child Category 2</option>
                                                <option>Child Category 3</option>
                                            </select>
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                        </div>
                                    </div>
                                )}
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
                                </div>

                                <div className="input_box mt-4 block md:flex items-center gap-4">
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Meta Keywords<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Keywords"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="input_box mt-4 block md:flex items-center gap-4">
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Serial<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Serial"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Highlight<span className="text-red-400">*</span>
                                        </label>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer"/>
                                            <div
                                                className="w-11 h-6 bg-gray-300 rounded-full peer
                                     peer-checked:bg-primary
                                       relative transition-colors duration-300
                                       after:content-[''] after:absolute after:top-0.5 after:left-0.5
                                       after:w-5 after:h-5 after:bg-white after:rounded-full
                                       after:transition-transform after:duration-300
                                       peer-checked:after:translate-x-5">
                                            </div>
                                        </label>

                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Modal Footer - Fixed */}
                        <div className="px-6 py-4 border-t border-gray-200 flex-shrink-0">
                            <div className="flex justify-end gap-3 text-[14px]">
                                <button onClick={() => setOpenCreateCategoryModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Cancel
                                </button>
                                <button onClick={() => setOpenCreateCategoryModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                    Add Category
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* EDIT Category MODAL */}
            {openEditCategoryModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-modal-opacity"
                         onClick={() => setOpenEditCategoryModal(false)}/>
                    <div
                        className="relative bg-white rounded shadow w-2xl mx-4 max-h-[90vh] flex flex-col z-10 text-[14px]">
                        {/* Modal Header - Fixed */}
                        <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenEditCategoryModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold">Edit Category</h3>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="overflow-y-auto px-6 py-4 flex-grow">
                            <form action="" method="">
                                <div className="input_box block md:flex items-center gap-8">
                                    {/* Sub Category */}
                                    <label className="flex items-center gap-2 cursor-pointer select-none text-[14px]">
                                        <input
                                            type="checkbox"
                                            className="peer hidden"
                                            checked={selected === "sub"}
                                            onChange={() =>
                                                setSelected(selected === "sub" ? null : "sub")
                                            }
                                        />
                                        <div
                                            className="w-4 h-4 border border-gray-300 rounded
                                            flex items-center justify-center
                                            transition
                                            peer-checked:bg-primary
                                            peer-checked:border-primary"
                                        >
                                            <FaCheck className="text-white text-[10px]"/>
                                        </div>
                                        <span className="text-gray-800">Sub Category</span>
                                    </label>

                                    {/* Child Category */}
                                    <label className="flex items-center gap-2 cursor-pointer select-none text-[14px]">
                                        <input
                                            type="checkbox"
                                            className="peer hidden"
                                            checked={selected === "child"}
                                            onChange={() =>
                                                setSelected(selected === "child" ? null : "child")
                                            }
                                        />
                                        <div
                                            className="w-4 h-4 border border-gray-300 rounded
                                            flex items-center justify-center
                                            transition
                                            peer-checked:bg-primary
                                            peer-checked:border-primary"
                                        >
                                            <FaCheck className="text-white text-[10px]"/>
                                        </div>
                                        <span className="text-gray-800">Child Category</span>
                                    </label>
                                </div>

                                <div className="input_box mt-4 block md:flex items-center gap-4">
                                    <div className="w-full">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Set Icon <span className="text-red-400">*</span>
                                        </label>

                                        <div className="flex items-center gap-4 my-4">
                                            {/* Image Preview Box */}
                                            <div
                                                className="w-[80px] h-[80px] border border-gray-200 rounded flex items-center justify-center overflow-hidden">
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

                                {selected === "sub" && (
                                    <div className="sub_category_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 font-medium">Sub Category</label>
                                            <select
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                            >
                                                <option value="">-- Select Sub Category --</option>
                                                <option>Sub Category 1</option>
                                                <option>Sub Category 2</option>
                                                <option>Sub Category 3</option>
                                            </select>
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                        </div>
                                    </div>
                                )}

                                {selected === "child" && (
                                    <div className="child_category_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 font-medium">Child Category</label>
                                            <select
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                            >
                                                <option value="">-- Select Child Category --</option>
                                                <option>Child Category 1</option>
                                                <option>Child Category 2</option>
                                                <option>Child Category 3</option>
                                            </select>
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                        </div>
                                    </div>
                                )}
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
                                </div>

                                <div className="input_box mt-4 block md:flex items-center gap-4">
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Meta Keywords<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Keywords"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="input_box mt-4 block md:flex items-center gap-4">
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Serial<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Serial"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full mt-4 md:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Highlight<span className="text-red-400">*</span>
                                        </label>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer"/>
                                            <div
                                                className="w-11 h-6 bg-gray-300 rounded-full peer
                                     peer-checked:bg-primary
                                       relative transition-colors duration-300
                                       after:content-[''] after:absolute after:top-0.5 after:left-0.5
                                       after:w-5 after:h-5 after:bg-white after:rounded-full
                                       after:transition-transform after:duration-300
                                       peer-checked:after:translate-x-5">
                                            </div>
                                        </label>

                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Modal Footer - Fixed */}
                        <div className="px-6 py-4 border-t border-gray-200 flex-shrink-0">
                            <div className="flex justify-end gap-3 text-[14px]">
                                <button onClick={() => setOpenEditCategoryModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Cancel
                                </button>
                                <button onClick={() => setOpenEditCategoryModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                    Update Category
                                </button>
                            </div>
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
                                You are going to delete this Category.<br/>
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