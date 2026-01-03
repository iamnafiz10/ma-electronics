"use client";

import React from "react";

function Page() {
    return (
        <section className="bg-gray-50 py-10">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-primary">
                        Terms & Conditions
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Effective Date: January 1, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                        Welcome to <span className="font-semibold">Maa Electronics</span>.
                        These Terms and Conditions govern your use of our website{" "}
                        <span className="font-medium">www.maaelectronics.com</span> and
                        your relationship with us when you make a purchase online or in
                        our physical showroom.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        By accessing or using our services, you agree to comply with and
                        be bound by the following terms. Please read them carefully.
                    </p>

                    {/* 1 */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">1. General</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                                Maa Electronics is operated from Nagar Bandar, Shibganj,
                                Bogura, Bangladesh.
                            </li>
                            <li>
                                We sell electronic products, primarily air conditioners,
                                both online and offline.
                            </li>
                            <li>
                                We reserve the right to modify these Terms & Conditions at
                                any time. Changes will be posted on this page.
                            </li>
                        </ul>
                    </div>

                    {/* 2 */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            2. Products & Pricing
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                                All prices listed are in Bangladeshi Taka (BDT) and include
                                VAT unless stated otherwise.
                            </li>
                            <li>
                                We make every effort to ensure product details and prices
                                are accurate. In case of any error, we reserve the right to
                                correct it.
                            </li>
                            <li>Product availability may vary based on stock.</li>
                        </ul>
                    </div>

                    {/* 3 */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            3. Orders & Payments
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                                Orders can be placed via our website or directly at our
                                showroom.
                            </li>
                            <li>
                                Full payment or a required advance must be made to confirm
                                the order.
                            </li>
                            <li>
                                We accept various payment methods, including mobile
                                banking and cash on delivery (where applicable).
                            </li>
                            <li>
                                Maa Electronics reserves the right to cancel any order due
                                to errors, payment issues, or suspected fraud.
                            </li>
                        </ul>
                    </div>

                    {/* 4 */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            4. Shipping & Delivery
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                                We deliver across Bangladesh. Delivery time and charges may
                                vary based on location and product type.
                            </li>
                            <li>
                                We aim to deliver products as quickly as possible. Any
                                delay will be communicated to you.
                            </li>
                            <li>
                                Installation services are available for selected products,
                                such as air conditioners.
                            </li>
                        </ul>
                    </div>

                    {/* 5 */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            5. Return & Warranty Policy
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                                Products may be eligible for return or replacement if
                                found defective on delivery (terms apply).
                            </li>
                            <li>
                                All electronic items come with a manufacturer warranty.
                                Warranty terms vary by brand and product.
                            </li>
                            <li>
                                To claim warranty or service, please keep your invoice or
                                order number as proof of purchase.
                            </li>
                        </ul>
                    </div>

                    {/* 6 */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            6. User Account & Conduct
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                                You are responsible for keeping your account details
                                confidential.
                            </li>
                            <li>
                                You agree not to misuse the site or its services, including
                                spreading malware, false information, or fraud.
                            </li>
                            <li>
                                We reserve the right to block or suspend access if misuse
                                is detected.
                            </li>
                        </ul>
                    </div>

                    {/* 7 */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            7. Limitation of Liability
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Any indirect, incidental, or consequential damages</li>
                            <li>Delays in delivery caused by third-party services</li>
                            <li>
                                Product damage due to misuse or improper installation not
                                handled by us
                            </li>
                        </ul>
                    </div>

                    {/* 8 */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            8. Governing Law
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            These Terms & Conditions are governed by the laws of
                            Bangladesh. Any disputes will be resolved in the courts of
                            Bogura, Bangladesh.
                        </p>
                    </div>

                    {/* 9 */}
                    <div className="border-t border-gray-300 pt-6">
                        <h2 className="text-xl font-semibold mb-3">
                            9. Contact Us
                        </h2>
                        <div className="space-y-2 text-gray-700">
                            <p>
                                📍 <span className="font-medium">Address:</span> Nagar
                                Bandar, Shibganj, Bogura, Bangladesh
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