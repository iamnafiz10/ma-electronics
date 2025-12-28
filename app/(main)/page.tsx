"use client";

import Slider from "@/app/(main)/components/Home/Slider";
import NewProduct from "@/app/(main)/components/Home/NewProduct";
import SpecialOffer from "@/app/(main)/components/Home/SpecialOffer";
import TopRated from "@/app/(main)/components/Home/TopRated";
import Brand from "@/app/(main)/components/Home/Brand";
import PopularTag from "@/app/(main)/components/Home/PopularTag";
import AllProduct from "@/app/(main)/components/Home/AllProduct";
import TopCategory from "@/app/(main)/components/Home/TopCategory";

export default function Home() {
    return (
        <>
            <Slider/>
            <TopCategory/>
            <SpecialOffer/>
            <NewProduct/>
            <TopRated/>
            <AllProduct/>
            <Brand/>
            <PopularTag/>
        </>
    );
}
