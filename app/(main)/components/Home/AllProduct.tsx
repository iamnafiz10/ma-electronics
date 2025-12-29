import React, {useState} from 'react';
import Image from "next/image";
import product7 from "@/public/assets/images/products/7.png";
import product8 from "@/public/assets/images/products/8.png";
import product9 from "@/public/assets/images/products/9.png";
import product10 from "@/public/assets/images/products/10.png";
import product11 from "@/public/assets/images/products/11.png";
import product3 from "@/public/assets/images/products/3.png";
import product12 from "@/public/assets/images/products/12.png";
import product13 from "@/public/assets/images/products/13.png";
import product14 from "@/public/assets/images/products/14.png";
import product15 from "@/public/assets/images/products/15.png";
import cartImage from "@/public/assets/images/icon-cart.png";
import Link from "next/link";

function AllProduct() {
    // Load More Products
    const [loadMoreProducts, setLoadMoreProducts] = useState(false);
    return (
        <>
            <section id="all-product-section">
                <div className="container mt-4">
                    {/*Box Header*/}
                    <div className="box_header">
                        <h2 className="text-[22px] font-bold text-gray-800 flex items-center">
                            {/* Vertical line */}
                            <span className="block w-2 h-10 bg-primary mr-2"></span>
                            All Products
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
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
                        <div
                            className="col rounded-xl cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

                            {/* PRODUCT IMAGE */}
                            <div
                                className="relative aspect-[1/1] overflow-hidden rounded-xl transform transition duration-500 hover:scale-110">
                                <Image
                                    src={product12}
                                    alt="Wireless Headphone"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* PRODUCT NAME */}
                            <h3 className="mt-[6px] text-center text-[15px] font-semibold leading-[1.4] text-gray-800">
                                Woman T-Shirt
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

                    {loadMoreProducts && (
                        <div
                            className="load_more_div grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
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
                            <div
                                className="col rounded-xl cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

                                {/* PRODUCT IMAGE */}
                                <div
                                    className="relative aspect-[1/1] overflow-hidden rounded-xl transform transition duration-500 hover:scale-110">
                                    <Image
                                        src={product12}
                                        alt="Wireless Headphone"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* PRODUCT NAME */}
                                <h3 className="mt-[6px] text-center text-[15px] font-semibold leading-[1.4] text-gray-800">
                                    Woman T-Shirt
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
                    )}
                    {/*Load More Button*/}
                    <div className="flex items-center justify-center mt-10">
                        <button
                            type="button"
                            onClick={() => !loadMoreProducts && setLoadMoreProducts(true)}
                            className="py-2 px-4 text-[14px] uppercase cursor-pointer font-semibold
                            bg-primary text-white rounded border border-primary
                            hover:text-primary hover:bg-transparent transition"
                        >
                            {loadMoreProducts ? (
                                <Link href="#" className="block">
                                    View More
                                </Link>
                            ) : (
                                "Load More Products"
                            )}
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AllProduct;