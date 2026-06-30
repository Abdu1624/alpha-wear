import Image from "next/image";

const products = [
  {
    name: "Black Oversized Tee",
    price: "Rs. 2,999",
    image: "/images/tshirt1.jpg",
  },
  {
    name: "White Oversized Tee",
    price: "Rs. 2,799",
    image: "/images/tshirt2.jpg",
  },
  {
    name: "Performance Hoodie",
    price: "Rs. 4,999",
    image: "/images/hoodie.jpg",
  },
  {
    name: "Compression Tee",
    price: "Rs. 3,199",
    image: "/images/compression.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-orange-500 mb-3">
            Alpha Wear
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white">
            Featured Collection
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-orange-500 transition-all duration-500 hover:-translate-y-4"
            >
              <div className="overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={800}
                  className="w-full h-[420px] object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {product.name}
                </h3>

                <p className="text-orange-500 text-xl font-semibold mt-2">
                  {product.price}
                </p>

                <button className="mt-6 w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 font-semibold transition duration-300">
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