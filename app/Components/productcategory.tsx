'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import ProductCard, { Product } from "./ProductCard";
import { useCardContext } from "../context/cardcontext";
import { HiArrowNarrowRight } from "react-icons/hi";

interface CategoryProductsProps {
  categorySlug: string;
}

const CategoryProduct: React.FC<CategoryProductsProps> = ({ categorySlug }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addProduct } = useCardContext();
  const categoryName = products[0]?.category?.name || categorySlug;

  useEffect(() => {
    const fetchProducts = async () => {
      const data: Product[] = await client.fetch(
        `*[_type == "product" && category->slug.current == $categorySlug]{
          _id, name, price, slug, image, ratings,
          "category": category->{name}
        }`,
        { categorySlug }
      );
      setProducts(data);
    };
    fetchProducts();
  }, [categorySlug]);

  if (!products.length) return <p>No products found in "{categorySlug}"</p>;

  return (
    <div className="product-category">
      <div className="flex justify-between mb-8 items-center">
        <h2 className="text-4xl font-bold">{categoryName}</h2>
        <Link href={`/shop/${categorySlug}`} className="flex items-center gap-2">
          Explore {categorySlug.replace("-", " ")} <HiArrowNarrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  );
};

export default CategoryProduct;
