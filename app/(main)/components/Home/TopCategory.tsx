import React from 'react';
import Image from "next/image";
import product1 from '../../../../public/assets/images/products/8.png'
import product2 from '../../../../public/assets/images/products/2.png'
import product3 from '../../../../public/assets/images/products/3.png'
import product4 from '../../../../public/assets/images/products/4.png'
import product5 from '../../../../public/assets/images/products/5.png'
import product6 from '../../../../public/assets/images/products/6.png'
import product7 from '../../../../public/assets/images/products/7.png'
import Link from "next/link";

function TopCategory() {
    return (
        <>
            <section id="top-category-section">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                        <Link href='/category/id' className="col">
                            <div
                                className="group h-[150px] relative flex flex-col text-center items-center justify-center gap-2 cursor-pointer bg-gray-100 rounded-xl">
                                <Image src={product1} width={120} height={80}
                                       className="group-hover:scale-110 transition duration-500"
                                       alt="product-image"/>
                                <div className="product_name absolute top-[120px]">
                                    <h1 className="font-semibold text-[14px]">
                                        Gaming Console
                                    </h1>
                                </div>
                            </div>
                        </Link>
                        <Link href='/category/id' className="col">
                            <div
                                className="group h-[150px] relative flex flex-col text-center items-center justify-center gap-2 cursor-pointer bg-gray-100 rounded-xl">
                                <Image src={product2} width={120} height={80}
                                       className="group-hover:scale-110 transition duration-500"
                                       alt="product-image"/>
                                <div className="product_name absolute top-[120px]">
                                    <h1 className="font-semibold text-[14px]">
                                        Gaming Laptop
                                    </h1>
                                </div>
                            </div>
                        </Link>
                        <Link href='/category/id' className="col">
                            <div
                                className="group h-[150px] relative flex flex-col text-center items-center justify-center gap-2 cursor-pointer bg-gray-100 rounded-xl">
                                <Image src={product3} width={120} height={80}
                                       className="group-hover:scale-110 transition duration-500"
                                       alt="product-image"/>
                                <div className="product_name absolute top-[120px]">
                                    <h1 className="font-semibold text-[14px]">
                                        Gaming Pad
                                    </h1>
                                </div>
                            </div>
                        </Link>
                        <Link href='/category/id' className="col">
                            <div
                                className="group h-[150px] relative flex flex-col text-center items-center justify-center gap-2 cursor-pointer bg-gray-100 rounded-xl">
                                <Image src={product4} width={100} height={80}
                                       className="group-hover:scale-110 transition duration-500"
                                       alt="product-image"/>
                                <div className="product_name absolute top-[120px]">
                                    <h1 className="font-semibold text-[14px]">
                                        Black Watch
                                    </h1>
                                </div>
                            </div>
                        </Link>
                        <Link href='/category/id' className="col">
                            <div
                                className="group h-[150px] relative flex flex-col text-center items-center justify-center gap-2 cursor-pointer bg-gray-100 rounded-xl">
                                <Image src={product5} width={110} height={80}
                                       className="group-hover:scale-110 transition duration-500"
                                       alt="product-image"/>
                                <div className="product_name absolute top-[120px]">
                                    <h1 className="font-semibold text-[14px]">
                                        iWatch For Men
                                    </h1>
                                </div>
                            </div>
                        </Link>
                        <Link href='/category/id' className="col">
                            <div
                                className="group h-[150px] relative flex flex-col text-center items-center justify-center gap-2 cursor-pointer bg-gray-100 rounded-xl">
                                <Image src={product6} width={110} height={80}
                                       className="group-hover:scale-110 transition duration-500"
                                       alt="product-image"/>
                                <div className="product_name absolute top-[120px]">
                                    <h1 className="font-semibold text-[14px]">
                                        3D View Port
                                    </h1>
                                </div>
                            </div>
                        </Link>
                        <Link href='/category/id' className="col">
                            <div
                                className="group h-[150px] relative flex flex-col text-center items-center justify-center gap-2 cursor-pointer bg-gray-100 rounded-xl">
                                <Image src={product7} width={110} height={80}
                                       className="group-hover:scale-110 transition duration-500"
                                       alt="product-image"/>
                                <div className="product_name absolute top-[120px]">
                                    <h1 className="font-semibold text-[14px]">
                                        Projector Console
                                    </h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TopCategory;