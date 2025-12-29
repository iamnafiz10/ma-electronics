"use client";
import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import sliderOneImg from '../../../../public/assets/images/slider-one.jpeg';
import sliderTwoImg from '../../../../public/assets/images/slider-two.jpeg'
import offerOne from '../../../../public/assets/images/offer1.jpg'
import offerTwo from '../../../../public/assets/images/offer2.jpg'
import Image from "next/image";
import {HiOutlineArrowLeft, HiOutlineArrowRight} from "react-icons/hi";

function Slider() {
    return (
        <>
            <section id="slider-section">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="col md:col-span-9">
                            <div className="relative group">
                                <Swiper
                                    modules={[Navigation]}
                                    loop={true}
                                    autoplay={{delay: 5000, pauseOnMouseEnter: false}}
                                    navigation={{nextEl: ".button-next-slide", prevEl: ".button-prev-slide"}}
                                    className="mySwiper rounded"
                                >
                                    <SwiperSlide>
                                        <div className="wrapper relative">
                                            <Image
                                                src={sliderOneImg}
                                                className="w-full h-[250px] md:h-[410px] rounded"
                                                alt="SliderOne"
                                            />
                                            <div
                                                className="content_area absolute top-1/2 left-[30px] sm:left-[60px] -translate-y-1/2">
                                                <h2 className="text-gray-800 text-[25px] sm:text-[35px] font-[900] uppercase">
                                                    UP TO 20% OFF
                                                </h2>
                                                <h4 className="text-[18px] font-semibold text-black">
                                                    Starting from 1200 TK
                                                </h4>
                                                <button
                                                    className="relative mt-6 py-2 px-8 text-[17px] text-white bg-primary rounded border border-primary overflow-hidden cursor-pointer hover:[&>span.overlay]:h-full transition-all duration-300">
                                                    <span className="relative z-10">Buy Now</span>
                                                    <span
                                                        className="overlay absolute bottom-0 left-0 w-full h-0 bg-dark-primary transition-all duration-300"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="wrapper relative">
                                            <Image
                                                src={sliderTwoImg}
                                                className="w-full h-[250px] md:h-[410px] rounded"
                                                alt="SliderTwo"
                                            />
                                            <div
                                                className="content_area absolute top-1/2 left-[30px] sm:left-[60px] -translate-y-1/2">
                                                <h2 className="text-black text-[25px] sm:text-[35px] font-[900] uppercase">TOP
                                                    PRODUCTS</h2>
                                                <h4 className="text-[18px] font-semibold text-black">Winter
                                                    Collection</h4>
                                                <button
                                                    className="relative mt-6 py-2 px-8 text-[17px] text-white bg-black rounded border border-primary overflow-hidden cursor-pointer hover:[&>span]:h-full transition-all duration-300">
                                                    <span
                                                        className="absolute bottom-0 left-0 w-full h-0 bg-dark-primary transition-all duration-300"></span>
                                                    <span className="relative z-10">See More</span>
                                                </button>
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
                        </div>
                        <div className="col md:col-span-3 flex flex-col items-end w-full space-y-2">
                            <div className="w-full h-[200px] overflow-hidden rounded-md">
                                <Image
                                    src={offerOne}
                                    className="rounded-md w-full h-full cursor-pointer transition-transform duration-700 ease-out hover:scale-110"
                                    alt="offerOne"
                                />
                            </div>
                            <div className="w-full h-[200px] overflow-hidden rounded-md">
                                <Image
                                    src={offerTwo}
                                    className="rounded-md w-full h-full cursor-pointer transition-transform duration-500 ease-out hover:scale-110"
                                    alt="offerTwo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Slider;