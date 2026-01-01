"use client";

import Image from "next/image";
import React, {useState} from "react";
import Link from "next/link";
import {IoIosArrowForward} from "react-icons/io";
import {FaCheck} from "react-icons/fa";

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

const cartItems = [
    {
        id: 1,
        name: "Jamuna Air Conditioner JEC-24IN Supreme",
        price: 12300,
        quantity: 2,
        image: "/assets/images/products/1.png",
    },
    {
        id: 2,
        name: "Jamuna Air Conditioner JEC-24IN Supreme",
        price: 8300,
        quantity: 3,
        image: "/assets/images/products/2.png",
    },
];

export default function Page() {
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shipping = 500;
    const total = subtotal + shipping;

    // Address checkbox
    const [useExistingAddress, setUseExistingAddress] = useState(false);

    // Create Account checkbox
    const [createAccount, setCreateAccount] = useState(false);
    return (
        <section id="checkout-section">
            <div className="container">
                <div
                    className="product_cat_header px-4 py-2 gap-2 text-[12px] bg-gray-100 rounded flex items-center">
                    <Link href='/' className="text-primary">Home</Link>
                    <div className="icon text-primary">
                        <IoIosArrowForward fontSize={15}/>
                    </div>
                    <h4 className="text-gray-800">
                        Shopping Cart
                    </h4>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-6">
                    {/* LEFT: DELIVERY FORM */}
                    <div className="col lg:col-span-7">
                        <div className="border border-gray-300 rounded-lg p-6 bg-white">
                            <div className="check_box_address border border-gray-300 rounded-md bg-white">
                                <div className="px-4 py-3 border-b border-gray-300">
                                    <h3 className="font-medium text-[14px]">
                                        My existing delivery address
                                    </h3>
                                </div>

                                <label className="flex items-center gap-2 px-4 py-3 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={useExistingAddress}
                                        onChange={(e) => setUseExistingAddress(e.target.checked)}
                                        className="peer hidden"
                                    />
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
                                    <span className="text-sm text-gray-800">
                                    Kamargaon, Tanore, Rajshahi, Bangladesh
                                  </span>
                                </label>
                            </div>

                            {!useExistingAddress && (
                                <div className="delivery_address_box">
                                    <h2 className="text-[18px] font-semibold my-4">
                                        Delivery Address
                                    </h2>

                                    <form action="" method="POST" className="space-y-4">
                                        {/* Name - Mobile */}
                                        <div className="flex items-center gap-4 text-[12px]">
                                            <div className="w-full">
                                                <label className="block mb-1 font-medium">
                                                    Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full border border-gray-300 rounded-md px-3 py-2
                                                    focus:outline-none focus:border-primary"
                                                />
                                            </div>

                                            <div className="w-full">
                                                <label className="block mb-1 font-medium">
                                                    Mobile <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    required
                                                    className="w-full border border-gray-300 rounded-md px-3 py-2
                                                    focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>

                                        {/* District / Email */}
                                        <div className="flex items-center gap-4 text-[12px]">
                                            <div className="w-full">
                                                <label className="block mb-1 font-medium">
                                                    Email (Optional)
                                                </label>
                                                <input
                                                    type="email"
                                                    className="w-full border border-gray-300 rounded-md px-3 py-2
                                        focus:outline-none focus:border-primary"
                                                />
                                            </div>

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
                                        </div>

                                        {/* Full Address */}
                                        <div className="text-[12px]">
                                            <label className="block mb-1 font-medium">
                                                Full Address <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                required
                                                rows={3}
                                                placeholder="Village / Police-Station / District"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2
                                        focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </form>
                                </div>
                            )}

                            {/* CREATE ACCOUNT BOX */}
                            <div className="mt-2 bg-white">
                                {/* Checkbox */}
                                <label className="flex items-center gap-2 py-3 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={createAccount}
                                        onChange={(e) => setCreateAccount(e.target.checked)}
                                        className="peer hidden"
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
                                    <span className="text-sm text-gray-800">
                                        Create Account
                                    </span>
                                </label>

                                {/* ADD DETAILS FORM */}
                                {createAccount && (
                                    <div className="px-4 py-4 border-t border-gray-300">
                                        <h2 className="text-[16px] font-semibold mb-4">
                                            Add Details
                                        </h2>

                                        <div className="space-y-4 text-[12px]">
                                            <div className="w-full">
                                                <label className="block mb-1 font-medium">
                                                    Your Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full border border-gray-300 rounded-md px-3 py-2
                                                    focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="block space-y-4 md:space-y-0 md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 font-medium">
                                                        Your Phone <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        required
                                                        className="w-full border border-gray-300 rounded-md px-3 py-2
                                                    focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full">
                                                    <label className="block mb-1 font-medium">
                                                        Your Email <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        required
                                                        className="w-full border border-gray-300 rounded-md px-3 py-2
                                                        focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    {/* RIGHT: ORDER SUMMARY */}
                    <div className="col lg:col-span-5 border border-gray-300 rounded-lg p-6 bg-white">
                        <h2 className="text-[18px] font-semibold mb-4">
                            Order Summary
                        </h2>

                        {/* Cart Items */}
                        <div className="space-y-4 mb-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-4 border-b border-gray-300 pb-4"
                                >
                                    <div className="relative w-14 h-14 border border-gray-300 rounded">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <p className="font-medium text-[14px]">{item.name}</p>
                                        <p className="text-[12px] text-gray-600">
                                            Qty: {item.quantity}
                                        </p>
                                    </div>

                                    <p className="font-medium text-[16px] text-primary">
                                        {(item.price * item.quantity).toFixed()} BDT
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Price Details */}
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Cart Subtotal:</span>
                                <span className="font-semibold">{subtotal.toFixed()} BDT</span>
                            </div>

                            <div className="flex justify-between mb-4">
                                <span>Shipping:</span>
                                <span className="font-semibold">
                                    {shipping.toFixed()} BDT
                                </span>
                            </div>

                            <div className="flex justify-between font-bold text-[16px] border-t border-gray-300 pt-4">
                                <span>Total:</span>
                                <span className="text-primary">
                                {total.toFixed()} BDT
                              </span>
                            </div>
                        </div>

                        {/* Checkout Button */}
                        <button
                            className="w-full mt-4 text-[14px] bg-primary hover:bg-dark-primary cursor-pointer text-white py-2 rounded-md font-medium">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
