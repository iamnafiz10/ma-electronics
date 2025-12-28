import React from 'react';
import Image from "next/image";
import {StarIcon} from "@heroicons/react/16/solid";
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

function AllProduct() {
    return (
        <>
            <section id="all-product-section">
                <div className="container">
                    {/*Box Header*/}
                    <div className="box_header">
                        <h2 className="text-[25px] font-bold text-gray-800 flex items-center">
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

                            {/* CATEGORY */}
                            <p className="mt-[10px] text-[12px] uppercase tracking-wide text-gray-500">
                                Electronics
                            </p>

                            {/* PRODUCT NAME */}
                            <h3 className="mt-[6px] text-[15px] font-semibold leading-[1.4] text-gray-800">
                                Mini 3d Glass
                            </h3>

                            {/* RATING */}
                            <div className="mt-[6px] flex items-center gap-[4px]">
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-gray-300"/>
                                <span className="ml-[4px] text-[12px] text-gray-500">(4.0)</span>
                            </div>

                            {/* PRICE */}
                            <div className="mt-[10px] flex items-center gap-[8px]">
                                <span className="text-[16px] font-bold text-primary">
                                  ৳2,999
                                </span>
                                <span className="text-[14px] text-gray-400 line-through">
                                  ৳3,500
                                </span>
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

                            {/* CATEGORY */}
                            <p className="mt-[10px] text-[12px] uppercase tracking-wide text-gray-500">
                                Electronics
                            </p>

                            {/* PRODUCT NAME */}
                            <h3 className="mt-[6px] text-[15px] font-semibold leading-[1.4] text-gray-800">
                                Polo T-Shirt
                            </h3>

                            {/* RATING */}
                            <div className="mt-[6px] flex items-center gap-[4px]">
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-gray-300"/>
                                <span className="ml-[4px] text-[12px] text-gray-500">(4.0)</span>
                            </div>

                            {/* PRICE */}
                            <div className="mt-[10px] flex items-center gap-[8px]">
                                <span className="text-[16px] font-bold text-primary">
                                  ৳2,999
                                </span>
                                <span className="text-[14px] text-gray-400 line-through">
                                  ৳3,500
                                </span>
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

                            {/* CATEGORY */}
                            <p className="mt-[10px] text-[12px] uppercase tracking-wide text-gray-500">
                                Electronics
                            </p>

                            {/* PRODUCT NAME */}
                            <h3 className="mt-[6px] text-[15px] font-semibold leading-[1.4] text-gray-800">
                                Black Jacket
                            </h3>

                            {/* RATING */}
                            <div className="mt-[6px] flex items-center gap-[4px]">
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-gray-300"/>
                                <span className="ml-[4px] text-[12px] text-gray-500">(4.0)</span>
                            </div>

                            {/* PRICE */}
                            <div className="mt-[10px] flex items-center gap-[8px]">
                                <span className="text-[16px] font-bold text-primary">
                                  ৳2,999
                                </span>
                                <span className="text-[14px] text-gray-400 line-through">
                                  ৳3,500
                                </span>
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

                            {/* CATEGORY */}
                            <p className="mt-[10px] text-[12px] uppercase tracking-wide text-gray-500">
                                Electronics
                            </p>

                            {/* PRODUCT NAME */}
                            <h3 className="mt-[6px] text-[15px] font-semibold leading-[1.4] text-gray-800">
                                Yellow T-Shirt
                            </h3>

                            {/* RATING */}
                            <div className="mt-[6px] flex items-center gap-[4px]">
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-gray-300"/>
                                <span className="ml-[4px] text-[12px] text-gray-500">(4.0)</span>
                            </div>

                            {/* PRICE */}
                            <div className="mt-[10px] flex items-center gap-[8px]">
                                <span className="text-[16px] font-bold text-primary">
                                  ৳2,999
                                </span>
                                <span className="text-[14px] text-gray-400 line-through">
                                  ৳3,500
                                </span>
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

                            {/* CATEGORY */}
                            <p className="mt-[10px] text-[12px] uppercase tracking-wide text-gray-500">
                                Electronics
                            </p>

                            {/* PRODUCT NAME */}
                            <h3 className="mt-[6px] text-[15px] font-semibold leading-[1.4] text-gray-800">
                                Special Hoodie
                            </h3>

                            {/* RATING */}
                            <div className="mt-[6px] flex items-center gap-[4px]">
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-gray-300"/>
                                <span className="ml-[4px] text-[12px] text-gray-500">(4.0)</span>
                            </div>

                            {/* PRICE */}
                            <div className="mt-[10px] flex items-center gap-[8px]">
                                <span className="text-[16px] font-bold text-primary">
                                  ৳2,999
                                </span>
                                <span className="text-[14px] text-gray-400 line-through">
                                  ৳3,500
                                </span>
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

                            {/* CATEGORY */}
                            <p className="mt-[10px] text-[12px] uppercase tracking-wide text-gray-500">
                                Electronics
                            </p>

                            {/* PRODUCT NAME */}
                            <h3 className="mt-[6px] text-[15px] font-semibold leading-[1.4] text-gray-800">
                                Gaming Pad
                            </h3>

                            {/* RATING */}
                            <div className="mt-[6px] flex items-center gap-[4px]">
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-gray-300"/>
                                <span className="ml-[4px] text-[12px] text-gray-500">(4.0)</span>
                            </div>

                            {/* PRICE */}
                            <div className="mt-[10px] flex items-center gap-[8px]">
                                <span className="text-[16px] font-bold text-primary">
                                  ৳2,999
                                </span>
                                <span className="text-[14px] text-gray-400 line-through">
                                  ৳3,500
                                </span>
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

                            {/* CATEGORY */}
                            <p className="mt-[10px] text-[12px] uppercase tracking-wide text-gray-500">
                                Electronics
                            </p>

                            {/* PRODUCT NAME */}
                            <h3 className="mt-[6px] text-[15px] font-semibold leading-[1.4] text-gray-800">
                                White T-Shirt
                            </h3>

                            {/* RATING */}
                            <div className="mt-[6px] flex items-center gap-[4px]">
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-gray-300"/>
                                <span className="ml-[4px] text-[12px] text-gray-500">(4.0)</span>
                            </div>

                            {/* PRICE */}
                            <div className="mt-[10px] flex items-center gap-[8px]">
                                <span className="text-[16px] font-bold text-primary">
                                  ৳2,999
                                </span>
                                <span className="text-[14px] text-gray-400 line-through">
                                  ৳3,500
                                </span>
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

                            {/* CATEGORY */}
                            <p className="mt-[10px] text-[12px] uppercase tracking-wide text-gray-500">
                                Electronics
                            </p>

                            {/* PRODUCT NAME */}
                            <h3 className="mt-[6px] text-[15px] font-semibold leading-[1.4] text-gray-800">
                                Formal Shirt
                            </h3>

                            {/* RATING */}
                            <div className="mt-[6px] flex items-center gap-[4px]">
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-gray-300"/>
                                <span className="ml-[4px] text-[12px] text-gray-500">(4.0)</span>
                            </div>

                            {/* PRICE */}
                            <div className="mt-[10px] flex items-center gap-[8px]">
                                <span className="text-[16px] font-bold text-primary">
                                  ৳2,999
                                </span>
                                <span className="text-[14px] text-gray-400 line-through">
                                  ৳3,500
                                </span>
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

                            {/* CATEGORY */}
                            <p className="mt-[10px] text-[12px] uppercase tracking-wide text-gray-500">
                                Electronics
                            </p>

                            {/* PRODUCT NAME */}
                            <h3 className="mt-[6px] text-[15px] font-semibold leading-[1.4] text-gray-800">
                                Black T-Shirt
                            </h3>

                            {/* RATING */}
                            <div className="mt-[6px] flex items-center gap-[4px]">
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-gray-300"/>
                                <span className="ml-[4px] text-[12px] text-gray-500">(4.0)</span>
                            </div>

                            {/* PRICE */}
                            <div className="mt-[10px] flex items-center gap-[8px]">
                                <span className="text-[16px] font-bold text-primary">
                                  ৳2,999
                                </span>
                                <span className="text-[14px] text-gray-400 line-through">
                                  ৳3,500
                                </span>
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

                            {/* CATEGORY */}
                            <p className="mt-[10px] text-[12px] uppercase tracking-wide text-gray-500">
                                Electronics
                            </p>

                            {/* PRODUCT NAME */}
                            <h3 className="mt-[6px] text-[15px] font-semibold leading-[1.4] text-gray-800">
                                Woman T-Shirt
                            </h3>

                            {/* RATING */}
                            <div className="mt-[6px] flex items-center gap-[4px]">
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                <StarIcon className="h-[14px] w-[14px] text-gray-300"/>
                                <span className="ml-[4px] text-[12px] text-gray-500">(4.0)</span>
                            </div>

                            {/* PRICE */}
                            <div className="mt-[10px] flex items-center gap-[8px]">
                                <span className="text-[16px] font-bold text-primary">
                                  ৳2,999
                                </span>
                                <span className="text-[14px] text-gray-400 line-through">
                                  ৳3,500
                                </span>
                            </div>
                        </div>
                    </div>

                    {/*See More Button*/}
                    <div className="flex items-center justify-center mt-10">
                        <button type='button'
                                className="py-2 px-6 bg-primary text-white rounded border border-primary hover:text-primary hover:bg-transparent cursor-pointer">
                            More Products
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AllProduct;