"use client";

import React from "react";
import Link from "next/link";
import {FiMail, FiLock} from "react-icons/fi";
import {FaCheck} from "react-icons/fa";

function Page() {
    return (
        <section id="login-section" className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md mx-4 bg-white border border-gray-300 rounded-lg p-6">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-[20px] font-semibold text-primary">Maa Electronics!</h1>
                    <h2 className="text-[22px] font-bold mt-2">Login</h2>
                </div>

                {/* Form */}
                <form action="" method="POST" className="space-y-4">
                    {/* Email / Phone */}
                    <div>
                        <label className="block mb-1 text-[14px] font-medium">
                            Email / Phone Number
                        </label>
                        <div className="relative">
                            <FiMail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                            <input
                                type="text"
                                placeholder="Enter email or phone"
                                className="w-full text-[14px] border border-gray-300 rounded pl-8 pr-3 py-2
                                focus:outline-none focus:border-primary"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-1 text-[14px] font-medium">
                            Password
                        </label>
                        <div className="relative">
                            <FiLock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="w-full text-[14px] border border-gray-300 rounded-md pl-8 pr-3 py-2
                                focus:outline-none focus:border-primary"
                            />
                        </div>
                    </div>

                    {/* Remember / Forgot */}
                    <div className="flex items-center justify-between text-[14px]">
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                            <input type="checkbox" className="peer hidden"/>
                            <div
                                className="w-4 h-4 border border-gray-300 rounded
                                       flex items-center justify-center
                                       transition
                                       peer-checked:bg-primary
                                       peer-checked:border-primary"
                            >
                                <FaCheck
                                    className="text-white text-[10px] "
                                />
                            </div>
                            <span className="text-gray-800">
                                Remember Me
                            </span>
                        </label>

                        <Link
                            href="/user/forgot"
                            className="text-primary hover:underline"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-primary border border-primary cursor-pointer text-white py-2 rounded-md
                       hover:bg-transparent hover:text-primary transition"
                    >
                        Login
                    </button>
                </form>

                {/* Footer */}
                <div className="text-center mt-6 text-sm">
                    <span className="text-gray-600">Don&apos;t have an account?</span>{" "}
                    <Link
                        href="/user/register"
                        className="text-primary font-medium hover:underline"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Page;