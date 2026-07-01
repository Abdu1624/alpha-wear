"use client";

import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import { Product } from "@/types/product";

export default function ProductInfo({
  product,
}: {
  product: Product;
}) {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div>
      <p className="uppercase tracking-[6px] text-orange-500">
        {product.category}
      </p>

      <h1 className="text-5xl font-black mt-3">
        {product.name}
      </h1>

      <div className="flex items-center gap-2 mt-4 text-orange-500 text-xl">
        ★★★★★
        <span className="text-white text-base">(4.9)</span>
      </div>

      <h2 className="text-4xl font-bold mt-8">
        Rs. {product.price}
      </h2>

      <p className="text-zinc-400 mt-8 leading-8">
        {product.description}
      </p>

      <div className="mt-10">
        <h3 className="font-bold mb-4">
          Select Size
        </h3>

        <div className="flex gap-4">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-6 py-3 rounded-xl border transition
                ${
                  selectedSize === size
                    ? "bg-orange-500 border-orange-500"
                    : "border-zinc-700 hover:border-orange-500"
                }`}
            >
              {size}
            </button>
          ))}
        </div>

        {!selectedSize && (
          <p className="text-red-500 mt-4">
            Please select a size
          </p>
        )}
      </div>

      <div className="mt-12 flex gap-5">
        <div
          className={
            selectedSize
              ? ""
              : "pointer-events-none opacity-50"
          }
        >
          <AddToCartButton product={product} />
        </div>

        <button
          disabled={!selectedSize}
          className={`flex-1 py-4 rounded-xl transition ${
            selectedSize
              ? "border border-white hover:bg-white hover:text-black"
              : "border border-zinc-700 text-zinc-500 cursor-not-allowed"
          }`}
        >
          Buy Now
        </button>
      </div>

      <div className="mt-12 space-y-4 text-zinc-400">
        <p>✔ Premium Quality Cotton</p>
        <p>✔ Free Shipping All Over Pakistan</p>
        <p>✔ 7 Days Easy Returns</p>
        <p>✔ Secure Checkout</p>
      </div>
    </div>
  );
}