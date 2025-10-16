"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Wittgenstein } from "next/font/google";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Initialize the font
const wittgenstein = Wittgenstein({ subsets: ["latin"], weight: "400" });

// Types
interface Author {
  name: string;
  image?: any;
}

interface Category {
  _id: string;
  title: string;
}

interface Blog {
  _id: string;
  title: string;
  slug?: { current: string } | null;
  excerpt: string;
  featuredImage?: any;
  author?: Author;
  categories?: Category[];
  featured: boolean;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [visiblePosts, setVisiblePosts] = useState<number>(3);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [featuredFilter, setFeaturedFilter] = useState<string>("");

  // Fetch blogs from Sanity
  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "blog"] | order(publishedAt desc){
        _id,
        title,
        slug,
        excerpt,
        featuredImage,
        author,
        categories[]->{_id, title},
        featured
      }`;
      const data: Blog[] = await client.fetch(query);
      setPosts(data);
    };
    fetchPosts();
  }, []);

  // Filter posts based on category and featured status
  const filteredPosts = posts
    .filter((post) => post.slug && post.slug.current) // ✅ only include posts with valid slug
    .filter((post) => {
      const matchesCategory = categoryFilter
        ? post.categories?.some((cat) => cat.title === categoryFilter)
        : true;
      const matchesFeatured =
        featuredFilter === ""
          ? true
          : featuredFilter === "Yes"
          ? post.featured
          : !post.featured;
      return matchesCategory && matchesFeatured;
    });

  // Generate unique categories for dropdown
  const categories = Array.from(
    new Set(posts.flatMap((post) => post.categories?.map((c) => c.title) || []))
  );

  return (
    <>
      {/* Hero Section */}
      <section
        className={`${wittgenstein.className} blogbanner lg:pt-[128px] lg:pb-[64px] lg:px-[32px] bg-white md:px-[24px] md:pt-[128px] md:pb-[64px] pt-[80px] pb-[48px] px-[24px]`}
      >
        <div className="max-w-[1376px] mx-auto">
          <div className="flex flex-col max-w-[764px] md:max-w-[720px]">
            <h1 className="mb-[24px] text-[#111] lg:text-[64px] lg:leading-[76.8px] md:text-[64px] md:leading-[76.8px] sm:mb-[20px] text-[48px] leading-[57.6px]">
              The Art of Wellness
            </h1>
            <p className="text-[#444] lg:text-[18px] lg:leading-[27px] md:text-[18px] md:leading-[27px] md:max-w-[500px] max-w-[250px]">
              Explore our blog for stories, rituals, and tips on natural living.
              From tea traditions to mindful self-care, find inspiration to
              bring calm and balance into your daily life.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="lg:pt-[128px] lg:pb-[64px] lg:px-[32px] bg-white md:px-[24px] md:pt-[128px] md:pb-[64px] pt-[80px] pb-[48px] px-[24px]">
        <div className="max-w-[1376px] mx-auto">
          {/* Filter Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8 lg:mb-[64px] gap-4">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-[#111] text-[16px] leading-[19.2px]">Filter:</span>

              {/* Category Filter */}
              <select
                className="border px-[8px] py-[12px] rounded text-[#111] text-[16px] leading-[24px] border-[#DBDBDB]"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((cat, i) => (
                  <option key={i} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              {/* Featured Filter */}
              <select
                className="border px-[8px] py-[12px] rounded text-[#111] text-[16px] leading-[24px] border-[#DBDBDB]"
                value={featuredFilter}
                onChange={(e) => setFeaturedFilter(e.target.value)}
              >
                <option value="">All Blogs</option>
                <option value="Yes">Featured</option>
                <option value="No">Not Featured</option>
              </select>
            </div>

            <div className="text-[#666] text-[16px] leading-[19.2px]">{filteredPosts.length} Posts</div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-[32px] lg:gap-y-[64px]">
            {filteredPosts.slice(0, visiblePosts).map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug?.current || "#"}`}
                className="border border-[#DBDBDB] rounded overflow-hidden duration-300 flex flex-col hover:shadow-lg"
              >
                <div className="relative w-full h-[240px]">
                  {post.featuredImage && (
                    <Image
                      src={urlFor(post.featuredImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="lg:p-[32px] flex flex-col flex-1">
                  <h2 className="font-[500] text-[#111] lg:text-[20px] lg:leading-[30px] lg:mb-[8px]">
                    {post.title}
                  </h2>
                  <p className="text-[#666] lg:text-[16px] lg:leading-[24px] flex-1 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-[24px] border border-[#CEE3BC] bg-[#fff] w-full text-[#1A2E05] text-[18px] leading-[27px] text-center py-[14px] px-[32px]">
                    Read More
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          {visiblePosts < filteredPosts.length && (
            <div className="flex justify-center mt-8">
              <button
                className="bg-[#CEE3BC] cursor-pointer text-[#1A2E05] px-[32px] py-[16px] text-[18px] leading-[27px]"
                onClick={() => setVisiblePosts((prev) => prev + 3)}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
