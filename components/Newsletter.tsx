export default function Newsletter() {
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[8px] text-orange-500">
          Join Alpha Club
        </p>

        <h2 className="text-5xl font-black text-white mt-4">
          Get 10% OFF Your First Order
        </h2>

        <p className="text-zinc-400 mt-6 text-lg">
          Subscribe to receive exclusive drops, new arrivals and special offers.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-full bg-zinc-900 border border-zinc-700 text-white outline-none md:w-105"
          />

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-bold transition">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
}