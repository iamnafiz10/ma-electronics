"use client";

import Image from "next/image";
import {useState} from "react";
import product1 from "../../../../public/assets/images/products/1.png";
import product2 from "../../../../public/assets/images/products/2.png";
import product3 from "../../../../public/assets/images/products/3.png";
import product4 from "../../../../public/assets/images/products/4.png";

const LENS_SIZE = 120;

export default function ProductZoom() {
    const images = [product1, product2, product3, product4];
    const [mainImage, setMainImage] = useState(images[0]);
    const [showZoom, setShowZoom] = useState(false);
    const [bgPos, setBgPos] = useState("50% 50%");
    const [lens, setLens] = useState({x: 0, y: 0});

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        let x = e.clientX - rect.left - LENS_SIZE / 2;
        let y = e.clientY - rect.top - LENS_SIZE / 2;

        x = Math.max(0, Math.min(x, rect.width - LENS_SIZE));
        y = Math.max(0, Math.min(y, rect.height - LENS_SIZE));

        setLens({x, y});

        const bgX = (x / rect.width) * 100;
        const bgY = (y / rect.height) * 100;

        setBgPos(`${bgX}% ${bgY}%`);
    };

    const clipPath = `
        polygon(
            0% 0%,
            100% 0%,
            100% 100%,
            0% 100%,
            0% ${lens.y}px,
            ${lens.x}px ${lens.y}px,
            ${lens.x}px ${lens.y + LENS_SIZE}px,
            ${lens.x + LENS_SIZE}px ${lens.y + LENS_SIZE}px,
            ${lens.x + LENS_SIZE}px ${lens.y}px,
            0% ${lens.y}px
        )
    `;

    return (
        <section id="product-zoom-section" className="relative">
            <div className="flex gap-3 items-start">
                {/* LEFT SIDE - IMAGE SELECTION AND ZOOM */}
                <div className="flex flex-col">
                    {/* MAIN IMAGE WITH ZOOM */}
                    <div
                        className="main_image_box mb-4 w-[300px] xl:w-[370px] h-[300px] xl:h-[370px] border border-gray-200 rounded overflow-hidden cursor-zoom-in relative"
                        onMouseEnter={() => setShowZoom(true)}
                        onMouseLeave={() => setShowZoom(false)}
                        onMouseMove={handleMouseMove}
                    >
                        <Image
                            src={mainImage}
                            width={350}
                            height={350}
                            alt="product-image"
                            className="object-contain"
                        />

                        {/* OVERLAY WITH CUT-OUT */}
                        {showZoom && (
                            <div
                                className="absolute inset-0 bg-black/30 z-10 pointer-events-none"
                                style={{clipPath}}
                            />
                        )}

                        {/* LENS BORDER */}
                        {showZoom && (
                            <div
                                className="absolute z-20 border border-gray-300 pointer-events-none"
                                style={{
                                    width: LENS_SIZE,
                                    height: LENS_SIZE,
                                    left: lens.x,
                                    top: lens.y,
                                }}
                            />
                        )}
                    </div>

                    {/* THUMBNAILS */}
                    <div className="bottom_image_box flex items-center gap-3">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className={`image_box cursor-pointer rounded p-1 border-2 ${
                                    mainImage.src === img.src ? "border-primary" : "border-gray-200"
                                }`}
                                onClick={() => setMainImage(img)}
                            >
                                <Image
                                    src={img}
                                    width={50}
                                    height={50}
                                    alt={`product-thumbnail-${index}`}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE - ZOOM VIEW (POSITIONED ABSOLUTELY) */}
                {showZoom && (
                    <div
                        className="absolute hidden md:block left-[300px] xl:left-[370px] top-0 ml-3 w-[300px] xl:w-[370px] h-[300px] xl:h-[370px] bg-white border border-gray-300 rounded shadow-lg bg-no-repeat z-30"
                        style={{
                            backgroundImage: `url(${mainImage.src})`,
                            backgroundSize: "200%",
                            backgroundPosition: bgPos,
                        }}
                    />
                )}
            </div>
        </section>
    );
}