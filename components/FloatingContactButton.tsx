"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingContactButton() {
  return (
    <Link
      href="/post-errand" // Change this to your contact page or form anchor
      className="
        fixed bottom-6 right-6 
        bg-sky-600 text-white 
        w-14 h-14 rounded-full 
        flex items-center justify-center
        shadow-xl hover:shadow-2xl 
        hover:bg-sky-700 transition-all
        z-50
      "
    >
      <MessageCircle size={28} />
    </Link>
  );
}
