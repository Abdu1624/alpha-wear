import type { Product } from "../../types/product";

export const products: Product[] = [
  {
    id: 1,
    slug: "black-oversized-tee",
    name: "Black Oversized Tee",
    category: "T-Shirts",
    description:
      "Premium oversized cotton t-shirt designed for everyday comfort and modern streetwear style.",
    price: 2999,
    image: "/images/tshirt1.jpg",
  },
  {
    id: 2,
    slug: "white-oversized-tee",
    name: "White Oversized Tee",
    category: "T-Shirts",
    description:
      "Minimalist oversized white t-shirt made from soft heavyweight cotton fabric.",
    price: 2799,
    image: "/images/tshirt2.jpg",
  },
  {
    id: 3,
    slug: "performance-hoodie",
    name: "Performance Hoodie",
    category: "Hoodies",
    description:
      "Premium fleece hoodie with a modern athletic fit for maximum comfort.",
    price: 4999,
    image: "/images/hoodie.jpg",
  },
  {
    id: 4,
    slug: "compression-tee",
    name: "Compression Tee",
    category: "Activewear",
    description:
      "High-performance compression t-shirt designed for gym and training sessions.",
    price: 3199,
    image: "/images/compression.jpg",
  },
];