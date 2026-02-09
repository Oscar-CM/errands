// components/ServicesSection.tsx
import Link from "next/link";
import { Package, ShoppingBasket, Dog, HeartPulse, Home } from "lucide-react";

const services = [
  {
    title: "Grocery Pickup",
    description:
      "We’ll collect your shopping from local stores or supermarkets and deliver it to your doorstep.",
    icon: ShoppingBasket,
  },
  {
    title: "Parcel Delivery",
    description:
      "Need to send or collect a package? We’ll take care of post office runs and deliveries around Skye.",
    icon: Package,
  },
  {
    title: "Dog Walking",
    description:
      "Busy day or away for a while? Our friendly team can walk your dog safely and lovingly.",
    icon: Dog,
  },
  {
    title: "Prescription Collection",
    description:
      "We can collect prescriptions from local pharmacies and bring them right to your home.",
    icon: HeartPulse,
  },
  {
    title: "Neighbour Check-ins",
    description:
      "Simple visits or calls to check on elderly neighbours — because care goes a long way.",
    icon: Home,
  },
];

interface ServicesSectionProps {
  preview?: boolean; // if true, show only first few and a “View all” button
}

export default function ServicesSection({ preview = false }: ServicesSectionProps) {
  const displayedServices = preview ? services.slice(0, 3) : services;

  return (
    <section className="bg-gradient-to-b from-sky-50 to-white py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-sky-800 mb-4">Our Services</h2>
      <p className="text-slate-600 max-w-2xl mx-auto mb-12">
        We’re here to make life easier across the Isle of Skye — offering friendly help with everyday errands and small tasks.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {displayedServices.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center mb-4">
              <service.icon className="h-12 w-12 text-sky-600 mb-3" />
              <h3 className="text-xl font-semibold text-sky-800">
                {service.title}
              </h3>
            </div>
            <p className="text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>

      {preview && (
        <div className="mt-12">
          <Link
            href="/services"
            className="inline-block bg-sky-700 text-white font-medium px-6 py-3 rounded-xl hover:bg-sky-800 transition"
          >
            View All Services
          </Link>
        </div>
      )}
    </section>
  );
}
