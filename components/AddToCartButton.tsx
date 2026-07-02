"use client";

import { Product } from "@/types/product";
import { useCart } from "@/components/context/CartContext";
import toast from "react-hot-toast";

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart(product);

    toast.success(`${product.name} added to cart!`, {
      icon: "🛒",
    });
  }

  return (
    <button
      onClick={handleAddToCart}
      className="flex-1 bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-bold transition duration-300 hover:scale-[1.02]"
    >
      Add To Cart
    </button>
  );
}