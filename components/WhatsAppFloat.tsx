"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918839269122?text=Hi%2C%20I%20am%20interested%20in%20renting%20commercial%20space%20at%20Raja%20Mandi%20Agra."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl wa-pulse hover:scale-110 transition-transform"
    >
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  );
}
