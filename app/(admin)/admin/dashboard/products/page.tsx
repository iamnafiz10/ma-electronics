"use client";

import React, {useState, useEffect, useMemo, useRef} from 'react';
import {FaTrashAlt, FaCheck, FaPlus} from 'react-icons/fa';
import {FaPencil} from "react-icons/fa6";
import toast from "react-hot-toast";
import {RxCross1, RxCross2} from "react-icons/rx";
import {IoImageOutline} from "react-icons/io5";
import FroalaEditor from './helper/FroalaEditor';

// --- TYPES ---
type ProductItem = {
    id: number;
    name: string;
    image: string;
    price: number;
    status: 'Active' | 'Inactive';
};

export default function ProductsPage() {
    const [products, setProducts] = useState<ProductItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const [searchTerm, setSearchTerm] = useState('');
    const [entriesCount, setEntriesCount] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    // ---------- MOCK DATA ----------
    useEffect(() => {
        setIsLoading(true);
        const data: ProductItem[] = Array.from({length: 15}, (_, i) => ({
            id: i + 1,
            name: `Product ${i + 1}`,
            image: `https://via.placeholder.com/40`,
            price: Math.floor(Math.random() * 1000) + 100,
            status: i % 2 === 0 ? 'Active' : 'Inactive',
        }));
        setTimeout(() => {
            setProducts(data);
            setIsLoading(false);
        }, 500);
    }, []);

    // ---------- STATUS TOGGLE LOGIC ----------
    const toggleStatus = (id: number) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === id
                    ? {...product, status: product.status === 'Active' ? 'Inactive' : 'Active'}
                    : product
            )
        );
        toast.success("Status Updated");
    };

    // ---------- FILTER + PAGINATION ----------
    const filteredProducts = useMemo(() => {
        return products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [products, searchTerm]);

    const totalPages = Math.ceil(filteredProducts.length / entriesCount);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * entriesCount;
        return filteredProducts.slice(start, start + entriesCount);
    }, [filteredProducts, currentPage, entriesCount]);

    // ---------- CHECKBOX LOGIC ----------
    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedIds(paginatedData.map(product => product.id));
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

    // ---------- CREATE product ----------
    const [openCreateProductModal, setOpenCreateProductModal] = useState(false);
    useEffect(() => {
        if (openCreateProductModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        // cleanup on unmount
        return () => {
            document.body.style.overflow = "";
        };
    }, [openCreateProductModal]);

    // ---------- EDIT product ----------
    const [openEditProductModal, setOpenEditProductModal] = useState(false);
    useEffect(() => {
        if (openEditProductModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        // cleanup on unmount
        return () => {
            document.body.style.overflow = "";
        };
    }, [openEditProductModal]);

    // ---------- DELETE MODAL ----------
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const handleDelete = async () => {
        toast.success("Product deleted successfully!");
        setDeleteModalOpen(false);
    };

    // Feature Image preview
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

    // Gallery Image
    const galleryInputRef = useRef<HTMLInputElement | null>(null);
    const [gallery_images, setGalleryImages] = useState<string[]>([]);
    // Handle image selection
    const handleGalleryImagesChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!e.target.files) return;
        const files = Array.from(e.target.files);
        const imageUrls = files.map((file) =>
            URL.createObjectURL(file)
        );
        setGalleryImages((prev) => [...prev, ...imageUrls]);
        // reset input to allow re-select same image
        e.target.value = "";
    };

    // Remove single image
    const removeGalleryImage = (index: number) => {
        setGalleryImages((prev) =>
            prev.filter((_, i) => i !== index)
        );
    };

    // Product tags added
    const [product_tags, setProductTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState("");
    // Add tag on Enter
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();

            const newTag = tagInput.trim();

            if (!newTag) return;
            if (product_tags.includes(newTag)) return;

            setProductTags((prev) => [...prev, newTag]);
            setTagInput("");
        }
    };
    const removeTag = (index: number) => {
        setProductTags((prev) => prev.filter((_, i) => i !== index));
    };

    // Add meta keywords
    const [meta_keywords, setMetaKeywords] = useState<string[]>([]);
    const [keywordInput, setKeywordInput] = useState("");
    // Add keyword on Enter
    const handleKeyDownTwo = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();

            const keyword = keywordInput.trim();

            if (!keyword) return;
            if (meta_keywords.includes(keyword)) return;

            setMetaKeywords((prev) => [...prev, keyword]);
            setKeywordInput("");
        }
    };
    const removeKeyword = (index: number) => {
        setMetaKeywords((prev) =>
            prev.filter((_, i) => i !== index)
        );
    };
    const [description, setDescription] = useState("");
    return (
        <section id="products-section">
            <div className="container_wrap mt-10 md:mt-0">
                <div
                    className="page_header block md:flex items-center justify-between bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                    <h2>Products</h2>
                    <div className="wrap flex items-center gap-2 mt-2 md:mt-0">
                        <button type='button'
                                className="text-[12px] py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 cursor-pointer">
                            CSV Export
                        </button>
                        <button type='button'
                                className="text-[12px] py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700 cursor-pointer">
                            Bluk Delete
                        </button>
                    </div>
                </div>
                <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6">
                    {/*Product Filter*/}
                    <div className="product_filter text-[14px]">
                        <h1 className="font-semibold">Product Filter:</h1>
                        <div
                            className="space-y-3 md:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-2 mt-2">
                            <select
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                            >
                                <option value="">All Product</option>
                                <option>Product Filter</option>
                                <option>Product Filter</option>
                                <option>Product Filter</option>
                                <option>Product Filter</option>
                            </select>

                            <select
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                            >
                                <option value="">All Type</option>
                                <option>Product Filter</option>
                                <option>Product Filter</option>
                                <option>Product Filter</option>
                                <option>Product Filter</option>
                            </select>

                            <select
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                            >
                                <option value="">All Category</option>
                                <option>Product Filter</option>
                                <option>Product Filter</option>
                                <option>Product Filter</option>
                                <option>Product Filter</option>
                            </select>

                            <select
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                            >
                                <option value="">Order By</option>
                                <option>Ascending</option>
                                <option>Descending</option>
                            </select>
                        </div>
                        <button
                            className="mt-2 cursor-pointer text-[14px] py-2 px-6 bg-primary text-white rounded hover:bg-dark-primary">
                            Filter
                        </button>
                    </div>

                    <div className="flex justify-end mt-4">
                        <button onClick={() => setOpenCreateProductModal(true)}
                                className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer"
                        >
                            <FaPlus/> Add Product
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
                                placeholder="Search products..."
                                className="ml-2 border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary w-full md:w-64"
                            />
                        </div>
                    </div>

                    {/* TABLE */}
                    <div className="overflow-x-auto rounded">
                        <table className="w-full min-w-[600px] border-collapse text-[14px] text-gray-800">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="border border-gray-200 p-4 w-12 text-center">
                                    <CustomCheckbox
                                        checked={paginatedData.length > 0 && selectedIds.length === paginatedData.length}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="border border-gray-200 p-4 text-center w-16">SI</th>
                                <th className="border border-gray-200 p-4 text-center w-24">Image</th>
                                <th className="border border-gray-200 p-4 text-left px-6">Product Name</th>
                                <th className="border border-gray-200 p-4 text-center w-32">Price</th>
                                <th className="border border-gray-200 p-4 text-center w-32">Status</th>
                                <th className="border border-gray-200 p-4 text-center w-32">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {!isLoading ? paginatedData.map((product, idx) => (
                                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="border border-gray-200 p-4 text-center">
                                        <CustomCheckbox
                                            checked={selectedIds.includes(product.id)}
                                            onChange={() => handleSelectRow(product.id)}
                                        />
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">
                                        {(currentPage - 1) * entriesCount + idx + 1}
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">
                                        <div className="flex justify-center">
                                            <img src={product.image} alt={product.name}
                                                 className="w-10 h-10 rounded object-cover border border-gray-200"/>
                                        </div>
                                    </td>
                                    <td className="border border-gray-200 p-4 px-6 font-medium text-gray-700">
                                        {product.name}
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center font-medium">
                                        ${product.price.toFixed(2)}
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">
                                            <span
                                                onClick={() => toggleStatus(product.id)}
                                                className={`px-3 py-1 rounded text-white text-[12px] cursor-pointer inline-block min-w-[70px] transition select-none ${
                                                    product.status === "Active" ? "bg-green-500" : "bg-gray-400"
                                                }`}
                                            >
                                                {product.status}
                                            </span>
                                    </td>
                                    <td className="border border-gray-200 p-4 text-center">
                                        <div className="flex justify-center gap-2">
                                            <button onClick={() => setOpenEditProductModal(true)}
                                                    className="bg-blue-500 p-2 rounded text-white cursor-pointer hover:bg-blue-600 transition">
                                                <FaPencil size={12}/>
                                            </button>
                                            <button
                                                onClick={() => {
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
                                    <td colSpan={7} className="p-10 text-center text-gray-400">Loading products...</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>

                    {/* PAGINATION */}
                    <div
                        className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[14px] text-gray-500">
                        <p>Showing {paginatedData.length} of {filteredProducts.length} entries</p>
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

            {/* CREATE Product MODAL */}
            {openCreateProductModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-modal-opacity"
                         onClick={() => setOpenCreateProductModal(false)}/>
                    <div
                        className="relative bg-white rounded shadow w-6xl mx-4 max-h-[90vh] flex flex-col z-10 text-[14px]">
                        {/* Modal Header - Fixed */}
                        <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenCreateProductModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold">Create New Product</h3>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="overflow-y-auto px-6 py-4 flex-grow">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="col">
                                    <form action="" method="">
                                        <div className="box_one p-4 shadow rounded">
                                            <div className="input_box block md:flex items-center gap-4">
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
                                        </div>

                                        <div className="box_two p-4 rounded mt-4">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Feature Image <span className="text-red-400">*</span>
                                                    </label>

                                                    <div className="flex items-center gap-4 my-4">
                                                        {/* Image Preview Box */}
                                                        <div
                                                            className="w-[150px] h-[150px] border border-gray-200 rounded flex items-center justify-center overflow-hidden">
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
                                                    <h4 className="mt-2 text-gray-500 text-[12px]">
                                                        <b>Note: </b>Image Size Should Be 800 x 800. or square size
                                                    </h4>
                                                </div>
                                                <div className="w-full"></div>
                                            </div>
                                        </div>

                                        <div className="box_three p-4 rounded mt-4">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Gallery Image <span className="text-red-400">*</span>
                                                    </label>

                                                    {/* Preview */}
                                                    <div className="flex flex-wrap gap-4 my-4">
                                                        {gallery_images.length > 0 ? (
                                                            gallery_images.map((img, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="relative w-[100px] h-[100px] border border-gray-200 rounded overflow-hidden"
                                                                >
                                                                    <img
                                                                        src={img}
                                                                        alt={`Gallery Image ${index + 1}`}
                                                                        className="w-full h-full object-cover"
                                                                    />

                                                                    {/* Remove Icon */}
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => removeGalleryImage(index)}
                                                                        className="absolute top-1 right-1 bg-black/60 text-red-500 rounded-full p-1 cursor-pointer hover:bg-black"
                                                                    >
                                                                        <RxCross2 size={15}/>
                                                                    </button>
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <div
                                                                className="w-[100px] h-[100px] border border-gray-200 rounded flex items-center justify-center">
                                                                <IoImageOutline
                                                                    size={60}
                                                                    className="text-gray-400"
                                                                />
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* File Input */}
                                                    <input
                                                        ref={galleryInputRef}
                                                        type="file"
                                                        name="gallery_images"
                                                        accept="image/*"
                                                        multiple
                                                        onChange={handleGalleryImagesChange}
                                                        className="w-full text-[12px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"
                                                    />

                                                    <h4 className="mt-2 text-gray-500 text-[12px]">
                                                        <b>Note:</b> Image size should be 800 × 800 or square size.
                                                    </h4>
                                                </div>
                                                <div className="w-full"></div>
                                            </div>
                                        </div>

                                        <div className="box_four p-4 shadow rounded mt-4">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Short Description<span className="text-red-400">*</span>
                                                    </label>
                                                    <textarea rows={3} placeholder="Enter Short Descriptio" className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box_five p-4 shadow rounded mt-4">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Description<span className="text-red-400">*</span>
                                                    </label>
                                                    <FroalaEditor
                                                        value={description}
                                                        onChange={setDescription}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box_six p-4 shadow rounded mt-4">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Product Tags
                                                    </label>

                                                    {/* Input */}
                                                    <input
                                                        type="text"
                                                        value={tagInput}
                                                        onChange={(e) => setTagInput(e.target.value)}
                                                        onKeyDown={handleKeyDown}
                                                        placeholder="Type tag and press Enter"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"
                                                    />

                                                    {/* Tags */}
                                                    {product_tags.length > 0 && (
                                                        <div className="flex flex-wrap gap-2 mt-3">
                                                            {product_tags.map((tag, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="relative bg-gray-100 border border-gray-200
                                                                    px-3 py-1 rounded text-[13px] flex items-center gap-2"
                                                                >
                                                                    <span>{tag}</span>

                                                                    {/* Remove */}
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => removeTag(index)}
                                                                        className="text-gray-500 hover:text-red-500 cursor-pointer"
                                                                    >
                                                                        <RxCross2 size={14}/>
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="input_box block md:flex items-center gap-4 mt-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Meta Keywords
                                                    </label>

                                                    {/* Input */}
                                                    <input
                                                        type="text"
                                                        value={keywordInput}
                                                        onChange={(e) => setKeywordInput(e.target.value)}
                                                        onKeyDown={handleKeyDownTwo}
                                                        placeholder="Type keyword and press Enter"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"
                                                    />

                                                    {/* Keywords */}
                                                    {meta_keywords.length > 0 && (
                                                        <div className="flex flex-wrap gap-2 mt-3">
                                                            {meta_keywords.map((keyword, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="bg-gray-100 border border-gray-200
                                                                    px-3 py-1 rounded text-[13px] flex items-center gap-2"
                                                                >
                                                                    <span>{keyword}</span>

                                                                    <button
                                                                        type="button"
                                                                        onClick={() => removeKeyword(index)}
                                                                        className="text-gray-500 hover:text-red-500 cursor-pointer"
                                                                    >
                                                                        <RxCross2 size={14}/>
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="input_box block md:flex items-center gap-4 mt-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Meta Description
                                                    </label>
                                                    <textarea rows={3} placeholder="Enter Meta Description" className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col">
                                    <form action="" method="">
                                        <div className="box_one p-4 shadow rounded">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Current Price (BDT)<span className="text-red-400">*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="Enter Current Price"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Previous Price (BDT)
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="Enter Previous Price"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box_two p-4 shadow rounded mt-4">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 font-medium">
                                                        Category<span className="text-red-400">*</span>
                                                    </label>
                                                    <select
                                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                    >
                                                        <option value="">Select Category</option>
                                                        <option>Category Name</option>
                                                        <option>Category Name</option>
                                                        <option>Category Name</option>
                                                    </select>
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 font-medium">
                                                        Sub Category
                                                    </label>
                                                    <select
                                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                    >
                                                        <option value="">Select Sub Category</option>
                                                        <option>Sub Category Name</option>
                                                        <option>Sub Category Name</option>
                                                        <option>Sub Category Name</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box_three p-4 shadow rounded mt-4">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 font-medium">
                                                        Child Category
                                                    </label>
                                                    <select
                                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                    >
                                                        <option value="">Select Child Category</option>
                                                        <option>Child Category Name</option>
                                                        <option>Child Category Name</option>
                                                        <option>Child Category Name</option>
                                                    </select>
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 font-medium">
                                                        Brand
                                                    </label>
                                                    <select
                                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                    >
                                                        <option value="">Select Brand</option>
                                                        <option>Brand Name</option>
                                                        <option>Brand Name</option>
                                                        <option>Brand Name</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box_four p-4 border border-gray-200 rounded mt-4">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Total in stock<span className="text-red-400">*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="Stock"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 font-medium">
                                                        Tax
                                                    </label>
                                                    <select
                                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                    >
                                                        <option value="">Select Tax</option>
                                                        <option>High Tax</option>
                                                        <option>Medium Tax</option>
                                                        <option>Low Tax</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="input_box block md:flex items-center gap-4 mt-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        SKU<span className="text-red-400">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter SKU"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Video
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Video Link"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer - Fixed */}
                        <div className="px-6 py-4 border-t border-gray-200 flex-shrink-0">
                            <div className="flex justify-end gap-3 text-[14px]">
                                <button onClick={() => setOpenCreateProductModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Cancel
                                </button>
                                <button onClick={() => setOpenCreateProductModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* EDIT Product MODAL */}
            {openEditProductModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-modal-opacity"
                         onClick={() => setOpenEditProductModal(false)}/>
                    <div
                        className="relative bg-white rounded shadow w-6xl mx-4 max-h-[90vh] flex flex-col z-10 text-[14px]">
                        {/* Modal Header - Fixed */}
                        <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenCreateProductModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold">Edit Product</h3>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="overflow-y-auto px-6 py-4 flex-grow">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="col">
                                    <form action="" method="">
                                        <div className="box_one p-4 shadow rounded">
                                            <div className="input_box block md:flex items-center gap-4">
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
                                        </div>

                                        <div className="box_two p-4 rounded mt-4">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Feature Image <span className="text-red-400">*</span>
                                                    </label>

                                                    <div className="flex items-center gap-4 my-4">
                                                        {/* Image Preview Box */}
                                                        <div
                                                            className="w-[150px] h-[150px] border border-gray-200 rounded flex items-center justify-center overflow-hidden">
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
                                                    <h4 className="mt-2 text-gray-500 text-[12px]">
                                                        <b>Note: </b>Image Size Should Be 800 x 800. or square size
                                                    </h4>
                                                </div>
                                                <div className="w-full"></div>
                                            </div>
                                        </div>

                                        <div className="box_three p-4 rounded mt-4">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Gallery Image <span className="text-red-400">*</span>
                                                    </label>

                                                    {/* Preview */}
                                                    <div className="flex flex-wrap gap-4 my-4">
                                                        {gallery_images.length > 0 ? (
                                                            gallery_images.map((img, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="relative w-[100px] h-[100px] border border-gray-200 rounded overflow-hidden"
                                                                >
                                                                    <img
                                                                        src={img}
                                                                        alt={`Gallery Image ${index + 1}`}
                                                                        className="w-full h-full object-cover"
                                                                    />

                                                                    {/* Remove Icon */}
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => removeGalleryImage(index)}
                                                                        className="absolute top-1 right-1 bg-black/60 text-red-500 rounded-full p-1 cursor-pointer hover:bg-black"
                                                                    >
                                                                        <RxCross2 size={15}/>
                                                                    </button>
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <div
                                                                className="w-[100px] h-[100px] border border-gray-200 rounded flex items-center justify-center">
                                                                <IoImageOutline
                                                                    size={60}
                                                                    className="text-gray-400"
                                                                />
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* File Input */}
                                                    <input
                                                        ref={galleryInputRef}
                                                        type="file"
                                                        name="gallery_images"
                                                        accept="image/*"
                                                        multiple
                                                        onChange={handleGalleryImagesChange}
                                                        className="w-full text-[12px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"
                                                    />

                                                    <h4 className="mt-2 text-gray-500 text-[12px]">
                                                        <b>Note:</b> Image size should be 800 × 800 or square size.
                                                    </h4>
                                                </div>
                                                <div className="w-full"></div>
                                            </div>
                                        </div>

                                        <div className="box_four p-4 shadow rounded mt-4">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Short Description<span className="text-red-400">*</span>
                                                    </label>
                                                    <textarea rows={3} placeholder="Enter Short Descriptio" className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box_five p-4 shadow rounded mt-4">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Description<span className="text-red-400">*</span>
                                                    </label>
                                                    <FroalaEditor
                                                        value={description}
                                                        onChange={setDescription}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box_six p-4 shadow rounded mt-4">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Product Tags
                                                    </label>

                                                    {/* Input */}
                                                    <input
                                                        type="text"
                                                        value={tagInput}
                                                        onChange={(e) => setTagInput(e.target.value)}
                                                        onKeyDown={handleKeyDown}
                                                        placeholder="Type tag and press Enter"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"
                                                    />

                                                    {/* Tags */}
                                                    {product_tags.length > 0 && (
                                                        <div className="flex flex-wrap gap-2 mt-3">
                                                            {product_tags.map((tag, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="relative bg-gray-100 border border-gray-200
                                                                    px-3 py-1 rounded text-[13px] flex items-center gap-2"
                                                                >
                                                                    <span>{tag}</span>

                                                                    {/* Remove */}
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => removeTag(index)}
                                                                        className="text-gray-500 hover:text-red-500 cursor-pointer"
                                                                    >
                                                                        <RxCross2 size={14}/>
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="input_box block md:flex items-center gap-4 mt-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Meta Keywords
                                                    </label>

                                                    {/* Input */}
                                                    <input
                                                        type="text"
                                                        value={keywordInput}
                                                        onChange={(e) => setKeywordInput(e.target.value)}
                                                        onKeyDown={handleKeyDownTwo}
                                                        placeholder="Type keyword and press Enter"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"
                                                    />

                                                    {/* Keywords */}
                                                    {meta_keywords.length > 0 && (
                                                        <div className="flex flex-wrap gap-2 mt-3">
                                                            {meta_keywords.map((keyword, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="bg-gray-100 border border-gray-200
                                                                    px-3 py-1 rounded text-[13px] flex items-center gap-2"
                                                                >
                                                                    <span>{keyword}</span>

                                                                    <button
                                                                        type="button"
                                                                        onClick={() => removeKeyword(index)}
                                                                        className="text-gray-500 hover:text-red-500 cursor-pointer"
                                                                    >
                                                                        <RxCross2 size={14}/>
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="input_box block md:flex items-center gap-4 mt-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Meta Description
                                                    </label>
                                                    <textarea rows={3} placeholder="Enter Meta Description" className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col">
                                    <form action="" method="">
                                        <div className="box_one p-4 shadow rounded">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Current Price (BDT)<span className="text-red-400">*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="Enter Current Price"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Previous Price (BDT)
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="Enter Previous Price"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box_two p-4 shadow rounded mt-4">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 font-medium">
                                                        Category<span className="text-red-400">*</span>
                                                    </label>
                                                    <select
                                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                    >
                                                        <option value="">Select Category</option>
                                                        <option>Category Name</option>
                                                        <option>Category Name</option>
                                                        <option>Category Name</option>
                                                    </select>
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 font-medium">
                                                        Sub Category
                                                    </label>
                                                    <select
                                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                    >
                                                        <option value="">Select Sub Category</option>
                                                        <option>Sub Category Name</option>
                                                        <option>Sub Category Name</option>
                                                        <option>Sub Category Name</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box_three p-4 shadow rounded mt-4">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 font-medium">
                                                        Child Category
                                                    </label>
                                                    <select
                                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                    >
                                                        <option value="">Select Child Category</option>
                                                        <option>Child Category Name</option>
                                                        <option>Child Category Name</option>
                                                        <option>Child Category Name</option>
                                                    </select>
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 font-medium">
                                                        Brand
                                                    </label>
                                                    <select
                                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                    >
                                                        <option value="">Select Brand</option>
                                                        <option>Brand Name</option>
                                                        <option>Brand Name</option>
                                                        <option>Brand Name</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box_four p-4 border border-gray-200 rounded mt-4">
                                            <div className="input_box block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Total in stock<span className="text-red-400">*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="Stock"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 font-medium">
                                                        Tax
                                                    </label>
                                                    <select
                                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                    >
                                                        <option value="">Select Tax</option>
                                                        <option>High Tax</option>
                                                        <option>Medium Tax</option>
                                                        <option>Low Tax</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="input_box block md:flex items-center gap-4 mt-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        SKU<span className="text-red-400">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter SKU"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Video
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Video Link"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer - Fixed */}
                        <div className="px-6 py-4 border-t border-gray-200 flex-shrink-0">
                            <div className="flex justify-end gap-3 text-[14px]">
                                <button onClick={() => setOpenEditProductModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Cancel
                                </button>
                                <button onClick={() => setOpenEditProductModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                    Update Product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* -------- DELETE MODAL -------- */}
            {deleteModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-custom-opacity"
                    onClick={() => setDeleteModalOpen(false)}
                >
                    <div
                        className="bg-white rounded shadow w-lg mx-4 px-6 py-4 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
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
                                You are going to delete this Product. All contents related to this product will be lost.
                                Do you want to delete it?
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