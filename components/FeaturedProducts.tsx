import Image from "next/image";
import { Heart, ShoppingBag, Star } from "lucide-react";

const products = [
  {
    name: "Black Oversized Tee",
    price: "Rs. 2,999",
    image: "/images/tshirt1.jpg",
    badge: "NEW",
  },
  {
    name: "White Oversized Tee",
    price: "Rs. 2,799",
    image: "/images/tshirt2.jpg",
    badge: "BEST SELLER",
  },
  {
    name: "Performance Hoodie",
    price: "Rs. 4,999",
    image: "/images/hoodie.jpg",
    badge: "LIMITED",
  },
  {
    name: "Compression Tee",
    price: "Rs. 3,199",
    image: "/images/compression.jpg",
    badge: "HOT",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-orange-500">
            Premium Collection
          </p>

          <h2 className="text-5xl font-black text-white mt-4">
            Featured Products
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="group rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition-all duration-500"
            >
              <div className="relative overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={800}
                  className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
                />

                <span className="absolute top-5 left-5 bg-orange-500 px-3 py-1 rounded-full text-xs font-bold">
                  {product.badge}
                </span>

                <button className="absolute top-5 right-5 bg-black/60 p-2 rounded-full hover:bg-orange-500 transition">
                  <Heart size={18} />
                </button>

              </div>

              <div className="p-6">

                <div className="flex items-center gap-1 text-orange-500">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>

                <h3 className="text-xl font-bold text-white mt-3">
                  {product.name}
                </h3>

                <p className="text-orange-500 mt-2 font-semibold">
                  {product.price}
                </p>

                <div className="flex gap-2 mt-4">
                  <span className="border px-3 py-1 rounded-full text-sm">S</span>
                  <span className="border px-3 py-1 rounded-full text-sm">M</span>
                  <span className="border px-3 py-1 rounded-full text-sm">L</span>
                  <span className="border px-3 py-1 rounded-full text-sm">XL</span>
                </div>

                <button className="mt-6 flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold transition">
                  <ShoppingBag size={18} />
                  Add to Cart
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}