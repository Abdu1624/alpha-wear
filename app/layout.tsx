import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/context/CartContext";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "Alpha Wear",
    template: "%s | Alpha Wear",
  },
  description:
    "Premium Streetwear Brand - Luxury Fashion & Oversized Collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <CartProvider>

          {children}

          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 2500,
              style: {
                background: "#18181b",
                color: "#fff",
                border: "1px solid #f97316",
                borderRadius: "16px",
              },
            }}
          />

        </CartProvider>

      </body>
    </html>
  );
}