import FeaturedProducts from "@/components/FeaturedProducts";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black pt-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-white">
            Shop
          </h1>

          <p className="text-zinc-400 mt-4 text-lg">
            Discover our complete premium collection.
          </p>
        </div>

        <FeaturedProducts />

      </div>
    </main>
  );
}