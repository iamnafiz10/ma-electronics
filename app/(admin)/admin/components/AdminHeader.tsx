"use client";
import React, {useState, useRef, useEffect} from "react";
import {FiLogOut, FiSettings} from "react-icons/fi";
import Image from "next/image";
import userImg from "../../../../public/assets/images/user.png";
import Link from "next/link";
import {IoLockOpenOutline} from "react-icons/io5";

const AdminHeader: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header
            className="flex justify-between items-center h-[48px] px-4 bg-white border-b border-gray-200
                       md:relative fixed top-0 left-0 right-0 z-20"
        >
            {/* Left placeholder */}
            <div></div>

            {/* User avatar / dropdown */}
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="cursor-pointer"
                >
                    <Image src={userImg} width={50} height={50} className="rounded-full" alt="user"/>
                </button>

                {dropdownOpen && (
                    <div
                        className="absolute right-0 mt-2 w-60 text-[14px] py-0 bg-white border border-gray-200 rounded shadow-sm z-50 overflow-hidden">
                        <div className="flex items-center gap-1 pb-3 border-b border-gray-200">
                            <Image src={userImg} width={70} alt="userimg"/>
                            <div className="content">
                                <h4 className="font-bold text-[14px]">Maa Electronics</h4>
                                <h4 className="text-gray-500 text-[12px]">admin@maelectrocics.com</h4>
                            </div>
                        </div>
                        <Link
                            href="#"
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-800 transition-colors"
                        >
                            <FiSettings className="h-4 w-4"/> Update Profile
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-800 transition-colors"
                        >
                            <IoLockOpenOutline className="h-4 w-4"/> Change Password
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-800 transition-colors"
                        >
                            <FiLogOut className="h-4 w-4"/> Sign Out
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default AdminHeader;