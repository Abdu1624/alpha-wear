import Image from "next/image";

const categories = [
  {
    title: "Oversized",
    image: "/images/tshirt1.jpg",
  },
  {
    title: "Compression",
    image: "/images/compression.jpg",
  },
  {
    title: "Hoodies",
    image: "/images/hoodie.jpg",
  },
  {
    title: "Essentials",
    image: "/images/tshirt2.jpg",
  },
];

export default function Categories() {
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-orange-500 text-sm">
            Alpha Wear
          </p>

          <h2 className="text-5xl font-black text-white mt-3">
            Shop By Category
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            Discover premium apparel designed for confidence, comfort,
            and performance.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={700}
                height={900}
                className="w-full h-125 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-black text-white">
                  {category.title}
                </h3>

                <button className="mt-4 border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}