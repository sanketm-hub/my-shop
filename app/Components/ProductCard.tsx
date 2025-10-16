'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { urlFor } from "@/sanity/lib/image";
import { useCardContext } from "../context/cardcontext";
import StarRating from "@/app/Components/StarRatings";

export interface Product {
  _id: string;
  name: string;
  price: number;
  slug?: { current: string };
  image?: any[];
  ratings?: { average: number; reviewsCount: number };
  category?: { name: string };
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addProduct } = useCardContext();
  const [currentRating, setCurrentRating] = useState(product.ratings?.average || 0);

  const handleRate = async (value: number) => {
    // Update UI immediately
    const reviewsCount = product.ratings?.reviewsCount || 0;
    const newAverage = value === 0 ? 0 : (currentRating * reviewsCount + value) / (reviewsCount + 1);
    setCurrentRating(newAverage);

    try {
      await fetch("/api/rate-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product._id,
          rating: value,
          currentAverage: product.ratings?.average || 0,
          reviewsCount: reviewsCount
        }),
      });
    } catch (err) {
      console.error("Error updating rating:", err);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Link href={`/product/${product.slug?.current || ""}`}>
        <Image
          src={product.image?.[0] ? urlFor(product.image[0]).url() : "/placeholder.png"}
          alt={product.name}
          width={220}
          height={180}
          className="object-cover w-full h-44 mb-4"
          unoptimized
        />
        <h3 className="font-bold text-lg truncate">{product.name}</h3>
        <p className="text-gray-500 font-bold">$ {product.price}</p>
      </Link>

      <div className="my-2">
        <StarRating rating={currentRating} editable onRate={handleRate} />
      </div>

      <button
        onClick={() => addProduct(product, 1)}
        className="w-full py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
}
