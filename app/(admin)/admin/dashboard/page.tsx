import React from 'react';
import {FaCheckCircle, FaMoneyBillWave, FaRegChartBar, FaShoppingCart} from "react-icons/fa";
import MonthlySalesReport from "@/app/(admin)/admin/dashboard/helper/MonthlySalesReport";
import MonthlyEarningsReport from "@/app/(admin)/admin/dashboard/helper/MonthlyEarningsReport";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

function Page() {
    return (
        <>
            <section id="dashboard-section">
                <div className="container_wrap mt-10 md:mt-0">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 text-gray-800 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Dashboard</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-green-400 text-white p-2 rounded">
                                    <FaShoppingCart size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">Total Orders</h4>
                                    <h4 className="text-gray-500 text-[14px]">15</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-green-400 text-white p-2 rounded">
                                    <FaShoppingCart size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">Pending Orders</h4>
                                    <h4 className="text-gray-500 text-[14px]">30</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-green-400 text-white p-2 rounded">
                                    <FaShoppingCart size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">Delivered Orders</h4>
                                    <h4 className="text-gray-500 text-[14px]">50</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-green-400 text-white p-2 rounded">
                                    <FaShoppingCart size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">Canceled Orders</h4>
                                    <h4 className="text-gray-500 text-[14px]">10</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-blue-400 text-white p-2 rounded">
                                    <FaRegChartBar size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">
                                        Total Product Sale
                                    </h4>
                                    <h4 className="text-gray-500 text-[14px]">1,000</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-blue-400 text-white p-2 rounded">
                                    <FaRegChartBar size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">
                                        Today Product Order
                                    </h4>
                                    <h4 className="text-gray-500 text-[14px]">150</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-blue-400 text-white p-2 rounded">
                                    <FaRegChartBar size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">
                                        This Month Sale
                                    </h4>
                                    <h4 className="text-gray-500 text-[14px]">0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-blue-400 text-white p-2 rounded">
                                    <FaRegChartBar size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">
                                        This Year Product Sale
                                    </h4>
                                    <h4 className="text-gray-500 text-[14px]">22,000</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-red-400 text-white p-2 rounded">
                                    <FaMoneyBillWave size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">
                                        Total Earning
                                    </h4>
                                    <h4 className="text-gray-500 text-[14px]">
                                        58,590 TK
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-red-400 text-white p-2 rounded">
                                    <FaMoneyBillWave size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">
                                        Today Pending Earning
                                    </h4>
                                    <h4 className="text-gray-500 text-[14px]">
                                        590 TK
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-red-400 text-white p-2 rounded">
                                    <FaMoneyBillWave size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">
                                        This Month Earning
                                    </h4>
                                    <h4 className="text-gray-500 text-[14px]">
                                        20,000 TK
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-red-400 text-white p-2 rounded">
                                    <FaMoneyBillWave size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">
                                        This Year Erning
                                    </h4>
                                    <h4 className="text-gray-500 text-[14px]">
                                        95,500 TK
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-yellow-400 text-white p-2 rounded">
                                    <FaCheckCircle size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">
                                        Total Products
                                    </h4>
                                    <h4 className="text-gray-500 text-[14px]">
                                        300
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-yellow-400 text-white p-2 rounded">
                                    <FaCheckCircle size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">
                                        Total Customers
                                    </h4>
                                    <h4 className="text-gray-500 text-[14px]">
                                        200
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-yellow-400 text-white p-2 rounded">
                                    <FaCheckCircle size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">
                                        Total Categories
                                    </h4>
                                    <h4 className="text-gray-500 text-[14px]">
                                        20
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-yellow-400 text-white p-2 rounded">
                                    <FaCheckCircle size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">
                                        Total Brands
                                    </h4>
                                    <h4 className="text-gray-500 text-[14px]">
                                        6
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-purple-400 text-white p-2 rounded">
                                    <FaCheckCircle size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">
                                        Total Reviews
                                    </h4>
                                    <h4 className="text-gray-500 text-[14px]">
                                        70
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box flex items-center gap-4 py-3 px-4 bg-white shadow rounded">
                                <div className="icon bg-purple-400 text-white p-2 rounded">
                                    <FaCheckCircle size={25}/>
                                </div>
                                <div className="details text-[13px] text-gray-800">
                                    <h4 className="font-semibold">
                                        Total Transactions
                                    </h4>
                                    <h4 className="text-gray-500 text-[14px]">
                                        7
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-6">
                        <div className="col">
                            <MonthlySalesReport/>
                        </div>
                        <div className="col">
                            <MonthlyEarningsReport/>
                        </div>
                    </div>

                    {/*Recent Orders*/}
                    <div className="recent_orders_wrap">
                        <div className="w-full mx-auto mt-4 bg-white py-4 text-[14px] border border-gray-200 rounded">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h2 className="text-[16px] font-semibold text-gray-700">Recent Orders</h2>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                    <tr className="text-gray-800 font-bold border-b border-gray-200">
                                        <th className="px-6 py-3 border-r border-gray-200">Customer</th>
                                        <th className="px-6 py-3 border-r border-gray-200">Order ID</th>
                                        <th className="px-6 py-3 border-r border-gray-200">Payment Method</th>
                                        <th className="px-6 py-3">Total</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-gray-800">
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <td className="px-6 py-4 border-r border-gray-200">Nafiz</td>
                                        <td className="px-6 py-4 border-r border-gray-200 text-primary hover:underline cursor-pointer">
                                            ACW20254
                                        </td>
                                        <td className="px-6 py-4 border-r border-gray-200">Cash On Delivery</td>
                                        <td className="px-6 py-4">৳10.00</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-200">
                                        <td className="px-6 py-4 border-r border-gray-200">Nafiz</td>
                                        <td className="px-6 py-4 border-r border-gray-200 text-primary hover:underline cursor-pointer">ACW20253</td>
                                        <td className="px-6 py-4 border-r border-gray-200">Cash On Delivery</td>
                                        <td className="px-6 py-4">৳20.00</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <td className="px-6 py-4 border-r border-gray-200">Nafiz</td>
                                        <td className="px-6 py-4 border-r border-gray-200 text-primary hover:underline cursor-pointer">ACW20252</td>
                                        <td className="px-6 py-4 border-r border-gray-200">Cash On Delivery</td>
                                        <td className="px-6 py-4">৳10.00</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-200">
                                        <td className="px-6 py-4 border-r border-gray-200">Nafiz</td>
                                        <td className="px-6 py-4 border-r border-gray-200 text-primary hover:underline cursor-pointer">F2SHuWfsmv</td>
                                        <td className="px-6 py-4 border-r border-gray-200">SSLCommerz</td>
                                        <td className="px-6 py-4">৳10.00</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/*Pagination*/}
                            {/*<div className="flex items-center justify-center gap-2 mt-4">*/}
                            {/*    /!* Previous *!/*/}
                            {/*    <button*/}
                            {/*        className="w-9 h-9 text-[14px] cursor-pointer flex items-center justify-center*/}
                            {/*               border border-gray-200 rounded-md*/}
                            {/*               text-gray-600 hover:bg-gray-100 transition"*/}
                            {/*    >*/}
                            {/*        <FiChevronLeft size={18}/>*/}
                            {/*    </button>*/}

                            {/*    /!* Pages *!/*/}
                            {/*    <button*/}
                            {/*        className="w-9 h-9 text-[14px] cursor-pointer rounded-md*/}
                            {/*               bg-primary text-white*/}
                            {/*               border border-primary"*/}
                            {/*    >*/}
                            {/*        1*/}
                            {/*    </button>*/}

                            {/*    <button*/}
                            {/*        className="w-9 h-9 text-[14px] cursor-pointer rounded-md*/}
                            {/*           border border-gray-200*/}
                            {/*           hover:bg-gray-100 transition"*/}
                            {/*    >*/}
                            {/*        2*/}
                            {/*    </button>*/}

                            {/*    <button*/}
                            {/*        className="w-9 h-9 text-[14px] cursor-pointer rounded-md*/}
                            {/*           border border-gray-200*/}
                            {/*           hover:bg-gray-100 transition"*/}
                            {/*    >*/}
                            {/*        3*/}
                            {/*    </button>*/}

                            {/*    <button*/}
                            {/*        className="w-9 h-9 text-[14px] cursor-pointer rounded-md*/}
                            {/*                   border border-gray-200*/}
                            {/*                   hover:bg-gray-100 transition"*/}
                            {/*    >*/}
                            {/*        4*/}
                            {/*    </button>*/}

                            {/*    <button*/}
                            {/*        className="w-9 h-9 text-[14px] cursor-pointer rounded-md*/}
                            {/*           border border-gray-200*/}
                            {/*           hover:bg-gray-100 transition"*/}
                            {/*    >*/}
                            {/*        5*/}
                            {/*    </button>*/}
                            {/*    /!* Next *!/*/}
                            {/*    <button*/}
                            {/*        className="w-9 h-9 text-[14px] cursor-pointer flex items-center justify-center*/}
                            {/*               border border-gray-200 rounded-md*/}
                            {/*               text-gray-600 hover:bg-gray-100 transition"*/}
                            {/*    >*/}
                            {/*        <FiChevronRight size={18}/>*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;