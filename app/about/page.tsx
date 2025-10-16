"use client";

import React from "react";
import Image from "next/image";
import { Geist, Wittgenstein } from "next/font/google";
import StayTune from "../Components/StayTune";

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

export default function About() {
    return (
        <>
        <section className={`
        lg:bg-[url('/assests/about/about_banner.webp')] 
        md:bg-[url('/assests/about/about_tablet.webp')] 
        bg-[url('/assests/about/about_mobile.webp')] 
        bg-cover bg-center 
        ${wittgenstein.className}
        `}>
            <div className="max-w-[1376px] mx-auto 2xl:pt-[128px] 2xl:pb-[64px]
            xl:pt-[128px] xl:pb-[64px] lg:pt-[128px] lg:pb-[64px]
            md:pt-[128px] md:pb-[64px] pt-[80px] pb-[64px] px-[16px]
            md:px-[24px] 2xl:px-[32px] xl:px-[32px] lg:px-[32px]">
                <div className="max-w-[343px] max-auto lg:max-w-[764px] md:max-w-[670px]">
                <h1 className="text-[#111] 2xl:text-[64px] 2xl:leading-[76.8px] xl:text-[64px] xl:leading-[76.8px] lg:text-[64px] lg:leading-[76.8px]
                md:text-[64px] md:leading-[76.8px] text-[48px] leading-[57.6px]
                mb-[20px] md:mb-[24px] lg:mb-[24px]">
                    Natural. Pure. Canadian.
                </h1>
                <p className={`${geistSans.className} text-[#444] lg:text-[18px] lg:leading-[27px]
                md:text-[18px] md:leading-[27px] text-[16px] leading-[24px] md:max-w-[480px] lg:max-w-[720px]`}>
                    At MysTEAry, we create 100% natural teas, handcrafted candles, and soaps that bring wellness, warmth,
                     and mindful living into your everyday moments.
                </p>
                </div>
            </div>
        </section>

        { /* Mystry touch */ }
        <section className={`bg-[#fff] ${geistSans.className}`}>
            <div className="max-w-[1376px] mx-auto lg:pt-[80px] lg:px-[32px] xl:px-[32px] 2xl:px-[32px]
            md:pt-[80px] md:px-[24px] pt-[64px] px-[16px]">
                <div className="flex flex-col lg:flex-row lg:gap-[64px] md:gap-[64px] gap-[32px] items-center
                xl:flex-row xl:gap-[64px] 2xl:flex-row 2xl:gap-[64px]">
                    <div className="image-col w-full lg:w-1/2">
                        <Image 
                        src="/assests/about/mystearious.webp"
                        alt="image"
                        width={656}
                        height={560}
                        className="object-cover md:w-full md:h-[560px]
                        lg:w-full lg:h-[560px] xl:w-full xl:h-[560px] 2xl:w-full 2xl:h-[560px] w-full h-auto"
                        />
                    </div>
                    <div className="content-col w-full lg:w-1/2">
                        <h2 className={`
                            text-[#111] mb-[32px] lg:mb-[40px] md:mb-[40px] font-500
                            lg:text-[42px] lg:leading-[50.4px]
                            md:text-[42px] md:leading-[50.4px]
                            text-[32px] leading-[38.4px]
                            ${wittgenstein.className}`}>
                            The MysTEArious Touch
                        </h2>
                        <p className="text-[#666] lg:text-[18px] lg:leading-[27px]
                         md:text-[18px] md:leading-[27px] text-[16px] leading-[24px] mb-[20px]"> 
                            From handpicked tea leaves to candles poured with love, and soaps crafted {" "}
                            <br className="hidden xl:block" />with care — every creation reflects our promise of purity and wellness. We {" "}
                            <br className="hidden xl:block" />believe in sourcing the finest ingredients, ensuring that each product not only 
                            <br className="hidden xl:block" />delights the senses but also nurtures the body and soul. Our commitment to {" "}
                            <br className="hidden xl:block" />sustainability means that every item is made with respect for nature, allowing {" "}
                            <br className="hidden xl:block" />you to indulge guilt-free.   
                        </p>
                        <p className="text-[#666] lg:text-[18px] lg:leading-[27px]
                         md:text-[18px] md:leading-[27px] text-[16px] leading-[24px] mb-[20px]"> 
                            At MysTEAry, we believe in the power of nature to nurture, calm, and inspire. {" "}
                            <br className="hidden xl:block" />Rooted in Canada, our journey began with a simple vision—to craft products {" "}
                            <br className="hidden xl:block" />believe in sourcing the finest ingredients, ensuring that each product not only 
                            <br className="hidden xl:block" />that bring wellness, warmth, and mindfulness into everyday living.  
                        </p>
                        <p className="text-[#666] lg:text-[18px] lg:leading-[27px]
                         md:text-[18px] md:leading-[27px] text-[16px] leading-[24px]"> 
                            We handcraft 100% natural teas, candles, and soaps, blending pure ingredients {" "}
                            <br className="hidden xl:block" />with thoughtful artistry. Every product is created with care, ensuring you enjoy {" "}
                            <br className="hidden xl:block" />not just an item, but an experience that soothes your senses and uplifts your 
                            <br className="hidden xl:block" />spirit.
                        </p>
                    </div>

                </div>

            </div>
        </section>

        <section className={`bg-[#fff] ${geistSans.className}`}>
        <div className="max-w-[1376px] mx-auto pt-[48px] px-[16px]
        md:pt-[64px] md:px-[24px] lg:pt-[64px] lg:px-[32px]
        xl:pt-[64px] 2xl:pt-[64px] xl:px-[32px] 2xl:px-[32px]">
            <div className="grid lg:grid-cols-3 lg:gap-[32px]
            xl:grid-cols-3 xl:gap-[32px] 2xl:grid-cols-3 2xl:gap-[32px]
            gap-[24px] grid-cols-1 md:grid-cols-2 md:gap-[32px]">
                <div className="text-center">
                    <Image
                    src="/assests/about/naturalpure.svg"
                    alt="natural"
                    width={32}
                    height={32}
                    className="mx-auto object-fit w-[28px] h-[28px] md:w-[32px] md:h-[32px] lg:w-[32px] lg:w-[32px]
                    mb-[16px] md:mb-[20px] lg:mb-[20px]"
                    />
                    <h3 className="mb-[20px] lg:mb-[24px] md:[24px] font-medium
                    text-[#111] lg:text-[24px] lg:leading-[36px] md:text-[24px] md:leading-[36px]
                    text-[20px] leading-[30px]">
                        100% Natural & Pure
                    </h3>
                    <p className="text-[#666] font-normal text-[16px] leading-[24px]
                    md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">
                        Our teas, candles, and soaps are crafted with only {" "}
                        <br className="hidden xl:block" /> natural ingredients — no artificial additives, ever.
                    </p>
                </div>
                <div className="text-center">
                    <Image
                    src="/assests/about/handcraft.svg"
                    alt="Handcrafted"
                    width={32}
                    height={32}
                    className="mx-auto object-fit w-[28px] h-[28px] md:w-[32px] md:h-[32px] lg:w-[32px] lg:w-[32px]
                    mb-[16px] md:mb-[20px] lg:mb-[20px]"
                    />
                    <h3 className="mb-[20px] lg:mb-[24px] md:[24px] font-medium
                    text-[#111] lg:text-[24px] lg:leading-[36px] md:text-[24px] md:leading-[36px]
                    text-[20px] leading-[30px]">
                        Handcrafted With Care
                    </h3>
                    <p className="text-[#666] font-normal text-[16px] leading-[24px]
                    md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">
                        Every product is made in small batches, ensuring  {" "}
                        <br className="hidden xl:block" /> artisanal quality and attention to detail.
                    </p>
                </div>
                <div className="text-center md:col-span-2 md:justify-self-center lg:col-span-1 lg:justify-self-auto">
                    <Image
                    src="/assests/about/affortable.svg"
                    alt="Affordable"
                    width={32}
                    height={32}
                    className="mx-auto object-fit w-[28px] h-[28px] md:w-[32px] md:h-[32px] lg:w-[32px] lg:w-[32px]
                    mb-[16px] md:mb-[20px] lg:mb-[20px]"
                    />
                    <h3 className="mb-[20px] lg:mb-[24px] md:[24px] font-medium
                    text-[#111] lg:text-[24px] lg:leading-[36px] md:text-[24px] md:leading-[36px]
                    text-[20px] leading-[30px]">
                        Affordable Prices
                    </h3>
                    <p className="text-[#666] font-normal text-[16px] leading-[24px]
                    md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px] md:max-w-[344px]">
                        We make premium products accessible without compromising on quality.
                    </p>
                </div>
            </div>
            <hr className="border-b-1 border-[#D0E7BE]
            mt-[48px] xl:mt-[64px] 2xl:mt-[64px] lg:mt-[64px] md:madet-[64px]" />
        </div>
        </section>

        <section className={`bg-[#fff] ${geistSans.className}`}>
            <div className="max-w-[1376px] mx-auto pb-[64px] pt-[48px] px-[16px] xl:px-[32px] 2xl:px-[32px]
            lg:px-[32px] md:px-[24px] lg:pt-[64px] lg:pb-[80px]
            xl:pt-[64px] xl:pb-[80px] 2xl:pt-[64px] 2xl:pb-[80px]
            md:pt-[64px] md:pb-[80px]">
                <div className="flex flex-col gap-[24px]
                lg:flex-row lg:gap-[32px]
                md:flex-col md:gap-[32px]">
                    <div className="philosophy w-full lg:w-1/2 p-[24px] lg:p-[32px] md:p-[32px]
                    border-1 rounded-[1px] border-[#DBDBDB] bg-[#fff]">
                        <h3 className={`mb-[20px] lg:mb-[24px] md:mb-[24px]
                        text-[#111] font-medium text-[20px] leading-[24px]
                        lg:text-[24px] lg:leading-[28.8px]
                        md:text-[24px] md:leading-[28.8px]
                        ${wittgenstein.className}`}>
                            Our Philosophy
                        </h3>
                    <p className="text-[#666] font-normal text-[16px] leading-[24px]
                    md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">
                       We stand for simplicity, sustainability, and authenticity. Our teas are {" "}
                        <br className="hidden xl:block" />sourced from natural blends, our candles are hand-poured with love, and {" "}
                        <br className="hidden xl:block" />our soaps are made gentle for your skin and kind to the environment. {" "}
                    </p>
                    </div>
                    <div className="promise w-full lg:w-1/2 p-[24px] lg:p-[32px] md:p-[32px]
                    border-1 rounded-[1px] border-[#DBDBDB] bg-[#fff]">
                        <h3 className={`mb-[20px] lg:mb-[24px] md:mb-[24px]
                        text-[#111] font-medium text-[20px] leading-[24px]
                        lg:text-[24px] lg:leading-[28.8px]
                        md:text-[24px] md:leading-[28.8px]
                        ${wittgenstein.className}`}>
                            Our Promise
                        </h3>
                    <p className="text-[#666] font-normal text-[16px] leading-[24px]
                    md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">
                       With every cup of tea, every flicker of candlelight, and every soothing soap, we bring you a little piece of nature’s magic—crafted for moments of calm, comfort, and joy.
                        
                    </p>
                    </div>

                </div>
            </div>
        </section>

   
        <StayTune />

        </>
    );
}