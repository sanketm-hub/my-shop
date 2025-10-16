
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import ProductDetails from "@/app/Components/productdetails";

interface Product {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  // Add more fields as needed
}

const ProductPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const product = await client.fetch<Product>(
    groq`*[_type == "product" && slug.current == $slug][0]`,
    { slug }
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails product={product} />;
};

export default ProductPage;




