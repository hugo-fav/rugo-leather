"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WHATSAPP_LINK } from "@/config";

type Product = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const products: Product[] = [
  {
    src: "/leathersandals.jfif",
    alt: "Leather Sandals",
    title: "Leather Sandal",
    description:
      "Handcrafted leather sandal designed for comfort and timeless style.",
  },
  {
    src: "/halfshoe.jfif",
    alt: "Men Half shoe",
    title: "Men Half Shoe",
    description:
      "Versatile half shoe blending classic design with modern comfort.",
  },
  {
    src: "/palms.jfif",
    alt: "Palms",
    title: "Palms",
    description:
      "Lightweight and breathable sandal inspired by tropical vibes, perfect for warm weather.",
  },
];

export default function LuxuryShowcase() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative h-[350vh] bg-[#f5f1eb]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background */}
        <motion.div style={{ y: backgroundY }} className="absolute inset-0">
          <Image
            src="/beautiful-men-sandal.jpg"
            alt="background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        </motion.div>

        {/* Products */}
        <div className="relative h-full flex items-center justify-center">
          {products.map((product, i) => {
            const start = i * 0.33;
            const end = start + 0.33;

            const opacity = useTransform(
              scrollYProgress,
              [start, (start + end) / 2, end],
              [0, 1, 0],
            );

            const scale = useTransform(
              scrollYProgress,
              [start, (start + end) / 2, end],
              [0.9, 1, 0.9],
            );

            const xImage = useTransform(
              scrollYProgress,
              [start, end],
              [i % 2 === 0 ? -120 : 120, 0],
            );

            const xText = useTransform(
              scrollYProgress,
              [start, end],
              [i % 2 === 0 ? 120 : -120, 0],
            );

            return (
              <motion.div
                key={product.src}
                style={{ opacity, scale }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="max-w-7xl w-full grid md:grid-cols-2 gap-20 items-center px-12">
                  {/* Image */}
                  <motion.div
                    style={{ x: xImage }}
                    className="flex justify-center"
                  >
                    <Image
                      src={product.src}
                      alt={product.alt}
                      width={420}
                      height={420}
                      className="rounded-2xl shadow-2xl ring-4 ring-white/20"
                    />
                  </motion.div>

                  {/* Text */}
                  <motion.div
                    style={{ x: xText }}
                    className="text-white space-y-8"
                  >
                    <h2 className="text-5xl md:text-6xl font-light tracking-wide">
                      {product.title}
                    </h2>

                    <p className="text-xl opacity-90 leading-relaxed font-light">
                      {product.description}
                    </p>

                    <button
                      onClick={() => window.open(WHATSAPP_LINK, "_blank")}
                      className="backdrop-blur-sm bg-white/10 border border-white/30 px-8 py-4 rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-lg font-medium"
                    >
                      Contact Rugo
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
