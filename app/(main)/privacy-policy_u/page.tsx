"use client";

import React from "react";
import Link from "next/link";

function Page() {
    return (
        <section className="bg-gray-50 py-10">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-primary">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Effective Date: January 1, 2026
                    </p>
                </div>

                {/* Content Box */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                        At <span className="font-semibold">Maa Electronics</span> (accessible at{" "}
                        <Link href='https://www.maaelectronics.com'
                              className="font-medium text-primary hover:underline">www.maaelectronics.com</Link>), we
                        are
                        committed to protecting your privacy. This Privacy Policy outlines
                        how we collect, use, and safeguard your personal information when
                        you visit our website or shop at our showroom.
                    </p>

                    {/* Section 1 */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            1. Information We Collect
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Name, address, phone number, and email address</li>
                            <li>Billing and shipping information</li>
                            <li>
                                Payment details (processed securely via third-party
                                gateways)
                            </li>
                            <li>Purchase history and preferences</li>
                            <li>
                                Website usage data (e.g., cookies or analytics tools)
                            </li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            2. How We Use Your Information
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Process and deliver your orders</li>
                            <li>Provide customer support and respond to inquiries</li>
                            <li>Improve our website and services</li>
                            <li>
                                Send order updates, promotional offers, or important
                                notices (you can opt-out anytime)
                            </li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            3. Sharing Your Information
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We do not sell or rent your personal information. However, we
                            may share data with:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
                            <li>
                                Trusted service providers (e.g., delivery companies,
                                payment processors)
                            </li>
                            <li>
                                Government or legal authorities if required by law
                            </li>
                        </ul>
                    </div>

                    {/* Section 4 */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            4. Data Security
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We use appropriate security measures to protect your
                            information from unauthorized access, alteration, or
                            disclosure. Payment information is encrypted and processed
                            securely through trusted third-party providers.
                        </p>
                    </div>

                    {/* Section 5 */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            5. Your Rights
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Access or correct your personal information</li>
                            <li>Request deletion of your data (where applicable)</li>
                            <li>Opt-out of promotional communications</li>
                        </ul>
                        <p className="text-gray-700 mt-2">
                            To request any changes or access to your data, please contact
                            us.
                        </p>
                    </div>

                    {/* Section 6 */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            6. Cookies
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our website uses cookies to improve user experience and track
                            website performance. You can disable cookies through your
                            browser settings if you prefer.
                        </p>
                    </div>

                    {/* Section 7 */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            7. Changes to This Policy
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may update this Privacy Policy from time to time. Changes
                            will be posted on this page with the updated effective date.
                        </p>
                    </div>

                    {/* Section 8 */}
                    <div className="border-t border-gray-300 pt-6">
                        <h2 className="text-xl font-semibold mb-3">
                            8. Contact Us
                        </h2>
                        <div className="space-y-2 text-gray-700">
                            <p>
                                📍 <span className="font-medium">Address:</span> Nagar Bandar, Shibganj, Bogura
                                Bangladesh
                            </p>
                            <p>
                                📞 <span className="font-medium">Phone:</span> 01711-318433
                            </p>
                            <p>
                                📧 <span className="font-medium">Email:</span>{" "}
                                <a
                                    href="mailto:maaelectronics.shib1982@gmail.com"
                                    className="text-primary hover:underline"
                                >
                                    maaelectronics.shib1982@gmail.com
                                </a>
                            </p>
                            <p>
                                🌐 <span className="font-medium">Website:</span>{" "}
                                <a
                                    href="https://www.maaelectronics.com"
                                    target="_blank"
                                    className="text-primary hover:underline"
                                >
                                    www.maaelectronics.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page;