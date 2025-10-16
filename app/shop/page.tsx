'use client';
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import ProductCard, { Product } from "../Components/ProductCard";

type Category = { _id: string; name: string };

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      const products = await client.fetch(`*[_type=="product"]{
        _id, name, price, slug, image, ratings,
        "category": category->{name}
      }`);
      const categories = await client.fetch(`*[_type=="category"]{_id, name}`);
      setProducts(products);
      setCategories(categories);
    };
    fetchData();
  }, []);

  const toggleCategory = (name: string) => {
    setSelectedCategories(prev => prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name]);
  };

  const filteredProducts = products
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => selectedCategories.length > 0 ? selectedCategories.includes(p.category?.name || "") : true)
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      <aside className="w-full lg:w-64">
        <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} className="border p-2 mb-4 w-full rounded" />
        <h3 className="font-bold mb-2">Categories</h3>
        <ul className="mb-4 space-y-2 max-h-64 overflow-auto">
          {categories.map(c => (
            <li key={c._id}>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={selectedCategories.includes(c.name)} onChange={() => toggleCategory(c.name)} />
                {c.name}
              </label>
            </li>
          ))}
        </ul>
        <h3 className="font-bold mb-2">Max Price</h3>
        <input type="range" min={0} max={1000} value={priceRange[1]} onChange={e => setPriceRange([0, Number(e.target.value)])} className="w-full" />
        <p className="mt-1 text-sm">Up to ${priceRange[1]}</p>
      </aside>

      <main className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map(p => <ProductCard key={p._id} product={p} />)}
          {filteredProducts.length === 0 && <p>No products found.</p>}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Prev</button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} onClick={() => setCurrentPage(i + 1)} className={currentPage === i + 1 ? "bg-black text-white px-3 py-1 rounded" : "px-3 py-1 border rounded"}>
                {i + 1}
              </button>
            ))}
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
          </div>
        )}
      </main>
    </div>
  );
}
