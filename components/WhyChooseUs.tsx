import { ShieldCheck, Truck, Sparkles, CreditCard } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "Made with high-quality fabrics for maximum comfort and durability.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Nationwide delivery with quick and reliable shipping.",
  },
  {
    icon: Sparkles,
    title: "Modern Design",
    desc: "Minimal, bold and premium streetwear inspired by global brands.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    desc: "Safe and trusted payment methods for every order.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-orange-500">
            Why Alpha Wear
          </p>

          <h2 className="text-5xl font-black text-white mt-4">
            Built For Performance
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-orange-500 transition duration-300"
              >
                <Icon className="w-12 h-12 text-orange-500 mb-6" />

                <h3 className="text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="text-zinc-400 mt-4 leading-7">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}