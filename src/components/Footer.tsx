"use client";

import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { WHATSAPP_LINK } from "../config";

export default function Footer() {
  const year = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-[#111111] text-gray-400 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
          {/* Brand Column (Anchors the left side) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <span className="text-3xl md:text-4xl font-serif font-bold tracking-widest text-white mb-6">
              RUGO
            </span>
            <p className="text-sm font-sans font-light leading-relaxed max-w-sm text-gray-400">
              Modern African footwear crafted for presence. Rooted in deep
              heritage, designed for the contemporary journey.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-white mb-8">
              Explore
            </h4>
            <div className="flex flex-col gap-4 text-sm font-sans font-light">
              <a
                href="#home"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#products"
                className="hover:text-white transition-colors duration-300"
              >
                The Collection
              </a>
              <a
                href="#story"
                className="hover:text-white transition-colors duration-300"
              >
                Our Heritage
              </a>
            </div>
          </div>

          {/* Contact & Socials Column */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-white mb-8">
              Connect
            </h4>
            <div className="flex flex-col gap-5 text-sm font-sans font-light">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-white transition-colors duration-300"
              >
                <FaWhatsapp size={18} className="text-gray-500" />
                Inquire on WhatsApp
              </a>
              <a
                href="mailto:umunnapeace3@gmail.com"
                className="flex items-center gap-4 hover:text-white transition-colors duration-300"
              >
                <FaEnvelope size={18} className="text-gray-500" />
                umunnapeace3@gmail.com
              </a>
              <a
                href="https://instagram.com/rugosleather_80876"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-white transition-colors duration-300"
              >
                <FaInstagram size={18} className="text-gray-500" />
                @rugosleather_80876
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs font-sans tracking-[0.1em] text-gray-600">
          <p>© {year} RUGO LEATHER. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              PRIVACY
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              TERMS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
