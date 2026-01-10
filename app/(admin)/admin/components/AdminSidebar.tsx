"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiShoppingCart,
  FiChevronLeft,
  FiChevronRight,
  FiMenu,
  FiX,
  FiChevronDown,
  FiSettings,
  FiUserCheck,
} from "react-icons/fi";

import logoImg from "../../../../public/assets/images/new-logo.png";
import { useMenuTree } from "@/app/features/auth/hooks/Menu/useMenuTree";
import type { MenuNode } from "@/app/features/auth/Dto/MenuNode";

interface MenuItemUI {
  id: number;
  title: string;
  icon: React.ReactNode;
  path: string;
  subItems?: { id: number; title: string; path: string }[];
}

const iconMap: Record<string, React.ReactNode> = {
  FiHome: <FiHome className="h-5 w-5" />,
  FiShoppingCart: <FiShoppingCart className="h-5 w-5" />,
  FiMenu: <FiMenu className="h-5 w-5" />,
  FiSettings: <FiSettings className="h-5 w-5" />,
  FiUserCheck: <FiUserCheck className="h-5 w-5" />,
};

// ✅ Static Dashboard (আগের মতোই থাকবে)
const staticMenu: MenuItemUI[] = [
  {
    id: -1, // unique (DB id এর সাথে clash হবে না)
    title: "Dashboard",
    icon: <FiHome className="h-5 w-5" />,
    path: "/admin/dashboard",
  },
];

function nodeToUI(node: MenuNode): MenuItemUI {
  return {
    id: node.id,
    title: node.title,
    path: node.url,
    icon: iconMap[node.icon || ""] ?? <FiMenu className="h-5 w-5" />,
    subItems: node.children?.map((c) => ({
      id: c.id,
      title: c.title,
      path: c.url,
    })),
  };
}

function findOpenId(
  items: MenuItemUI[],
  isActive: (p: string) => boolean
): number | null {
  for (const it of items) {
    if (
      it.subItems?.some((s) => isActive(s.path)) ||
      (it.subItems && isActive(it.path))
    ) {
      return it.id;
    }
  }
  return null;
}

const AdminSidebar: React.FC = () => {
  const pathname = usePathname();
  const { menus, loading } = useMenuTree();

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  // ✅ Dynamic menus (Dashboard API থেকে এলে duplicate রোধ করতে filter)
  const dynamicMenu = useMemo(() => {
    return (menus || [])
      .map(nodeToUI)
      .filter((x) => x.path !== "/admin/dashboard");
  }, [menus]);

  // ✅ Final menu list = static dashboard + dynamic
  const menuItems = useMemo(() => {
    return [...staticMenu, ...dynamicMenu];
  }, [dynamicMenu]);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

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

  // Close mobile menu on route change
  useEffect(() => {
    if (isMobile) setIsMobileMenuOpen(false);
  }, [pathname, isMobile]);

  // Auto open parent menu if child or parent active
  useEffect(() => {
    const id = findOpenId(menuItems, isActive);
    setOpenMenuId(id);
  }, [pathname, menuItems]);

  const toggleSubMenu = (id: number) =>
    setOpenMenuId((prev) => (prev === id ? null : id));

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && !isMobileMenuOpen && (
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="fixed top-[6px] left-4 z-50 p-2 rounded-md bg-primary text-white shadow-lg md:hidden"
        >
          <FiMenu size={18} />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`flex flex-col min-h-screen self-stretch bg-white border-r border-gray-200 transition-all duration-300
        ${
          isMobile
            ? `fixed top-0 left-0 z-30 w-[240px] ${
                isMobileMenuOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"
              }`
            : `relative ${isCollapsed ? "w-[85px]" : "w-[240px]"}`
        }`}
      >
        {/* Header */}
        <div className="flex items-center h-[48px] justify-between gap-1 px-4 border-b border-gray-200">
          {(!isCollapsed || isMobile) && (
            <div className="flex items-center">
              <Image src={logoImg} width={120} alt="Logo" />
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
              type="button"
              onClick={() => setIsCollapsed((v) => !v)}
              className="p-1 rounded-full hover:bg-gray-100 hover:text-primary"
            >
              {isCollapsed ? (
                <FiChevronRight size={20} className="text-primary" />
              ) : (
                <FiChevronLeft size={20} className="text-primary" />
              )}
            </button>
          )}

          {/* Mobile close button */}
          {isMobile && isMobileMenuOpen && (
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <FiX size={20} className="text-primary" />
            </button>
          )}
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto p-4">
          <div
            className={`space-y-2 ${
              isCollapsed && !isMobile ? "flex flex-col items-center" : ""
            }`}
          >
            <div className="text-xs font-semibold text-gray-500 uppercase px-3">
              {isCollapsed && !isMobile ? "━" : "MENU"}
            </div>

            {loading && (
              <div className="text-[13px] text-gray-500 px-3">
                Loading menus...
              </div>
            )}

            {!loading &&
              menuItems.map((item) => {
                const active =
                  isActive(item.path) ||
                  item.subItems?.some((sub) => isActive(sub.path));
                const isOpen = openMenuId === item.id;

                return (
                  <div key={item.id}>
                    {/* Main menu */}
                    {item.subItems ? (
                      <div
                        onClick={() => toggleSubMenu(item.id)}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer
                      ${
                        active
                          ? "bg-primary text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={active ? "text-white" : "text-primary"}
                          >
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
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </div>
                    ) : (
                      <Link href={item.path}>
                        <div
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer
                        ${
                          active
                            ? "bg-primary text-white"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                        >
                          <div
                            className={active ? "text-white" : "text-primary"}
                          >
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
                    {item.subItems && isOpen && (!isCollapsed || isMobile) && (
                      <div className="mt-1 space-y-1 pl-6">
                        {item.subItems.map((sub) => (
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
