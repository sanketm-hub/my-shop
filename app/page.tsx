import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import ProductCard from "./Components/ProductCard";
import CategoryProducts from "./Components/productcategory";

// shadcn carousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function Home() {
  const products = await client.fetch(groq`*[_type == "product"]`);

  return (
    <div className="bg-[#f5f5f5] min-h-screen w-full px-4 py-8">
      <div className="max-w-[1280px] mx-auto">
        <div>
          <h2 className="text-[32px] leading-[40px] text-black">
            Best Selling Products
          </h2>
        </div>

        {/* ✅ Carousel instead of grid */}
        <div className="mt-6">
          <Carousel className="w-full">
            <CarouselContent>
              {products.map((product: any) => (
                <CarouselItem
                  key={product._id}
                  className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>

   
          </Carousel>
        </div>
      </div>

      {/* category sections */}
      <section className="py-[80px]">
        <div className="w-full">
          <CategoryProducts categorySlug="goat-milk-soaps" />
        </div>
      </section>
      <section className="py-[80px]">
        <div className="w-full">
          <CategoryProducts categorySlug="vegan-candles" />
        </div>
      </section>
      <section className="py-[80px]">
        <div className="w-full">
          <CategoryProducts categorySlug="seasonal-teas" />
        </div>
      </section>
    </div>
  );
}
