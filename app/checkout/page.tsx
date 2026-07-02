export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-orange-500">
            Checkout
          </p>

          <h1 className="text-6xl font-black mt-4">
            Secure Checkout
          </h1>

          <p className="text-zinc-400 mt-6">
            Complete your order in a few simple steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Shipping Form */}
          <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Shipping Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                placeholder="First Name"
                className="bg-black border border-zinc-700 rounded-xl px-5 py-4"
              />

              <input
                placeholder="Last Name"
                className="bg-black border border-zinc-700 rounded-xl px-5 py-4"
              />

              <input
                placeholder="Email"
                className="bg-black border border-zinc-700 rounded-xl px-5 py-4"
              />

              <input
                placeholder="Phone Number"
                className="bg-black border border-zinc-700 rounded-xl px-5 py-4"
              />

              <input
                placeholder="City"
                className="bg-black border border-zinc-700 rounded-xl px-5 py-4"
              />

              <input
                placeholder="Postal Code"
                className="bg-black border border-zinc-700 rounded-xl px-5 py-4"
              />

            </div>

            <textarea
              placeholder="Complete Address"
              rows={5}
              className="mt-6 w-full bg-black border border-zinc-700 rounded-xl px-5 py-4"
            />

          </div>

          {/* Order Summary */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 h-fit">

            <h2 className="text-3xl font-bold mb-8">
              Order Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs. XXXX</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-500">
                  FREE
                </span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>Rs. 0</span>
              </div>

            </div>

            <hr className="my-8 border-zinc-700" />

            <div className="flex justify-between text-2xl font-bold">

              <span>Total</span>

              <span className="text-orange-500">
                Rs. XXXX
              </span>

            </div>

            <button className="w-full mt-10 bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-bold transition">
              Place Order
            </button>

          </div>

        </div>

      </div>
    </main>
  );
}