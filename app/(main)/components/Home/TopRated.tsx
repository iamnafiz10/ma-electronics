import React, {useEffect, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation, Autoplay} from 'swiper/modules';
import product1 from '../../../../public/assets/images/products/9.png';
import product2 from '../../../../public/assets/images/products/10.png';
import product3 from '../../../../public/assets/images/products/11.png';
import product4 from '../../../../public/assets/images/products/12.png';
import product5 from '../../../../public/assets/images/products/13.png';
import product6 from '../../../../public/assets/images/products/14.png';
import Image from "next/image";
import {StarIcon} from "@heroicons/react/16/solid";
import {HiOutlineArrowLeft, HiOutlineArrowRight} from "react-icons/hi";

function TopRated() {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setReady(true), 300);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <section id="new-product-section">
                <div className="container">
                    {/*Box Header*/}
                    <div className="box_header flex items-center justify-between">
                        <h2 className="text-[25px] font-bold text-gray-800 flex items-center">
                            {/* Vertical line */}
                            <span className="block w-2 h-10 bg-primary mr-2"></span>
                            Top Rated
                        </h2>
                        <div
                            className="more_button py-2 px-4 text-[14px] bg-primary border border-primary hover:bg-transparent hover:text-primary cursor-pointer text-white rounded">
                            View More
                        </div>
                    </div>
                    {ready ?
                        <div className="relative group mt-4">
                            <Swiper
                                modules={[Autoplay, Navigation]}
                                // Default parameters
                                slidesPerView={5}
                                spaceBetween={20}
                                pagination={{clickable: true}}
                                breakpoints={{
                                    300: {
                                        slidesPerView: 1,
                                        spaceBetween: 0,
                                    },
                                    576: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    },
                                    1200: {
                                        slidesPerView: 5,
                                        spaceBetween: 20,
                                    },
                                }}
                                loop={true}
                                autoplay={{delay: 5000, pauseOnMouseEnter: false}}
                                navigation={{nextEl: ".button-next-slide", prevEl: ".button-prev-slide"}}
                                className="mySwiper custom_swiper"
                            >
                                <SwiperSlide>
                                    <div
                                        className="col rounded-xl cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

                                        {/* PRODUCT IMAGE */}
                                        <div
                                            className="relative aspect-[1/1] overflow-hidden rounded-xl transform transition duration-500 hover:scale-110">
                                            <Image
                                                src={product1}
                                                alt="Wireless Headphone"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* CATEGORY */}
                                        <p className="mt-[10px] text-[12px] uppercase tracking-wide text-gray-500">
                                            Electronics
                                        </p>

                                        {/* PRODUCT NAME */}
                                        <h3 className="mt-[6px] text-[15px] font-semibold leading-[1.4] text-gray-800">
                                            Black Jacket
                                        </h3>

                                        {/* RATING */}
                                        <div className="mt-[6px] flex items-center gap-[4px]">
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-gray-300"/>
                                            <span className="ml-[4px] text-[12px] text-gray-500">(4.0)</span>
                                        </div>

                                        {/* PRICE */}
                                        <div className="mt-[10px] flex items-center gap-[8px]">
                                <span className="text-[16px] font-bold text-primary">
                                  ৳2,999
                                </span>
                                            <span className="text-[14px] text-gray-400 line-through">
                                  ৳3,500
                                </span>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div
                                        className="col rounded-xl cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

                                        {/* PRODUCT IMAGE */}
                                        <div
                                            className="relative aspect-[1/1] overflow-hidden rounded-xl transform transition duration-500 hover:scale-110">
                                            <Image
                                                src={product2}
                                                alt="Wireless Headphone"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* CATEGORY */}
                                        <p className="mt-[10px] text-[12px] uppercase tracking-wide text-gray-500">
                                            Electronics
                                        </p>

                                        {/* PRODUCT NAME */}
                                        <h3 className="mt-[6px] text-[15px] font-semibold leading-[1.4] text-gray-800">
                                            Yellow T-Shirt
                                        </h3>

                                        {/* RATING */}
                                        <div className="mt-[6px] flex items-center gap-[4px]">
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-gray-300"/>
                                            <span className="ml-[4px] text-[12px] text-gray-500">(4.0)</span>
                                        </div>

                                        {/* PRICE */}
                                        <div className="mt-[10px] flex items-center gap-[8px]">
                                <span className="text-[16px] font-bold text-primary">
                                  ৳2,999
                                </span>
                                            <span className="text-[14px] text-gray-400 line-through">
                                  ৳3,500
                                </span>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div
                                        className="col rounded-xl cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

                                        {/* PRODUCT IMAGE */}
                                        <div
                                            className="relative aspect-[1/1] overflow-hidden rounded-xl transform transition duration-500 hover:scale-110">
                                            <Image
                                                src={product3}
                                                alt="Wireless Headphone"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* CATEGORY */}
                                        <p className="mt-[10px] text-[12px] uppercase tracking-wide text-gray-500">
                                            Electronics
                                        </p>

                                        {/* PRODUCT NAME */}
                                        <h3 className="mt-[6px] text-[15px] font-semibold leading-[1.4] text-gray-800">
                                            Special Hoodie
                                        </h3>

                                        {/* RATING */}
                                        <div className="mt-[6px] flex items-center gap-[4px]">
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-gray-300"/>
                                            <span className="ml-[4px] text-[12px] text-gray-500">(4.0)</span>
                                        </div>

                                        {/* PRICE */}
                                        <div className="mt-[10px] flex items-center gap-[8px]">
                                <span className="text-[16px] font-bold text-primary">
                                  ৳2,999
                                </span>
                                            <span className="text-[14px] text-gray-400 line-through">
                                  ৳3,500
                                </span>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div
                                        className="col rounded-xl cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

                                        {/* PRODUCT IMAGE */}
                                        <div
                                            className="relative aspect-[1/1] overflow-hidden rounded-xl transform transition duration-500 hover:scale-110">
                                            <Image
                                                src={product4}
                                                alt="Wireless Headphone"
                                                fill
                                                className="object-contain w-[80%]"
                                            />
                                        </div>

                                        {/* CATEGORY */}
                                        <p className="mt-[10px] text-[12px] uppercase tracking-wide text-gray-500">
                                            Electronics
                                        </p>

                                        {/* PRODUCT NAME */}
                                        <h3 className="mt-[6px] text-[15px] font-semibold leading-[1.4] text-gray-800">
                                            Formal Dress
                                        </h3>

                                        {/* RATING */}
                                        <div className="mt-[6px] flex items-center gap-[4px]">
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-gray-300"/>
                                            <span className="ml-[4px] text-[12px] text-gray-500">(4.0)</span>
                                        </div>

                                        {/* PRICE */}
                                        <div className="mt-[10px] flex items-center gap-[8px]">
                                <span className="text-[16px] font-bold text-primary">
                                  ৳2,999
                                </span>
                                            <span className="text-[14px] text-gray-400 line-through">
                                  ৳3,500
                                </span>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div
                                        className="col rounded-xl cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

                                        {/* PRODUCT IMAGE */}
                                        <div
                                            className="relative aspect-[1/1] overflow-hidden rounded-xl transform transition duration-500 hover:scale-110">
                                            <Image
                                                src={product5}
                                                alt="Wireless Headphone"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* CATEGORY */}
                                        <p className="mt-[10px] text-[12px] uppercase tracking-wide text-gray-500">
                                            Formal Dress
                                        </p>

                                        {/* PRODUCT NAME */}
                                        <h3 className="mt-[6px] text-[15px] font-semibold leading-[1.4] text-gray-800">
                                            White T-Shirt
                                        </h3>

                                        {/* RATING */}
                                        <div className="mt-[6px] flex items-center gap-[4px]">
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-gray-300"/>
                                            <span className="ml-[4px] text-[12px] text-gray-500">(4.0)</span>
                                        </div>

                                        {/* PRICE */}
                                        <div className="mt-[10px] flex items-center gap-[8px]">
                                <span className="text-[16px] font-bold text-primary">
                                  ৳2,999
                                </span>
                                            <span className="text-[14px] text-gray-400 line-through">
                                  ৳3,500
                                </span>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div
                                        className="col rounded-xl cursor-pointer border border-gray-200 hover:border-primary bg-white p-[10px] transition">

                                        {/* PRODUCT IMAGE */}
                                        <div
                                            className="relative aspect-[1/1] overflow-hidden rounded-xl transform transition duration-500 hover:scale-110">
                                            <Image
                                                src={product6}
                                                alt="Wireless Headphone"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* CATEGORY */}
                                        <p className="mt-[10px] text-[12px] uppercase tracking-wide text-gray-500">
                                            Electronics
                                        </p>

                                        {/* PRODUCT NAME */}
                                        <h3 className="mt-[6px] text-[15px] font-semibold leading-[1.4] text-gray-800">
                                            Polo T-Shirt
                                        </h3>

                                        {/* RATING */}
                                        <div className="mt-[6px] flex items-center gap-[4px]">
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-yellow-400"/>
                                            <StarIcon className="h-[14px] w-[14px] text-gray-300"/>
                                            <span className="ml-[4px] text-[12px] text-gray-500">(4.0)</span>
                                        </div>

                                        {/* PRICE */}
                                        <div className="mt-[10px] flex items-center gap-[8px]">
                                <span className="text-[16px] font-bold text-primary">
                                  ৳2,999
                                </span>
                                            <span className="text-[14px] text-gray-400 line-through">
                                  ৳3,500
                                </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* Slider Control Button */}
                                <div className="slider_button_wrap">
                                    <div
                                        className="button-prev-slide absolute top-[50%] w-[30px] h-[30px] bg-primary flex items-center justify-center rounded text-white cursor-pointer left-3 opacity-0 group-hover:opacity-100 z-10 transition-all duration-500">
                                        <HiOutlineArrowLeft/>
                                    </div>
                                    <div
                                        className="button-next-slide absolute top-[50%] w-[30px] h-[30px] bg-primary flex items-center justify-center rounded text-white cursor-pointer right-3 opacity-0 group-hover:opacity-100 z-10 transition-all duration-500">
                                        <HiOutlineArrowRight/>
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                        : <div></div>
                    }
                </div>
            </section>
        </>
    );
}

export default TopRated;