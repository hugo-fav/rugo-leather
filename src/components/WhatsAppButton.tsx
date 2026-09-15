"use client";

import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK } from "../config";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-black/80 backdrop-blur-md text-white rounded-full shadow-2xl border border-white/10 hover:bg-black transition-all duration-300 hover:scale-105 group"
    >
      <FaWhatsapp
        size={26}
        className="group-hover:text-green-400 transition-colors duration-300"
      />
    </a>
  );
}
