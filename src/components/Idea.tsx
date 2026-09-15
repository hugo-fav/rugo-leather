"use client";

import { WHATSAPP_LINK } from "@/config";

export default function Idea() {
  return (
    <section className="py-32 bg-[#e8e3dc] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm font-sans tracking-[0.3em] uppercase text-[#6b4f3b] mb-6">
          Made to Order
        </p>
        <h2 className="text-5xl md:text-7xl font-serif text-[#1c1c1c] mb-8 leading-tight">
          Bespoke <br className="md:hidden" /> Craftsmanship.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 font-sans max-w-2xl mx-auto mb-12 font-light">
          Have a specific vision? Speak directly with our artisans via WhatsApp
          to commission a custom pair tailored perfectly to your specifications.
        </p>
        <button
          onClick={() => window.open(WHATSAPP_LINK, "_blank")}
          className="px-10 py-4 bg-transparent border border-[#1c1c1c] text-[#1c1c1c] hover:bg-[#1c1c1c] hover:text-white transition-colors duration-300 text-sm font-sans uppercase tracking-widest"
        >
          Commission a Piece
        </button>
      </div>
    </section>
  );
}
