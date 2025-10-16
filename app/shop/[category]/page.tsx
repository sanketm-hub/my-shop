'use client';

import React, { useEffect, useState } from "react";
import { use } from "react";
import { client } from "@/sanity/lib/client";
import ProductCard from "@/app/Components/ProductCard";
import { HiChevronRight } from "react-icons/hi";

type Product = {
  _id: string;
  name: string;
  price: number;
  slug?: { current: string };
  category?: { name: string; slug: { current: string } };
  image?: any[];
  ratings?: { average: number; reviewsCount: number };
  _createdAt?: string;
  salesCount?: number; // for "Best Selling"
};

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [visibleCount, setVisibleCount] = useState(6);
  const [priceOptions, setPriceOptions] = useState<number[]>([50, 100, 200, 500, 1000]);
  const [sortBy, setSortBy] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(
        `*[_type == "product" && category->slug.current == $category] | order(_createdAt desc){
          _id,
          name,
          price,
          slug,
          image,
          ratings,
          "category": category->{name, slug},
          _createdAt,
          salesCount
        }`,
        { category }
      );
      setProducts(data);

      if (data.length > 0) {
        const max = Math.max(...data.map((p: Product) => p.price));
        const dynamicPrices = [50, 100, 200, 500, 1000].filter(p => p <= max).concat(max);
        setPriceOptions(dynamicPrices);
        setMaxPrice(max);
      }
    };

    if (category) fetchProducts();
  }, [category]);

  // ✅ Filtered + Sorted Products
  const filteredProducts = products
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => p.price <= maxPrice)
    .sort((a, b) => {
      switch (sortBy) {
        case "latest":
          return new Date(b._createdAt!).getTime() - new Date(a._createdAt!).getTime();
        case "best":
          return (b.salesCount || 0) - (a.salesCount || 0);
        case "low":
          return a.price - b.price;
        case "high":
          return b.price - a.price;
        default:
          return 0;
      }
    });

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="mb-4 text-sm text-gray-500 flex items-center gap-1">
        <a href="/shop" className="hover:underline flex items-center gap-1">
          Shop <HiChevronRight />
        </a>
        <span className="capitalize">{category}</span>
      </div>

      <h1 className="text-2xl font-bold mb-4 capitalize">{category} Listings</h1>

      {/* Filters + Count */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex flex-col sm:flex-row gap-2 items-start md:items-center flex-wrap">
          <h2>Filters:</h2>

          {/* Search */}
          {/* <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded w-full sm:w-64"
          /> */}

          {/* Price Filter */}
          {/* <select
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="border p-2 rounded"
          >
            {priceOptions.map((price) => (
              <option key={price} value={price}>
                Up to ${price}
              </option>
            ))}
          </select> */}

          {/* Sort By Filter */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="all">All</option>
            <option value="latest">Latest</option>
            <option value="best">Best Selling</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        <p className="text-gray-600">{filteredProducts.length} products</p>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.slice(0, visibleCount).map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}

      {/* Load More */}
      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-2 border rounded bg-gray-100 hover:bg-gray-200"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
