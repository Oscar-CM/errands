import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-12">
        {/* Column 1 — Brand & Description */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">Skye Errands</h3>
          <p className="text-gray-400 mb-4">
            Friendly, local help for errands big and small — connecting the Isle of Skye community with care.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-sky-400 transition">Home</Link></li>
            <li><Link href="/services" className="hover:text-sky-400 transition">Services</Link></li>
            <li><Link href="/pricing" className="hover:text-sky-400 transition">Pricing</Link></li>
            <li><Link href="/post-errand" className="hover:text-sky-400 transition">Post an Errand</Link></li>
            <li><Link href="/join" className="hover:text-sky-400 transition">Join Our Team</Link></li>
          </ul>
        </div>

        {/* Column 3 — Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Get in Touch</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-sky-400" />
              <span>+44 7787 4657376</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-sky-400" />
              <span>support@skyeerrands.co.uk</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-sky-400" />
              <span>Isle of Skye, Scotland</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Skye Errands. All rights reserved. | Built with ❤️ in the Isle of Skye.
        </p>
      </div>
    </footer>
  );
}
