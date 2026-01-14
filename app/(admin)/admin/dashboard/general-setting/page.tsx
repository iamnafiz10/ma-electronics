"use client";
import React, {useRef, useState} from 'react';
import logo from '../../../../../public/assets/images/new-logo.png'
import gatewayimg from '../../../../../public/assets/images/payment-method.png'
import Image from "next/image";
import {RxCross2} from "react-icons/rx";

type TabKey = "basic" | "media" | "seo" | "footer";
type FooterTabKey = "basic" | "social" | "working";
type SocialKey = "facebook" | "twitter" | "youtube" | "linkedin";
type ExtraSocial = {
    id: number;
    key: SocialKey;
    url: string;
};
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Page() {
    //----------------- Main Tab ----------------//
    const [activeTab, setActiveTab] = useState<TabKey>("basic");
    const tabBtnClass = (key: TabKey) =>
        `py-2 px-4 rounded cursor-pointer text-[14px] transition
        ${
            activeTab === key
                ? "bg-primary text-white"
                : "border border-primary text-primary hover:bg-primary hover:text-white"
        }`;

    //---------------- Under Tab --------------//
    const [activeFooterTab, setActiveFooterTab] = useState<FooterTabKey>("basic");
    const footerTabBtnClass = (key: FooterTabKey) =>
        `py-1.5 px-3 rounded cursor-pointer text-[13px] transition
    ${
            activeFooterTab === key
                ? "bg-primary text-white"
                : "border border-primary text-primary hover:bg-primary hover:text-white"
        }`;

    //------------- Color Picker ------------//
    const [color, setColor] = useState("#0FABB1");

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

    //-------------- Add meta keywords ------------------//
    const [meta_keywords, setMetaKeywords] = useState<string[]>([]);
    const [keywordInput, setKeywordInput] = useState("");
    // Add keyword on Enter
    const handleKeyDownTwo = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();

            const keyword = keywordInput.trim();

            if (!keyword) return;
            if (meta_keywords.includes(keyword)) return;

            setMetaKeywords((prev) => [...prev, keyword]);
            setKeywordInput("");
        }
    };
    const removeKeyword = (index: number) => {
        setMetaKeywords((prev) =>
            prev.filter((_, i) => i !== index)
        );
    };

    //-------------- Gateway Image ----------------------//
    const [gatewayPreview, setGatewayPreview] = useState<string | null>(null);
    const gatewayFileRef = useRef<HTMLInputElement>(null);
    const handleGatewayImageChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setGatewayPreview(URL.createObjectURL(file));
    };

    const handleGatewayRemove = () => {
        setGatewayPreview(null);
        if (gatewayFileRef.current) {
            gatewayFileRef.current.value = "";
        }
    };

    //------------------ Social Media Added ------------------------//
    const [socialLinks, setSocialLinks] = useState<{
        fixed: Record<SocialKey, string>;
        extras: ExtraSocial[];
    }>({
        fixed: {
            facebook: "",
            twitter: "",
            youtube: "",
            linkedin: "",
        },
        extras: [],
    });
    const addExtraLink = (key: SocialKey) => {
        setSocialLinks((prev) => ({
            ...prev,
            extras: [
                ...prev.extras,
                {
                    id: Date.now() + Math.random(),
                    key,
                    url: "",
                },
            ],
        }));
    };

    const removeExtraLink = (id: number) => {
        setSocialLinks((prev) => ({
            ...prev,
            extras: prev.extras.filter((item) => item.id !== id),
        }));
    };

    const updateFixedLink = (key: SocialKey, value: string) => {
        setSocialLinks((prev) => ({
            ...prev,
            fixed: {
                ...prev.fixed,
                [key]: value,
            },
        }));
    };

    const updateExtraLink = (id: number, value: string) => {
        setSocialLinks((prev) => ({
            ...prev,
            extras: prev.extras.map((item) =>
                item.id === id ? {...item, url: value} : item
            ),
        }));
    };

    const socialConfig = [
        {key: "facebook", icon: "R-Icon", color: "bg-primary"},
        {key: "twitter", icon: "R-Icon", color: "bg-primary"},
        {key: "youtube", icon: "R-Icon", color: "bg-primary"},
        {key: "linkedin", icon: "R-Icon", color: "bg-primary"},
    ] as const;

    //----------- Time Select ----------------//
    const [timeM, setTimeM] = useState(new Date());
    const [timeMTill, setTimeMTill] = useState(new Date());
    const [timeS, setTimeS] = useState(new Date());
    const [timeSTill, setTimeSTill] = useState(new Date());
    const timePickerClass =
        "mt-1 w-full text-[14px] border border-gray-200 rounded px-3 py-1.5 focus:outline-none focus:border-primary";
    return (
        <>
            <section id="general-setting-section">
                <div className="container_wrap mt-10 md:mt-0">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>General Setting</h2>
                    </div>

                    <div className="tab_wrapper mt-6">
                        <div className="tabs block space-y-2 md:space-y-0 space-x-2 md:flex items-center">
                            <button
                                type="button"
                                onClick={() => setActiveTab("basic")}
                                className={tabBtnClass("basic")}
                            >
                                Basic Information
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveTab("media")}
                                className={tabBtnClass("media")}
                            >
                                Media
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveTab("seo")}
                                className={tabBtnClass("seo")}
                            >
                                SEO
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveTab("footer")}
                                className={tabBtnClass("footer")}
                            >
                                Footer & Contact Page
                            </button>
                        </div>

                        <div className="mt-4">
                            {activeTab === "basic" && (
                                <div className="basic_tab_content mt-4">
                                    <h2 className="text-[16px] font-semibold">
                                        Basic Information
                                    </h2>

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                App Name<span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="mt-1 w-full text-[14px] border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Home Page Title<span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Title"
                                                className="mt-1 w-full text-[14px] border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Code <span className="text-red-400">*</span>
                                            </label>

                                            {/* Input + Color Picker */}
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    value={color}
                                                    onChange={(e) => setColor(e.target.value)}
                                                    placeholder="Primary Colour Code"
                                                    className="mt-1 w-full text-[14px] border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary"
                                                />

                                                <input
                                                    type="color"
                                                    value={color}
                                                    onChange={(e) => setColor(e.target.value)}
                                                    className="h-9 w-10 cursor-pointer rounded border border-gray-200"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Currency Direction<span className="text-red-400">*</span>
                                            </label>
                                            <select
                                                className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                            >
                                                <option>Left ($100.00)</option>
                                                <option>Right (100.00$)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Decimal Separator<span className="text-red-400">*</span>
                                            </label>
                                            <select
                                                className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                            >
                                                <option>Comma (,)</option>
                                                <option>Dot (.)</option>
                                            </select>
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Thousand Separator<span className="text-red-400">*</span>
                                            </label>
                                            <select
                                                className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                            >
                                                <option>Comma (,)</option>
                                                <option>Dot (.)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button type='button'
                                            className="mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded">
                                        Save Info
                                    </button>
                                </div>
                            )}

                            {activeTab === "media" && (
                                <div className="media_tab_content">
                                    <h2 className="text-[16px] font-semibold">
                                        Media Information
                                    </h2>

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-2 text-[14px] font-medium">
                                                Current Image
                                            </label>

                                            <div className="flex items-center gap-4">
                                                {/* Image Preview Box */}
                                                <div
                                                    className="w-[200px] h-[50px] border border-gray-200 rounded flex items-center justify-center overflow-hidden">
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
                                            <h4 className="my-2 text-[12px] text-gray-500">
                                                Image Size Should Be 140 x 40.
                                            </h4>

                                            <input
                                                ref={fileRef}
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="w-1/2 text-[12px] border border-gray-300 rounded p-3 py-2
                                                focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full"></div>
                                    </div>
                                    <button type='button'
                                            className="mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded">
                                        Save Info
                                    </button>
                                </div>
                            )}
                            {activeTab === "seo" && (
                                <div className="seo_tab_content">
                                    <h2 className="text-[16px] font-semibold">
                                        Media Information
                                    </h2>

                                    <div className="input_box mt-4 block md:flex items-start gap-4">
                                        <div className="w-full">
                                            <label className="block mb-2 text-[14px] font-medium">
                                                Site Meta Keywords
                                            </label>

                                            {/* Input */}
                                            <input
                                                type="text"
                                                value={keywordInput}
                                                onChange={(e) => setKeywordInput(e.target.value)}
                                                onKeyDown={handleKeyDownTwo}
                                                placeholder="Type keyword and press Enter"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"
                                            />

                                            {/* Keywords */}
                                            {meta_keywords.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    {meta_keywords.map((keyword, index) => (
                                                        <div
                                                            key={index}
                                                            className="bg-gray-100 border border-gray-200
                                                                    px-3 py-1 rounded text-[13px] flex items-center gap-2"
                                                        >
                                                            <span>{keyword}</span>

                                                            <button
                                                                type="button"
                                                                onClick={() => removeKeyword(index)}
                                                                className="text-gray-500 hover:text-red-500 cursor-pointer"
                                                            >
                                                                <RxCross2 size={14}/>
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Site Meta Description
                                            </label>
                                            <textarea rows={3} placeholder="Enter Meta Description" className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"></textarea>
                                        </div>
                                    </div>
                                    <button type='button'
                                            className="mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded">
                                        Save Info
                                    </button>
                                </div>
                            )}

                            {activeTab === "footer" && (
                                <div className="footer_contact_tab_content">
                                    <h2 className="text-[16px] font-semibold">
                                        Footer & Contact Information
                                    </h2>
                                    {/* ---------- Footer Sub Tabs ---------- */}
                                    <div className="mt-6 flex flex-wrap gap-2 border-b border-gray-300 pb-3">
                                        <button
                                            type="button"
                                            onClick={() => setActiveFooterTab("basic")}
                                            className={footerTabBtnClass("basic")}
                                        >
                                            Basic
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setActiveFooterTab("social")}
                                            className={footerTabBtnClass("social")}
                                        >
                                            Social Links
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setActiveFooterTab("working")}
                                            className={footerTabBtnClass("working")}
                                        >
                                            Working Days
                                        </button>
                                    </div>

                                    {/* ---------- Footer Sub Tab Content ---------- */}
                                    <div className="mt-4">
                                        {activeFooterTab === "basic" && (
                                            <div className="basic_tab_content">
                                                <h2 className="text-[16px] font-semibold">
                                                    Basic
                                                </h2>

                                                <div className="input_box mt-4 block md:flex items-center gap-4">
                                                    <div className="w-full">
                                                        <label className="block mb-1 text-[14px] font-medium">
                                                            Store Address<span className="text-red-400">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="Address"
                                                            className="mt-1 w-full text-[14px] border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary"
                                                        />
                                                    </div>
                                                    <div className="w-full mt-4 md:mt-0">
                                                        <label className="block mb-1 text-[14px] font-medium">
                                                            Store Phone Number<span className="text-red-400">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="Number"
                                                            className="mt-1 w-full text-[14px] border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="input_box mt-4 block md:flex items-center gap-4">
                                                    <div className="w-full">
                                                        <label className="block mb-1 text-[14px] font-medium">
                                                            Store Email<span className="text-red-400">*</span>
                                                        </label>
                                                        <input
                                                            type="email"
                                                            placeholder="Email"
                                                            className="mt-1 w-full text-[14px] border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary"
                                                        />
                                                    </div>
                                                    <div className="w-full mt-4 md:mt-0">
                                                    </div>
                                                </div>

                                                <div className="input_box mt-4 block md:flex items-start gap-4">
                                                    <div className="w-full">
                                                        <label className="block mb-2 text-[14px] font-medium">
                                                            Gateway Image
                                                        </label>

                                                        <div className="flex items-center gap-4">
                                                            {/* Image Preview Box */}
                                                            <div
                                                                className="w-[300px] h-[50px] border border-gray-200 rounded flex items-center justify-center overflow-hidden">
                                                                {gatewayPreview ? (
                                                                    <img
                                                                        src={gatewayPreview}
                                                                        alt="Gateway Preview"
                                                                        className="w-full h-full object-contain"
                                                                    />
                                                                ) : (
                                                                    <Image src={gatewayimg} alt="gate-way-img"/>
                                                                )}
                                                            </div>

                                                            {/* Remove Button */}
                                                            {gatewayPreview && (
                                                                <button
                                                                    type="button"
                                                                    onClick={handleGatewayRemove}
                                                                    className="px-4 py-2 text-[13px] bg-red-500 text-white rounded cursor-pointer hover:bg-red-600"
                                                                >
                                                                    Remove
                                                                </button>
                                                            )}
                                                        </div>

                                                        <h4 className="my-2 text-[12px] text-gray-500">
                                                            Image Size Should Be 324 x 31.
                                                        </h4>

                                                        <input
                                                            ref={gatewayFileRef}
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={handleGatewayImageChange}
                                                            className="w-1/2 text-[12px] border border-gray-300 rounded p-3 py-2
                                                            focus:outline-none focus:border-primary"
                                                        />
                                                    </div>

                                                    <div className="w-full mt-4 md:mt-0">
                                                        <label className="block mb-1 text-[14px] font-medium">
                                                            Copyright<span className="text-red-400">*</span>
                                                        </label>
                                                        <textarea rows={3} placeholder="Enter Copyright" className="w-full text-[14px] border border-gray-300 rounded p-3 py-2
                                                        focus:outline-none focus:border-primary"></textarea>
                                                    </div>
                                                </div>


                                                <button type='button'
                                                        className="mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded">
                                                    Save Info
                                                </button>
                                            </div>
                                        )}

                                        {activeFooterTab === "social" && (
                                            <div className="basic_tab_content">
                                                <h2 className="text-[16px] font-semibold">
                                                    Social
                                                </h2>
                                                <div className="w-full md:w-1/2 space-y-2 mt-4">
                                                    {/* ---------- Fixed 4 Fields ---------- */}
                                                    {socialConfig.map((social) => (
                                                        <div key={social.key} className="flex items-center gap-3">
                                                            <div
                                                                className={`w-10 h-10 text-[10px] ${social.color} text-white rounded flex items-center justify-center font-bold`}
                                                            >
                                                                {social.icon}
                                                            </div>

                                                            <input
                                                                type="text"
                                                                placeholder="#"
                                                                value={socialLinks.fixed[social.key]}
                                                                onChange={(e) =>
                                                                    updateFixedLink(social.key, e.target.value)
                                                                }
                                                                className="flex-1 border border-gray-200 rounded px-3 py-2 text-[14px] outline-none focus:border-primary"
                                                            />

                                                            {/* + always visible */}
                                                            <button
                                                                type="button"
                                                                onClick={() => addExtraLink(social.key)}
                                                                className="cursor-pointer w-10 h-10 text-[20px] bg-primary text-white rounded flex items-center justify-center hover:bg-dark-primary"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    ))}

                                                    {/* ---------- Extra Fields (unlimited) ---------- */}
                                                    {socialLinks.extras.map((item) => {
                                                        const social = socialConfig.find(
                                                            (s) => s.key === item.key
                                                        );

                                                        return (
                                                            <div
                                                                key={item.id}
                                                                className="flex items-center gap-3 mt-2"
                                                            >
                                                                <div
                                                                    className={`w-10 h-10 text-[10px] ${social?.color} text-white rounded flex items-center justify-center font-bold`}
                                                                >
                                                                    {social?.icon}
                                                                </div>

                                                                <input
                                                                    type="text"
                                                                    placeholder="#"
                                                                    value={item.url}
                                                                    onChange={(e) =>
                                                                        updateExtraLink(item.id, e.target.value)
                                                                    }
                                                                    className="flex-1 border border-gray-200 rounded px-3 py-2 text-[14px] outline-none focus:border-primary"
                                                                />

                                                                {/* − only */}
                                                                <button
                                                                    type="button"
                                                                    onClick={() => removeExtraLink(item.id)}
                                                                    className="cursor-pointer w-10 h-10 text-[20px] bg-red-500 hover:bg-red-600 text-white rounded flex items-center justify-center"
                                                                >
                                                                    −
                                                                </button>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                <h4 className="text-[12px] text-gray-500 mt-4">
                                                    <b>Note: </b>Icon Link Must Be Form React Icons Library.
                                                </h4>
                                                <button type='button'
                                                        className="mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded">
                                                    Save Info
                                                </button>
                                            </div>
                                        )}

                                        {activeFooterTab === "working" && (
                                            <div className="basic_tab_content">
                                                <h2 className="text-[16px] font-semibold">Working</h2>

                                                {/* Monday–Friday */}
                                                <div className="input_box mt-4 block md:flex items-center gap-4">
                                                    <div className="w-full">
                                                        <label className="block mb-1 text-[14px] font-medium">
                                                            Monday–Friday from<span className="text-red-400">*</span>
                                                        </label>
                                                        <DatePicker
                                                            selected={timeM}
                                                            onChange={(date: Date | null) => date && setTimeM(date)}
                                                            showTimeSelect
                                                            showTimeSelectOnly
                                                            timeIntervals={15}
                                                            timeCaption="Time"
                                                            dateFormat="hh:mm aa" // 12-hour format with AM/PM
                                                            className={timePickerClass}
                                                        />
                                                    </div>

                                                    <div className="w-full mt-4 md:mt-0">
                                                        <label className="block mb-1 text-[14px] font-medium">
                                                            Till<span className="text-red-400">*</span>
                                                        </label>
                                                        <DatePicker
                                                            selected={timeMTill}
                                                            onChange={(date: Date | null) => date && setTimeMTill(date)}
                                                            showTimeSelect
                                                            showTimeSelectOnly
                                                            timeIntervals={15}
                                                            timeCaption="Time"
                                                            dateFormat="hh:mm aa"
                                                            className={timePickerClass}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Saturday–Sunday */}
                                                <div className="input_box mt-4 block md:flex items-center gap-4">
                                                    <div className="w-full">
                                                        <label className="block mb-1 text-[14px] font-medium">
                                                            Saturday–Sunday from<span className="text-red-400">*</span>
                                                        </label>
                                                        <DatePicker
                                                            selected={timeS}
                                                            onChange={(date: Date | null) => date && setTimeS(date)}
                                                            showTimeSelect
                                                            showTimeSelectOnly
                                                            timeIntervals={15}
                                                            timeCaption="Time"
                                                            dateFormat="hh:mm aa"
                                                            className={timePickerClass}
                                                        />
                                                    </div>

                                                    <div className="w-full mt-4 md:mt-0">
                                                        <label className="block mb-1 text-[14px] font-medium">
                                                            Till<span className="text-red-400">*</span>
                                                        </label>
                                                        <DatePicker
                                                            selected={timeSTill}
                                                            onChange={(date: Date | null) => date && setTimeSTill(date)}
                                                            showTimeSelect
                                                            showTimeSelectOnly
                                                            timeIntervals={15}
                                                            timeCaption="Time"
                                                            dateFormat="hh:mm aa"
                                                            className={timePickerClass}
                                                        />
                                                    </div>
                                                </div>

                                                <button
                                                    type="button"
                                                    className="mt-4 cursor-pointer py-2 px-4 text-[14px] bg-primary hover:bg-dark-primary text-white rounded"
                                                >
                                                    Save Info
                                                </button>
                                            </div>
                                        )}
                                    </div>
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