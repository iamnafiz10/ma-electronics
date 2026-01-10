import React, {useState} from 'react';
import product7 from '../../../../public/assets/images/products/7.png'
import product8 from '../../../../public/assets/images/products/8.png'
import product9 from '../../../../public/assets/images/products/9.png'
import product10 from '../../../../public/assets/images/products/10.png'
import product11 from '../../../../public/assets/images/products/11.png'
import product12 from '../../../../public/assets/images/products/12.png'
import product13 from '../../../../public/assets/images/products/13.png'
import product14 from '../../../../public/assets/images/products/14.png'
import Image from "next/image";
import Link from "next/link";

const tabs = [
    'On Sell',
    'Hot Sell',
    'Trend',
    'Best Selling',
];

function SpecialOffer() {
    const [activeTab, setActiveTab] = useState('On Sell');

    return (
        <section id="special-offer-section">
            <div className="container mt-4">
                {/* Tabs */}
                <div className="block md:flex items-center justify-between">
                    <h2 className="text-[25px] font-bold text-gray-800 flex items-center">
                        {/* Vertical line */}
                        <span className="block w-2 h-10 bg-primary mr-2"></span>
                        Hurry up! Special offer.
                    </h2>
                    <div className="mt-4 md:mt-0 flex gap-4 sm:gap-8 items-center">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative cursor-pointer pb-3 text-sm font-semibold transition-colors ${
                                    activeTab === tab
                                        ? 'text-primary'
                                        : 'text-gray-400 hover:text-primary'
                                }`}
                            >
                                {tab}

                                {/* Active underline */}
                                {activeTab === tab && (
                                    <>
                                        <span
                                            className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-primary"></span>
                                        <span
                                            className="absolute left-1/2 -bottom-[7px] -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-primary"></span>
                                    </>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="mt-6">
                    {activeTab === 'On Sell' && (
                        <div className="tab_wrapper">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product7}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Mini 3d Glass
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product8}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Polo T-Shirt
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product9}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Black Jacket
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product10}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Yellow T-Shirt
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product11}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Special Hoodie
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product12}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Formal Dress
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product13}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Boys Special
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product14}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Half T-Shirt
                                            </h3>
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
                                </Link>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Hot Sell' && (
                        <div className="tab_wrapper">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product11}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Special Hoodie
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product12}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Formal Dress
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product13}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Boys Special
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product14}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Half T-Shirt
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product7}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Mini 3d Glass
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product8}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Polo T-Shirt
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product9}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Black Jacket
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product10}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Yellow T-Shirt
                                            </h3>
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
                                </Link>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Trend' && (
                        <div className="tab_wrapper">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product11}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Special Hoodie
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product12}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Formal Dress
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product7}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Mini 3d Glass
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product8}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Polo T-Shirt
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product9}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Black Jacket
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product10}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Yellow T-Shirt
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product13}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Boys Special
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product14}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Half T-Shirt
                                            </h3>
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
                                </Link>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Best Selling' && (
                        <div className="tab_wrapper">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product9}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Black Jacket
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product10}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Yellow T-Shirt
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product11}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Special Hoodie
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product12}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Formal Dress
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product7}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Mini 3d Glass
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product8}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Polo T-Shirt
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product13}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Boys Special
                                            </h3>
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
                                </Link>
                                <Link href='/category/id'
                                      className="col group border border-gray-300 hover:border-primary rounded cursor-pointer">
                                    <div className="flex items-center justify-start px-2">
                                        <Image src={product14}
                                               className="w-[80px] xl:w-[100px] group-hover:scale-110 transition duration-500"
                                               alt="ProductImg"/>
                                        <div>
                                            <h3 className="text-[16px] text-black capitalize font-semibold">
                                                Half T-Shirt
                                            </h3>
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
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default SpecialOffer;