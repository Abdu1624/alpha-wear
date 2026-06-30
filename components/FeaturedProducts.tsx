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
    <section className="bg-black text-white py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Collection
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.name}
className="group bg-zinc-900 rounded-2xl overflow-hidden hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500"          >
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={600}
className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"            />

            <div className="p-5">
              <h3 className="text-xl font-semibold">{product.name}</h3>

              <p className="text-orange-500 mt-2">{product.price}</p>

              <button className="mt-5 w-full bg-orange-500 py-3 rounded-lg hover:bg-orange-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}