import {
  Globe,
  MessageCircle,
  Send,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-4 gap-12">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-black tracking-[6px] text-orange-500">
            ALPHA WEAR
          </h2>

          <p className="text-zinc-400 mt-6 leading-7">
            Premium streetwear designed for confidence, comfort and performance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-6">Quick Links</h3>

          <ul className="space-y-3 text-zinc-400">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">Shop</a></li>
            <li><a href="#" className="hover:text-orange-500">Collections</a></li>
            <li><a href="#" className="hover:text-orange-500">About</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-6">Contact</h3>

          <div className="space-y-4 text-zinc-400">

            <div className="flex gap-3 items-center">
              <Mail size={18} />
              support@alphawear.com
            </div>

            <div className="flex gap-3 items-center">
              <Phone size={18} />
              +92 300 1234567
            </div>

            <div className="flex gap-3 items-center">
              <MapPin size={18} />
              Lahore, Pakistan
            </div>

          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-bold text-lg mb-6">Follow Us</h3>

          <div className="flex gap-5">

            <a href="#" className="hover:text-orange-500">
              <Globe />
            </a>

            <a href="#" className="hover:text-orange-500">
              <MessageCircle />
            </a>

            <a href="#" className="hover:text-orange-500">
              <Send />
            </a>

          </div>
        </div>

      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-zinc-500">
        © 2026 Alpha Wear. All Rights Reserved.
      </div>
    </footer>
  );
}