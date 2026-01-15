"use client";

import React, {useState, useEffect, useMemo, useRef} from 'react';
import {FaTrashAlt, FaCheck, FaPlus} from 'react-icons/fa';
import {FaPencil} from "react-icons/fa6";
import toast from "react-hot-toast";
import Image from 'next/image';
import {RxCross1} from "react-icons/rx";
import {IoImageOutline} from "react-icons/io5";

// --- TYPES ---
type SliderItem = {
    id: number;
    title: string;
    icon: string;
    homepage: string;
    details: string;
    status: 'Active' | 'Inactive';
    highlight: boolean;
};

type TabKey = "Home-1" | "Home-2" | "Home-3" | "Home-4";

export default function SlidersPage() {
    const [sliders, setSliders] = useState<SliderItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [entriesCount, setEntriesCount] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    //----------------- Main Tab ----------------//
    const [activeTab, setActiveTab] = useState<TabKey>("Home-1");
    const tabBtnClass = (key: TabKey) =>
        `py-2 px-4 rounded cursor-pointer text-[14px] transition
        ${
            activeTab === key
                ? "bg-primary text-white"
                : "border border-primary text-primary hover:bg-primary hover:text-white"
        }`;

    // ---------- MOCK DATA ----------
    useEffect(() => {
        setIsLoading(true);
        const data: SliderItem[] = [
            {
                id: 1,
                title: "UP TO 34% OFF",
                icon: "/icons/electronics.svg",
                homepage: "THEME1",
                details: "Starting from TK 17,900",
                status: "Active",
                highlight: true
            },
            {
                id: 2,
                title: "Mobile Fest",
                icon: "/icons/clothing.svg",
                homepage: "THEME1",
                details: "Save Up to TK, 4000",
                status: "Active",
                highlight: false
            },
        ];
        setTimeout(() => {
            setSliders(data);
            setIsLoading(false);
        }, 500);
    }, []);

    // ---------- FILTER + PAGINATION ----------
    const filteredSliders = useMemo(() => {
        return sliders.filter(slider =>
            slider.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [sliders, searchTerm]);

    const totalPages = Math.ceil(filteredSliders.length / entriesCount);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * entriesCount;
        return filteredSliders.slice(start, start + entriesCount);
    }, [filteredSliders, currentPage, entriesCount]);

    // ---------- CHECKBOX LOGIC ----------
    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedIds(paginatedData.map(slider => slider.id));
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
        setSliders(prev => prev.filter(r => r.id !== selectedId));
        toast.success('Slider deleted successfully!');
        setDeleteModalOpen(false);
    };

    // ---------- CREATE Slider ----------
    const [openCreateSliderModal, setOpenCreateSliderModal] = useState(false);

    // ---------- EDIT Slider ----------
    const [openEditSliderModal, setOpenEditSliderModal] = useState(false);
    useEffect(() => {
        document.body.style.overflow =
            openCreateSliderModal || openEditSliderModal ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openCreateSliderModal, openEditSliderModal]);

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
        <section id="sliders-section">
            <div className="container_wrap mt-10 md:mt-0">
                <div
                    className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                    <h2>Sliders</h2>
                </div>

                <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6">
                    {/* Create Slider Button */}
                    <div className="flex justify-end mb-6">
                        <button onClick={() => setOpenCreateSliderModal(true)}
                                className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                            <FaPlus/> Create Slider
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
                                placeholder="Search sliders..."
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
                                <th className="border border-gray-200 p-4 text-center w-16">Image</th>
                                <th className="border border-gray-200 p-4 text-left px-6">Title</th>
                                <th className="border border-gray-200 p-4 text-left px-6">Home Page</th>
                                <th className="border border-gray-200 p-4 text-center w-32">Details</th>
                                <th className="border border-gray-200 p-4 text-center w-32">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {!isLoading ? paginatedData.map((slider, idx) => (
                                <tr key={slider.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="border border-gray-200 p-4 text-center">
                                        <CustomCheckbox
                                            checked={selectedIds.includes(slider.id)}
                                            onChange={() => handleSelectRow(slider.id)}
                                        />
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">
                                        {(currentPage - 1) * entriesCount + idx + 1}
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">
                                        <div className="flex justify-center">
                                            <Image
                                                src={slider.icon}
                                                alt={slider.title}
                                                width={32}
                                                height={32}
                                                className="rounded"
                                            />
                                        </div>
                                    </td>
                                    <td className="border border-gray-200 p-4 px-6 font-medium text-gray-700">
                                        {slider.title}
                                    </td>
                                    <td className="border border-gray-200 p-4 px-6 font-medium text-gray-700">
                                        {slider.homepage}
                                    </td>
                                    <td className="border border-gray-200 p-4 px-6 font-medium text-gray-700">
                                        {slider.details}
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">
                                        <div className="flex justify-center gap-2">
                                            <button onClick={() => setOpenEditSliderModal(true)}
                                                    className="bg-blue-500 p-2 rounded text-white cursor-pointer hover:bg-blue-600 transition">
                                                <FaPencil size={12}/>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setSelectedId(slider.id);
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
                                    <td colSpan={7} className="p-10 text-center text-gray-400">Loading sliders...
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>

                    {/* PAGINATION */}
                    <div
                        className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[14px] text-gray-500">
                        <p>Showing {paginatedData.length} of {filteredSliders.length} entries</p>
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


            {/* CREATE Slider MODAL */}
            {openCreateSliderModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-modal-opacity"
                         onClick={() => setOpenCreateSliderModal(false)}/>
                    <div
                        className="relative bg-white rounded shadow w-2xl mx-4 max-h-[90vh] flex flex-col z-10 text-[14px]">
                        {/* Modal Header - Fixed */}
                        <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenCreateSliderModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold">Create New Slider</h3>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="overflow-y-auto px-6 py-4 flex-grow">
                            <div
                                className="tabs text-[14px] block space-y-2 md:space-y-0 space-x-2 md:flex items-center">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("Home-1")}
                                    className={tabBtnClass("Home-1")}
                                >
                                    Home 1
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActiveTab("Home-2")}
                                    className={tabBtnClass("Home-2")}
                                >
                                    Home 2
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActiveTab("Home-3")}
                                    className={tabBtnClass("Home-3")}
                                >
                                    Home 3
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActiveTab("Home-4")}
                                    className={tabBtnClass("Home-4")}
                                >
                                    Home 4
                                </button>
                            </div>

                            {activeTab === "Home-1" && (
                                <div className="mt-4">
                                    <form action="" method="">
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Brand Logo <span className="text-red-400">*</span>
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
                                                <h4 className="mb-4 text-[12px] text-gray-500">
                                                    <b>Note: </b>Image Size Should Be 130 x 40
                                                </h4>

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
                                                    Title<span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Title"
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Link<span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Link"
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Details
                                                </label>

                                                <textarea rows={3} placeholder="Enter Details" className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"></textarea>
                                            </div>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Set Slider Image <span className="text-red-400">*</span>
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
                                                <h4 className="mb-4 text-[12px] text-gray-500">
                                                    <b>Note: </b>Image Size Should Be 968 x 530
                                                </h4>

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

                                        <button type='button'
                                                className="mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded">
                                            Save Info
                                        </button>
                                    </form>
                                </div>
                            )}
                            {activeTab === "Home-2" && (
                                <div className="mt-4">
                                    <form action="" method="">
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Brand Logo <span className="text-red-400">*</span>
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
                                                <h4 className="mb-4 text-[12px] text-gray-500">
                                                    <b>Note: </b>Image Size Should Be 130 x 40
                                                </h4>

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
                                                    Title<span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Title"
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Link<span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Link"
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Details
                                                </label>

                                                <textarea rows={3} placeholder="Enter Details" className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"></textarea>
                                            </div>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Set Slider Image <span className="text-red-400">*</span>
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
                                                <h4 className="mb-4 text-[12px] text-gray-500">
                                                    <b>Note: </b>Image Size Should Be 968 x 530
                                                </h4>

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

                                        <button type='button'
                                                className="mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded">
                                            Save Info
                                        </button>
                                    </form>
                                </div>
                            )}
                            {activeTab === "Home-3" && (
                                <div className="mt-4">
                                    <form action="" method="">
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Brand Logo <span className="text-red-400">*</span>
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
                                                <h4 className="mb-4 text-[12px] text-gray-500">
                                                    <b>Note: </b>Image Size Should Be 130 x 40
                                                </h4>

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
                                                    Title<span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Title"
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Link<span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Link"
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Details
                                                </label>

                                                <textarea rows={3} placeholder="Enter Details" className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"></textarea>
                                            </div>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Set Slider Image <span className="text-red-400">*</span>
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
                                                <h4 className="mb-4 text-[12px] text-gray-500">
                                                    <b>Note: </b>Image Size Should Be 968 x 530
                                                </h4>

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

                                        <button type='button'
                                                className="mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded">
                                            Save Info
                                        </button>
                                    </form>
                                </div>
                            )}
                            {activeTab === "Home-4" && (
                                <div className="mt-4">
                                    <form action="" method="">
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Brand Logo <span className="text-red-400">*</span>
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
                                                <h4 className="mb-4 text-[12px] text-gray-500">
                                                    <b>Note: </b>Image Size Should Be 130 x 40
                                                </h4>

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
                                                    Title<span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Title"
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Link<span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Link"
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Details
                                                </label>

                                                <textarea rows={3} placeholder="Enter Details" className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"></textarea>
                                            </div>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Set Slider Image <span className="text-red-400">*</span>
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
                                                <h4 className="mb-4 text-[12px] text-gray-500">
                                                    <b>Note: </b>Image Size Should Be 968 x 530
                                                </h4>

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

                                        <button type='button'
                                                className="mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded">
                                            Save Info
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer - Fixed */}
                        <div className="px-6 py-4 border-t border-gray-200 flex-shrink-0">
                            <div className="flex justify-end gap-3 text-[14px]">
                                <button onClick={() => setOpenCreateSliderModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Cancel
                                </button>
                                <button onClick={() => setOpenCreateSliderModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                    Add Slider
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* EDIT Slider MODAL */}
            {openEditSliderModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-modal-opacity"
                         onClick={() => setOpenEditSliderModal(false)}/>
                    <div
                        className="relative bg-white rounded shadow w-2xl mx-4 max-h-[90vh] flex flex-col z-10 text-[14px]">
                        {/* Modal Header - Fixed */}
                        <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenEditSliderModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold">Edit Slider</h3>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="overflow-y-auto px-6 py-4 flex-grow">
                            <div
                                className="tabs text-[14px] block space-y-2 md:space-y-0 space-x-2 md:flex items-center">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("Home-1")}
                                    className={tabBtnClass("Home-1")}
                                >
                                    Home 1
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActiveTab("Home-2")}
                                    className={tabBtnClass("Home-2")}
                                >
                                    Home 2
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActiveTab("Home-3")}
                                    className={tabBtnClass("Home-3")}
                                >
                                    Home 3
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActiveTab("Home-4")}
                                    className={tabBtnClass("Home-4")}
                                >
                                    Home 4
                                </button>
                            </div>

                            {activeTab === "Home-1" && (
                                <div className="mt-4">
                                    <form action="" method="">
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Brand Logo <span className="text-red-400">*</span>
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
                                                <h4 className="mb-4 text-[12px] text-gray-500">
                                                    <b>Note: </b>Image Size Should Be 130 x 40
                                                </h4>

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
                                                    Title<span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Title"
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Link<span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Link"
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Details
                                                </label>

                                                <textarea rows={3} placeholder="Enter Details" className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"></textarea>
                                            </div>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Set Slider Image <span className="text-red-400">*</span>
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
                                                <h4 className="mb-4 text-[12px] text-gray-500">
                                                    <b>Note: </b>Image Size Should Be 968 x 530
                                                </h4>

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

                                        <button type='button'
                                                className="mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded">
                                            Save Info
                                        </button>
                                    </form>
                                </div>
                            )}
                            {activeTab === "Home-2" && (
                                <div className="mt-4">
                                    <form action="" method="">
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Brand Logo <span className="text-red-400">*</span>
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
                                                <h4 className="mb-4 text-[12px] text-gray-500">
                                                    <b>Note: </b>Image Size Should Be 130 x 40
                                                </h4>

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
                                                    Title<span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Title"
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Link<span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Link"
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Details
                                                </label>

                                                <textarea rows={3} placeholder="Enter Details" className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"></textarea>
                                            </div>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Set Slider Image <span className="text-red-400">*</span>
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
                                                <h4 className="mb-4 text-[12px] text-gray-500">
                                                    <b>Note: </b>Image Size Should Be 968 x 530
                                                </h4>

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

                                        <button type='button'
                                                className="mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded">
                                            Save Info
                                        </button>
                                    </form>
                                </div>
                            )}
                            {activeTab === "Home-3" && (
                                <div className="mt-4">
                                    <form action="" method="">
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Brand Logo <span className="text-red-400">*</span>
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
                                                <h4 className="mb-4 text-[12px] text-gray-500">
                                                    <b>Note: </b>Image Size Should Be 130 x 40
                                                </h4>

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
                                                    Title<span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Title"
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Link<span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Link"
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Details
                                                </label>

                                                <textarea rows={3} placeholder="Enter Details" className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"></textarea>
                                            </div>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Set Slider Image <span className="text-red-400">*</span>
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
                                                <h4 className="mb-4 text-[12px] text-gray-500">
                                                    <b>Note: </b>Image Size Should Be 968 x 530
                                                </h4>

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

                                        <button type='button'
                                                className="mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded">
                                            Save Info
                                        </button>
                                    </form>
                                </div>
                            )}
                            {activeTab === "Home-4" && (
                                <div className="mt-4">
                                    <form action="" method="">
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Brand Logo <span className="text-red-400">*</span>
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
                                                <h4 className="mb-4 text-[12px] text-gray-500">
                                                    <b>Note: </b>Image Size Should Be 130 x 40
                                                </h4>

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
                                                    Title<span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Title"
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Link<span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Link"
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Details
                                                </label>

                                                <textarea rows={3} placeholder="Enter Details" className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"></textarea>
                                            </div>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Set Slider Image <span className="text-red-400">*</span>
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
                                                <h4 className="mb-4 text-[12px] text-gray-500">
                                                    <b>Note: </b>Image Size Should Be 968 x 530
                                                </h4>

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

                                        <button type='button'
                                                className="mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded">
                                            Save Info
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer - Fixed */}
                        <div className="px-6 py-4 border-t border-gray-200 flex-shrink-0">
                            <div className="flex justify-end gap-3 text-[14px]">
                                <button onClick={() => setOpenEditSliderModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Cancel
                                </button>
                                <button onClick={() => setOpenEditSliderModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                    Update Slider
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
                                You are going to delete this Slider.<br/>
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