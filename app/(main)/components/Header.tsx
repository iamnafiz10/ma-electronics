'use client';

import {useRef, useState, useEffect} from 'react';
import Image from 'next/image';
import logoImg from '../../../public/assets/images/logo-two.png'
import cartImage from '../../../public/assets/images/icon-cart.png'
import {
    MagnifyingGlassIcon,
    Bars3Icon,
    UserIcon,
    PhoneIcon,
} from '@heroicons/react/24/outline';
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaChevronDown} from 'react-icons/fa';
import Link from "next/link";
import {AiOutlineClose} from "react-icons/ai";
import {MdChevronRight} from "react-icons/md";
import cat1 from '../../../public/assets/images/categories/1.png'
import cat2 from '../../../public/assets/images/categories/2.png'
import cat3 from '../../../public/assets/images/categories/3.png'
import cat4 from '../../../public/assets/images/categories/4.png'
import cat5 from '../../../public/assets/images/categories/5.png'
import cat6 from '../../../public/assets/images/categories/6.png'
import cat7 from '../../../public/assets/images/categories/7.png'
import cat8 from '../../../public/assets/images/categories/8.png'
import cat9 from '../../../public/assets/images/categories/9.png'

export default function Header() {
    // Category showing Desktop
    const [showCategories, setShowCategories] = useState(false);
    const categoryBtnRef = useRef<HTMLButtonElement | null>(null);
    const categoryBoxRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (event: PointerEvent) => {
            if (
                categoryBoxRef.current &&
                !categoryBoxRef.current.contains(event.target as Node) &&
                categoryBtnRef.current &&
                !categoryBtnRef.current.contains(event.target as Node)
            ) {
                setShowCategories(false);
            }
        };

        if (showCategories) {
            // 👇 capture = true is the KEY
            document.addEventListener('pointerdown', handleClickOutside, true);
        }

        return () => {
            document.removeEventListener('pointerdown', handleClickOutside, true);
        };
    }, [showCategories]);

    // Mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement | null>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: PointerEvent) => {
            const target = event.target as Node;

            if (
                menuRef.current &&
                !menuRef.current.contains(target) &&
                buttonRef.current &&
                !buttonRef.current.contains(target)
            ) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("pointerdown", handleClickOutside, true);
        }

        return () => {
            document.removeEventListener("pointerdown", handleClickOutside, true);
        };
    }, [isMenuOpen]);
    // Toggle main menu
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };


    return (
        <header className="sticky top-0 z-50">
            {/* ================= TOP BAR ================= */}
            <div className="bg-dark-primary text-white text-sm">
                <div className="container">
                    <div className="flex justify-between items-center h-[15px]">
                        {/* Logo */}
                        <Link href='/'>
                            <Image src={logoImg} className="cursor-pointer" alt="Logo" width={100} priority/>
                        </Link>

                        <div className="right_side flex items-center gap-8">
                            <div className="hidden md:flex gap-6 font-semibold text-[10px]">
                                <Link href='#'>SIGNUP / LOGIN</Link>
                                <Link href='#'>CATEGORIES</Link>
                                <Link href='#'>CAMPAIGNS</Link>
                                <Link href='#'>STORE LOCATOR&apos;S</Link>
                            </div>

                            <div className="flex gap-4">
                                <Link href='#'>
                                    <FaFacebookF size={14}/>
                                </Link>
                                <Link href='#'>
                                    <FaTwitter size={14}/>
                                </Link>
                                <Link href='#'>
                                    <FaInstagram size={14}/>
                                </Link>
                                <Link href='#'>
                                    <FaYoutube size={14}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= MAIN HEADER ================= */}
            <div className="bg-primary">
                <div className="container py-2 flex flex-wrap items-center gap-4">
                    {/*Mobile Category/Menu and icon*/}
                    <div className="cat_menu_icon flex md:hidden">
                        <div className="relative">
                            {/* Menu toggle button */}
                            <div ref={buttonRef}
                                 onClick={toggleMenu}
                                 className="cat_menu_icon flex md:hidden cursor-pointer">
                                {isMenuOpen ? (
                                    <AiOutlineClose className="h-7 w-7 text-white"/>
                                ) : (
                                    <Bars3Icon className="h-7 w-7 text-white"/>
                                )}
                            </div>

                            {/* Mobile menu */}
                            <div
                                ref={menuRef}
                                className={`fixed top-[140px] left-0 h-full border-t-3 border-dark-primary w-[250px] bg-primary z-50 transform transition-transform duration-300 ${
                                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                                }`}
                            >
                                <ul className="flex flex-col space-y-4 px-4 pt-8 text-white">

                                    {/* Categories */}
                                    <li>
                                        <details className="group/categories">
                                            <summary
                                                className="flex justify-between items-center cursor-pointer select-none list-none">
                                                <span
                                                    className="group-open/categories:font-semibold hover:font-semibold">
                                                  CATEGORIES
                                                </span>
                                                <FaChevronDown
                                                    className="transition-transform duration-300 group-open/categories:rotate-180"
                                                />
                                            </summary>

                                            <ul className="flex flex-col pl-4 mt-3 space-y-2">

                                                {/* Refrigerator */}
                                                <li>
                                                    <details className="group/refrigerator">
                                                        <summary
                                                            className="flex justify-between items-center cursor-pointer select-none list-none">
                                                              <span
                                                                  className="group-open/refrigerator:font-semibold hover:font-semibold">
                                                                Refrigerator
                                                              </span>
                                                            <FaChevronDown
                                                                className="transition-transform duration-300 group-open/refrigerator:rotate-180"
                                                            />
                                                        </summary>

                                                        <ul className="flex flex-col pl-4 mt-2 space-y-2">
                                                            <li>
                                                                <Link href="#" className="hover:font-semibold">
                                                                    Sub Category 1
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#" className="hover:font-semibold">
                                                                    Sub Category 2
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#" className="hover:font-semibold">
                                                                    Sub Category 3
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li>
                                                <li>
                                                    <Link href="#" className="hover:font-semibold">
                                                        Freezer
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="hover:font-semibold">
                                                        Air Conditioner
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="hover:font-semibold">
                                                        Fan and Cables
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="hover:font-semibold">
                                                        Television
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="hover:font-semibold">
                                                        Motor Cycle
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="hover:font-semibold">
                                                        Small Appliances
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="hover:font-semibold">
                                                        Kichen Appliances
                                                    </Link>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>

                                    {/* Other menu items */}
                                    <li>
                                        <Link href="#" className="hover:font-semibold">SIGNUP / LOGIN</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:font-semibold">CAMPAIGNS</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:font-semibold">STORE LOCATOR&apos;S</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Shop by Category */}
                        <button ref={categoryBtnRef}
                                onClick={() => setShowCategories((prev) => !prev)}
                                className="hidden md:flex cursor-pointer items-center gap-2 bg-dark-primary text-white px-4 py-2 rounded-md font-semibold"
                        >
                            <Bars3Icon className="h-5 w-5"/>
                            Shop By Category
                        </button>

                        {/* ================= CATEGORY DROPDOWN ================= */}
                        {showCategories && (
                            <div
                                ref={categoryBoxRef}
                                className="hidden md:block w-[270px] absolute top-[43px] left-0 bg-white p-0 rounded shadow-md z-50">
                                <div className="category_box relative">
                                    <ul className="bg-white rounded divide-y divide-gray-200">

                                        {/* ITEM WITH SUBMENU with MultiSub Menu */}
                                        <li className="relative group">
                                            <Link
                                                href="#"
                                                className="flex items-center justify-between p-3 rounded hover:bg-gray-100 transition"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Image src={cat1} width={20} alt="cat-img"/>
                                                    <span className="text-[14px] font-semibold text-gray-800">
                                                        Refrigerator
                                                    </span>
                                                </div>
                                                <MdChevronRight className="text-gray-400 text-xl"/>
                                            </Link>

                                            {/* FIRST SUBMENU */}
                                            <div
                                                className="absolute top-0 left-full ml-1 z-50
                                                 pointer-events-none opacity-0 -translate-x-2
                                                 group-hover:opacity-100 group-hover:translate-x-0
                                                 group-hover:pointer-events-auto
                                                 transition-all duration-300 ease-out">
                                                {/* Triangle */}
                                                <div className="absolute -left-2 top-2 w-0 h-0
                                                    border-t-12 border-b-12 border-r-12
                                                    border-t-transparent border-b-transparent border-white"/>

                                                <ul className="bg-white shadow-lg rounded w-52 py-2">
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Sub Menu
                                                        </Link>
                                                    </li>
                                                    {/* NORMAL SUB ITEM */}
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>

                                                    {/* ITEM WITH SECOND SUBMENU */}
                                                    <li className="relative group/double">
                                                        <Link
                                                            href="#"
                                                            className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Sub Menu
                                                            <MdChevronRight className="text-gray-400 text-lg"/>
                                                        </Link>

                                                        {/* SECOND SUBMENU */}
                                                        <div
                                                            className="absolute top-0 left-full ml-1
                                                             pointer-events-none opacity-0 -translate-x-2
                                                             group-hover/double:opacity-100
                                                             group-hover/double:translate-x-0
                                                             group-hover/double:pointer-events-auto
                                                             transition-all duration-300 ease-out">

                                                            {/* Triangle */}
                                                            <div className="absolute -left-2 top-2 w-0 h-0
                                                              border-t-12 border-b-12 border-r-12
                                                              border-t-transparent border-b-transparent border-r-white"/>

                                                            <ul className="bg-white shadow-lg rounded w-48 py-2">
                                                                <li>
                                                                    <Link href="#"
                                                                          className="block px-4 py-2 text-sm hover:bg-gray-100">
                                                                        Multi Sub Menu
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#"
                                                                          className="block px-4 py-2 text-sm hover:bg-gray-50">
                                                                        Multi Sub
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#"
                                                                          className="block px-4 py-2 text-sm hover:bg-gray-50">
                                                                        Multi Sub
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>

                                        {/* ITEM WITH SUBMENU */}
                                        <li className="relative group">
                                            <Link
                                                href="#"
                                                className="flex items-center justify-between p-3 rounded hover:bg-gray-100 transition"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Image src={cat2} width={20} alt="cat-img"/>
                                                    <span className="text-[14px] font-semibold text-gray-800">
                                                        Freezer
                                                    </span>
                                                </div>
                                                <MdChevronRight className="text-gray-400 text-xl"/>
                                            </Link>

                                            {/* FIRST SUBMENU */}
                                            <div
                                                className="absolute top-0 left-full ml-1 z-50
                                                 pointer-events-none opacity-0 -translate-x-2
                                                 group-hover:opacity-100 group-hover:translate-x-0
                                                 group-hover:pointer-events-auto
                                                 transition-all duration-300 ease-out">
                                                {/* Triangle */}
                                                <div className="absolute -left-2 top-2 w-0 h-0
                                                    border-t-12 border-b-12 border-r-12
                                                    border-t-transparent border-b-transparent border-white"/>

                                                <ul className="bg-white shadow-lg rounded w-52 py-2">
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Sub Menu
                                                        </Link>
                                                    </li>
                                                    {/* NORMAL SUB ITEM */}
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        {/* ITEM WITH SUBMENU */}
                                        <li className="relative group">
                                            <Link
                                                href="#"
                                                className="flex items-center justify-between p-3 rounded hover:bg-gray-100 transition"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Image src={cat3} width={20} alt="cat-img"/>
                                                    <span className="text-[14px] font-semibold text-gray-800">
                                                      Air Conditioner
                                                    </span>
                                                </div>
                                                <MdChevronRight className="text-gray-400 text-xl"/>
                                            </Link>

                                            {/* FIRST SUBMENU */}
                                            <div
                                                className="absolute top-0 left-full ml-1 z-50
                                                 pointer-events-none opacity-0 -translate-x-2
                                                 group-hover:opacity-100 group-hover:translate-x-0
                                                 group-hover:pointer-events-auto
                                                 transition-all duration-300 ease-out">
                                                {/* Triangle */}
                                                <div className="absolute -left-2 top-2 w-0 h-0
                                                    border-t-12 border-b-12 border-r-12
                                                    border-t-transparent border-b-transparent border-white"/>

                                                <ul className="bg-white shadow-lg rounded w-52 py-2">
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Sub Menu
                                                        </Link>
                                                    </li>
                                                    {/* NORMAL SUB ITEM */}
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        {/* ITEM WITH SUBMENU */}
                                        <li className="relative group">
                                            <Link
                                                href="#"
                                                className="flex items-center justify-between p-3 rounded hover:bg-gray-100 transition"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Image src={cat4} width={20} alt="cat-img"/>
                                                    <span className="text-[14px] font-semibold text-gray-800">
                                                        Fan and Cables
                                                    </span>
                                                </div>
                                                <MdChevronRight className="text-gray-400 text-xl"/>
                                            </Link>

                                            {/* FIRST SUBMENU */}
                                            <div
                                                className="absolute top-0 left-full ml-1 z-50
                                                 pointer-events-none opacity-0 -translate-x-2
                                                 group-hover:opacity-100 group-hover:translate-x-0
                                                 group-hover:pointer-events-auto
                                                 transition-all duration-300 ease-out">
                                                {/* Triangle */}
                                                <div className="absolute -left-2 top-2 w-0 h-0
                                                    border-t-12 border-b-12 border-r-12
                                                    border-t-transparent border-b-transparent border-white"/>

                                                <ul className="bg-white shadow-lg rounded w-52 py-2">
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Sub Menu
                                                        </Link>
                                                    </li>
                                                    {/* NORMAL SUB ITEM */}
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        {/* ITEM WITH SUBMENU */}
                                        <li className="relative group">
                                            <Link
                                                href="#"
                                                className="flex items-center justify-between p-3 rounded hover:bg-gray-100 transition"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Image src={cat5} width={20} alt="cat-img"/>
                                                    <span className="text-[14px] font-semibold text-gray-800">
                                                        Television
                                                    </span>
                                                </div>
                                                <MdChevronRight className="text-gray-400 text-xl"/>
                                            </Link>

                                            {/* FIRST SUBMENU */}
                                            <div
                                                className="absolute top-0 left-full ml-1 z-50
                                                 pointer-events-none opacity-0 -translate-x-2
                                                 group-hover:opacity-100 group-hover:translate-x-0
                                                 group-hover:pointer-events-auto
                                                 transition-all duration-300 ease-out">
                                                {/* Triangle */}
                                                <div className="absolute -left-2 top-2 w-0 h-0
                                                    border-t-12 border-b-12 border-r-12
                                                    border-t-transparent border-b-transparent border-white"/>

                                                <ul className="bg-white shadow-lg rounded w-52 py-2">
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Sub Menu
                                                        </Link>
                                                    </li>
                                                    {/* NORMAL SUB ITEM */}
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        {/* NORMAL ITEMS */}
                                        <li>
                                            <Link
                                                href="#"
                                                className="flex items-center justify-between p-3 hover:bg-gray-100 transition"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Image src={cat6} width={20} alt="cat-img"/>
                                                    <span className="text-[14px] font-semibold text-gray-800">
                                                        Motor Cycle
                                                  </span>
                                                </div>
                                            </Link>
                                        </li>

                                        {/* ITEM WITH SUBMENU */}
                                        <li className="relative group">
                                            <Link
                                                href="#"
                                                className="flex items-center justify-between p-3 rounded hover:bg-gray-100 transition"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Image src={cat7} width={20} alt="cat-img"/>
                                                    <span className="text-[14px] font-semibold text-gray-800">
                                                        Small Appliances
                                                    </span>
                                                </div>
                                                <MdChevronRight className="text-gray-400 text-xl"/>
                                            </Link>

                                            {/* FIRST SUBMENU */}
                                            <div
                                                className="absolute top-0 left-full ml-1 z-50
                                                 pointer-events-none opacity-0 -translate-x-2
                                                 group-hover:opacity-100 group-hover:translate-x-0
                                                 group-hover:pointer-events-auto
                                                 transition-all duration-300 ease-out">
                                                {/* Triangle */}
                                                <div className="absolute -left-2 top-2 w-0 h-0
                                                    border-t-12 border-b-12 border-r-12
                                                    border-t-transparent border-b-transparent border-white"/>

                                                <ul className="bg-white shadow-lg rounded w-52 py-2">
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Sub Menu
                                                        </Link>
                                                    </li>
                                                    {/* NORMAL SUB ITEM */}
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        {/* ITEM WITH SUBMENU */}
                                        <li className="relative group">
                                            <Link
                                                href="#"
                                                className="flex items-center justify-between p-3 rounded hover:bg-gray-100 transition"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Image src={cat8} width={20} alt="cat-img"/>
                                                    <span className="text-[14px] font-semibold text-gray-800">
                                                        Kitchen Appliance
                                                    </span>
                                                </div>
                                                <MdChevronRight className="text-gray-400 text-xl"/>
                                            </Link>

                                            {/* FIRST SUBMENU */}
                                            <div
                                                className="absolute top-0 left-full ml-1 z-50
                                                 pointer-events-none opacity-0 -translate-x-2
                                                 group-hover:opacity-100 group-hover:translate-x-0
                                                 group-hover:pointer-events-auto
                                                 transition-all duration-300 ease-out">
                                                {/* Triangle */}
                                                <div className="absolute -left-2 top-2 w-0 h-0
                                                    border-t-12 border-b-12 border-r-12
                                                    border-t-transparent border-b-transparent border-white"/>

                                                <ul className="bg-white shadow-lg rounded w-52 py-2">
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Sub Menu
                                                        </Link>
                                                    </li>
                                                    {/* NORMAL SUB ITEM */}
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        {/* ITEM WITH SUBMENU */}
                                        <li className="relative group">
                                            <Link
                                                href="#"
                                                className="flex items-center justify-between p-3 rounded hover:bg-gray-100 transition"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Image src={cat9} width={20} alt="cat-img"/>
                                                    <span className="text-[14px] font-semibold text-gray-800">
                                                        Washing machine
                                                    </span>
                                                </div>
                                                <MdChevronRight className="text-gray-400 text-xl"/>
                                            </Link>

                                            {/* FIRST SUBMENU */}
                                            <div
                                                className="absolute top-0 left-full ml-1 z-50
                                                 pointer-events-none opacity-0 -translate-x-2
                                                 group-hover:opacity-100 group-hover:translate-x-0
                                                 group-hover:pointer-events-auto
                                                 transition-all duration-300 ease-out">
                                                {/* Triangle */}
                                                <div className="absolute -left-2 top-2 w-0 h-0
                                                    border-t-12 border-b-12 border-r-12
                                                    border-t-transparent border-b-transparent border-white"/>

                                                <ul className="bg-white shadow-lg rounded w-52 py-2">
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Sub Menu
                                                        </Link>
                                                    </li>
                                                    {/* NORMAL SUB ITEM */}
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                                        >
                                                            Single Door
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Search */}
                    <div className="hidden md:flex flex-1">
                        <div className="flex w-full">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-4 py-2 rounded-l-md outline-none bg-white"
                            />
                            <button className="cursor-pointer bg-dark-primary px-4 rounded-r-md text-white">
                                <MagnifyingGlassIcon className="h-5 w-5"/>
                            </button>
                        </div>
                    </div>

                    {/* Hotline */}
                    <div className="flex items-center gap-2 text-white font-bold">
                        <PhoneIcon className="h-5 w-5"/>
                        <div>
                            <p className="text-[10px]">CALL US NOW</p>
                            <p className="text-xs">01321764096</p>
                        </div>
                    </div>

                    {/* Cart & Login */}
                    <div className="flex items-center gap-4 ml-auto">
                        <div className="relative text-white cursor-pointer">
                            <Image src={cartImage} className="h-7 w-7" alt="Cart-Image"/>
                            <span
                                className="absolute -top-2 -right-2 bg-white text-primary text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                0
                            </span>
                        </div>

                        <button
                            className="flex cursor-pointer items-center gap-2 border border-white text-white px-2 text-[14px] py-2 rounded-md">
                            <UserIcon className="h-4 w-4"/>
                            Log in
                        </button>
                    </div>
                </div>
            </div>

            {/* ================= MOBILE SEARCH ================= */}
            <div className="md:hidden bg-primary">
                <div className="container flex md:hidden flex-1">
                    <div className="flex w-full">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 py-2 rounded-l-md outline-none bg-white"
                        />
                        <button className="cursor-pointer bg-dark-primary px-4 rounded-r-md text-white">
                            <MagnifyingGlassIcon className="h-6 w-6"/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}