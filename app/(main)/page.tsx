"use client";

import Slider from "@/app/(main)/components/Home/Slider";
import SpecialOffer from "@/app/(main)/components/Home/SpecialOffer";
import Brand from "@/app/(main)/components/Home/Brand";
import PopularTag from "@/app/(main)/components/Home/PopularTag";
import AllProduct from "@/app/(main)/components/Home/AllProduct";
import TopCategory from "@/app/(main)/components/Home/TopCategory";
import CategoryWiseProduct from "@/app/(main)/components/Home/CategoryWiseProduct";

export default function Home() {
    return (
        <>
            <Slider/>
            <TopCategory/>
            <SpecialOffer/>
            <CategoryWiseProduct/>
            <AllProduct/>
            <Brand/>
            <PopularTag/>
        </>
    );
}
