"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/config";

const showcaseItems = [
  {
    src: "/leather.jpg",
    alt: "Leather Sandals",
    title: "The Leather Sandal",
    description: "Handcrafted leather designed for comfort and timeless style.",
  },
  {
    src: "/halfshoe.jfif",
    alt: "Men Half shoe",
    title: "The Half Shoe",
    description: "Versatile blending classic design with modern comfort.",
  },
  {
    src: "/palms.jfif",
    alt: "Palms",
    title: "The Palms",
    description: "Lightweight and breathable sandal inspired by tropical vibes, perfect for warm weather.",
  },
];

export default function LuxuryShowcase() {
  return (
    <section className="bg-[#f5f1eb] pt-32 pb-48 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 relative">
        
        {/* Sticky Left Side - Context */}
        <div className="md:w-1/3 md:sticky md:top-40 h-fit z-10">
          <p className="text-sm font-sans tracking-[0.3em] uppercase text-[#6b4f3b] mb-4">
            Signature Forms
          </p>
          <h2 className="text-5xl md:text-6xl font-serif text-[#1c1c1c] mb-6 leading-tight">
            The RUGO <br /> Silhouettes.
          </h2>
          <p className="text-lg text-gray-600 font-sans mb-10 font-light leading-relaxed">
            Discover the definitive shapes that make our collection. Built for durability, styled for elegance.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-b border-[#1c1c1c] pb-1 text-[#1c1c1c] font-sans uppercase tracking-widest text-sm hover:text-gray-500 hover:border-gray-500 transition-colors"
          >
            Inquire About Fit
          </a>
        </div>

        {/* Scrolling Right Side - Massive Images */}
        <div className="md:w-2/3 flex flex-col gap-32 md:mt-0 mt-16">
          {showcaseItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              {/* Massive Borderless Image */}
              <div className="relative h-[600px] w-full bg-[#e8e3dc]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Minimal Text Below Image */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <h3 className="text-3xl font-serif text-[#1c1c1c]">{item.title}</h3>
                <p className="text-gray-600 font-sans max-w-xs font-light text-sm md:text-right">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}