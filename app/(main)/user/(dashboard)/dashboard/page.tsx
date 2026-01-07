"use client";
import React, {useState} from "react";
import {
    LuHeart,
    LuLayoutDashboard,
    LuLogOut,
    LuMapPin,
    LuShoppingBag,
    LuUser
} from "react-icons/lu";
import {CiImageOn} from "react-icons/ci";

type TabKey =
    | "dashboard"
    | "profile"
    | "orders"
    | "address"
    | "wishlist"
    | "logout";

interface MenuItem {
    name: string;
    icon: React.ReactNode;
    key: TabKey;
    count?: number;
}

function Page() {
    const [activeTab, setActiveTab] = useState<TabKey>("dashboard");

    const menuItems: MenuItem[] = [
        {name: "Dashboard", icon: <LuLayoutDashboard/>, key: "dashboard"},
        {name: "Profile", icon: <LuUser/>, key: "profile"},
        {name: "Orders", icon: <LuShoppingBag/>, key: "orders", count: 1},
        {name: "Delivery Address", icon: <LuMapPin/>, key: "address"},
        {name: "Wishlist", icon: <LuHeart/>, key: "wishlist", count: 0},
        {name: "Log out", icon: <LuLogOut/>, key: "logout"}
    ];

    return (
        <section id="user-dashboard-section">
            <div className="container mt-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Sidebar */}
                    <div className="md:col-span-4">
                        <div className="bg-white border border-gray-200 rounded overflow-hidden">
                            {/* Profile Header */}
                            <div className="flex flex-col items-center py-6">
                                <div
                                    className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 mb-2 text-gray-300">
                                    <CiImageOn size={60}/>
                                </div>
                                <h2 className="text-[18px] font-medium text-gray-800">Nafiz</h2>
                                <p className="text-[14px] text-gray-400 mt-1">
                                    Joined Jan Tue 2026
                                </p>
                            </div>

                            {/* Menu */}
                            <nav>
                                {menuItems.map((item) => {
                                    const isActive = activeTab === item.key;

                                    return (
                                        <button
                                            key={item.key}
                                            onClick={() => setActiveTab(item.key)}
                                            className={`w-full flex items-center cursor-pointer justify-between px-4 py-4 border-t border-gray-200 transition
                                            hover:bg-gray-50 text-left
                                            ${
                                                isActive
                                                    ? "border-l-4 border-l-primary text-primary"
                                                    : "text-gray-500 border-l-4 border-l-transparent"
                                            }
                                            `}
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className="text-[17px]">{item.icon}</span>
                                                <span
                                                    className={`text-[14px] ${
                                                        isActive ? "font-medium" : "font-normal"
                                                    }`}
                                                >
                          {item.name}
                        </span>
                                            </div>

                                            {item.count !== undefined && (
                                                <span
                                                    className="min-w-[24px] h-6 flex items-center justify-center text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded px-1">
                          {item.count}
                        </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="md:col-span-8">
                        {/* Dashboard */}
                        {activeTab === "dashboard" && (
                            <div className="dashboard_content">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    {[
                                        {label: "All Order", value: 1},
                                        {label: "Completed Order", value: 1},
                                        {label: "Processing Order", value: 5},
                                        {label: "Canceled Order", value: 0},
                                        {label: "Pending Order", value: 3}
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-white border border-gray-200 rounded p-6 flex flex-col items-center justify-center"
                                        >
                                            <div
                                                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4">
                                                <LuShoppingBag size={40} className="text-white"/>
                                            </div>
                                            <p className="text-gray-500 text-[16px] mb-2">
                                                {item.label}
                                            </p>
                                            <h3 className="text-[25px] font-bold text-[#1a1a1a]">
                                                {item.value}
                                            </h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Profile */}
                        {activeTab === "profile" && (
                            <div className="profile_content bg-white border border-gray-200 rounded p-6">
                                <h1 className="text-xl font-semibold">Profile Content</h1>
                            </div>
                        )}

                        {/* Orders */}
                        {activeTab === "orders" && (
                            <div className="bg-white border border-gray-200 rounded p-6">
                                Orders Content
                            </div>
                        )}

                        {/* Address */}
                        {activeTab === "address" && (
                            <div className="bg-white border border-gray-200 rounded p-6">
                                Address Content
                            </div>
                        )}

                        {/* Wishlist */}
                        {activeTab === "wishlist" && (
                            <div className="bg-white border border-gray-200 rounded p-6">
                                Wishlist Content
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page;