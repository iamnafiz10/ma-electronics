"use client";

import React from "react";

function Page() {
    return (
        <section id="login-section" className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md mx-4 bg-white border border-gray-300 rounded-lg p-6">
                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-[22px] font-bold mt-2">
                        Forgot your password?
                    </h2>
                </div>

                {/* Form */}
                <form action="" method="POST" className="space-y-4">
                    {/* Email / Phone */}
                    <div>
                        <label className="block mb-1 text-[14px] font-medium">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                required
                                placeholder="Enter your email address"
                                className="w-full text-[14px] border border-gray-300 rounded px-4 py-2
                                focus:outline-none focus:border-primary"
                            />
                        </div>
                    </div>

                    {/* Reset Button */}
                    <button
                        type="submit"
                        className="w-full text-[14px] bg-primary border border-primary cursor-pointer text-white py-2 rounded-md
                       hover:bg-transparent hover:text-primary transition"
                    >
                        Get New Password
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Page;