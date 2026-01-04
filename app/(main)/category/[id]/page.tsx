"use client";
import React, {useState} from 'react';
import Link from "next/link";
import {IoIosArrowForward, IoMdClose, IoMdOptions} from "react-icons/io";
import {FiChevronDown, FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {FaCheck} from "react-icons/fa";
import {Range, getTrackBackground} from "react-range";
import Image from "next/image";
import product7 from "@/public/assets/images/products/7.png";
import cartImage from "@/public/assets/images/icon-cart.png";
import product8 from "@/public/assets/images/products/8.png";
import product9 from "@/public/assets/images/products/9.png";
import product10 from "@/public/assets/images/products/10.png";
import product11 from "@/public/assets/images/products/11.png";
import product3 from "@/public/assets/images/products/3.png";
import product13 from "@/public/assets/images/products/13.png";
import product14 from "@/public/assets/images/products/14.png";
import product15 from "@/public/assets/images/products/15.png";
import product12 from "@/public/assets/images/products/12.png";

const MIN = 0;
const MAX = 3349310;
const STEP = 100;

function Page() {
    // Top Filter
    const [open, setOpen] = useState(false);

    // Mobile Filter
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // Filter by price
    const [values, setValues] = useState([0, MAX]);
    return (
        <>
            <section id="category-section">
                <div className="container">
                    <div
                        className="product_cat_header px-4 py-2 gap-2 text-[12px] bg-gray-100 rounded flex items-center">
                        <Link href='/' className="text-primary">Home</Link>
                        <div className="icon text-primary">
                            <IoIosArrowForward fontSize={15}/>
                        </div>
                        <h4 className="text-gray-800">
                            Air Conditioner
                        </h4>
                    </div>

                    <div className="top_filter_box py-2 px-4 mt-4 rounded bg-gray-100 flex items-center justify-end">
                        <div className="flex rounded overflow-hidden">
                            {/* Left label */}
                            <div
                                className="bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 flex items-center whitespace-nowrap">
                                Sort By:
                            </div>

                            {/* Select wrapper */}
                            <div className="relative w-[170px]">
                                <select
                                    onFocus={() => setOpen(true)}
                                    onBlur={() => setOpen(false)}
                                    className="w-full appearance-none px-4 py-2 text-sm bg-white
                                        focus:outline-none focus:border-primary"
                                >
                                    <option value="default">Default</option>
                                    <option value="price-low-high">Price: Low to High</option>
                                    <option value="price-high-low">Price: High to Low</option>
                                    <option value="latest">Latest</option>
                                </select>

                                {/* Custom Arrow */}
                                <FiChevronDown
                                    className={`absolute right-3 top-1/2 -translate-y-1/2
                                        text-gray-500 pointer-events-none
                                        transition-transform duration-200
                                        ${open ? "rotate-180" : "rotate-0"}`}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
                            {/* Sidebar */}
                            <div className="col md:col-span-4">
                                <div className="hidden md:block left_filter_wrap">
                                    {/* Category Box */}
                                    <div className="category_box rounded border border-gray-200 p-4">
                                        <h4 className="text-[16px] font-bold border-b border-gray-200 pb-3 text-gray-800">
                                            Shop Categories
                                        </h4>
                                        <div className="categories mt-2 h-[200px] overflow-y-auto scrollbar-primary">
                                            <ul className="space-y-2">
                                                {["Air Conditioner", "Refrigerator", "Freezer", "Washing Machine", "LED Television", "Microwave Oven", "Home Appliances", "Kitchen Appliance", "Fan", "Computer"].map((item) => (
                                                    <li key={item} className="flex items-center gap-1 text-[14px]">
                                                        <div className="icon text-gray-400">
                                                            <IoIosArrowForward/>
                                                        </div>
                                                        <h5 className="cursor-pointer hover:text-primary">{item}</h5>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Price Box */}
                                    <div className="price_box mt-6 rounded border border-gray-200 p-4">
                                        <h4 className="text-[16px] font-bold border-b border-gray-200 pb-3 text-gray-800">
                                            Filter by Price
                                        </h4>
                                        <div className="w-full max-w-sm mt-4">
                                            <Range
                                                values={values}
                                                step={STEP}
                                                min={MIN}
                                                max={MAX}
                                                onChange={(values) => setValues(values)}
                                                renderTrack={({props, children}) => {
                                                    // @ts-ignore
                                                    const {key, ...restProps} = props; // separate key from other props
                                                    return (
                                                        <div
                                                            key={key}         // pass key explicitly
                                                            {...restProps} // spread the rest safely
                                                            className="relative h-[2px] w-full rounded bg-gray-200"
                                                            style={{
                                                                background: getTrackBackground({
                                                                    values,
                                                                    colors: ["#e5e7eb", "#0fabb1", "#e5e7eb"],
                                                                    min: MIN,
                                                                    max: MAX,
                                                                }),
                                                            }}
                                                        >
                                                            {children}
                                                        </div>
                                                    );
                                                }}
                                                renderThumb={({props}) => {
                                                    const {key, ...restProps} = props;
                                                    return (
                                                        <div
                                                            key={key}      // assign key explicitly
                                                            {...restProps} // spread the rest safely
                                                            className="h-4 w-2 mt-2 bg-primary rounded-full shadow-md flex items-center justify-center -translate-y-1/2"
                                                        />
                                                    );
                                                }}
                                            />

                                            <div className="block lg:flex w-full items-center justify-between mt-4">
                                                <button
                                                    className="bg-primary cursor-pointer text-white px-4 py-1.5 rounded text-sm hover:bg-dark-primary transition">
                                                    Filter
                                                </button>
                                                <h4 className="text-[14px] text-gray-700 mt-3 lg:mt-0">
                                                    ৳{values[0].toLocaleString()} - ৳{values[1].toLocaleString()}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Brand Box */}
                                    <div className="brand_box mt-6 rounded border border-gray-200 p-4">
                                        <h4 className="text-[16px] font-bold border-b border-gray-200 pb-3 text-gray-800">
                                            Filter by Brand
                                        </h4>
                                        <div
                                            className="mt-2 text-[14px] h-[150px] overflow-y-auto scrollbar-primary space-y-2">
                                            {["All Brands", "Minister", "Walton", "Hisense", "Samsung", "Midea", "Gree"].map((brand) => (
                                                <label key={brand} className="flex items-center gap-2 select-none">
                                                    <input type="checkbox" className="peer hidden"/>
                                                    <div
                                                        className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-primary">
                                                        <FaCheck className="text-white text-[10px] cursor-pointer"/>
                                                    </div>
                                                    <span className="text-gray-800 cursor-pointer">{brand}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main content products */}
                            <div className="col md:col-span-8">
                                <div className="grid grid-cols-1 sm:col-end-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div
                                        className="col rounded-xl cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

                                        {/* PRODUCT IMAGE */}
                                        <div
                                            className="relative aspect-[1/1] overflow-hidden rounded-xl transform transition duration-500 hover:scale-110">
                                            <Image
                                                src={product7}
                                                alt="Wireless Headphone"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* PRODUCT NAME */}
                                        <h3 className="mt-[6px] text-[15px] text-center font-semibold leading-[1.4] text-gray-800">
                                            Mini 3d Glass
                                        </h3>

                                        {/* PRICE */}
                                        <div className="mt-2 border-b border-gray-200 pb-3">
                                <span className="text-[14px] text-gray-400 line-through font-semibold">
                                  TK: 3,500
                                </span>
                                            <h4 className="text-[14px] font-bold text-gray-500">
                                                Save: TK.2,500 <span className="text-orange-400">(12% OFF)</span>
                                            </h4>
                                        </div>

                                        {/*BUY BUTTON*/}
                                        <div className="buy_now_button flex items-center justify-between mt-3">
                                            <h4 className="text-[16px] font-bold text-primary">
                                                TK: 3,200
                                            </h4>
                                            <button
                                                type="button"
                                                className="flex items-center gap-1 py-1 px-3 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                            >
                                                <Image
                                                    src={cartImage}
                                                    alt="Cart"
                                                    className="w-[20px]"
                                                />
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="col rounded-xl cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

                                        {/* PRODUCT IMAGE */}
                                        <div
                                            className="relative aspect-[1/1] overflow-hidden rounded-xl transform transition duration-500 hover:scale-110">
                                            <Image
                                                src={product8}
                                                alt="Wireless Headphone"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* PRODUCT NAME */}
                                        <h3 className="mt-[6px] text-[15px] text-center font-semibold leading-[1.4] text-gray-800">
                                            Polo T-Shirt
                                        </h3>

                                        {/* PRICE */}
                                        <div className="mt-2 border-b border-gray-200 pb-3">
                                <span className="text-[14px] text-gray-400 line-through font-semibold">
                                  TK: 3,500
                                </span>
                                            <h4 className="text-[14px] font-bold text-gray-500">
                                                Save: TK.2,500 <span className="text-orange-400">(12% OFF)</span>
                                            </h4>
                                        </div>

                                        {/*BUY BUTTON*/}
                                        <div className="buy_now_button flex items-center justify-between mt-3">
                                            <h4 className="text-[16px] font-bold text-primary">
                                                TK: 3,200
                                            </h4>
                                            <button
                                                type="button"
                                                className="flex items-center gap-1 py-1 px-3 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                            >
                                                <Image
                                                    src={cartImage}
                                                    alt="Cart"
                                                    className="w-[20px]"
                                                />
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="col rounded-xl cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

                                        {/* PRODUCT IMAGE */}
                                        <div
                                            className="relative aspect-[1/1] overflow-hidden rounded-xl transform transition duration-500 hover:scale-110">
                                            <Image
                                                src={product9}
                                                alt="Wireless Headphone"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        {/* PRODUCT NAME */}
                                        <h3 className="mt-[6px] text-center text-[15px] font-semibold leading-[1.4] text-gray-800">
                                            Black Jacket
                                        </h3>

                                        {/* PRICE */}
                                        <div className="mt-2 border-b border-gray-200 pb-3">
                                <span className="text-[14px] text-gray-400 line-through font-semibold">
                                  TK: 3,500
                                </span>
                                            <h4 className="text-[14px] font-bold text-gray-500">
                                                Save: TK.2,500 <span className="text-orange-400">(12% OFF)</span>
                                            </h4>
                                        </div>

                                        {/*BUY BUTTON*/}
                                        <div className="buy_now_button flex items-center justify-between mt-3">
                                            <h4 className="text-[16px] font-bold text-primary">
                                                TK: 3,200
                                            </h4>
                                            <button
                                                type="button"
                                                className="flex items-center gap-1 py-1 px-3 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                            >
                                                <Image
                                                    src={cartImage}
                                                    alt="Cart"
                                                    className="w-[20px]"
                                                />
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="col rounded-xl cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

                                        {/* PRODUCT IMAGE */}
                                        <div
                                            className="relative aspect-[1/1] overflow-hidden rounded-xl transform transition duration-500 hover:scale-110">
                                            <Image
                                                src={product10}
                                                alt="Wireless Headphone"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* PRODUCT NAME */}
                                        <h3 className="mt-[6px] text-center text-[15px] font-semibold leading-[1.4] text-gray-800">
                                            Yellow T-Shirt
                                        </h3>
                                        {/* PRICE */}
                                        <div className="mt-2 border-b border-gray-200 pb-3">
                                <span className="text-[14px] text-gray-400 line-through font-semibold">
                                  TK: 3,500
                                </span>
                                            <h4 className="text-[14px] font-bold text-gray-500">
                                                Save: TK.2,500 <span className="text-orange-400">(12% OFF)</span>
                                            </h4>
                                        </div>

                                        {/*BUY BUTTON*/}
                                        <div className="buy_now_button flex items-center justify-between mt-3">
                                            <h4 className="text-[16px] font-bold text-primary">
                                                TK: 3,200
                                            </h4>
                                            <button
                                                type="button"
                                                className="flex items-center gap-1 py-1 px-3 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                            >
                                                <Image
                                                    src={cartImage}
                                                    alt="Cart"
                                                    className="w-[20px]"
                                                />
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="col rounded-xl cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

                                        {/* PRODUCT IMAGE */}
                                        <div
                                            className="relative aspect-[1/1] overflow-hidden rounded-xl transform transition duration-500 hover:scale-110">
                                            <Image
                                                src={product11}
                                                alt="Wireless Headphone"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* PRODUCT NAME */}
                                        <h3 className="mt-[6px] text-center text-[15px] font-semibold leading-[1.4] text-gray-800">
                                            Special Hoodie
                                        </h3>
                                        {/* PRICE */}
                                        <div className="mt-2 border-b border-gray-200 pb-3">
                                <span className="text-[14px] text-gray-400 line-through font-semibold">
                                  TK: 3,500
                                </span>
                                            <h4 className="text-[14px] font-bold text-gray-500">
                                                Save: TK.2,500 <span className="text-orange-400">(12% OFF)</span>
                                            </h4>
                                        </div>

                                        {/*BUY BUTTON*/}
                                        <div className="buy_now_button flex items-center justify-between mt-3">
                                            <h4 className="text-[16px] font-bold text-primary">
                                                TK: 3,200
                                            </h4>
                                            <button
                                                type="button"
                                                className="flex items-center gap-1 py-1 px-3 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                            >
                                                <Image
                                                    src={cartImage}
                                                    alt="Cart"
                                                    className="w-[20px]"
                                                />
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="col rounded-xl cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

                                        {/* PRODUCT IMAGE */}
                                        <div
                                            className="relative aspect-[1/1] overflow-hidden rounded-xl transform transition duration-500 hover:scale-110">
                                            <Image
                                                src={product3}
                                                alt="Wireless Headphone"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* PRODUCT NAME */}
                                        <h3 className="mt-[6px] text-center text-[15px] font-semibold leading-[1.4] text-gray-800">
                                            Gaming Pad
                                        </h3>
                                        {/* PRICE */}
                                        <div className="mt-2 border-b border-gray-200 pb-3">
                                <span className="text-[14px] text-gray-400 line-through font-semibold">
                                  TK: 3,500
                                </span>
                                            <h4 className="text-[14px] font-bold text-gray-500">
                                                Save: TK.2,500 <span className="text-orange-400">(12% OFF)</span>
                                            </h4>
                                        </div>

                                        {/*BUY BUTTON*/}
                                        <div className="buy_now_button flex items-center justify-between mt-3">
                                            <h4 className="text-[16px] font-bold text-primary">
                                                TK: 3,200
                                            </h4>
                                            <button
                                                type="button"
                                                className="flex items-center gap-1 py-1 px-3 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                            >
                                                <Image
                                                    src={cartImage}
                                                    alt="Cart"
                                                    className="w-[20px]"
                                                />
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="col rounded-xl cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

                                        {/* PRODUCT IMAGE */}
                                        <div
                                            className="relative aspect-[1/1] overflow-hidden rounded-xl transform transition duration-500 hover:scale-110">
                                            <Image
                                                src={product13}
                                                alt="Wireless Headphone"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* PRODUCT NAME */}
                                        <h3 className="mt-[6px] text-center text-[15px] font-semibold leading-[1.4] text-gray-800">
                                            White T-Shirt
                                        </h3>
                                        {/* PRICE */}
                                        <div className="mt-2 border-b border-gray-200 pb-3">
                                <span className="text-[14px] text-gray-400 line-through font-semibold">
                                  TK: 3,500
                                </span>
                                            <h4 className="text-[14px] font-bold text-gray-500">
                                                Save: TK.2,500 <span className="text-orange-400">(12% OFF)</span>
                                            </h4>
                                        </div>

                                        {/*BUY BUTTON*/}
                                        <div className="buy_now_button flex items-center justify-between mt-3">
                                            <h4 className="text-[16px] font-bold text-primary">
                                                TK: 3,200
                                            </h4>
                                            <button
                                                type="button"
                                                className="flex items-center gap-1 py-1 px-3 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                            >
                                                <Image
                                                    src={cartImage}
                                                    alt="Cart"
                                                    className="w-[20px]"
                                                />
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="col rounded-xl cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

                                        {/* PRODUCT IMAGE */}
                                        <div
                                            className="relative aspect-[1/1] overflow-hidden rounded-xl transform transition duration-500 hover:scale-110">
                                            <Image
                                                src={product14}
                                                alt="Wireless Headphone"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* PRODUCT NAME */}
                                        <h3 className="mt-[6px] text-center text-[15px] font-semibold leading-[1.4] text-gray-800">
                                            Formal Shirt
                                        </h3>

                                        {/* PRICE */}
                                        <div className="mt-2 border-b border-gray-200 pb-3">
                                <span className="text-[14px] text-gray-400 line-through font-semibold">
                                  TK: 3,500
                                </span>
                                            <h4 className="text-[14px] font-bold text-gray-500">
                                                Save: TK.2,500 <span className="text-orange-400">(12% OFF)</span>
                                            </h4>
                                        </div>

                                        {/*BUY BUTTON*/}
                                        <div className="buy_now_button flex items-center justify-between mt-3">
                                            <h4 className="text-[16px] font-bold text-primary">
                                                TK: 3,200
                                            </h4>
                                            <button
                                                type="button"
                                                className="flex items-center gap-1 py-1 px-3 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                            >
                                                <Image
                                                    src={cartImage}
                                                    alt="Cart"
                                                    className="w-[20px]"
                                                />
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="col rounded-xl cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

                                        {/* PRODUCT IMAGE */}
                                        <div
                                            className="relative aspect-[1/1] overflow-hidden rounded-xl transform transition duration-500 hover:scale-110">
                                            <Image
                                                src={product15}
                                                alt="Wireless Headphone"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* PRODUCT NAME */}
                                        <h3 className="mt-[6px] text-center text-[15px] font-semibold leading-[1.4] text-gray-800">
                                            Black T-Shirt
                                        </h3>
                                        {/* PRICE */}
                                        <div className="mt-2 border-b border-gray-200 pb-3">
                                <span className="text-[14px] text-gray-400 line-through font-semibold">
                                  TK: 3,500
                                </span>
                                            <h4 className="text-[14px] font-bold text-gray-500">
                                                Save: TK.2,500 <span className="text-orange-400">(12% OFF)</span>
                                            </h4>
                                        </div>

                                        {/*BUY BUTTON*/}
                                        <div className="buy_now_button flex items-center justify-between mt-3">
                                            <h4 className="text-[16px] font-bold text-primary">
                                                TK: 3,200
                                            </h4>
                                            <button
                                                type="button"
                                                className="flex items-center gap-1 py-1 px-3 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                            >
                                                <Image
                                                    src={cartImage}
                                                    alt="Cart"
                                                    className="w-[20px]"
                                                />
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/*Pagination*/}
                                <div className="flex items-center justify-center gap-2 mt-10">
                                    {/* Previous */}
                                    <button
                                        className="w-9 h-9 text-[14px] cursor-pointer flex items-center justify-center
                                           border border-gray-200 rounded-md
                                           text-gray-600 hover:bg-gray-100 transition"
                                    >
                                        <FiChevronLeft size={18}/>
                                    </button>

                                    {/* Pages */}
                                    <button
                                        className="w-9 h-9 text-[14px] cursor-pointer rounded-md
                                           bg-primary text-white
                                           border border-primary"
                                    >
                                        1
                                    </button>

                                    <button
                                        className="w-9 h-9 text-[14px] cursor-pointer rounded-md
                                       border border-gray-200
                                       hover:bg-gray-100 transition"
                                    >
                                        2
                                    </button>

                                    <button
                                        className="w-9 h-9 text-[14px] cursor-pointer rounded-md
                                       border border-gray-200
                                       hover:bg-gray-100 transition"
                                    >
                                        3
                                    </button>

                                    <button
                                        className="w-9 h-9 text-[14px] cursor-pointer rounded-md
                                               border border-gray-200
                                               hover:bg-gray-100 transition"
                                    >
                                        4
                                    </button>

                                    <button
                                        className="w-9 h-9 text-[14px] cursor-pointer rounded-md
                                       border border-gray-200
                                       hover:bg-gray-100 transition"
                                    >
                                        5
                                    </button>
                                    {/* Next */}
                                    <button
                                        className="w-9 h-9 text-[14px] cursor-pointer flex items-center justify-center
                                           border border-gray-200 rounded-md
                                           text-gray-600 hover:bg-gray-100 transition"
                                    >
                                        <FiChevronRight size={18}/>
                                    </button>
                                </div>

                            </div>
                        </div>

                        {/* ------------- Mobile Filter Button ------------------ */}
                        <button
                            className="md:hidden cursor-pointer fixed text-[16px] left-12 top-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full flex items-center gap-1 shadow z-50"
                            onClick={() => setIsMobileFilterOpen(true)}
                        >
                            <IoMdOptions size={15}/>
                            Filter
                        </button>

                        {/* Mobile Sidebar Drawer */}
                        <div
                            className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
                                isMobileFilterOpen ? "translate-x-0" : "-translate-x-full"
                            }`}
                        >
                            <div className="p-4 flex justify-between items-center border-b border-gray-200">
                                <h4 className="text-lg font-bold">Filters</h4>
                                <button onClick={() => setIsMobileFilterOpen(false)} className="cursor-pointer">
                                    <IoMdClose size={24}/>
                                </button>
                            </div>

                            <div className="overflow-y-auto p-4 h-full">
                                {/* Copy your left_filter_wrap content here */}
                                {/* Category Box */}
                                <div className="category_box rounded border border-gray-200 p-4">
                                    <h4 className="text-[16px] font-bold border-b border-gray-200 pb-3 text-gray-800">
                                        Shop Categories
                                    </h4>
                                    <div className="categories mt-2 h-[200px] overflow-y-auto scrollbar-primary">
                                        <ul className="space-y-2">
                                            {["Air Conditioner", "Refrigerator", "Freezer", "Washing Machine", "LED Television", "Microwave Oven", "Home Appliances", "Kitchen Appliance", "Fan", "Computer"].map((item) => (
                                                <li key={item} className="flex items-center gap-1 text-[14px]">
                                                    <div className="icon text-gray-400">
                                                        <IoIosArrowForward/>
                                                    </div>
                                                    <h5 className="cursor-pointer hover:text-primary">{item}</h5>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                {/* Price Box */}
                                <div className="price_box mt-6 rounded border border-gray-200 p-4">
                                    <h4 className="text-[16px] font-bold border-b border-gray-200 pb-3 text-gray-800">
                                        Filter by Price
                                    </h4>
                                    <div className="w-full max-w-sm mt-4">
                                        <Range
                                            values={values}
                                            step={STEP}
                                            min={MIN}
                                            max={MAX}
                                            onChange={(values) => setValues(values)}
                                            renderTrack={({props, children}) => {
                                                // @ts-ignore
                                                const {key, ...restProps} = props; // separate key from other props
                                                return (
                                                    <div
                                                        key={key}         // pass key explicitly
                                                        {...restProps} // spread the rest safely
                                                        className="relative h-[2px] w-full rounded bg-gray-200"
                                                        style={{
                                                            background: getTrackBackground({
                                                                values,
                                                                colors: ["#e5e7eb", "#0fabb1", "#e5e7eb"],
                                                                min: MIN,
                                                                max: MAX,
                                                            }),
                                                        }}
                                                    >
                                                        {children}
                                                    </div>
                                                );
                                            }}
                                            renderThumb={({props}) => {
                                                const {key, ...restProps} = props;
                                                return (
                                                    <div
                                                        key={key}      // assign key explicitly
                                                        {...restProps} // spread the rest safely
                                                        className="h-4 w-2 mt-2 bg-primary rounded-full shadow-md flex items-center justify-center -translate-y-1/2"
                                                    />
                                                );
                                            }}
                                        />

                                        <div className="block lg:flex w-full items-center justify-between mt-4">
                                            <button
                                                className="bg-primary cursor-pointer text-white px-4 py-1.5 rounded text-sm hover:bg-dark-primary transition">
                                                Filter
                                            </button>
                                            <h4 className="text-[14px] text-gray-700 mt-3 lg:mt-0">
                                                ৳{values[0].toLocaleString()} - ৳{values[1].toLocaleString()}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                {/* Brand Box */}
                                <div className="brand_box mt-6 rounded border border-gray-200 p-4">
                                    <h4 className="text-[16px] font-bold border-b border-gray-200 pb-3 text-gray-800">
                                        Filter by Brand
                                    </h4>
                                    <div
                                        className="mt-2 text-[14px] h-[150px] scrollbar-primary overflow-auto space-y-2">
                                        {["All Brands", "Minister", "Walton", "Hisense", "Samsung", "Midea", "Gree"].map((brand) => (
                                            <label key={brand} className="flex items-center gap-2 select-none">
                                                <input type="checkbox" className="peer hidden"/>
                                                <div
                                                    className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-primary">
                                                    <FaCheck className="text-white text-[10px] cursor-pointer"/>
                                                </div>
                                                <span className="text-gray-800 cursor-pointer">{brand}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Overlay */}
                        {isMobileFilterOpen && (
                            <div
                                className="fixed inset-0 bg-transparent z-40"
                                onClick={() => setIsMobileFilterOpen(false)}
                            ></div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;