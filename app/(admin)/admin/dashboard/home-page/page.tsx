"use client";
import React, {useRef, useState} from 'react';
import logo from '../../../../../public/assets/images/new-logo.png'
import sliderhero from '../../../../../public/assets/images/offer1.jpg'
import Image from "next/image";

type TabKey = "top" | "hero" | "popular" | "three";

function Page() {
    //----------------- Main Tab ----------------//
    const [activeTab, setActiveTab] = useState<TabKey>("top");
    const tabBtnClass = (key: TabKey) =>
        `py-2 px-4 rounded cursor-pointer text-[14px] transition
        ${
            activeTab === key
                ? "bg-primary text-white"
                : "border border-primary text-primary hover:bg-primary hover:text-white"
        }`;

    //------------------Image preview --------------//
    const [preview, setPreview] = useState<string | null>(null);
    const fileRef = useRef<HTMLInputElement | null>(null);
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };
    const handleRemove = () => {
        setPreview(null);
        if (fileRef.current) {
            fileRef.current.value = "";
        }
    };

    //------------------Image One preview --------------//
    const [previewOne, setPreviewOne] = useState<string | null>(null);
    const fileRefOne = useRef<HTMLInputElement | null>(null);
    const handleImageChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreviewOne(URL.createObjectURL(file));
        }
    };
    const handleRemoveOne = () => {
        setPreviewOne(null);
        if (fileRefOne.current) {
            fileRefOne.current.value = "";
        }
    };

    //------------------Image Two preview --------------//
    const [previewTwo, setPreviewTwo] = useState<string | null>(null);
    const fileRefTwo = useRef<HTMLInputElement | null>(null);
    const handleImageChangeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreviewTwo(URL.createObjectURL(file));
        }
    };
    const handleRemoveTwo = () => {
        setPreviewTwo(null);
        if (fileRefTwo.current) {
            fileRefTwo.current.value = "";
        }
    };

    return (
        <>
            <section id="general-setting-section">
                <div className="container_wrap mt-10 md:mt-0">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Home Page</h2>
                    </div>

                    <div className="tab_wrapper mt-6">
                        <div className="tabs block space-y-2 md:space-y-0 space-x-2 md:flex items-center">
                            <button
                                type="button"
                                onClick={() => setActiveTab("top")}
                                className={tabBtnClass("top")}
                            >
                                Top Ad
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveTab("hero")}
                                className={tabBtnClass("hero")}
                            >
                                Hero Section Banner
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveTab("popular")}
                                className={tabBtnClass("popular")}
                            >
                                Popular Categories
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveTab("three")}
                                className={tabBtnClass("three")}
                            >
                                Three Column Category
                            </button>
                        </div>

                        <div className="mt-4">
                            {activeTab === "top" && (
                                <div className="top_tab_content mt-4">
                                    <h2 className="text-[16px] font-semibold">
                                        Top Ad
                                    </h2>

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-2 text-[14px] font-medium">
                                                Current Image
                                            </label>

                                            <div className="flex items-center gap-4">
                                                {/* Image Preview Box */}
                                                <div
                                                    className="w-full h-[50px] border border-gray-200 rounded flex items-center justify-center overflow-hidden">
                                                    {preview ? (
                                                        <img
                                                            src={preview}
                                                            alt="Logo Preview"
                                                            className="w-full h-full object-contain"
                                                        />
                                                    ) : (
                                                        <Image src={logo} alt="Logoimg"/>
                                                    )}
                                                </div>

                                                {/* Remove Button */}
                                                {preview && (
                                                    <button
                                                        type="button"
                                                        onClick={handleRemove}
                                                        className="px-4 py-2 text-[13px] bg-red-500 text-white rounded cursor-pointer hover:bg-red-600"
                                                    >
                                                        Remove
                                                    </button>
                                                )}
                                            </div>
                                            <input
                                                ref={fileRef}
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="mt-4 w-full md:w-1/5 text-[12px] border border-gray-300 rounded p-3 py-2
                                                focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Title<span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Title"
                                                className="mt-1 w-full text-[14px] border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Subtitle
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Subtitle"
                                                className="mt-1 w-full text-[14px] border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                URL<span className="text-red-400">*</span>
                                            </label>

                                            {/* Input + Color Picker */}
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    placeholder="#"
                                                    className="mt-1 w-full text-[14px] border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Status<span className="text-red-400">*</span>
                                            </label>
                                            <select
                                                className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                            >
                                                <option>On</option>
                                                <option>Off</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button type='button'
                                            className="mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded">
                                        Save Info
                                    </button>
                                </div>
                            )}

                            {activeTab === "hero" && (
                                <div className="hero_tab_content">
                                    <h2 className="text-[16px] font-semibold">
                                        Hero Section
                                    </h2>

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-2 text-[14px] font-medium">
                                                Current Image (1)
                                            </label>

                                            <div className="flex items-center gap-4">
                                                {/* Image Preview Box */}
                                                <div
                                                    className="w-[200px] h-[100px] border border-gray-200 rounded flex items-center justify-center overflow-hidden">
                                                    {previewOne ? (
                                                        <img
                                                            src={previewOne}
                                                            alt="Logo Preview"
                                                            className="w-full h-full object-contain"
                                                        />
                                                    ) : (
                                                        <Image src={sliderhero} alt="Logoimg"/>
                                                    )}
                                                </div>

                                                {/* Remove Button */}
                                                {previewOne && (
                                                    <button
                                                        type="button"
                                                        onClick={handleRemoveOne}
                                                        className="px-4 py-2 text-[13px] bg-red-500 text-white rounded cursor-pointer hover:bg-red-600"
                                                    >
                                                        Remove
                                                    </button>
                                                )}
                                            </div>
                                            <h4 className="my-2 text-[12px] text-gray-500">
                                                Image Size Should Be 496 x 204.
                                            </h4>

                                            <input
                                                ref={fileRefOne}
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChangeOne}
                                                className="w-1/2 text-[12px] border border-gray-300 rounded p-3 py-2
                                                focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full"></div>
                                    </div>
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Title<span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Title"
                                                className="mt-1 w-full text-[14px] border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Subtitle
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Subtitle"
                                                className="mt-1 w-full text-[14px] border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                URL 1<span className="text-red-400">*</span>
                                            </label>

                                            {/* Input + Color Picker */}
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    placeholder="#"
                                                    className="mt-1 w-full text-[14px] border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 mt-6"></div>

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-2 text-[14px] font-medium">
                                                Current Image (2)
                                            </label>

                                            <div className="flex items-center gap-4">
                                                {/* Image Preview Box */}
                                                <div
                                                    className="w-[200px] h-[100px] border border-gray-200 rounded flex items-center justify-center overflow-hidden">
                                                    {previewTwo ? (
                                                        <img
                                                            src={previewTwo}
                                                            alt="Logo Preview"
                                                            className="w-full h-full object-contain"
                                                        />
                                                    ) : (
                                                        <Image src={sliderhero} alt="Logoimg"/>
                                                    )}
                                                </div>

                                                {/* Remove Button */}
                                                {previewTwo && (
                                                    <button
                                                        type="button"
                                                        onClick={handleRemoveTwo}
                                                        className="px-4 py-2 text-[13px] bg-red-500 text-white rounded cursor-pointer hover:bg-red-600"
                                                    >
                                                        Remove
                                                    </button>
                                                )}
                                            </div>
                                            <h4 className="my-2 text-[12px] text-gray-500">
                                                Image Size Should Be 496 x 204.
                                            </h4>

                                            <input
                                                ref={fileRefTwo}
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChangeTwo}
                                                className="w-1/2 text-[12px] border border-gray-300 rounded p-3 py-2
                                                focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full"></div>
                                    </div>
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Title<span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Title"
                                                className="mt-1 w-full text-[14px] border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Subtitle
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Subtitle"
                                                className="mt-1 w-full text-[14px] border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                URL 2<span className="text-red-400">*</span>
                                            </label>

                                            {/* Input + Color Picker */}
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    placeholder="#"
                                                    className="mt-1 w-full text-[14px] border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                        </div>
                                    </div>

                                    <button type='button'
                                            className="mt-2 md:mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded">
                                        Save Info
                                    </button>
                                </div>
                            )}
                            {activeTab === "popular" && (
                                <div className="popular_tab_content">
                                    <h2 className="text-[16px] font-semibold">
                                        Popular Category
                                    </h2>

                                    <div className="input_box mt-4 block md:flex items-start gap-4">
                                        <div className="w-full">
                                            <label className="block mb-2 text-[14px] font-medium">
                                                Section Title<span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Title"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 mt-6"></div>

                                    <div className="one">
                                        <h2 className="text-[16px] text-primary font-semibold mt-4">
                                            Category 1:
                                        </h2>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Category<span className="text-red-400">*</span>
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Sub Category
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Child Category
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                            </div>
                                        </div>
                                    </div>

                                    <div className="two">
                                        <h2 className="text-[16px] text-primary font-semibold mt-4">
                                            Category 2:
                                        </h2>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Category<span className="text-red-400">*</span>
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Sub Category
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Child Category
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                            </div>
                                        </div>
                                    </div>

                                    <div className="three">
                                        <h2 className="text-[16px] text-primary font-semibold mt-4">
                                            Category 3:
                                        </h2>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Category<span className="text-red-400">*</span>
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Sub Category
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Child Category
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                            </div>
                                        </div>
                                    </div>

                                    <div className="four">
                                        <h2 className="text-[16px] text-primary font-semibold mt-4">
                                            Category 4:
                                        </h2>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Category<span className="text-red-400">*</span>
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Sub Category
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Child Category
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                            </div>
                                        </div>
                                    </div>

                                    <button type='button'
                                            className="mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded">
                                        Save Info
                                    </button>
                                </div>
                            )}
                            {activeTab === "three" && (
                                <div className="three_tab_content">
                                    <h2 className="text-[16px] font-semibold">
                                        Three Column Category
                                    </h2>

                                    <div className="input_box mt-4 block md:flex items-start gap-4">
                                        <div className="w-full">
                                            <label className="block mb-2 text-[14px] font-medium">
                                                Section Title<span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Title"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 mt-6"></div>

                                    <div className="one">
                                        <h2 className="text-[16px] text-primary font-semibold mt-4">
                                            Category 1:
                                        </h2>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Category<span className="text-red-400">*</span>
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Sub Category
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Child Category
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                            </div>
                                        </div>
                                    </div>

                                    <div className="two">
                                        <h2 className="text-[16px] text-primary font-semibold mt-4">
                                            Category 2:
                                        </h2>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Category<span className="text-red-400">*</span>
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Sub Category
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Child Category
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                            </div>
                                        </div>
                                    </div>

                                    <div className="three">
                                        <h2 className="text-[16px] text-primary font-semibold mt-4">
                                            Category 3:
                                        </h2>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Category<span className="text-red-400">*</span>
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Sub Category
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Child Category
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                            </div>
                                        </div>
                                    </div>

                                    <div className="four">
                                        <h2 className="text-[16px] text-primary font-semibold mt-4">
                                            Category 4:
                                        </h2>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Category<span className="text-red-400">*</span>
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                    <option>Category Here</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Sub Category
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                    <option>Sub Category Here</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Select Child Category
                                                </label>
                                                <select
                                                    className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                                >
                                                    <option>Select</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                    <option>Child Category Here</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                            </div>
                                        </div>
                                    </div>

                                    <button type='button'
                                            className="mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded">
                                        Save Info
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;