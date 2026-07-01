"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum: number, item: { price: number; quantity: number }) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black mb-12">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold">
              Your cart is empty
            </h2>

            <Link
              href="/"
              className="inline-block mt-8 bg-orange-500 px-8 py-4 rounded-xl hover:bg-orange-600 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-8">

              {cart.map((item: { id: number; image: string; name: string; quantity: number; price: number }) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-zinc-900 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-6">

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={140}
                      className="rounded-xl object-cover"
                    />

                    <div>
                      <h2 className="text-2xl font-bold">
                        {item.name}
                      </h2>

                      <p className="text-zinc-400 mt-2">
                        Quantity: {item.quantity}
                      </p>

                      <p className="text-orange-500 mt-2 font-bold">
                        Rs. {item.price}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold">
                    Rs. {item.price * item.quantity}
                  </h3>
                </div>
              ))}

            </div>

            <div className="mt-12 flex justify-between items-center border-t border-zinc-800 pt-10">

              <h2 className="text-4xl font-black">
                Total
              </h2>

              <h2 className="text-4xl text-orange-500 font-black">
                Rs. {total}
              </h2>

            </div>

            <button className="mt-10 w-full bg-orange-500 hover:bg-orange-600 py-5 rounded-xl text-xl font-bold transition">
              Proceed To Checkout
            </button>
          </>
        )}

      </div>
    </main>
  );
}