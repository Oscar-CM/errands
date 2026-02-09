import { CheckCircle, Clock, Wallet } from "lucide-react";
import Link from "next/link";
import Pricing from "@/components/Pricing";

export default function PricingPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative text-white text-center py-24 px-6"
        style={{
          backgroundImage: "url('/skye-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Affordable & Transparent Pricing</h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Fair prices for reliable help — starting from{" "}
            <span className="font-semibold text-sky-300">£18.50 per hour</span>.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <Pricing/>

    </main>
  );
}
