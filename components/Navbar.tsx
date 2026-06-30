import { Search, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 bg-black/70 backdrop-blur-md text-white">

      <h1 className="text-3xl font-black tracking-[8px] text-orange-500">
        ALPHA WEAR
      </h1>

      <div className="hidden lg:flex gap-10 uppercase text-sm tracking-widest">
        <a href="#" className="hover:text-orange-500 transition">Home</a>
        <a href="#" className="hover:text-orange-500 transition">Shop</a>
        <a href="#" className="hover:text-orange-500 transition">Collections</a>
        <a href="#" className="hover:text-orange-500 transition">About</a>
        <a href="#" className="hover:text-orange-500 transition">Contact</a>
      </div>

      <div className="flex gap-6">
        <Search className="cursor-pointer hover:text-orange-500 transition" />
        <User className="cursor-pointer hover:text-orange-500 transition" />
        <ShoppingBag className="cursor-pointer hover:text-orange-500 transition" />
      </div>

    </nav>
  );
}