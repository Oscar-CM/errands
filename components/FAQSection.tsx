"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What areas of Skye do you cover?",
    answer:
      "We cover most major areas including Portree, Broadford, Uig, Staffin, Kyleakin, and surrounding villages. If you’re outside these areas, feel free to contact us — we can usually help!",
  },
  {
    question: "How much does an errand cost?",
    answer:
      "Pricing starts from £18.50 per hour. The final cost depends on the type of errand, distance, and time required. You will always get transparent pricing before confirming.",
  },
  {
    question: "How do I pay for an errand?",
    answer:
      "You can pay securely after the errand is completed via bank transfer or mobile payment. Cash is accepted for some errands.",
  },
  {
    question: "Can I schedule an errand in advance?",
    answer:
      "Yes! You can request future dates and times in the errand form. We encourage booking ahead for busy days or longer errands.",
  },
 
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                border border-slate-200 rounded-xl 
                shadow-sm hover:shadow-md transition
                bg-slate-50
              "
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-lg font-medium text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
