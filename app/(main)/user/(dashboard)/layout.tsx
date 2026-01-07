"use client";
import UserSidebar from "@/app/(main)/user/components/UserSidebar";
import Link from "next/link";
import {IoIosArrowForward} from "react-icons/io";
import React from "react";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="container">
                <div
                    className="product_cat_header px-4 py-2 gap-2 text-[12px] bg-gray-100 rounded flex items-center">
                    <Link href='/' className="text-primary">Home</Link>
                    <div className="icon text-primary">
                        <IoIosArrowForward fontSize={15}/>
                    </div>
                    <h4 className="text-gray-800">
                        Welcome Back
                    </h4>
                </div>

                <div className="min-h-screen block md:flex gap-6 bg-white">
                    {/* Sidebar */}
                    <UserSidebar/>

                    {/* Main Wrapper */}
                    <div className="flex-1 flex flex-col min-h-screen">
                        {/* Content Scroll Area */}
                        <main className="flex-1 overflow-y-auto">
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}