import React from 'react'
import { CheckCircle, Clock, Wallet } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  return (
    <div>
              <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Choose the Right Option for You</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="p-8 bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition">
              <Wallet size={40} className="mx-auto text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Quick Errands</h3>
              <p className="text-gray-600 mb-4">
                Ideal for short tasks such as grocery runs, parcel pickups, or light deliveries.
              </p>
              <p className="text-2xl font-bold text-sky-600 mb-6">From £18.50/hr</p>
              <ul className="text-gray-700 text-left space-y-2 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="text-sky-500" size={18}/> Local errands</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-sky-500" size={18}/> Friendly helpers</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-sky-500" size={18}/> Flexible scheduling</li>
              </ul>
              <Link
                href="/post-errand"
                className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Book Now
              </Link>
            </div>

            {/* Standard */}
            <div className="p-8 bg-sky-50 rounded-2xl shadow-md hover:shadow-xl transition border border-sky-100">
              <Clock size={40} className="mx-auto text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Personal Assistance</h3>
              <p className="text-gray-600 mb-4">
                Great for more time-intensive errands — shopping, appointments, or pet care.
              </p>
              <p className="text-2xl font-bold text-sky-600 mb-6">From £22/hr</p>
              <ul className="text-gray-700 text-left space-y-2 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="text-sky-500" size={18}/> Longer errands</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-sky-500" size={18}/> Real-time updates</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-sky-500" size={18}/> Friendly local helpers</li>
              </ul>
              <Link
                href="/post-errand"
                className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Request Now
              </Link>
            </div>

            {/* Premium */}
            <div className="p-8 bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition">
              <CheckCircle size={40} className="mx-auto text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Special Requests</h3>
              <p className="text-gray-600 mb-4">
                For unique, time-sensitive, or larger-scale errands requiring extra support.
              </p>
              <p className="text-2xl font-bold text-sky-600 mb-6">Custom Quote</p>
              <ul className="text-gray-700 text-left space-y-2 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="text-sky-500" size={18}/> Tailored assistance</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-sky-500" size={18}/> Flexible timing</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-sky-500" size={18}/> Priority service</li>
              </ul>
              <Link
                href="/post-errand"
                className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Info Text */}
          <div className="mt-16 max-w-3xl mx-auto text-gray-600 text-lg">
            <p>
              Pricing may vary based on distance, time, and complexity of the errand.
              All rates include a local helper fee and support from our coordination team.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing