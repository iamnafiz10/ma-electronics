import React, {useEffect, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay} from 'swiper/modules';
import brand1 from '../../../../public/assets/images/brands/1.png';
import brand2 from '../../../../public/assets/images/brands/2.png';
import brand3 from '../../../../public/assets/images/brands/3.png';
import brand4 from '../../../../public/assets/images/brands/4.png';
import brand5 from '../../../../public/assets/images/brands/5.png';
import Image from "next/image";

function Brand() {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setReady(true), 300);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <section id="brand-section">
                <div className="container px-0 md:px-[150px] mt-4">
                    {ready ?
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={5}
                            spaceBetween={30}
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
                            autoplay={{delay: 2000, pauseOnMouseEnter: false}}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Image
                                    src={brand1}
                                    alt="Brand"
                                    className="w-full"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={brand2}
                                    alt="Brand"
                                    className="w-full"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={brand3}
                                    alt="Brand"
                                    className="w-full"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={brand4}
                                    alt="Brand"
                                    className="w-full"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={brand5}
                                    alt="Brand"
                                    className="w-full"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={brand5}
                                    alt="Brand"
                                    className="w-full"
                                />
                            </SwiperSlide>
                        </Swiper>

                        : <div></div>
                    }
                </div>
            </section>
        </>
    );
}

export default Brand;