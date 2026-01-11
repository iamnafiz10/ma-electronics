"use client";
import React, {useState} from 'react';
import ProductZoom from "@/app/(main)/components/Product/ProductZoom";
import Link from "next/link";
import {IoIosArrowForward} from "react-icons/io";
import cartImg from '../../../../public/assets/images/icon-cart.png';
import product1 from '../../../../public/assets/images/products/1.png';
import {
    FaCheckCircle,
    FaEnvelope,
    FaFacebook,
    FaFacebookMessenger, FaHome,
    FaRegHeart,
    FaStar, FaTag,
    FaTwitter,
    FaWhatsapp
} from "react-icons/fa";
import Image from "next/image";
import {IoLocationSharp} from "react-icons/io5";
import {MdReply} from "react-icons/md";
import {AiFillLike} from "react-icons/ai";
import {useRouter} from "next/navigation";

type Spec = {
    label: string;
    value: string;
};

const specifications: Spec[] = [
    {label: "Product Title", value: "Jamuna 150L Freezer JF-D150L-QD Day Lily"},
    {label: "Capacity (Liter)", value: "150L"},
    {label: "Door Type", value: "QD"},
    {label: "Handle Type", value: "Level"},
    {label: "Door Lock", value: "YES"},
    {label: "Move Wheel", value: "YES"},
    {label: "Freezer Net Basket Qty", value: "01Pcs (HIPS)"},
    {label: "Tray Ice (No. Rows)", value: "02Pcs (2×12)"},
    {label: "Scraper", value: "01pcs"},
    {label: "Running Current", value: "0.54±0.02 Amp"},
    {label: "Working Voltage", value: "187–254 Volt"},
    {label: "Work Without Stabilizer", value: "YES"},
    {label: "Fastest Ice Making", value: "YES"},
    {label: "Anti-Bacterial Gasket", value: "YES"},
    {label: "Net Basket", value: "YES"},
    {label: "Length", value: "710mm"},
    {label: "Width", value: "600mm"},
    {label: "Height", value: "830mm"},
    {label: "Net Weight", value: "33.6Kg"},
    {label: "Packing Length", value: "750 mm"},
    {label: "Packing Width", value: "670 mm"},
    {label: "Packing Height", value: "865 mm"},
    {label: "Packing Weight", value: "39.8 Kg"},
];

function Page() {
    const [qty, setQty] = useState(1);
    const increment = () => setQty(prev => prev + 1);
    const decrement = () => setQty(prev => (prev > 1 ? prev - 1 : 1));
    const router = useRouter();
    return (
        <>
            <section id="product-details-section">
                <div className="container mt-2">
                    <div
                        className="product_cat_header px-4 py-2 gap-2 text-[12px] bg-gray-100 rounded flex items-center">
                        <Link href='/' className="text-primary">Home</Link>
                        <div className="icon text-primary">
                            <IoIosArrowForward fontSize={15}/>
                        </div>
                        <Link href='#' className="text-primary">Freezer</Link>
                        <div className="icon text-gray-800">
                            <IoIosArrowForward fontSize={15}/>
                        </div>
                        <h4 className="text-gray-800">
                            Jamuna 180L Freezer JF CF 1H0L CD Red Wave
                        </h4>
                    </div>

                    <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-2">
                        <div className="col">
                            <ProductZoom/>
                        </div>
                        <div className="col">
                            <div className="product_details">
                                <h1 className="text-[20px] font-bold text-gray-800">
                                    Jamuna 180L Freezer JF CF 1H0L CD Red Wave
                                </h1>

                                <div className="flex items-center space-x-2 text-gray-400 mt-4">
                                    <div className="flex items-center gap-2">
                                        <FaStar size={13}/>
                                        <FaStar size={13}/>
                                        <FaStar size={13}/>
                                        <FaStar size={13}/>
                                        <FaStar size={13}/>
                                    </div>
                                    <span className="text-[12px]">( 0 Reviews ) | </span>
                                    <Link href="#" className="text-[12px] text-primary hover:underline">
                                        01 Questions
                                    </Link>
                                </div>

                                <div className="flex items-center space-x-2 mt-2">
                                    <div
                                        className="flex flex-col items-center leading-none pr-3 border-r border-gray-200">
                                        <h4 className="text-[14px] font-bold text-gray-800">
                                            24
                                        </h4>
                                        <h4 className="text-[10px] mt-1 capitalize text-gray-400 tracking-tighter">
                                            Shares
                                        </h4>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Link href='#'
                                              className="py-[5px] px-2 bg-gray-200 rounded text-gray-800 hover:-translate-y-1 transition-transform duration-300 hover:text-primary">
                                            <FaFacebook size={13}/>
                                        </Link>
                                        <Link href='#'
                                              className="py-[5px] px-2 bg-gray-200 rounded text-gray-800 hover:-translate-y-1 transition-transform duration-300 hover:text-primary">
                                            <FaFacebookMessenger size={13}/>
                                        </Link>
                                        <Link href='#'
                                              className="py-[5px] px-2 bg-gray-200 rounded text-gray-800 hover:-translate-y-1 transition-transform duration-300 hover:text-primary">
                                            <FaTwitter size={13}/>
                                        </Link>
                                        <Link href='#'
                                              className="py-[5px] px-2 bg-gray-200 rounded text-gray-800 hover:-translate-y-1 transition-transform duration-300 hover:text-primary">
                                            <FaWhatsapp size={14}/>
                                        </Link>
                                        <Link href='#'
                                              className="py-[5px] px-2 bg-gray-200 rounded text-gray-800 hover:-translate-y-1 transition-transform duration-300 hover:text-primary">
                                            <FaEnvelope size={13}/>
                                        </Link>
                                    </div>
                                </div>

                                <button
                                    className="flex items-center space-x-1 text-[12px] font-bold uppercase tracking-wide my-6 cursor-pointer hover:text-primary transition">
                                    <span className="icon">
                                        <FaRegHeart size={15}/>
                                    </span>
                                    <span>Add to Wishlist</span>
                                </button>

                                <hr className="border-gray-200 mb-4"/>

                                <div className="flex items-baseline space-x-4">
                                    <h4 className="text-[18px] font-semibold text-red-600 line-through decoration-2">
                                        TK. 3,300
                                    </h4>
                                    <h4 className="text-[20px] text-primary font-bold">
                                        TK. 2,200
                                    </h4>
                                </div>

                                <p className="text-[14px] font-semibold text-green-600">
                                    Save: TK. 3530 (10% OFF)
                                </p>

                                <div className="space-y-1 text-[12px] mt-3 font-medium">
                                    <p className="text-gray-500">
                                        SKU: <span className="text-gray-800 uppercase">JF-D1H0L-CD-RED-WAVE</span>
                                    </p>
                                    <p className="text-gray-500 uppercase tracking-wide">
                                        STOCK: <span className="text-primary font-bold uppercase">Yes</span>
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 mt-4">
                                    {/* QUANTITY BOX */}
                                    <div
                                        className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                                        <button
                                            onClick={decrement}
                                            className="w-9 h-9 cursor-pointer flex items-center justify-center text-lg font-semibold hover:bg-gray-100"
                                        >
                                            −
                                        </button>

                                        <span
                                            className="w-9 h-9 flex text-[14px] items-center justify-center border-x border-gray-300 font-medium">
                                              {qty}
                                            </span>
                                        <button
                                            onClick={increment}
                                            className="w-9 h-9 cursor-pointer flex items-center justify-center text-lg font-semibold hover:bg-gray-100"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* ADD TO CART BUTTON */}
                                    <button
                                        className="flex items-center gap-1 uppercase bg-primary text-white px-4 h-9 cursor-pointer border border-primary text-[12px] rounded-md font-semibold hover:text-primary hover:bg-transparent transition">
                                        <Image src={cartImg} alt="cart" width={18} height={18}/>
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="delivery_details mt-6 lg:mt-0 bg-gray-100 py-4 px-6 rounded">
                                <div className="flex items-center justify-between">
                                    <h5 className="text-[14px] font-semibold">Delivery Options</h5>
                                    <Link href='#' type='button' className="text-[14px] text-primary hover:underline">
                                        Edit
                                    </Link>
                                </div>
                                <div className="flex items-start gap-0 mt-2 text-gray-500">
                                    <div className="icon">
                                        <IoLocationSharp size={15}/>
                                    </div>
                                    <h4 className="text-[12px]">
                                        Jamuna Future Park,Ka-244 Progati Sarani,<br/> Baridhara, Dhaka
                                    </h4>
                                </div>

                                <hr className="text-gray-300 my-4"/>

                                <div className="wrap space-y-1">
                                    <div className="flex items-center gap-1 text-green-500 text-[12px]">
                                        <div className="icon">
                                            <FaCheckCircle/>
                                        </div>
                                        <h4>Cash On Delivery Available</h4>
                                    </div>

                                    <div className="flex items-center gap-1 text-gray-800 text-[12px]">
                                        <div className="icon">
                                            <FaHome/>
                                        </div>
                                        <h4>Home Delivery:</h4>
                                    </div>

                                    <div className="flex items-center gap-1 text-gray-800 text-[12px]">
                                        <div className="icon">
                                            <FaTag/>
                                        </div>
                                        <h4>Delivery Charge: <span className="text-red-500">Applicable</span></h4>
                                    </div>
                                </div>

                                <hr className="text-gray-300 my-4"/>

                                <div className="flex items-center justify-between">
                                    <h5 className="text-[14px] font-semibold">Return & Warranty</h5>
                                </div>
                                <div className="button_wrap flex items-center justify-between gap-4 mt-4">
                                    <Link href='#'
                                          className="flex w-full border border-white items-center gap-1 text-[8px] sm:text-[10px] py-2 px-4 hover:bg-white bg-yellow-50 font-semibold text-gray-800 uppercase rounded">
                                        <MdReply size={12}/>
                                        Return Policy
                                    </Link>
                                    <Link href='#'
                                          className="flex w-full border border-white items-center gap-1 text-[8px] sm:text-[10px] py-2 px-4 hover:bg-white bg-yellow-50 font-semibold text-gray-800 uppercase rounded">
                                        <AiFillLike size={12}/>
                                        Warranty Policy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-8">
                        <div className="col lg:col-span-8">
                            <div className="product_full_details">
                                <div
                                    className="head_wrap p-4 rounded rounded-b-none bg-gray-200 font-semibold text-[16px]">
                                    Product details of Jamuna 150L Freezer JF-D1E0L-QD Day Lily
                                </div>
                                <div
                                    className="w-full overflow-x-auto rounded rounded-t-none border border-gray-300 bg-white">
                                    <table className="w-full border-collapse text-sm">
                                        <thead>
                                        <tr>
                                            <th
                                                colSpan={2}
                                                className="border border-t-0 border-gray-300 px-4 py-4 text-left font-bold text-gray-800"
                                            >
                                                Product Specifications:
                                            </th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        {specifications.map((spec, index) => (
                                            <tr key={index} className="odd:bg-white even:bg-gray-50">
                                                <td className="w-1/2 border border-gray-300 px-4 py-2 font-semibold text-gray-700">
                                                    {spec.label}:
                                                </td>
                                                <td className="w-1/2 border border-gray-300 px-4 py-2 text-gray-800">
                                                    {spec.value}
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col lg:col-span-4">
                            <div className="grid grid-cols-1">
                                <div className="col">
                                    <div
                                        className="head_wrap p-4 rounded bg-gray-200 font-semibold text-[16px]">
                                        Related Products
                                    </div>

                                    <div
                                        className="flex items-center gap-3 mt-2 p-3 border-2 border-gray-300 border-dashed rounded">
                                        <Image src={product1} width={100} alt="product-img"/>
                                        <div className="wrap">
                                            <h3 className="text-[14px] font-semibold text-gray-800">
                                                Jamuna 150L Freezer JF-D1E0L-QD Day Lily
                                            </h3>
                                            <div className="flex items-baseline space-x-2 mt-2">
                                                <h4 className="text-[14px] font-semibold text-red-600 line-through decoration-2">
                                                    TK. 3,300
                                                </h4>
                                                <h4 className="text-[16px] text-primary font-bold">
                                                    TK. 2,200
                                                </h4>
                                            </div>
                                            <button onClick={() => router.push("/product/id")}
                                                    type="button"
                                                    className="flex items-center mt-2 gap-1 py-1 px-4 text-[14px]
                                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                                    hover:bg-primary transition"
                                            >
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-center gap-3 mt-2 p-3 border-2 border-gray-300 border-dashed rounded">
                                        <Image src={product1} width={100} alt="product-img"/>
                                        <div className="wrap">
                                            <h3 className="text-[14px] font-semibold text-gray-800">
                                                Jamuna 150L Freezer JF-D1E0L-QD Day Lily
                                            </h3>
                                            <div className="flex items-baseline space-x-2 mt-2">
                                                <h4 className="text-[14px] font-semibold text-red-600 line-through decoration-2">
                                                    TK. 3,300
                                                </h4>
                                                <h4 className="text-[16px] text-primary font-bold">
                                                    TK. 2,200
                                                </h4>
                                            </div>
                                            <button
                                                type="button"
                                                className="flex items-center mt-2 gap-1 py-1 px-4 text-[14px]
                                                    bg-red-400 rounded text-white cursor-pointer font-semibold"
                                            >
                                                Stock Out
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-center gap-3 mt-2 p-3 border-2 border-gray-300 border-dashed rounded">
                                        <Image src={product1} width={100} alt="product-img"/>
                                        <div className="wrap">
                                            <h3 className="text-[14px] font-semibold text-gray-800">
                                                Jamuna 150L Freezer JF-D1E0L-QD Day Lily
                                            </h3>
                                            <div className="flex items-baseline space-x-2 mt-2">
                                                <h4 className="text-[14px] font-semibold text-red-600 line-through decoration-2">
                                                    TK. 3,300
                                                </h4>
                                                <h4 className="text-[16px] text-primary font-bold">
                                                    TK. 2,200
                                                </h4>
                                            </div>
                                            <button onClick={() => router.push("/product/id")}
                                                    type="button"
                                                    className="flex items-center mt-2 gap-1 py-1 px-4 text-[14px]
                                                    bg-buy-button rounded text-white cursor-pointer font-semibold
                                                    hover:bg-primary transition"
                                            >
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;