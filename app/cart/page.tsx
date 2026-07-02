"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Minus,
  Plus,
  Trash2,
  ArrowLeft,
} from "lucide-react";
import { useCart } from "@/components/context/CartContext";
import CouponBox from "@/components/CouponBox";
import OrderSummary from "@/components/OrderSummary";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">

          <h1 className="text-5xl font-black mb-6">
            Your Cart is Empty
          </h1>

          <p className="text-zinc-400 mb-10">
            Looks like you haven&apos;t added anything yet.
          </p>

          <Link
            href="/"
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold transition"
          >
            Continue Shopping
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-12">

          <h1 className="text-5xl font-black">
            Shopping Cart
          </h1>

          <button
            onClick={clearCart}
            className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-semibold transition"
          >
            Clear Cart
          </button>

        </div>

        <div className="space-y-8">

          {cart.map((item: { id: number; image: string; name: string; quantity: number; price: number }) => (

            <div
              key={item.id}
              className="bg-zinc-900 rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center gap-8"
            >

              <div className="flex gap-6 items-center">

                <Image
                  src={item.image}
                  alt={item.name}
                  width={140}
                  height={160}
                  className="rounded-xl object-cover"
                />

                <div>

                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-orange-500 mt-2 text-xl">
                    Rs. {item.price}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-zinc-800 p-3 rounded-lg hover:bg-orange-500 transition"
                >
                  <Minus size={18} />
                </button>

                <span className="text-2xl font-bold w-10 text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-zinc-800 p-3 rounded-lg hover:bg-orange-500 transition"
                >
                  <Plus size={18} />
                </button>

              </div>

              <div className="flex items-center gap-8">

                <h2 className="text-2xl font-bold text-orange-500">
                  Rs. {item.price * item.quantity}
                </h2>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600 transition"
                >
                  <Trash2 size={28} />
                </button>

              </div>

            </div>

          ))}

        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-16">

          <div className="lg:col-span-2 space-y-8">

            <CouponBox />

            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-white px-6 py-4 rounded-xl hover:bg-white hover:text-black transition"
            >
              <ArrowLeft size={20} />
              Continue Shopping
            </Link>

          </div>

          <OrderSummary subtotal={totalPrice} />

        </div>

        <div>

          <h2 className="text-4xl font-black">
            Total
          </h2>

          <p className="text-5xl font-black text-orange-500 mt-3">
            Rs. {totalPrice}
          </p>

        </div>

        <div className="flex gap-5 mt-8 md:mt-0">

          <Link
            href="/"
            className="flex items-center gap-2 border border-white px-6 py-4 rounded-xl hover:bg-white hover:text-black transition"
          >
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold transition">
            Proceed to Checkout
          </button>

        </div>

      </div>

    </main>
  );
}