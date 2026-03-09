"use client";

import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import React from "react";
import { WHATSAPP_LINK } from "../config";

// configuration types make the component easier to maintain or override
export type ContactItem = {
  icon: React.ReactNode;
  // text: string;
  href?: string;
};
export type SocialItem = {
  icon: React.ReactNode;
  href: string;
  label: string;
};

const contactItems: ContactItem[] = [
  {
    icon: <FaWhatsapp size={20} />,
    // text: "+234 801 234 5678",
    href: WHATSAPP_LINK, // open WhatsApp chat
  },
  {
    icon: <FaEnvelope size={20} />,
    // text: "info@kaira.com",
    href: "mailto:umunnapeace3@gmail.com",
  },
];

const socialItems: SocialItem[] = [
  {
    icon: <FaInstagram size={24} />,
    href: "https://instagram.com/rugosleather_80876",
    label: "Instagram",
  },
];

export default function Footer() {
  const year = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-[#111111] text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Contact Info */}
        <address className="not-italic flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          {contactItems.map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              {c.href ? (
                <a
                  href={c.href}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  {c.icon}
                </a>
              ) : (
                <>{c.icon}</>
              )}
            </div>
          ))}
        </address>

        {/* Social Links */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {socialItems.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="hover:text-white transition"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {year} RUGO. All rights reserved.
      </div>
    </footer>
  );
}
