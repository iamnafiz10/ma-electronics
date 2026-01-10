"use client";

import React from 'react';
import logo from '../../../../../public/assets/images/logo-footer-one.jpeg'
import Image from "next/image";
import Link from "next/link";
import {MdKeyboardArrowLeft} from "react-icons/md";
import {FaPrint} from "react-icons/fa";

const Page = () => {
    return (
        <div id="invoice-section" className="min-h-screen">
            <div className="container mt-10 md:mt-0">
                <div
                    className="page_header flex items-center justify-between bg-gray-100 border border-gray-200 text-gray-800 py-3 px-4 rounded font-semibold text-[16px]">
                    <h2>Order Invoice</h2>
                    <div className="flex items-center gap-2 print:hidden">
                        <Link href='/user/dashboard'
                              className="flex items-center gap-1 py-2 px-3 rounded text-[12px] bg-blue-500 text-white"
                        >
                            <MdKeyboardArrowLeft size={15}/>
                            Dashboard
                        </Link>
                        <button onClick={() => window.print()}
                                className="text-[12px] cursor-pointer py-2 px-3 flex items-center gap-1 rounded bg-primary hover:bg-dark-primary text-white transition-all"
                        >
                            <FaPrint size={15}/>
                            Print
                        </button>
                    </div>
                </div>

                {/* THE INVOICE CONTAINER - Made more compact */}
                <div
                    id="printable-invoice"
                    className="mx-auto mt-4 bg-white p-4 md:p-6 lg:p-8 border border-gray-200 print:p-4"
                >
                    {/* Branding - Made more compact */}
                    <div
                        className="flex flex-col md:flex-row print:flex-row justify-between items-start mb-4 print:mb-3">
                        <div className="mb-4 md:mb-0 print:mb-0">
                            <div
                                className="w-20 h-20 print:w-16 print:h-16 bg-gray-50 border border-gray-200 flex items-center justify-center mb-2 print:mb-1">
                                <Image
                                    src={logo}
                                    alt="logo"
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-contain p-1"
                                />
                            </div>
                            <h1 className="font-bold text-[18px] print:text-sm mt-4">
                                Maa Electronics
                            </h1>
                            <div className="mt-1 space-y-0.5">
                                <p className="text-[14px] text-gray-500 print:text-[10px]">
                                    Nagar Bandar, Shibganj, Bogura
                                </p>
                                <p className="text-[14px] text-gray-500 print:text-[10px]">
                                    Mobile: 01711-318433
                                </p>
                                <p className="text-[14px] text-gray-500 print:text-[10px]">
                                    Email: maaelectronics.shib1982@gmail.com
                                </p>
                            </div>
                        </div>

                        <div
                            className="text-left md:text-right print:text-right w-full md:w-auto print:w-auto mt-2 md:mt-0 print:mt-0">
                            <h2 className="text-xl md:text-2xl lg:text-[28px] print:text-xl font-bold text-gray-800 mb-2 uppercase">
                                INVOICE
                            </h2>
                        </div>
                    </div>

                    {/* Info Grid - Made more compact */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-4 md:gap-6 print:gap-4 mb-4 border-t pt-4 border-gray-200 print:pt-3 print:mb-3">
                        <div>
                            <h3 className="font-bold text-[14px] uppercase text-gray-600 border-b border-gray-200 pb-1 mb-1 print:text-[10px]">
                                Order Details
                            </h3>
                            <div className="space-y-0.5">
                                <p className="text-[14px] print:text-[10px]">Transaction ID: ACW202613</p>
                                <p className="text-[14px] print:text-[10px]">Order ID: Jan 06, 2026</p>
                                <p className="text-[14px] print:text-[10px]">Order Date: Jan 06, 2026</p>
                                <p className="text-[14px] print:text-[10px]">Payment Status: <span
                                    className="text-red-400">Unpaid</span></p>
                                <p className="text-[14px] print:text-[10px]">Payment Method: Cash On Delivery</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-[14px] uppercase text-gray-600 border-b border-gray-200 pb-1 mb-1 print:text-[10px]">Invoice
                                Details</h3>
                            <div className="space-y-0.5">
                                <p className="text-[14px] print:text-[10px] capitalize">Name: Nafiz</p>
                                <p className="text-[14px] print:text-[10px] capitalize">Mobile: 01777777777</p>
                                <p className="text-[14px] print:text-[10px]">Email: nafiz@gmail.com</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-[14px] uppercase text-gray-600 border-b border-gray-200 pb-1 mb-1 print:text-[10px]">
                                Shipping Address
                            </h3>
                            <div className="space-y-0.5">
                                <p className="text-[14px] print:text-[10px] capitalize">Name: Nafiz</p>
                                <p className="text-[14px] print:text-[10px]">Email: nafiz@gmail.com</p>
                                <p className="text-[14px] print:text-[10px] capitalize">Mobile: 01777777777</p>
                                <p className="text-[14px] print:text-[10px] capitalize">Address: Bangladesh</p>
                            </div>
                        </div>
                    </div>

                    {/* Product Table - Made more compact */}
                    <div className="mb-4 print:mb-3">
                        <table className="w-full text-left border border-gray-200 text-[14px] print:text-[10px]">
                            <thead>
                            <tr className="bg-gray-50 uppercase font-bold text-gray-800 print:font-semibold">
                                <th className="px-3 py-2 border-b border-gray-200">Product</th>
                                <th className="px-3 py-2 border-b border-gray-200 text-center w-12 print:w-10">Qty</th>
                                <th className="px-3 py-2 border-b border-gray-200 text-right w-20 print:w-16">Price</th>
                                <th className="px-3 py-2 border-b border-gray-200 text-right w-20 print:w-16">Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="px-3 py-3 border border-gray-200 align-top">
                                    <div
                                        className="text-[14px] print:text-[10px] break-words">
                                        WSI-INVERNA(SUPERSAVER)-12F(SMART PLASMA)
                                    </div>
                                </td>
                                <td className="px-3 py-3 border border-gray-200 text-center align-top">2</td>
                                <td className="px-3 py-3 border border-gray-200 text-right align-top">৳53,910</td>
                                <td className="px-3 py-3 border border-gray-200 text-right font-bold align-top">৳107,820</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Totals & Signature - Made more compact */}
                    <div className="flex flex-col md:flex-row print:flex-row items-start justify-between">
                        <div></div>
                        <div className="w-full md:w-1/3 print:w-1/3 space-y-1 text-[14px] print:text-[10px]">
                            <div className="flex items-center justify-between">
                                <span>Subtotal:</span>
                                <span>৳107,820</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>TAX:</span>
                                <span>৳0</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>SHIPPING:</span>
                                <span>৳0</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>COST:</span>
                                <span>৳0</span>
                            </div>
                            <div
                                className="flex items-center justify-between font-bold text-black border-t border-gray-200 pt-1 mt-1">
                                <span>Total:</span>
                                <span>৳107,820.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Optimized print styles */}
            <style jsx global>{`
                @media print {
                    html, body {
                        margin: 0 !important;
                        padding: 0 !important;
                        width: 210mm;
                        height: 297mm;
                        background: white !important;
                        font-size: 10px !important;
                        line-height: 1.2 !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }

                    body * {
                        visibility: hidden;
                    }

                    #printable-invoice, #printable-invoice * {
                        visibility: visible;
                    }

                    #invoice-section {
                        width: 100% !important;
                        height: auto !important;
                        min-height: 0 !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }

                    .container_wrap {
                        margin: 0 !important;
                        padding: 0 !important;
                        width: 100% !important;
                        max-width: 100% !important;
                    }

                    .page_header,
                    .print\\:hidden,
                    .page_header * {
                        display: none !important;
                    }

                    #printable-invoice {
                        position: absolute !important;
                        top: 10mm !important;
                        left: 2mm !important;
                        right: 2mm !important;
                        margin: 0 !important;
                        padding: 4mm !important;
                        border: none !important;
                        box-shadow: none !important;
                        width: calc(100% - 0mm) !important;
                        max-width: none !important;
                        min-height: calc(297mm - 20mm) !important;
                        background: white !important;
                        font-size: 10px !important;
                        page-break-inside: avoid !important;
                        page-break-after: avoid !important;
                        page-break-before: avoid !important;
                    }

                    /* Force single page */
                    #printable-invoice {
                        page-break-inside: avoid !important;
                        break-inside: avoid !important;
                    }

                    @page {
                        size: A4 portrait;
                        margin: 10mm;
                    }

                    /* Remove all spacing that might cause overflow */
                    #printable-invoice > * {
                        margin-bottom: 3mm !important;
                        padding-bottom: 0 !important;
                    }

                    #printable-invoice > *:last-child {
                        margin-bottom: 0 !important;
                    }

                    /* Compact table */
                    table {
                        border-collapse: collapse !important;
                        margin: 2mm 0 !important;
                    }

                    th, td {
                        padding: 1.5mm 2mm !important;
                        line-height: 1.2 !important;
                    }

                    /* Reduce spacing in grids */
                    .grid > div {
                        padding: 0 !important;
                        margin: 0 !important;
                    }

                    /* Ensure everything fits */
                    * {
                        max-height: 100% !important;
                        overflow: hidden !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Page;