"use client";

import Link from "next/link";
import { Search, ShoppingBag, User, Heart } from "lucide-react";
import { useCart } from "@/components/context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-black tracking-[8px] text-orange-500 cursor-pointer">
            ALPHA WEAR
          </h1>
        </Link>

        {/* Menu */}
        <div className="hidden lg:flex gap-10 uppercase text-sm tracking-widest">
          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>

          <Link href="/" className="hover:text-orange-500 transition">
            Shop
          </Link>

          <Link href="/" className="hover:text-orange-500 transition">
            Collections
          </Link>

          <Link href="/" className="hover:text-orange-500 transition">
            About
          </Link>

          <Link href="/" className="hover:text-orange-500 transition">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">

          <Search
            size={22}
            className="cursor-pointer hover:text-orange-500 transition"
          />

          <Heart
            size={22}
            className="cursor-pointer hover:text-orange-500 transition"
          />

          <User
            size={22}
            className="cursor-pointer hover:text-orange-500 transition"
          />

          {/* Cart */}
          <div className="relative cursor-pointer">
            <ShoppingBag
              size={24}
              className="hover:text-orange-500 transition"
            />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}