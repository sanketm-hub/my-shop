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

export default function Terms() {
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
                            Terms & Conditions
                        </h1>
                        <p className="text-[#444] text-[14px] leading-[21px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[20px] lg:mb-[24px] md:mb-[24px]">
                            <span className="text-[#111111]">Last Updated:</span> October 2025
                        </p>
                        <p className="text-[#444] text-[16px] leading-[24px]
                        lg:text-[18px] lg:leading-[27px] md:text-[18px] md:leading-[27px]">
                            Welcome to <span className="text-[#111]">MysTEAry!</span> By accessing or using our website, you agree to the following terms and conditions. Please read them carefully before making a purchase.
                        </p>
                    </div>
                </div>
                <div className="max-w-[800px] mx-auto pb-[64px] lg:px-[32px] xl:px-[32px] 2xl:px-[32px]
        md:px-[24px] px-[16px] lg:pb-[80px] xl:pb-[80px] 2xl:pb-[80px]">
                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px] ${wittgenstein.className}`}>
                        1. General
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]">
                            These Terms & Conditions apply to all visitors, users, and customers of MysTEAry. By using our website, you agree to comply with all applicable laws and these terms.
                    </p>


                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        2. Product Information
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                         mb-[6px] lg:mb-[8px] md:mb-[8px]">
                            We make every effort to display product descriptions, images, and details accurately. However, slight variations in color, texture, or packaging may occur due to natural ingredients and batch differences.
                    </p>

                    
                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        3. Pricing & Payments
                    </h2>
                    <ul className="list-disc pl-[20px] md:pl-[24px] lg:pl-[24px]">
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[2px] lg:mb-[4px] md:mb-[4px]">
                            All prices are displayed in CAD ($) and include applicable taxes unless stated otherwise.
                        </li>
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[2px] lg:mb-[4px] md:mb-[4px]">
                            Payment must be completed at checkout through our secure gateways (Stripe).
                        </li>
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                       mb-[2px] lg:mb-[4px] md:mb-[4px]">
                            MysTEAry reserves the right to modify prices or discontinue products without prior notice.
                        </li>
                     </ul>

                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        4. Orders & Delivery 
                    </h2>
                  <ul className="list-disc pl-[20px] md:pl-[24px] lg:pl-[24px]">
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[2px] lg:mb-[4px] md:mb-[4px]">
                            Orders are confirmed only after successful payment.
                        </li>
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[2px] lg:mb-[4px] md:mb-[4px]">
                            Delivery timelines are estimates and may vary due to unforeseen delays.
                        </li>
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]">
                            MysTEAry is not responsible for delays caused by courier partners or external factors.
                        </li>
                    </ul>


                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        5. Returns, Refunds & Exchanges 
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                         mb-[4px] lg:mb-[6px] md:mb-[6px]">
                            As stated in our <span className="text-[#111]">Shipping & Returns Policy,</span> no returns or refunds are allowed. Exchanges are possible only in case of damaged or incorrect products.
                    </p>


                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        6. Intellectual Property
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                         mb-[4px] lg:mb-[6px] md:mb-[6px]">
                            All content on this website—including text, images, graphics, and logos—is the property of MysTEAry and may not be copied or reused without written permission.
                    </p>

            

                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        7. Limitation of Liability
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]">
                            MysTEAry will not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website.
                    </p>

                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        8. Governing Law
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]">
                            These Terms shall be governed by and interpreted in accordance with the laws of Canada.
                    </p>

                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        9. Contact Us
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]">
                            For any queries or feedback, please reach out to:
                    </p>

                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]                                                   ">
                            <a href="mailto:support@mystearry.com" className="text-[#111]  hover:underline">support@mystearry.com</a>
                    </p>
                </div>
            </section>

            <StayTune />

        </div>
    );
}