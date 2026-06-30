export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-[85vh] bg-black text-white px-6">

      <p className="uppercase tracking-[8px] text-orange-500 mb-4">
        Premium Streetwear
      </p>

      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
        BUILT FOR MEN
        <br />
        WHO NEVER QUIT.
      </h1>

      <p className="mt-6 max-w-xl text-gray-400">
        Designed in Lahore. Crafted in Faisalabad. Worn Across Pakistan.
      </p>

      <div className="mt-10 flex gap-5">
        <button className="bg-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-600">
          Shop Now
        </button>

        <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
          Explore
        </button>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-8 uppercase text-xs tracking-[4px] text-zinc-500">
        <span>Premium Cotton</span>
        <span>Made in Pakistan</span>
        <span>Cash On Delivery</span>
        <span>7 Days Exchange</span>
      </div>

    </section>
  );
}