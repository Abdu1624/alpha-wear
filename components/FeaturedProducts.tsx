import Image from "next/image";
import Link from "next/link";
import { products } from "@/components/data/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-black text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-4">
          Featured Collection
        </h2>

        <p className="text-center text-zinc-400 mb-14">
          Discover our premium streetwear collection.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group bg-zinc-900 rounded-2xl overflow-hidden hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={600}
                className="w-full h-105 object-cover object-center group-hover:scale-105 transition duration-500"
              />

              <div className="p-5">
                <p className="text-sm uppercase text-orange-500">
                  {product.category}
                </p>

                <h3 className="text-xl font-bold mt-2">
                  {product.name}
                </h3>

                <p className="text-zinc-400 mt-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-bold text-orange-500">
                    Rs. {product.price}
                  </span>

                  <button className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                    View
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}