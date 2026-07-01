"use client";

import { Product } from "@/types/product";
import { useCart } from "@/components/context/CartContext";

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="flex-1 bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-bold transition"
    >
      Add To Cart
    </button>
  );
}