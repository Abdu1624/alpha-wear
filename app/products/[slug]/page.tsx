import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/components/data/products";
import ProductInfo from "@/components/ProductInfo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Product Image */}
          <div>
            <Image
              src={product.image}
              alt={product.name}
              width={700}
              height={850}
              className="rounded-3xl w-full h-[700px] object-cover"
            />
          </div>

          {/* Product Details */}
          <ProductInfo product={product} />

        </div>
      </div>
    </main>
  );
}