"use client";

import React, {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {
    FiHome,
    FiShoppingCart,
    FiChevronLeft,
    FiChevronRight,
    FiMenu,
    FiX,
    FiChevronDown, FiUserCheck,
} from "react-icons/fi";
import logoImg from "../../../../public/assets/images/new-logo.png";

interface MenuItem {
    id: number;
    title: string;
    icon: React.ReactNode;
    path: string;
    subItems?: {
        id: number;
        title: string;
        path: string;
    }[];
}

const AdminSidebar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const activeParent = menuItems.find(item =>
            item.subItems?.some(sub => sub.path === pathname)
        );

        if (activeParent) {
            setOpenMenuId(activeParent.id);
        } else {
            setOpenMenuId(null);
        }
    }, [pathname]);

    const menuItems: MenuItem[] = [
        {
            id: 1,
            title: "Dashboard",
            icon: <FiHome className="h-5 w-5"/>,
            path: "/admin/dashboard",
        },
        {
            id: 2,
            title: "Menus",
            icon: <FiMenu className="h-5 w-5"/>,
            path: "/admin/menus",
        },
        {
            id: 3,
            title: "Roles",
            icon: <FiUserCheck className="h-5 w-5"/>,
            path: "/admin/roles",
        },
        {
            id: 4,
            title: "Orders",
            icon: <FiShoppingCart className="h-5 w-5"/>,
            path: "/admin/orders",
            subItems: [
                {id: 41, title: "All Orders", path: "/admin/orders"},
                {id: 42, title: "Pending Orders", path: "/admin/orders/pending-orders"},
                {id: 43, title: "Progress Orders", path: "/admin/orders/progress-orders"},
                {id: 44, title: "Delivered Orders", path: "/admin/orders/delivered-orders"},
                {id: 45, title: "Canceled Orders", path: "/admin/orders/canceled-orders"},
                {id: 46, title: "Customers", path: "/admin/orders/customers"},
            ],
        },
    ];

    // Detect mobile
    useEffect(() => {
        const checkIfMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (mobile) {
                setIsCollapsed(true);
                setIsMobileMenuOpen(false);
            } else {
                setIsMobileMenuOpen(false);
            }
        };
        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    useEffect(() => {
        if (isMobile) setIsMobileMenuOpen(false);
    }, [pathname, isMobile]);

    const toggleSubMenu = (id: number) => setOpenMenuId(prev => (prev === id ? null : id));

    const isActive = (path: string) => pathname.startsWith(path);

    return (

        <>
            {/* Mobile menu button */}
            {isMobile && !isMobileMenuOpen && (
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="fixed top-[6px] left-4 z-50 p-2 rounded-md bg-primary text-white shadow-lg md:hidden"
                >
                    <FiMenu className="cursor-pointer" size={18}/>
                </button>
            )}

            {/* Sidebar */}
            <aside
                id="admin-sidebar"
                className={`flex flex-col min-h-screen self-stretch bg-white border-r border-gray-200 transition-all duration-300
                ${
                    isMobile
                        ? `fixed top-0 left-0 z-30 w-[240px] ${isMobileMenuOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"}`
                        : `relative ${isCollapsed ? "w-[85px]" : "w-[240px]"}`
                }`}
            >
                {/* Header */}
                <div className="flex items-center h-[48px] justify-between gap-1 px-4 border-b border-gray-200">
                    {(!isCollapsed || isMobile) && (
                        <div className="flex items-center">
                            <Image src={logoImg} width={120} alt="Logo"/>
                        </div>
                    )}

                    {/* Collapsed M logo */}
                    {isCollapsed && !isMobile && (
                        <div className="flex items-center justify-center w-full">
                            <div className="w-[30px] h-[30px] rounded-full bg-primary flex items-center justify-center">
                                <span className="text-white font-bold text-[16px]">M</span>
                            </div>
                        </div>
                    )}

                    {/* Desktop collapse button */}
                    {!isMobile && (
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="p-1 rounded-full hover:bg-gray-100 hover:text-primary"
                        >
                            {isCollapsed ? (
                                <FiChevronRight size={20} className="text-primary cursor-pointer"/>
                            ) : (
                                <FiChevronLeft size={20} className="text-primary cursor-pointer"/>
                            )}
                        </button>
                    )}

                    {/* Mobile close button */}
                    {isMobile && isMobileMenuOpen && (
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-1 rounded-full hover:bg-gray-100"
                        >
                            <FiX size={20} className="text-primary cursor-pointer"/>
                        </button>
                    )}
                </div>

                {/* Menu */}
                <div className="flex-1 overflow-y-auto p-4">
                    <div className={`space-y-2 ${isCollapsed && !isMobile ? "flex flex-col items-center" : ""}`}>
                        <div className="text-xs font-semibold text-gray-500 uppercase px-3">
                            {(isCollapsed && !isMobile) ? "━" : "MENU"}
                        </div>

                        {menuItems.map(item => {
                            const active =
                                isActive(item.path) ||
                                item.subItems?.some(sub => isActive(sub.path));

                            return (
                                <div key={item.id}>
                                    {/* Main menu */}
                                    {item.subItems ? (
                                        /* Dropdown menu (Orders) */
                                        <div
                                            onClick={() => toggleSubMenu(item.id)}
                                            className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer
                    ${active ? "bg-primary text-white" : "hover:bg-gray-100 text-gray-700"}`}
                                        >
                                            <div className="flex items-center gap-2">
                                                <div className={active ? "text-white" : "text-primary"}>
                                                    {item.icon}
                                                </div>
                                                {(!isCollapsed || isMobile) && (
                                                    <span className="text-[14px] font-medium">
                                {item.title}
                            </span>
                                                )}
                                            </div>

                                            {(!isCollapsed || isMobile) && (
                                                <FiChevronDown
                                                    className={`transition-transform ${
                                                        openMenuId === item.id || active
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                />
                                            )}
                                        </div>
                                    ) : (
                                        /* Normal link (Dashboard) */
                                        <Link href={item.path}>
                                            <div
                                                className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer
                        ${active ? "bg-primary text-white" : "hover:bg-gray-100 text-gray-700"}`}
                                            >
                                                <div className={active ? "text-white" : "text-primary"}>
                                                    {item.icon}
                                                </div>
                                                {(!isCollapsed || isMobile) && (
                                                    <span className="text-[14px] font-medium">
                                {item.title}
                            </span>
                                                )}
                                            </div>
                                        </Link>
                                    )}

                                    {/* Submenu */}
                                    {item.subItems && openMenuId === item.id && (!isCollapsed || isMobile) && (
                                        <div className="mt-1 space-y-1 pl-6">
                                            {item.subItems.map(sub => (
                                                <Link key={sub.id} href={sub.path}>
                                                    <div
                                                        className={`flex items-center gap-3 p-2 rounded-md text-[13px] cursor-pointer
                                ${
                                                            isActive(sub.path)
                                                                ? "text-primary my-2 bg-primary/10"
                                                                : "hover:bg-gray-100 text-gray-600"
                                                        }`}
                                                    >
                                <span
                                    className={`h-2 w-2 rounded-full ${
                                        isActive(sub.path)
                                            ? "bg-primary"
                                            : "bg-gray-400"
                                    }`}
                                />
                                                        <span>{sub.title}</span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </aside>
        </>
    );
};

export default AdminSidebar;