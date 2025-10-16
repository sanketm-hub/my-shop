"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Geist} from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function CustomBreadscrum() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const currentPage = segments[segments.length - 1] || "home";

  const formattedPage = currentPage
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <Breadcrumb className={`${geistSans.className} flex`}>
      <BreadcrumbList className="flex items-center">
        {/* Home link */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link className="text-[#666] text-[12px] leading-[18px] md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px]" href="/home">
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* Custom separator */}
        <BreadcrumbSeparator className="mx-1">
          <Image
            src="/assests/chevron-right.svg"
            alt="right"
            width={16}
            height={16}
            className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] object-contain"
          />
        </BreadcrumbSeparator>

        {/* Current page */}
        <BreadcrumbItem>
          <BreadcrumbPage className="text-[#111] text-[12px] leading-[18px] md:text-[16px] md:leading-[21px] lg:text-[16px] lg:leading-[21px]">
            {formattedPage}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
