"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "../config";

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  whatsappText?: string;
  whatsappLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({
  title = "ROOTED IN HERITAGE.",
  subtitle = "Modern African footwear crafted for presence.",
  buttonText = "Shop Collection",
  buttonLink = "/shop",
  whatsappText = "Chat on WhatsApp",
  whatsappLink = WHATSAPP_LINK,
  imageSrc = "/bag-1.jpg",
  imageAlt = "Premium leather footwear",
}: HeroProps) {
  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#f5f1eb]"
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover opacity-30"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-[#1c1c1c] mb-6">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-[#444] mb-10">{subtitle}</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={buttonLink}
            className="inline-block px-10 py-4 bg-[#6b4f3b] text-white rounded-full hover:bg-[#5a4030] transition focus:outline-none focus:ring-4 focus:ring-[#6b4f3b]/50"
          >
            {buttonText}
          </a>

          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition focus:outline-none focus:ring-4 focus:ring-green-500/50"
            >
              {whatsappText}
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
}
