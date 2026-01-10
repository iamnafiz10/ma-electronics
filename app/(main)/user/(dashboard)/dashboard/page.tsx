"use client";
import React, {useEffect, useRef, useState} from "react";
import {
    LuHeart,
    LuLayoutDashboard,
    LuLogOut,
    LuMapPin,
    LuShoppingBag,
    LuUser
} from "react-icons/lu";
import {CiImageOn} from "react-icons/ci";
import Link from "next/link";
import {FaCheck, FaRegEdit, FaRegTrashAlt} from "react-icons/fa";
import Image from "next/image";
import product1 from '../../../../../public/assets/images/products/1.png';
import {RxCross1} from "react-icons/rx";
import toast from "react-hot-toast";

type TabKey =
    | "dashboard"
    | "profile"
    | "orders"
    | "address"
    | "wishlist"
    | "logout";

interface MenuItem {
    name: string;
    icon: React.ReactNode;
    key: TabKey;
    count?: number;
}

const districts = [
    "Bagerhat", "Bandarban", "Barguna", "Barishal", "Bhola", "Bogura",
    "Brahmanbaria", "Chandpur", "Chattogram", "Chuadanga", "Cox's Bazar",
    "Cumilla", "Dhaka", "Dinajpur", "Faridpur", "Feni", "Gaibandha",
    "Gazipur", "Gopalganj", "Habiganj", "Jamalpur", "Jashore", "Jhalokathi",
    "Jhenaidah", "Joypurhat", "Khagrachari", "Khulna", "Kishoreganj",
    "Kurigram", "Kushtia", "Lakshmipur", "Lalmonirhat", "Madaripur",
    "Magura", "Manikganj", "Meherpur", "Moulvibazar", "Munshiganj",
    "Mymensingh", "Naogaon", "Narail", "Narayanganj", "Narsingdi",
    "Natore", "Netrokona", "Nilphamari", "Noakhali", "Pabna",
    "Panchagarh", "Patuakhali", "Pirojpur", "Rajbari", "Rajshahi",
    "Rangamati", "Rangpur", "Satkhira", "Shariatpur", "Sherpur",
    "Sirajganj", "Sunamganj", "Sylhet", "Tangail", "Thakurgaon",
];

function Page() {
    const [activeTab, setActiveTab] = useState<TabKey>("dashboard");

    const menuItems: MenuItem[] = [
        {name: "Dashboard", icon: <LuLayoutDashboard/>, key: "dashboard"},
        {name: "Profile", icon: <LuUser/>, key: "profile"},
        {name: "Orders", icon: <LuShoppingBag/>, key: "orders", count: 1},
        {name: "Delivery Address", icon: <LuMapPin/>, key: "address"},
        {name: "Wishlist", icon: <LuHeart/>, key: "wishlist", count: 0},
        {name: "Log out", icon: <LuLogOut/>, key: "logout"}
    ];

    // Profile Image ------------------
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };
    const handleRemove = () => {
        setPreview(null);
        // reset file input value
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    // Add Delivery address popup ----------
    const [openAddDeliveryModal, setOpenAddDeliveryModal] = useState(false);
    // Disable scroll when popup open
    useEffect(() => {
        document.body.style.overflow = openAddDeliveryModal ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openAddDeliveryModal]);

    // Edit Delivery address popup ----------
    const [openEditDeliveryModal, setOpenEditDeliveryModal] = useState(false);
    // Disable scroll when popup open
    useEffect(() => {
        document.body.style.overflow = openEditDeliveryModal ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openEditDeliveryModal]);

    // -------------- Delete Address with modal --------------- //
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    // Disable scroll when modal is open
    useEffect(() => {
        if (deleteModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [deleteModalOpen]);

    const handleDelete = () => {
        setDeleteModalOpen(false);
        // Show success toast
        toast.success('Address deleted successfully!');
    };

    const closeModal = () => {
        setDeleteModalOpen(false);
    };
    return (
        <section id="user-dashboard-section">
            <div className="container mt-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Sidebar */}
                    <div className="md:col-span-4">
                        <div className="bg-white border border-gray-200 rounded overflow-hidden">
                            {/* Profile Header */}
                            <div className="flex flex-col items-center py-6">
                                {/* Image Preview */}
                                <div
                                    className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 text-gray-300 overflow-hidden">
                                    {preview ? (
                                        <img
                                            src={preview}
                                            alt="Preview"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <CiImageOn size={60}/>
                                    )}
                                </div>
                                <h2 className="text-[18px] font-medium text-gray-800">Nafiz</h2>
                                <p className="text-[14px] text-gray-400 mt-1">
                                    Joined Jan Tue 2026
                                </p>
                            </div>

                            {/* Menu */}
                            <nav>
                                {menuItems.map((item) => {
                                    const isActive = activeTab === item.key;

                                    // Logout → Link
                                    if (item.key === "logout") {
                                        return (
                                            <Link
                                                key={item.key}
                                                href="/user/login"
                                                className="w-full flex items-center justify-between px-4 py-4 border-t border-gray-200
                                                transition hover:bg-gray-50 text-left text-gray-500 border-l-4 border-l-transparent"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[17px]">{item.icon}</span>
                                                    <span className="text-[14px] font-normal">
                                                        {item.name}
                                                    </span>
                                                </div>
                                            </Link>
                                        );
                                    }

                                    // Normal tabs → Button
                                    return (
                                        <button
                                            key={item.key}
                                            onClick={() => setActiveTab(item.key)}
                                            className={`w-full flex items-center justify-between cursor-pointer px-4 py-4 border-t border-gray-200
                                                transition hover:bg-gray-50 text-left
                                                ${
                                                isActive
                                                    ? "border-l-4 border-l-primary text-primary"
                                                    : "text-gray-500 border-l-4 border-l-transparent"
                                            }
                                              `}
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className="text-[17px]">{item.icon}</span>
                                                <span
                                                    className={`text-[14px] ${
                                                        isActive ? "font-medium" : "font-normal"
                                                    }`}
                                                >
                                              {item.name}
                                            </span>
                                            </div>

                                            {item.count !== undefined && (
                                                <span className="min-w-[24px] h-6 flex items-center justify-center text-xs
                                              text-gray-500 bg-gray-50 border border-gray-200 rounded px-1">
                                              {item.count}
                                            </span>
                                            )}
                                        </button>
                                    );
                                })}

                            </nav>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="md:col-span-8">
                        {/* Dashboard */}
                        {activeTab === "dashboard" && (
                            <div className="dashboard_content">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    {[
                                        {label: "All Order", value: 1},
                                        {label: "Completed Order", value: 1},
                                        {label: "Processing Order", value: 5},
                                        {label: "Canceled Order", value: 0},
                                        {label: "Pending Order", value: 3}
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-white border border-gray-200 rounded p-6 flex flex-col items-center justify-center"
                                        >
                                            <div
                                                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4">
                                                <LuShoppingBag size={40} className="text-white"/>
                                            </div>
                                            <p className="text-gray-500 text-[16px] mb-2">
                                                {item.label}
                                            </p>
                                            <h3 className="text-[25px] font-bold text-[#1a1a1a]">
                                                {item.value}
                                            </h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Profile */}
                        {activeTab === "profile" && (
                            <div className="profile_content space-y-4 bg-white border border-gray-200 rounded p-6">
                                <div className="input_box">
                                    <div>
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Profile Image
                                        </label>
                                        <div className="flex items-center gap-4">
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                                className="text-[12px] cursor-pointer border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                            />
                                            {/* Remove Button */}
                                            {preview && (
                                                <button
                                                    type="button"
                                                    onClick={handleRemove}
                                                    className="py-2 px-4 bg-primary text-white hover:bg-dark-primary text-[12px] cursor-pointer rounded"
                                                >
                                                    Remove
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="input_box">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                        focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="input_box">
                                    <div className="block md:flex items-center gap-4 justify-between">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Your Email Address"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                        focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                placeholder="Phone"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                        focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="input_box">
                                    <div className="block md:flex items-center justify-between">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                New Password
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter New Password"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                        focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full"></div>
                                    </div>
                                </div>

                                {/* Subscribe / Button */}
                                <div className="flex items-center justify-between text-[14px]">
                                    <label className="flex items-center gap-2 cursor-pointer select-none">
                                        <input type="checkbox" className="peer hidden"/>
                                        <div
                                            className="w-4 h-4 border border-gray-300 rounded
                                       flex items-center justify-center
                                       transition
                                       peer-checked:bg-primary
                                       peer-checked:border-primary"
                                        >
                                            <FaCheck
                                                className="text-white text-[10px] "
                                            />
                                        </div>
                                        <span className="text-gray-800">
                                Subscribe
                            </span>
                                    </label>

                                    <button
                                        type="submit"
                                        className="bg-primary border border-primary cursor-pointer text-white py-2 px-6 rounded-md
                                    hover:bg-transparent hover:text-primary transition"
                                    >
                                        Update Profile
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Orders */}
                        {activeTab === "orders" && (
                            <div className="order_content overflow-x-auto bg-white border border-gray-200 rounded p-6">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                    <tr className="border border-gray-200">
                                        <th className="p-2 border border-gray-200 font-semibold text-gray-800 text-[14px]">Order
                                            #
                                        </th>
                                        <th className="p-2 border border-gray-200 font-semibold text-gray-800 text-[14px]">Total</th>
                                        <th className="p-2 border border-gray-200 font-semibold text-gray-800 text-[14px]">Order
                                            Status
                                        </th>
                                        <th className="p-2 border border-gray-200 font-semibold text-gray-800 text-[14px]">Payment
                                            Status
                                        </th>
                                        <th className="p-2 border border-gray-200 font-semibold text-gray-800 text-[14px]">Date
                                            Purchased
                                        </th>
                                        <th className="p-2 border border-gray-200 font-semibold text-gray-800 text-[14px]">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="text-[#555] text-[14px]">
                                        <td className="py-2 px-4 border border-gray-200">ACW202618</td>
                                        <td className="py-2 px-4 border border-gray-200">৳52,110.00</td>
                                        <td className="py-2 px-4 border border-gray-200 text-blue-400">Pending</td>
                                        <td className="py-2 px-4 border border-gray-200 text-red-400">Unpaid</td>
                                        <td className="py-2 px-4 border border-gray-200">Tue/Jan/2026</td>
                                        <td className="py-2 px-4 border border-gray-200">
                                            <Link href='/user/order/invoice'
                                                  className="bg-primary cursor-pointer text-white px-4 py-2 rounded font-medium text-[14px] hover:bg-dark-primary transition-all">
                                                Invoice
                                            </Link>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Address */}
                        {activeTab === "address" && (
                            <div
                                className="address_content overflow-x-auto bg-white border border-gray-200 rounded p-6">
                                <div className="block md:flex items-center justify-between gap-4">
                                    <h4 className="font-semibold text-gray-800 text-[18px]">
                                        Delivery Address
                                    </h4>
                                    <button onClick={() => setOpenAddDeliveryModal(true)} type='button'
                                            className="mt-4 md:mt-0 capitalize cursor-pointer text-[14px] bg-primary py-2 px-4 text-white hover:bg-dark-primary rounded">
                                        Add new delivery address
                                    </button>
                                </div>
                                <table className="w-full text-left border-collapse mt-6">
                                    <thead>
                                    <tr className="border border-gray-200">
                                        <th className="p-2 border border-gray-200 font-semibold text-gray-800 text-[14px]">
                                            #SL
                                        </th>
                                        <th className="p-2 border border-gray-200 font-semibold text-gray-800 text-[14px]">Name</th>
                                        <th className="p-2 border border-gray-200 font-semibold text-gray-800 text-[14px]">
                                            Address
                                        </th>
                                        <th className="p-2 border border-gray-200 font-semibold text-gray-800 text-[14px]">
                                            District
                                        </th>
                                        <th className="p-2 border border-gray-200 font-semibold text-gray-800 text-[14px]">
                                            Mobile
                                        </th>
                                        <th className="p-2 border border-gray-200 font-semibold text-gray-800 text-[14px]">
                                            Email
                                        </th>
                                        <th className="p-2 border border-gray-200 font-semibold text-gray-800 text-[14px]">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="text-[#555] text-[14px]">
                                        <td className="py-2 px-4 border border-gray-200">
                                            1
                                        </td>
                                        <td className="py-2 px-4 border border-gray-200">
                                            Nafiz
                                        </td>
                                        <td className="py-2 px-4 border border-gray-200">
                                            Rajshahi, Tanore
                                        </td>
                                        <td className="py-2 px-4 border border-gray-200">
                                            Rajshahi
                                        </td>
                                        <td className="py-2 px-4 border border-gray-200">
                                            8584984984
                                        </td>
                                        <td className="py-2 px-4 border border-gray-200">
                                            roshannafiz@gmail.com
                                        </td>
                                        <td className="py-2 px-4 border border-gray-200">
                                            <div className="flex items-center gap-2">
                                                <div onClick={() => setOpenEditDeliveryModal(true)}
                                                     className="bg-primary p-1 rounded text-white cursor-pointer">
                                                    <FaRegEdit size={16}/>
                                                </div>
                                                <div onClick={() => setDeleteModalOpen(true)}
                                                     className="bg-primary p-1 rounded text-white cursor-pointer">
                                                    <FaRegTrashAlt size={16}/>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Wishlist */}
                        {activeTab === "wishlist" && (
                            <div
                                className="wishlist_content overflow-x-auto bg-white border border-gray-200 rounded p-6">
                                <div className="flex items-center justify-between gap-4">
                                    <h4 className="font-semibold text-gray-800 text-[18px]">
                                        Wishlist Product
                                    </h4>
                                    <button type='button'
                                            className="capitalize cursor-pointer text-[14px] bg-primary py-2 px-4 text-white hover:bg-dark-primary rounded">
                                        Clear wishlist
                                    </button>
                                </div>
                                <table className="w-full text-left border-collapse mt-6">
                                    <thead>
                                    <tr className="border border-gray-200">
                                        <th className="p-2 border border-gray-200 font-semibold text-gray-800 text-[14px]">
                                            Product
                                        </th>
                                        <th className="p-2 border border-gray-200 font-semibold text-gray-800 text-[14px]">
                                            Action
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="text-[#555] text-[14px]">
                                        <td className="py-2 px-4 border border-gray-200">
                                            <Link href='#' className="block md:flex items-center gap-2">
                                                <Image src={product1} width={100} alt="aproduct-img"/>
                                                <div>
                                                    <h4 className="text-[14px] break-all text-gray-800 font-semibold">
                                                        WSI-AVIAN(SUPERSAVER)-12F(PLASMA)
                                                    </h4>
                                                    <h4 className="text-[14px] text-gray-600">
                                                        ৳52,110.00
                                                    </h4>
                                                    <p className="text-[14px] mt-1">
                                                        Availability: <span className="text-green-500">In Stock</span>
                                                    </p>
                                                    <button type='button'
                                                            className="capitalize mt-2 cursor-pointer text-[12px] font-semibold bg-primary py-2 px-3 text-white hover:bg-dark-primary rounded">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className="py-2 px-4 border border-gray-200">
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="bg-red-400 p-1 rounded text-white cursor-pointer">
                                                    <RxCross1 size={18}/>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Add Delivery Address POPUP */}
            {openAddDeliveryModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">

                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-modal-opacity"
                        onClick={() => setOpenAddDeliveryModal(false)}
                    />

                    {/* Address Modal */}
                    <div
                        className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                            onClick={() => setOpenAddDeliveryModal(false)}
                        >
                            <RxCross1 size={18}/>
                        </button>

                        <h3 className="text-[16px] text-gray-800 font-semibold mb-4">
                            Add Delivery Address
                        </h3>

                        <div className="py-4 border-b border-t border-gray-200">
                            <form action="" method="">
                                <div className="input_box text-[14px] block sm:flex items-center gap-2">
                                    <div className="w-full">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Name<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Name"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full mt-4 sm:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Phone<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="Enter Number"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="input_box text-[14px] block sm:flex items-center gap-2 mt-4">
                                    <div className="w-full">
                                        <label className="block mb-1 font-medium">
                                            District <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            required
                                            className="w-full border border-gray-300 rounded-md px-3 py-2
                                                    focus:outline-none focus:border-primary"
                                        >
                                            <option value="">Select District</option>
                                            {districts.map((district) => (
                                                <option key={district} value={district}>
                                                    {district}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="w-full mt-4 sm:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="input_box text-[14px] block sm:flex items-center gap-2 mt-4">
                                    <div className="w-full mt-4 sm:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Address<span className="text-red-400">*</span>
                                        </label>
                                        <textarea rows={3}
                                                  placeholder="Enter Address"
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
                                onClick={() => setOpenAddDeliveryModal(false)}
                                className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setOpenAddDeliveryModal(false)}
                                className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition"
                            >
                                Add Address
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Delivery Address POPUP */}
            {openEditDeliveryModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">

                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-modal-opacity"
                        onClick={() => setOpenEditDeliveryModal(false)}
                    />

                    {/* Address Modal */}
                    <div
                        className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                            onClick={() => setOpenEditDeliveryModal(false)}
                        >
                            <RxCross1 size={18}/>
                        </button>

                        <h3 className="text-[16px] text-gray-800 font-semibold mb-4">
                            Edit Delivery Address
                        </h3>

                        <div className="py-4 border-b border-t border-gray-200">
                            <form action="" method="">
                                <div className="input_box text-[14px] block sm:flex items-center gap-2">
                                    <div className="w-full">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Name<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Name"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full mt-4 sm:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Phone<span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="Enter Number"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="input_box text-[14px] block sm:flex items-center gap-2 mt-4">
                                    <div className="w-full">
                                        <label className="block mb-1 font-medium">
                                            District <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            required
                                            className="w-full border border-gray-300 rounded-md px-3 py-2
                                                    focus:outline-none focus:border-primary"
                                        >
                                            <option value="">Select District</option>
                                            {districts.map((district) => (
                                                <option key={district} value={district}>
                                                    {district}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="w-full mt-4 sm:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                            focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="input_box text-[14px] block sm:flex items-center gap-2 mt-4">
                                    <div className="w-full mt-4 sm:mt-0">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            Address<span className="text-red-400">*</span>
                                        </label>
                                        <textarea rows={3}
                                                  placeholder="Enter Address"
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
                                onClick={() => setOpenEditDeliveryModal(false)}
                                className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setOpenEditDeliveryModal(false)}
                                className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition"
                            >
                                Update Address
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Delivery Address Popup */}
            {deleteModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-custom-opacity"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded shadow w-lg mx-4 px-6 py-4 relative"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                            onClick={closeModal}
                        >
                            <RxCross1 size={18}/>
                        </button>
                        <h3 className="text-[16px] text-gray-800 font-semibold mb-4">
                            Confirm Delete?
                        </h3>
                        <div className="body_text py-4 border-b border-t border-gray-200">
                            <p className="text-gray-500 text-[14px]">
                                You are going to delete this Address.<br/>
                                You want to delete it?
                            </p>
                        </div>
                        <div className="flex justify-end gap-3 mt-4 text-[14px]">
                            <button
                                onClick={closeModal}
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

export default Page;