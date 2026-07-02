"use client";

interface OrderSummaryProps {
  subtotal: number;
}

export default function OrderSummary({
  subtotal,
}: OrderSummaryProps) {
  const shipping = subtotal > 5000 ? 0 : 250;
  const tax = 0;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sticky top-28">

      <h2 className="text-3xl font-black mb-8">
        Order Summary
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between text-zinc-400">
          <span>Subtotal</span>
          <span>Rs. {subtotal}</span>
        </div>

        <div className="flex justify-between text-zinc-400">
          <span>Shipping</span>

          {shipping === 0 ? (
            <span className="text-green-500 font-bold">
              FREE
            </span>
          ) : (
            <span>Rs. {shipping}</span>
          )}
        </div>

        <div className="flex justify-between text-zinc-400">
          <span>Tax</span>
          <span>Rs. {tax}</span>
        </div>

      </div>

      <hr className="my-8 border-zinc-700" />

      <div className="flex justify-between items-center">

        <span className="text-2xl font-bold">
          Total
        </span>

        <span className="text-3xl font-black text-orange-500">
          Rs. {total}
        </span>

      </div>

      <button className="w-full mt-10 bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-bold transition duration-300 hover:scale-[1.02]">
        Proceed To Checkout
      </button>

      <div className="mt-10 space-y-3 text-sm text-zinc-400">

        <p>✅ Secure Checkout</p>

        <p>🚚 Free Shipping over Rs. 5000</p>

        <p>↩️ Easy 7 Days Return</p>

        <p>🔒 100% Secure Payment</p>

      </div>

    </div>
  );
}