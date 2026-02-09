"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-md"
          : "bg-slate-900/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl font-semibold text-white tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          Skye Errands
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-gray-200 font-medium">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/services" className="hover:text-white transition">
            Services
          </Link>
          <Link href="/pricing" className="hover:text-white transition">
            Pricing
          </Link>
          <Link href="/post-errand" className="hover:text-white transition">
            Request Runner
          </Link>
          <Link href="/join" className="hover:text-white transition">
            Join the Team
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-200 hover:text-white transition"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dim Background */}
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black/70 z-[90]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 w-4/5 sm:w-2/5 h-full 
                         bg-sky-900 text-white z-[100] 
                         flex flex-col items-center justify-start 
                         pt-20 pb-10 space-y-6 font-medium shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-5 right-5 text-white hover:text-sky-300 transition"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>

              {/* Menu Links */}
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-200 text-lg transition"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-200 text-lg transition"
              >
                Services
              </Link>
              <Link
                href="/post-errand"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-200 text-lg transition"
              >
                Post an Errand
              </Link>
              <Link
                href="/join"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-200 text-lg transition"
              >
                Join the Team
              </Link>

              <div className="w-2/3 border-t border-sky-800 my-4" />

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-xl transition"
              >
                Contact Us
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
