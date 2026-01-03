"use client";

import React from "react";
import Link from "next/link";

function Page() {
    return (
        <section className="bg-gray-50 py-10">
            <div className="max-w-5xl mx-auto px-4">
                {/* Page Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-primary">
                        About - Maa Electronics
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Your Trusted Source for Electronic Products
                    </p>
                </div>

                {/* Main Content */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                        Welcome to <span className="font-semibold">Maa Electronics</span> – Your Trusted Source for
                        Electronic Products!
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        At Maa Electronics, we blend the convenience of online shopping with the reliability of a
                        physical showroom. With our store located at{" "}
                        <span className="font-medium">
                            Nagar Bandar, Shibganj, Bogura, Bangladesh
                        </span>
                        , we proudly serve customers both in-person and online through our website{" "}
                        <Link href='www.maaelectronics.com'
                              className="font-medium text-primary hover:underline">maaelectronics.com</Link>.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        We specialize in high-quality air conditioners (ACs) and other essential electronic
                        appliances that bring comfort and innovation to your home or business.
                    </p>

                    {/* What We Offer */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3 text-gray-800">
                            What We Offer
                        </h2>
                        <ul className="space-y-2 text-gray-700 list-disc pl-5">
                            <li>
                                <span className="font-medium">Wide Range of ACs:</span> Top local and
                                international brands, including split, inverter, and commercial units.
                            </li>
                            <li>
                                <span className="font-medium">Genuine Products:</span> 100% original items
                                with official warranties and reliable after-sales support.
                            </li>
                            <li>
                                <span className="font-medium">Showroom Experience:</span> Visit our Bogura
                                showroom for expert advice and hands-on product comparison.
                            </li>
                            <li>
                                <span className="font-medium">Online Convenience:</span> A smooth and
                                user-friendly shopping experience from home.
                            </li>
                            <li>
                                <span className="font-medium">Home Delivery & Installation:</span> Fast
                                delivery with professional installation services.
                            </li>
                        </ul>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border border-gray-300 rounded-md p-5">
                            <h3 className="text-lg font-semibold mb-2 text-primary">
                                Our Mission
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                To make cooling and electronic solutions more accessible, affordable, and
                                dependable—whether you visit us in person or online.
                            </p>
                        </div>

                        <div className="border border-gray-300 rounded-md p-5">
                            <h3 className="text-lg font-semibold mb-2 text-primary">
                                Our Vision
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                To be the most trusted name in air conditioning and electronics retail in
                                Bangladesh, combining technology with personalized service.
                            </p>
                        </div>
                    </div>

                    {/* Visit Us */}
                    <div className="border-t border-gray-300 pt-6">
                        <h2 className="text-xl font-semibold mb-3 text-gray-800">
                            Visit Us
                        </h2>
                        <p className="text-gray-700">
                            📍 <span className="font-medium">Showroom Location: </span>
                            Nagar Bandar, Shibganj, Bogura, Bangladesh
                        </p>
                        <p className="text-gray-700 mt-1">
                            🌐 <span className="font-medium">Website:</span>{" "}
                            <a
                                href="https://www.maaelectronics.com/"
                                className="text-primary hover:underline"
                                target="_blank"
                            >
                                www.maaelectronics.com
                            </a>
                        </p>
                    </div>

                    {/* Closing */}
                    <p className="text-gray-700 leading-relaxed text-center pt-4">
                        We invite you to explore our showroom or shop online with confidence.
                        <br/>
                        <span className="font-semibold text-primary">
                            At Maa Electronics, your comfort is our priority.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Page;