export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[8px] text-orange-500">
            About Alpha Wear
          </p>

          <h1 className="text-6xl font-black mt-4">
            Built For Men Who Never Quit
          </h1>

          <p className="text-zinc-400 mt-8 text-lg max-w-3xl mx-auto leading-8">
            Alpha Wear is a premium Pakistani streetwear brand created for
            ambitious men. We combine luxury fabrics, modern designs and
            athletic comfort to create clothing that performs everywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
            <h2 className="text-3xl font-bold mb-4 text-orange-500">
              Our Mission
            </h2>

            <p className="text-zinc-400 leading-8">
              To create premium clothing that inspires confidence and
              represents strength, discipline and ambition.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
            <h2 className="text-3xl font-bold mb-4 text-orange-500">
              Our Vision
            </h2>

            <p className="text-zinc-400 leading-8">
              To become Pakistan&apos;s leading premium streetwear and lifestyle
              brand recognized around the world.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
            <h2 className="text-3xl font-bold mb-4 text-orange-500">
              Quality
            </h2>

            <p className="text-zinc-400 leading-8">
              Every product is designed using premium materials with a focus
              on durability, comfort and timeless style.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}