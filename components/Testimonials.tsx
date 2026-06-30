import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ahmed Khan",
    review:
      "The quality exceeded my expectations. The fabric feels premium and the fit is perfect.",
  },
  {
    name: "Usman Ali",
    review:
      "Best streetwear brand I've purchased from. Fast delivery and amazing customer service.",
  },
  {
    name: "Hassan Raza",
    review:
      "Stylish, comfortable and premium. Definitely buying again.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-orange-500">
            Customer Reviews
          </p>

          <h2 className="text-5xl font-black text-white mt-4">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-orange-500 transition duration-300"
            >
              <div className="flex gap-1 text-orange-500 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                    className="text-orange-500"
                  />
                ))}
              </div>

              <p className="text-zinc-300 leading-8">{review.review}</p>

              <h3 className="mt-8 text-xl font-bold text-white">
                {review.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}