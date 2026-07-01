"use client";

import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";
import { useCart } from "@/components/context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-zinc-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-black tracking-[8px] text-orange-500 hover:scale-105 transition duration-300">
            ALPHA
          </h1>
        </Link>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-10 uppercase text-sm tracking-[3px]">

          <Link
            href="/"
            className="relative group hover:text-orange-500 transition"
          >
            Home
            <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/shop"
            className="relative group hover:text-orange-500 transition"
          >
            Shop
            <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/collections"
            className="relative group hover:text-orange-500 transition"
          >
            Collections
            <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/about"
            className="relative group hover:text-orange-500 transition"
          >
            About
            <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/contact"
            className="relative group hover:text-orange-500 transition"
          >
            Contact
            <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">

          <Link href="/search">
            <Search
              size={22}
              className="hover:text-orange-500 hover:scale-110 transition duration-300"
            />
          </Link>

          <Link href="/login">
            <User
              size={22}
              className="hover:text-orange-500 hover:scale-110 transition duration-300"
            />
          </Link>

          <Link
            href="/cart"
            className="relative"
          >
            <ShoppingBag
              size={22}
              className="hover:text-orange-500 hover:scale-110 transition duration-300"
            />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-orange-500 text-black text-xs font-bold flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </Link>

        </div>

      </div>

    </nav>
  );
}