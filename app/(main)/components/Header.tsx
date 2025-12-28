'use client';

import {useRef, useState, useEffect} from 'react';
import Image from 'next/image';
import logoImg from '../../../public/assets/images/logo-two.png'
import {
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    Bars3Icon,
    UserIcon,
    PhoneIcon,
} from '@heroicons/react/24/outline';
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaChevronDown} from 'react-icons/fa';
import Link from "next/link";
import {AiOutlineClose} from "react-icons/ai";

const categories = [
    {name: 'Refrigerator', img: '/assets/images/categories/1.png'},
    {name: 'Freezer', img: '/assets/images/categories/2.png'},
    {name: 'Air Conditioner', img: '/assets/images/categories/3.png'},
    {name: 'Fan And Cables', img: '/assets/images/categories/4.png'},
    {name: 'Television', img: '/assets/images/categories/5.png'},
    {name: 'Motor Cycle', img: '/assets/images/categories/6.png'},
    {name: 'Small Appliances', img: '/assets/images/categories/7.png'},
    {name: 'Kitchen Appliance', img: '/assets/images/categories/8.png'},
    {name: 'Washing Machine', img: '/assets/images/categories/9.png'},
    {name: 'FRONT LOADING', img: '/assets/images/categories/6.png'},
    {name: 'Electronics', img: '/assets/images/categories/5.png'},
    {name: 'Top LOADING', img: '/assets/images/categories/2.png'},
];

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
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
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
                setIsCategoriesOpen(false);
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

    // Toggle categories submenu
    const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);
    return (
        <header className="sticky top-0 z-50">
            {/* ================= TOP BAR ================= */}
            <div className="bg-dark-primary text-white text-sm">
                <div className="container">
                    <div className="flex justify-between items-center h-[15px]">
                        {/* Logo */}
                        <Image src={logoImg} className="cursor-pointer" alt="Logo" width={100} priority/>

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
                                    {/* Categories with submenu */}
                                    <li>
                                        <div
                                            onClick={toggleCategories}
                                            className="flex justify-between items-center cursor-pointer select-none"
                                        >
                                            <span className={`hover:font-semibold ${
                                                isCategoriesOpen ? "font-semibold" : "font-normal"
                                            }`}>CATEGORIES</span>
                                            <span
                                                className={`inline-block transition-transform duration-300 ${
                                                    isCategoriesOpen ? "rotate-180" : "rotate-0"
                                                }`}
                                            >
                                            <FaChevronDown/>
                                          </span>
                                        </div>

                                        {/* Slide-down submenu */}
                                        <ul
                                            className={`flex flex-col pl-4 mt-2 space-y-2 overflow-hidden transition-[max-height] duration-300 ${
                                                isCategoriesOpen ? "max-h-full" : "max-h-0"
                                            }`}
                                        >
                                            <li>
                                                <Link href="#" className="hover:font-semibold">Refrigerator</Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="hover:font-semibold">Freezer</Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="hover:font-semibold">Air Conditioner</Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="hover:font-semibold">Fan And Cables</Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="hover:font-semibold">Television</Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="hover:font-semibold">Motor Cycle</Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="hover:font-semibold">Small Appliances</Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="hover:font-semibold">Kitchen Appliance</Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="hover:font-semibold">Washing Machine</Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="hover:font-semibold">FRONT LOADING</Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="hover:font-semibold">Electronics</Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="hover:font-semibold">Top LOADING</Link>
                                            </li>
                                        </ul>
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

                    {/* Shop by Category */}
                    <button ref={categoryBtnRef}
                            onClick={() => setShowCategories((prev) => !prev)}
                            className="hidden md:flex text-[14px] cursor-pointer items-center gap-2 bg-dark-primary text-white px-4 py-2 rounded-md font-semibold"
                    >
                        <Bars3Icon className="h-5 w-5"/>
                        Shop By Category
                    </button>

                    {/* Search */}
                    <div className="hidden md:flex flex-1">
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
                            <ShoppingCartIcon className="h-7 w-7"/>
                            <span
                                className="absolute -top-2 -right-2 bg-white text-primary text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                0
                            </span>
                        </div>

                        <button
                            className="flex cursor-pointer items-center gap-2 border border-white text-white px-4 text-[14px] py-2 rounded-md">
                            <UserIcon className="h-5 w-5"/>
                            Log in
                        </button>
                    </div>
                </div>
            </div>

            {/* ================= CATEGORY DROPDOWN ================= */}
            {showCategories && (
                <div ref={categoryBoxRef}
                     className="absolute top-full left-0 w-full bg-white border-t border-primary shadow-md z-50">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {categories.map((cat) => (
                                <div
                                    key={cat.name}
                                    className="group cat_wrap flex flex-col items-center text-center gap-3 cursor-pointer"
                                >
                                    <div
                                        className="w-10 h-10 rounded-full border border-gray-300 cat_border flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={cat.img}
                                            alt={cat.name}
                                            width={28}
                                            height={28}
                                            className="transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <h4 className="font-medium text-[14px] group-hover:text-primary">{cat.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

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