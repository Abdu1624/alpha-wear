import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "../../../components/data/products";
import AddToCartButton from "../../../components/AddToCartButton";

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
              className="rounded-3xl w-full h-175 object-cover"
            />
          </div>

          {/* Product Details */}
          <div>
            <p className="uppercase tracking-[6px] text-orange-500">
              {product.category}
            </p>

            <h1 className="text-5xl font-black mt-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-4 text-orange-500 text-xl">
              ★★★★★
              <span className="text-white text-base">(4.9)</span>
            </div>

            <h2 className="text-4xl font-bold mt-8">
              Rs. {product.price}
            </h2>

            <p className="text-zinc-400 mt-8 leading-8">
              {product.description}
            </p>

            {/* Sizes */}
            <div className="mt-10">
              <h3 className="font-bold mb-4">Select Size</h3>

              <div className="flex gap-4">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="border border-zinc-700 px-6 py-3 rounded-xl hover:bg-orange-500 hover:border-orange-500 transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-12 flex gap-5">
              <AddToCartButton product={product} />

              <button className="flex-1 border border-white hover:bg-white hover:text-black py-4 rounded-xl transition">
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="mt-12 space-y-4 text-zinc-400">
              <p>✔ Premium Quality Cotton</p>
              <p>✔ Free Shipping All Over Pakistan</p>
              <p>✔ 7 Days Easy Returns</p>
              <p>✔ Secure Checkout</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}