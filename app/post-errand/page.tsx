import ErrandForm from "@/components/ErrandForm";
import { CheckCircle, Users, CalendarCheck, Phone, Mail } from "lucide-react";

export default function PostErrandPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative text-white text-center"
        style={{
          backgroundImage: "url('/skye-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 py-24 px-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Need a Helping Hand?
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Submit your errand request, and a trusted local helper in Skye will
            take care of it quickly and reliably.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 text-base">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Phone className="text-sky-300" size={20} />
              <a
                href="tel:07353845577"
                className="hover:text-sky-200 transition text-white font-medium"
              >
                07353845577
              </a>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Mail className="text-sky-300" size={20} />
              <a
                href="mailto:support@skyeerrands.co.uk"
                className="hover:text-sky-200 transition text-white font-medium"
              >
                support@skyeerrands.co.uk
              </a>
            </div>
          </div>

          {/* Not Picking Up Message */}
          <p className="mt-8 text-sm sm:text-base max-w-xl mx-auto text-sky-100 bg-black/30 py-3 px-4 rounded-lg">
            <strong>Not picking up?</strong> We’re probably out running an errand!
            Leave us a message on our email or use the form below — we’ll get
            back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Request Form */}
      <ErrandForm />

      {/* Why Choose Skye Errands */}
      <section className="py-16 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-slate-900">
          Why Choose Skye Errands?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition">
            <Users size={48} className="mx-auto text-sky-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Local Helpers</h3>
            <p className="text-gray-600">
              Trusted community members ready to help with your errands.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition">
            <CheckCircle size={48} className="mx-auto text-sky-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quick & Easy</h3>
            <p className="text-gray-600">
              Submit your request in minutes and get fast support.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition">
            <CalendarCheck size={48} className="mx-auto text-sky-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reliable & Friendly</h3>
            <p className="text-gray-600">
              Helpers complete errands efficiently and with care.
            </p>
          </div>
        </div>
      </section>

      {/* Mini How It Works */}
      <section className="py-16 bg-slate-100 text-center max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-slate-900">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
            <CheckCircle size={48} className="text-sky-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Post Your Errand</h3>
            <p className="text-gray-600">
              Submit your request quickly and easily online.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
            <Users size={48} className="text-sky-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Helpers See Your Request
            </h3>
            <p className="text-gray-600">
              Local helpers are notified and can accept your errand.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
            <CalendarCheck size={48} className="text-sky-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Get It Done</h3>
            <p className="text-gray-600">
              Your errand is completed, and you can leave feedback.
            </p>
          </div>
        </div>
      </section>
      
    </main>
  );
}
