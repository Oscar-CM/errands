"use client";
import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Maggie — Portree",
    text: "Absolutely fantastic service! My groceries were delivered within an hour. Friendly and reliable!",
  },
  {
    name: "Colin — Broadford",
    text: "Skye Errands helped me when I couldn’t leave the house. Quick response and very kind helpers.",
  },
  {
    name: "Fiona — Uig",
    text: "Made my day so much easier. Highly recommend this service for anyone needing a hand!",
  },
  {
    name: "James — Staffin",
    text: "Great communication and fast support. A really helpful service for busy days.",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.9; // slide almost full width
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          What People Are Saying
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We’re proud to support the Isle of Skye community. Here’s what our
          customers have to say.
        </p>

        {/* Buttons */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full bg-white shadow-md hover:bg-sky-50 transition"
          >
            <ChevronLeft className="text-sky-700" size={24} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full bg-white shadow-md hover:bg-sky-50 transition"
          >
            <ChevronRight className="text-sky-700" size={24} />
          </button>
        </div>

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className="
            flex gap-6 overflow-x-auto scroll-smooth 
            snap-x snap-mandatory 
            pb-4 
            no-scrollbar
          "
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="
                min-w-[80%] sm:min-w-[40%] md:min-w-[30%]
                bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition
                snap-center
              "
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 italic mb-4">"{t.text}"</p>
              <h4 className="text-sky-700 font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
