"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/config";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-[#111] overflow-hidden"
    >
      {/* Background Image - Slight zoom on load */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/bag-1.jpg"
          alt="Premium leather footwear"
          fill
          priority
          className="object-cover opacity-70"
        />
        {/* Subtle gradient so text is always readable at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </motion.div>

      {/* Content - Anchored Bottom Left for Editorial Feel */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 z-10 flex flex-col md:flex-row justify-between items-end gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-8xl font-serif text-white tracking-tight leading-none mb-4">
            Rooted in <br />{" "}
            <span className="italic text-[#d4af37]">Heritage.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-sans max-w-md">
            Modern African footwear crafted for presence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex gap-4 w-full md:w-auto"
        >
          <a
            href="#products"
            className="flex-1 md:flex-none text-center px-8 py-4 bg-white text-black font-sans text-sm tracking-widest uppercase hover:bg-gray-200 transition"
          >
            Explore
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-none text-center px-8 py-4 border border-white text-white font-sans text-sm tracking-widest uppercase hover:bg-white hover:text-black transition"
          >
            Inquire
          </a>
        </motion.div>
      </div>
    </section>
  );
}
