import Link from "next/link";

const collections = [
  {
    title: "Oversized Collection",
    description: "Relaxed fit streetwear for everyday confidence.",
    href: "/shop",
  },
  {
    title: "Performance Wear",
    description: "Gym-ready apparel designed for performance.",
    href: "/shop",
  },
  {
    title: "Premium Hoodies",
    description: "Comfort meets luxury with our signature hoodies.",
    href: "/shop",
  },
  {
    title: "New Arrivals",
    description: "Discover the latest Alpha Wear drops.",
    href: "/shop",
  },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-6xl font-black">
            Collections
          </h1>

          <p className="text-zinc-400 mt-4">
            Explore every Alpha Wear collection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.title}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-orange-500 transition"
            >
              <h2 className="text-3xl font-bold">
                {collection.title}
              </h2>

              <p className="text-zinc-400 mt-4">
                {collection.description}
              </p>

              <Link
                href={collection.href}
                className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition"
              >
                Shop Collection
              </Link>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}