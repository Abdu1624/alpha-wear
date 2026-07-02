"use client";

import { useState } from "react";

export default function CouponBox() {
  const [coupon, setCoupon] = useState("");

  function applyCoupon() {
    if (!coupon.trim()) {
      alert("Please enter a coupon code.");
      return;
    }

    alert(`Coupon "${coupon}" applied! (Backend later)`);
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

      <h2 className="text-2xl font-black mb-6">
        Have a Coupon?
      </h2>

      <div className="flex flex-col sm:flex-row gap-4">

        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon code"
          className="flex-1 bg-black border border-zinc-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500 transition"
        />

        <button
          onClick={applyCoupon}
          className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold transition"
        >
          Apply
        </button>

      </div>

      <p className="text-zinc-500 text-sm mt-4">
        Promo codes and discounts will be connected to the backend later.
      </p>

    </div>
  );
}