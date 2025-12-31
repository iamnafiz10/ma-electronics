"use client";

import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {
    Plus,
    Minus,
    Trash2,
    XCircle,
    ArrowLeft,
} from "lucide-react";
import {IoIosArrowForward} from "react-icons/io";

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
};

const DELIVERY_CHARGE = 120;

export default function CartPage() {
    const [cart, setCart] = useState<CartItem[]>([
        {
            id: 1,
            name: "Jamuna Air Conditioner JEC-24IN Supreme Champagne",
            price: 2500,
            quantity: 5,
            image: "/assets/images/products/1.png",
        },
        {
            id: 2,
            name: "Jamuna Air Conditioner JEC-24IN Supreme Champagne",
            price: 3200,
            quantity: 5,
            image: "/assets/images/products/2.png",
        },
    ]);

    const updateQuantity = (id: number, type: "inc" | "dec") => {
        setCart(prev =>
            prev.map(item =>
                item.id === id
                    ? {
                        ...item,
                        quantity:
                            type === "inc"
                                ? item.quantity + 1
                                : Math.max(1, item.quantity - 1),
                    }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const clearCart = () => setCart([]);

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const total = subtotal + (cart.length ? DELIVERY_CHARGE : 0);

    /* ================= EMPTY CART (FULL SCREEN CENTER) ================= */
    if (cart.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
                <p className="text-[20px] text-gray-800 mb-4">
                    Your cart is empty
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center text-[14px] gap-2 rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100 transition"
                >
                    <ArrowLeft size={16}/>
                    Back To Shopping
                </Link>
            </div>
        );
    }

    /* ================= NORMAL CART ================= */
    return (
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
            {/* BUTTON */}
            <div className="flex items-center justify-end gap-2 my-4">
                <Link
                    href="/"
                    className="flex items-center gap-2 rounded border text-white border-primary bg-primary px-4 py-2 text-[14px] hover:text-primary hover:bg-transparent transition"
                >
                    <ArrowLeft size={16}/>
                    Back To Shopping
                </Link>

                <button
                    onClick={clearCart}
                    className="flex items-center gap-2 cursor-pointer text-white rounded border border-red-300 bg-red-500 px-4 py-2 text-[14px] hover:bg-red-600 transition"
                >
                    <XCircle size={18}/>
                    Clear Cart
                </button>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* LEFT TABLE */}
                <div className="col lg:col-span-8 overflow-x-auto">
                    <table className="w-full border border-gray-300 border-collapse bg-white">
                        {/* HEAD */}
                        <thead>
                        <tr className="bg-gray-50 text-[14px] font-medium">
                            <th className="border border-gray-300 px-4 py-3 text-left">
                                Product
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center">
                                Price (TK.)
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center">
                                Qty
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center">
                                Total (TK.)
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center">
                                Action
                            </th>
                        </tr>
                        </thead>

                        {/* BODY */}
                        <tbody>
                        {cart.map(item => (
                            <tr key={item.id}>
                                {/* PRODUCT */}
                                <td className="border border-gray-300 p-2">
                                    <div className="block md:flex items-center gap-2 cursor-pointer">
                                        <div className="relative h-20 md:h-14 w-20">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-contain w-[250px]"
                                            />
                                        </div>
                                        <p className="font-medium leading-snug mt-4 md:mt-0 text-[14px]">
                                            {item.name}
                                        </p>
                                    </div>
                                </td>

                                {/* PRICE */}
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    {item.price.toFixed()}
                                </td>

                                {/* QTY */}
                                <td className="border border-gray-300 px-4 py-2">
                                    <div className="flex justify-center">
                                        <div className="flex border border-gray-300">
                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.id, "dec")
                                                }
                                                className="px-2 py-1 cursor-pointer hover:bg-gray-100"
                                            >
                                                <Minus size={15}/>
                                            </button>

                                            <span
                                                className="w-10 text-center border-l border-r border-gray-300 py-1 font-medium">
                                              {item.quantity}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.id, "inc")
                                                }
                                                className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                                            >
                                                <Plus size={15}/>
                                            </button>
                                        </div>
                                    </div>
                                </td>

                                {/* TOTAL */}
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    {(item.price * item.quantity).toFixed()}
                                </td>

                                {/* ACTION */}
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 cursor-pointer hover:text-red-600"
                                    >
                                        <Trash2 size={18}/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* RIGHT SUMMARY */}
                <div className="col lg:col-span-4 h-fit rounded border border-gray-300 bg-white p-5">
                    <h2 className="pb-2 text-lg font-semibold border-b border-gray-300">
                        Order Summary
                    </h2>

                    <div className="space-y-2 text-[14px] mt-3">
                        <div className="flex justify-between">
                            <span>Subtotal:</span>
                            <span className="font-semibold">{subtotal.toFixed()} BDT</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Delivery Charge:</span>
                            <span className="font-semibold">{DELIVERY_CHARGE.toFixed()} BDT</span>
                        </div>

                        <div className="flex justify-between border-t border-gray-300 pt-3 font-semibold">
                            <span>Total</span>
                            <span className="text-primary">
                            {total.toFixed()} BDT
                          </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                        <input
                            type="text"
                            placeholder="Apply coupon code"
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                        <button type='button'
                                className="py-2 px-4 bg-transparent border border-primary hover:bg-primary hover:text-white cursor-pointer text-primary transition rounded text-[12px]">
                            Apply
                        </button>
                    </div>

                    <button
                        className="mt-3 w-full bg-primary py-2 rounded text-[14px] font-semibold cursor-pointer text-white border border-primary hover:text-primary hover:bg-transparent transition">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
