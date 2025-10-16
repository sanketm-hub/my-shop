import React from "react";
import CustomBreadscrum from "../Components/CustomBreadscrum";
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

export default function Privacy() {
    return (
        <div className="bg-[#FDFEFC]">
            <section className="bg-[#fff]">
                <div className="max-w-[1376px] mx-auto pt-[20px] lg:px-[32px] xl:px-[32px] 2xl:px-[32px]
        md:px-[24px] px-[16px]">
                    <CustomBreadscrum />
                </div>
            </section>

            <section className={`${geistSans.className}`}>
                <div className="max-w-[800px] mx-auto pt-[32px] pb-[48px] lg:px-[32px] xl:px-[32px] 2xl:px-[32px]
        md:px-[24px] px-[16px] lg:pt-[48px] lg:pb-[64px] lg:pt-[48px] lg:pb-[64px]">
                    <div>
                        <h1 className={`mb-[20px] lg:mb-[24px]
                        xl:mb-[24px] 2xl:mb-[24px] md:mb-[24px]
                        lg:text-[64px] lg:leading-[76.8px]
                        md:text-[64px] md:leading-[76.8px]
                        text-[48px] leading-[57.6px]
                            ${wittgenstein.className}`}>
                            Privacy Policy
                        </h1>
                        <p className="text-[#444] text-[14px] leading-[21px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[20px] lg:mb-[24px] md:mb-[24px]">
                            <span className="text-[#111111]">Last Updated:</span> October 2025
                        </p>
                        <p className="text-[#444] text-[16px] leading-[24px]
                        lg:text-[18px] lg:leading-[27px] md:text-[18px] md:leading-[27px]">
                            At <span className="text-[#111]">MysTEAry</span>, we value your trust and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit or make a purchase from our website.
                        </p>
                    </div>
                </div>
                <div className="max-w-[800px] mx-auto pb-[64px] lg:px-[32px] xl:px-[32px] 2xl:px-[32px]
        md:px-[24px] px-[16px] lg:pb-[80px] xl:pb-[80px] 2xl:pb-[80px]">
                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px] ${wittgenstein.className}`}>
                        1. Information We Collect
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]">
                    </p>
                    <ul className="list-disc pl-[20px] md:pl-[24px] lg:pl-[24px]">
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[4px] lg:mb-[6px] md:mb-[6px]">
                            <span className="text-[#111]">Personal Information:</span> Name, email address, phone number, billing and shipping address.
                        </li>
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                         mb-[4px] lg:mb-[6px] md:mb-[6px]">
                            <span className="text-[#111]">Payment Details:</span> Securely processed through trusted third-party payment gateways (e.g. Stripe). We do not store your card or banking details.
                        </li>
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]">
                            <span className="text-[#111]">Usage Data:</span> Information about how you interact with our website, including IP address, browser type, device details, and browsing patterns.
                        </li>
                    </ul>

                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        2. How We Use Your Information 
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                         mb-[6px] lg:mb-[8px] md:mb-[8px]">
                            We use your data to:
                    </p>
                    <ul className="list-disc pl-[20px] md:pl-[24px] lg:pl-[24px]">
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[2px] lg:mb-[4px] md:mb-[4px]">
                            Process and fulfill your orders.
                        </li>
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[2px] lg:mb-[4px] md:mb-[4px]">
                            Communicate order updates, offers, and promotions.
                        </li>
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                       mb-[2px] lg:mb-[4px] md:mb-[4px]">
                            Improve our website experience and customer service.
                        </li>
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]">
                            Comply with legal obligations.
                        </li>
                    </ul>
                    
                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        3. Data Protection 
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                         mb-[4px] lg:mb-[6px] md:mb-[6px]">
                            We use secure servers, encryption, and trusted payment partners to protect your personal information.
                    </p>

                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        4. Sharing Your Information 
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                         mb-[6px] lg:mb-[8px] md:mb-[8px]">
                            We do <span className="#111">not sell</span> your personal information. Data may be shared only with:
                    </p>
                  <ul className="list-disc pl-[20px] md:pl-[24px] lg:pl-[24px]">
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[2px] lg:mb-[4px] md:mb-[4px]">
                            Delivery partners to ensure order fulfillment.
                        </li>
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[2px] lg:mb-[4px] md:mb-[4px]">
                            Payment gateways to process transactions.
                        </li>
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]">
                            Service providers assisting with analytics or marketing (under strict confidentiality).
                        </li>
                    </ul>


                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        5. Cookies 
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                         mb-[4px] lg:mb-[6px] md:mb-[6px]">
                            MysTEAry uses cookies to personalize your browsing experience and analyze site performance. You can disable cookies in your browser settings.
                    </p>


                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        6. Your Rights
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                         mb-[4px] lg:mb-[6px] md:mb-[6px]">
                            You can request to access, modify, or delete your personal information by contacting us at
                    </p>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                         mb-[4px] lg:mb-[6px] md:mb-[6px]">
                            <a href="mailto:support@mystearry.com" className="text-[#111]  hover:underline">support@mystearry.com.</a>
                    </p>
            

                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        7. Updates to this Policy
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]">
                            We may update this Privacy Policy periodically. Any changes will be posted on this page with the 
                            updated date.
                    </p>
                </div>
            </section>

            <StayTune />

        </div>
    );
}