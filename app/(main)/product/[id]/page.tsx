"use client";
// import React, {useState} from 'react';
// import ProductZoom from "@/app/(main)/components/Product/ProductZoom";
// import Link from "next/link";
// import {IoIosArrowForward} from "react-icons/io";
// import cartImg from '../../../../public/assets/images/icon-cart.png'
// import {
//     FaCheckCircle,
//     FaEnvelope,
//     FaFacebook,
//     FaFacebookMessenger, FaHome,
//     FaRegHeart,
//     FaStar, FaTag,
//     FaTwitter,
//     FaWhatsapp
// } from "react-icons/fa";
// import Image from "next/image";
// import {IoLocationSharp} from "react-icons/io5";
// import {MdReply} from "react-icons/md";
// import {AiFillLike} from "react-icons/ai";

function Page() {
    // const [qty, setQty] = useState(1);
    // const increment = () => setQty(prev => prev + 1);
    // const decrement = () => setQty(prev => (prev > 1 ? prev - 1 : 1));
    return (
        <>
            {/*<section id="product-details-section">*/}
            {/*    <div className="container mt-2">*/}
            {/*        <div*/}
            {/*            className="product_cat_header px-4 py-2 gap-2 text-[12px] bg-gray-100 rounded flex items-center">*/}
            {/*            <Link href='#' className="text-primary">Home</Link>*/}
            {/*            <div className="icon text-primary">*/}
            {/*                <IoIosArrowForward fontSize={15}/>*/}
            {/*            </div>*/}
            {/*            <Link href='#' className="text-primary">Freezer</Link>*/}
            {/*            <div className="icon text-gray-800">*/}
            {/*                <IoIosArrowForward fontSize={15}/>*/}
            {/*            </div>*/}
            {/*            <h4 className="text-gray-800">*/}
            {/*                Jamuna 180L Freezer JF CF 1H0L CD Red Wave*/}
            {/*            </h4>*/}
            {/*        </div>*/}

            {/*        <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-2">*/}
            {/*            <div className="col">*/}
            {/*                <ProductZoom/>*/}
            {/*            </div>*/}
            {/*            <div className="col">*/}
            {/*                <div className="product_details">*/}
            {/*                    <h1 className="text-[20px] font-bold text-gray-800">*/}
            {/*                        Jamuna 180L Freezer JF CF 1H0L CD Red Wave*/}
            {/*                    </h1>*/}

            {/*                    <div className="flex items-center space-x-2 text-gray-400 mt-4">*/}
            {/*                        <div className="flex items-center gap-2">*/}
            {/*                            <FaStar size={13}/>*/}
            {/*                            <FaStar size={13}/>*/}
            {/*                            <FaStar size={13}/>*/}
            {/*                            <FaStar size={13}/>*/}
            {/*                            <FaStar size={13}/>*/}
            {/*                        </div>*/}
            {/*                        <span className="text-[12px]">( 0 Reviews ) | </span>*/}
            {/*                        <Link href="#" className="text-[12px] text-primary hover:underline">*/}
            {/*                            01 Questions*/}
            {/*                        </Link>*/}
            {/*                    </div>*/}

            {/*                    <div className="flex items-center space-x-2 mt-2">*/}
            {/*                        <div*/}
            {/*                            className="flex flex-col items-center leading-none pr-3 border-r border-gray-200">*/}
            {/*                            <h4 className="text-[14px] font-bold text-gray-800">*/}
            {/*                                24*/}
            {/*                            </h4>*/}
            {/*                            <h4 className="text-[10px] mt-1 capitalize text-gray-400 tracking-tighter">*/}
            {/*                                Shares*/}
            {/*                            </h4>*/}
            {/*                        </div>*/}

            {/*                        <div className="flex items-center gap-2">*/}
            {/*                            <Link href='#'*/}
            {/*                                  className="py-[5px] px-2 bg-gray-200 rounded text-gray-800 hover:-translate-y-1 transition-transform duration-300 hover:text-primary">*/}
            {/*                                <FaFacebook size={13}/>*/}
            {/*                            </Link>*/}
            {/*                            <Link href='#'*/}
            {/*                                  className="py-[5px] px-2 bg-gray-200 rounded text-gray-800 hover:-translate-y-1 transition-transform duration-300 hover:text-primary">*/}
            {/*                                <FaFacebookMessenger size={13}/>*/}
            {/*                            </Link>*/}
            {/*                            <Link href='#'*/}
            {/*                                  className="py-[5px] px-2 bg-gray-200 rounded text-gray-800 hover:-translate-y-1 transition-transform duration-300 hover:text-primary">*/}
            {/*                                <FaTwitter size={13}/>*/}
            {/*                            </Link>*/}
            {/*                            <Link href='#'*/}
            {/*                                  className="py-[5px] px-2 bg-gray-200 rounded text-gray-800 hover:-translate-y-1 transition-transform duration-300 hover:text-primary">*/}
            {/*                                <FaWhatsapp size={14}/>*/}
            {/*                            </Link>*/}
            {/*                            <Link href='#'*/}
            {/*                                  className="py-[5px] px-2 bg-gray-200 rounded text-gray-800 hover:-translate-y-1 transition-transform duration-300 hover:text-primary">*/}
            {/*                                <FaEnvelope size={13}/>*/}
            {/*                            </Link>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}

            {/*                    <button*/}
            {/*                        className="flex items-center space-x-1 text-[12px] font-bold uppercase tracking-wide my-6 cursor-pointer hover:text-primary transition">*/}
            {/*                        <span className="icon">*/}
            {/*                            <FaRegHeart size={15}/>*/}
            {/*                        </span>*/}
            {/*                        <span>Add to Wishlist</span>*/}
            {/*                    </button>*/}

            {/*                    <hr className="border-gray-200 mb-4"/>*/}

            {/*                    <div className="flex items-baseline space-x-4">*/}
            {/*                        <h4 className="text-[18px] font-semibold text-red-600 line-through decoration-2">*/}
            {/*                            TK. 3,300*/}
            {/*                        </h4>*/}
            {/*                        <h4 className="text-[20px] text-primary font-bold">*/}
            {/*                            TK. 2,200*/}
            {/*                        </h4>*/}
            {/*                    </div>*/}

            {/*                    <p className="text-[14px] font-semibold text-green-600">*/}
            {/*                        Save: TK. 3530 (10% OFF)*/}
            {/*                    </p>*/}

            {/*                    <div className="space-y-1 text-[12px] mt-3 font-medium">*/}
            {/*                        <p className="text-gray-500">*/}
            {/*                            SKU: <span className="text-gray-800 uppercase">JF-D1H0L-CD-RED-WAVE</span>*/}
            {/*                        </p>*/}
            {/*                        <p className="text-gray-500 uppercase tracking-wide">*/}
            {/*                            STOCK: <span className="text-primary font-bold uppercase">Yes</span>*/}
            {/*                        </p>*/}
            {/*                    </div>*/}

            {/*                    <div className="flex items-center gap-4 mt-4">*/}
            {/*                        /!* QUANTITY BOX *!/*/}
            {/*                        <div*/}
            {/*                            className="flex items-center border border-gray-300 rounded-md overflow-hidden">*/}
            {/*                            <button*/}
            {/*                                onClick={decrement}*/}
            {/*                                className="w-9 h-9 cursor-pointer flex items-center justify-center text-lg font-semibold hover:bg-gray-100"*/}
            {/*                            >*/}
            {/*                                −*/}
            {/*                            </button>*/}

            {/*                            <span*/}
            {/*                                className="w-9 h-9 flex text-[14px] items-center justify-center border-x border-gray-300 font-medium">*/}
            {/*                                  {qty}*/}
            {/*                                </span>*/}
            {/*                            <button*/}
            {/*                                onClick={increment}*/}
            {/*                                className="w-9 h-9 cursor-pointer flex items-center justify-center text-lg font-semibold hover:bg-gray-100"*/}
            {/*                            >*/}
            {/*                                +*/}
            {/*                            </button>*/}
            {/*                        </div>*/}

            {/*                        /!* ADD TO CART BUTTON *!/*/}
            {/*                        <button*/}
            {/*                            className="flex items-center gap-1 uppercase bg-primary text-white px-4 h-9 cursor-pointer border border-primary text-[12px] rounded-md font-semibold hover:text-primary hover:bg-transparent transition">*/}
            {/*                            <Image src={cartImg} alt="cart" width={18} height={18}/>*/}
            {/*                            ADD TO CART*/}
            {/*                        </button>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col">*/}
            {/*                <div className="delivery_details mt-6 lg:mt-0 bg-gray-100 py-4 px-6 rounded">*/}
            {/*                    <div className="flex items-center justify-between">*/}
            {/*                        <h5 className="text-[14px] font-semibold">Delivery Options</h5>*/}
            {/*                        <Link href='#' type='button' className="text-[14px] text-primary hover:underline">*/}
            {/*                            Edit*/}
            {/*                        </Link>*/}
            {/*                    </div>*/}
            {/*                    <div className="flex items-start gap-0 mt-2 text-gray-500">*/}
            {/*                        <div className="icon">*/}
            {/*                            <IoLocationSharp size={15}/>*/}
            {/*                        </div>*/}
            {/*                        <h4 className="text-[12px]">*/}
            {/*                            Jamuna Future Park,Ka-244 Progati Sarani,<br/> Baridhara, Dhaka*/}
            {/*                        </h4>*/}
            {/*                    </div>*/}

            {/*                    <hr className="text-gray-300 my-4"/>*/}

            {/*                    <div className="wrap space-y-1">*/}
            {/*                        <div className="flex items-center gap-1 text-green-500 text-[12px]">*/}
            {/*                            <div className="icon">*/}
            {/*                                <FaCheckCircle/>*/}
            {/*                            </div>*/}
            {/*                            <h4>Cash On Delivery Available</h4>*/}
            {/*                        </div>*/}

            {/*                        <div className="flex items-center gap-1 text-gray-800 text-[12px]">*/}
            {/*                            <div className="icon">*/}
            {/*                                <FaHome/>*/}
            {/*                            </div>*/}
            {/*                            <h4>Home Delivery:</h4>*/}
            {/*                        </div>*/}

            {/*                        <div className="flex items-center gap-1 text-gray-800 text-[12px]">*/}
            {/*                            <div className="icon">*/}
            {/*                                <FaTag/>*/}
            {/*                            </div>*/}
            {/*                            <h4>Delivery Charge: <span className="text-red-500">Applicable</span></h4>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}

            {/*                    <hr className="text-gray-300 my-4"/>*/}

            {/*                    <div className="flex items-center justify-between">*/}
            {/*                        <h5 className="text-[14px] font-semibold">Return & Warranty</h5>*/}
            {/*                    </div>*/}
            {/*                    <div className="button_wrap flex items-center justify-between gap-4 mt-4">*/}
            {/*                        <Link href='#'*/}
            {/*                              className="flex w-full border border-white items-center gap-1 text-[10px] py-2 px-4 hover:bg-white bg-yellow-50 font-semibold text-gray-800 uppercase rounded">*/}
            {/*                            <MdReply size={15}/>*/}
            {/*                            Return Policy*/}
            {/*                        </Link>*/}
            {/*                        <Link href='#'*/}
            {/*                              className="flex w-full border border-white items-center gap-1 text-[10px] py-2 px-4 hover:bg-white bg-yellow-50 font-semibold text-gray-800 uppercase rounded">*/}
            {/*                            <AiFillLike size={15}/>*/}
            {/*                            Warranty Policy*/}
            {/*                        </Link>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </>
    );
}

export default Page;