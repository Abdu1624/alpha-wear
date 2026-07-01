import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[8px] text-orange-500">
            Contact Us
          </p>

          <h1 className="text-6xl font-black mt-4">
            Let&apos;s Talk
          </h1>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Whether you have a question
            about products, orders or partnerships, our team is ready
            to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-8">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="flex items-center gap-4">
                <Mail className="text-orange-500" size={28} />
                <div>
                  <h3 className="font-bold text-xl">Email</h3>
                  <p className="text-zinc-400">
                    support@alphawear.pk
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="flex items-center gap-4">
                <Phone className="text-orange-500" size={28} />
                <div>
                  <h3 className="font-bold text-xl">Phone</h3>
                  <p className="text-zinc-400">
                    +92 300 1234567
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="flex items-center gap-4">
                <MapPin className="text-orange-500" size={28} />
                <div>
                  <h3 className="font-bold text-xl">Location</h3>
                  <p className="text-zinc-400">
                    Lahore, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="flex items-center gap-4">
                <Clock className="text-orange-500" size={28} />
                <div>
                  <h3 className="font-bold text-xl">Business Hours</h3>
                  <p className="text-zinc-400">
                    Mon - Sat | 10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Send us a Message
            </h2>

            <div className="space-y-6">

              <Input
                placeholder="Your Name"
              />

              <Input
                placeholder="Email Address"
                type="email"
              />

              <Input
                placeholder="Subject"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-orange-500 focus:outline-none"
              />

              <Button
                fullWidth
              >
                Send Message
              </Button>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}