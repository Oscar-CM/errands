"use client";
import React from "react";

export default function ErrandForm() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Request an Errand Runner
        </h2>

        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Fill out the form below to request assistance with your errand. One of our
          trusted local helpers will get in touch shortly.
        </p>

        <form
          action="https://formspree.io/f/xkgknzjn" // ← your Formspree endpoint
          method="POST"
          className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
        >
          {/* Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-800 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-slate-800 font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="_replyto"
                placeholder="you@example.com"
                required
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          {/* Phone and Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-800 font-semibold mb-2">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="e.g. 07400 123456"
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-slate-800 font-semibold mb-2">Location</label>
              <input
                type="text"
                name="location"
                placeholder="e.g. Portree, Broadford, etc."
                required
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          {/* Type of Errand (text input instead of dropdown) */}
          <div>
            <label className="block text-slate-800 font-semibold mb-2">Type of Errand</label>
            <input
              type="text"
              name="errand_type"
              placeholder="e.g. Grocery shopping, parcel pickup, dog walking..."
              required
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Preferred Date and Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-800 font-semibold mb-2">Preferred Date</label>
              <input
                type="date"
                name="preferred_date"
                required
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-slate-800 font-semibold mb-2">Preferred Time</label>
              <input
                type="time"
                name="preferred_time"
                required
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <label className="block text-slate-800 font-semibold mb-2">Details of Your Errand</label>
            <textarea
              name="message"
              placeholder="Please describe your errand, any specific instructions, or timing details."
              required
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 h-32 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
