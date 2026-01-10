import React from 'react';
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
import Link from "next/link";
import {useRouter} from "next/navigation";

function CategoryWiseProduct() {
    const router = useRouter();
    return (
        <>
            <section id="category-wise-product-section">
                <div className="container mt-4">
                    <div className="category_one bg-gray-50 rounded-xl p-6">
                        {/*Box Header*/}
                        <div className="box_header flex items-center justify-between">
                            <h2 className="text-[22px] font-bold text-gray-800 flex items-center">
                                {/* Vertical line */}
                                <span className="block w-2 h-10 bg-primary mr-2"></span>
                                Freezer
                            </h2>
                            <Link href='/category/id'
                                  className="more_button py-1 px-4 text-[14px] bg-primary border border-primary hover:bg-transparent hover:text-primary cursor-pointer text-white rounded">
                                View More
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="category_two bg-gray-50 rounded-xl p-6 mt-6">
                        {/*Box Header*/}
                        <div className="box_header flex items-center justify-between">
                            <h2 className="text-[22px] font-bold text-gray-800 flex items-center">
                                {/* Vertical line */}
                                <span className="block w-2 h-10 bg-primary mr-2"></span>
                                Television
                            </h2>
                            <Link href='/category/id'
                                  className="more_button py-1 px-4 text-[14px] bg-primary border border-primary hover:bg-transparent hover:text-primary cursor-pointer text-white rounded">
                                View More
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="category_three bg-gray-50 rounded-xl p-6 mt-6">
                        {/*Box Header*/}
                        <div className="box_header flex items-center justify-between">
                            <h2 className="text-[22px] font-bold text-gray-800 flex items-center">
                                {/* Vertical line */}
                                <span className="block w-2 h-10 bg-primary mr-2"></span>
                                Air Conditioner
                            </h2>
                            <Link href='/category/id'
                                  className="more_button py-1 px-4 text-[14px] bg-primary border border-primary hover:bg-transparent hover:text-primary cursor-pointer text-white rounded">
                                View More
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="category_four bg-gray-50 rounded-xl p-6">
                        {/*Box Header*/}
                        <div className="box_header flex items-center justify-between">
                            <h2 className="text-[22px] font-bold text-gray-800 flex items-center">
                                {/* Vertical line */}
                                <span className="block w-2 h-10 bg-primary mr-2"></span>
                                Washing machine
                            </h2>
                            <Link href='/category/id'
                                  className="more_button py-1 px-4 text-[14px] bg-primary border border-primary hover:bg-transparent hover:text-primary cursor-pointer text-white rounded">
                                View More
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="category_five bg-gray-50 rounded-xl p-6 mt-6">
                        {/*Box Header*/}
                        <div className="box_header flex items-center justify-between">
                            <h2 className="text-[22px] font-bold text-gray-800 flex items-center">
                                {/* Vertical line */}
                                <span className="block w-2 h-10 bg-primary mr-2"></span>
                                Fan and Cables
                            </h2>
                            <Link href='/category/id'
                                  className="more_button py-1 px-4 text-[14px] bg-primary border border-primary hover:bg-transparent hover:text-primary cursor-pointer text-white rounded">
                                View More
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          type="button"
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => router.push("/product/id")}
                                 className="col rounded-lg cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

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
                                    <h4 className="text-[15px] font-bold text-primary">
                                        TK: 3,200
                                    </h4>
                                    <Link href='/checkout'
                                          className="flex items-center gap-1 py-1 px-2 text-[14px]
                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                    hover:bg-primary transition"
                                    >
                                        <Image
                                            src={cartImage}
                                            alt="Cart"
                                            className="w-[20px]"
                                        />
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CategoryWiseProduct;