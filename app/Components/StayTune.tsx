"use client";

import React from "react";
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

export default function StayTune() {
    return (
        <section className={`bg-[#CDE1BC] ${geistSans.className}`}>
            <div className="max-w-[1376px] mx-auto 2xl:py-[80px] xl:py-[80px] lg:py-[80px]
            md:py-[80px] py-[64px] 2xl:px-[32px] xl:px-[32px] md:px-[24px] lg:px-[32px] px-[16px]">
                <div className="max-w-[768px] mx-auto">
                    <div className="text-center">
                        <h2 className={`
                                text-[#111] font-medium text-[32px] leading-[38.4px] mb-[24px]
                                2xl:text-[42px] 2xl:leading-[50.4px] xl:text-[42px] xl:leading-[50.4px]
                                lg:text-[42px] lg:leading-[50.4px] md:text-[42px] md:leading-[50.4px]
                                ${wittgenstein.className}`}>
                            Stay Steeped in Stories
                        </h2>
                        <p className="text-[#444] font-normal text-[16px] leading-[24px]
                    md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">
                            Join the MysTEAry community and be the first to discover new teas, candle collections, and {" "}
                            <br className="hidden xl:block" />self-care rituals. Exclusive offers and wellness tips straight to your inbox.
                        </p>
                    </div>
                    <div className="pt-[48px]">
                        <form className="flex flex-col justify-center gap-[12px]
                        lg:flex-row md:flex-row">

                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="text-[rgba(17, 17, 17, 0.40);] font-normal
                            lg:px-[16px] lg:py-[16px] md:px-[16px] md:py-[16px] lg:text-[18px] lg:leading-[27px]
                            md:text-[18px] md:leading-[27px] text-[16px] leading-[24px]
                            bg-[#fff] border border-[rgba(127, 127, 127, 0.40)] w-full focus:outline-none
                            lg:w-[385px] md:w-[385px] px-[14px] py-[14px]"
                            />

                            <div>
                                <button type="submit"
                                    className="text-[#1A2E05] font-normal text-[16px] leading-[24px]
                            lg:text-[18px] lg:leading-[27px] md:text-[18px] md:leading-[27px]
                            lg:py-[16px] lg:px-[32px] md:py-[16px] md:px-[32px] py-[14px] px-[32px]
                            bg-[#fff] w-full lg:[189px] md:w-[189px] cursor-pointer hover:bg-[#1A2E05] hover:text-[#CBE1BD]">
                                    Subscribe Now
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>

        </section>
    );
}


