'use client';
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { urlFor } from "@/sanity/lib/image";
import { useCardContext } from "../context/cardcontext";
import StarRating from "@/app/Components/StarRatings";

const ProductDetails = ({ product }: { product: any }) => {
  const [index, setIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const { addProduct } = useCardContext();
  const [currentRating, setCurrentRating] = useState(product.ratings?.average || 0);

  const mainImage = product.image?.[index] || null;

  const handleRate = async (value: number | null, e: React.MouseEvent) => {
    e.stopPropagation();
    const reviewsCount = product.ratings?.reviewsCount || 0;
    const newAverage = value === null ? 0 : (currentRating * reviewsCount + value) / (reviewsCount + (value !== null ? 1 : 0));
    setCurrentRating(newAverage);

    try {
      await fetch("/api/rate-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product._id, rating: value }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="py-8 flex flex-col md:flex-row gap-6">
      <div className="flex flex-col">
        {mainImage ? (
          <Image src={urlFor(mainImage).url()} alt={product.name} width={500} height={500} className="object-cover" />
        ) : <div>No image available</div>}

        <div className="flex gap-2 mt-4">
          {product.image?.map((img: any, i: number) => (
            <Image
              key={i}
              src={urlFor(img).url()}
              width={80} height={80}
              className={`cursor-pointer rounded ${i === index ? "ring-2 ring-black" : ""}`}
              onClick={() => setIndex(i)}
              alt={`Thumbnail ${i}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-xl font-semibold">${product.price}</p>

        <div className="flex items-center gap-2">
          <StarRating rating={currentRating} editable onRate={handleRate} />
          <span className="text-gray-500">({product.ratings?.reviewsCount || 0} reviews)</span>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => setQty(Math.max(1, qty - 1))}><AiOutlineMinus /></button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}><AiOutlinePlus /></button>
        </div>

        <button className="bg-black text-white py-2 px-4 rounded-lg" onClick={() => addProduct(product, qty)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
