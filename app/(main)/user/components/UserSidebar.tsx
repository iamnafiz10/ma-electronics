import React from 'react';
import Link from 'next/link'
import {LuLayoutDashboard, LuUser, LuShoppingBag, LuMapPin, LuHeart, LuLogOut} from "react-icons/lu";
import {usePathname} from "next/navigation";

interface MenuItem {
    name: string;
    icon: React.ReactNode;
    href: string;
    count?: number;
}

const UserSidebar = () => {
    const pathname = usePathname();
    const menuItems: MenuItem[] = [
        {name: 'Dashboard', icon: <LuLayoutDashboard/>, href: '/user/dashboard'},
        {name: 'Profile', icon: <LuUser/>, href: '/user/profile'},
        {name: 'Orders', icon: <LuShoppingBag/>, href: '/user/orders', count: 1},
        {name: 'Delivery Address', icon: <LuMapPin/>, href: '/user/address'},
        {name: 'Wishlist', icon: <LuHeart/>, href: '/user/wishlist', count: 0},
        {name: 'Log out', icon: <LuLogOut/>, href: '/user/login'},
    ];

    return (
        <section id="user-sidebar-section">
            <div className="container_full mt-4">
                <div
                    className="w-full md:w-[350px] bg-white border border-gray-200 rounded overflow-hidden">

                    {/* Profile Header */}
                    <div className="flex flex-col items-center py-6">
                        <div
                            className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 mb-2 text-gray-300">
                            {/* Placeholder for Profile Image */}
                            <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <h2 className="text-[18px] font-medium text-gray-800">Nafiz</h2>
                        <p className="text-[14px] text-gray-400 mt-1">Joined Jan Tue 2026</p>
                    </div>

                    {/* Navigation Menu */}
                    <nav>
                        {menuItems.map((item) => {
                            // Check if the current path matches the item's href
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`w-full flex items-center justify-between px-4 py-4 border-t border-gray-200 transition-all duration-200 hover:bg-gray-50
                                    ${isActive ? 'border-l-4 border-l-primary text-primary' : 'text-gray-500 border-l-4 border-l-transparent'}
                                  `}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="text-[17px]">{item.icon}</span>
                                        <span className={`text-[14px] ${isActive ? 'font-medium' : 'font-normal'}`}>
                                          {item.name}
                                        </span>
                                    </div>

                                    {item.count !== undefined && (
                                        <span
                                            className="min-w-[24px] h-6 flex items-center justify-center text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded px-1">
                                          {item.count}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default UserSidebar;