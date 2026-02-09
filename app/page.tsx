import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import ErrandForm from "@/components/ErrandForm";
import Pricing from "@/components/Pricing";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main className="w-full">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/skye-bg.jpg')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 drop-shadow-lg">
            Helping Hands Across the Isle of Skye
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl drop-shadow-md">
            Friendly errand runners for errands big and small — Helping get things done!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/post-errand"
              className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-3 rounded-xl transition"
            >
              Reqeust Runner
            </Link>
            <Link
              href="/join"
              className="bg-white text-sky-700 hover:bg-slate-100 font-medium px-6 py-3 rounded-xl transition"
            >
              Join Our Team
            </Link>
          </div>
        </div>

        {/* Subtle Gradient at Bottom */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent" />
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <ServicesSection preview />
       {/* How It Works */}
      <HowItWorks />
      <Pricing/>
      <ErrandForm />
      <TestimonialsSection/>
      <FAQSection/>
      
    </main>
  );
}
