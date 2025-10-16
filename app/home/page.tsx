"use client";

import React from "react";
import Image from "next/image";
import { Geist, Wittgenstein } from "next/font/google";

// Google Fonts setup
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const wittgenstein = Wittgenstein({
    variable: "--font-wittgenstein",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function Home() {
    return (
        <section className={`${geistSans.className} w-full`}>
            <div className="flex flex-col lg:flex-row w-full lg:gap-[10px] min-h-[654px]">
                {/* Image Column */}
                <div className="relative w-full lg:w-[31%] lg:w-[31%] 2xl:w-[31%] 
                xl:flex-1 2xl:flex-1">
                    <Image
                        src="/assests/home/ban-first.webp"
                        alt="first image"
                        fill
                        className="object-cover"

                    />
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-[69%]  xl:w-[69%] 2xl:w-[69%] 
                bg-[url('/assests/home/ban-sec.webp')] bg-cover bg-center 
                flex flex-col lg:py-[80px] lg:px-[56px] xl:py-[80px] xl:px-[56px] 2xl:py-[80px] 2xl:px-[56px]
                md:py-[80px] md:px-[24px] py-[64px] px-[16px]">
                    <h1 className={`${wittgenstein.className} text-[#1A2E05] text-3xl sm:text-4xl lg:text-[64px] lg:leading-[76.8px] max-w-[539px]`}>
                        Awaken Your Natural Senses
                    </h1>
                    <p className="text-[#1A2E05] lg:text-[18px] lg:leading-[27px] max-w-[539px]">
                        Discover the art of wellness with 100% natural teas, handcrafted candles, and soothing soaps.
                    </p>
                </div>

            </div>
        </section>
    );
}
