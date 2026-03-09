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
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
