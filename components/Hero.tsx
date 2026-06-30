import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen pt-24">
      <Image
        src="/images/hero.jpg"
        alt="Alpha Wear Hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <p className="uppercase tracking-[8px] text-orange-500 mb-4">
          Premium Streetwear
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          BUILT FOR MEN
          <br />
          WHO NEVER QUIT.
        </h1>

        <p className="mt-6 max-w-2xl text-gray-300">
          Designed in Pakistan. Built for confidence, comfort and performance.
        </p>

        <div className="mt-10 flex gap-5">
          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition">
            Shop Now
          </button>

          <button className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}