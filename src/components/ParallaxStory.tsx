"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxStory() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Moves the background image down slightly as the user scrolls down,
  // creating a subtle, high-end parallax window effect.
  const yBackground = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  // Fades the text in and out smoothly
  const opacityText = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const yText = useTransform(scrollYProgress, [0.3, 0.5], [40, 0]);

  return (
    <section
      ref={ref}
      id="story"
      className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-[#111]"
    >
      {/* 
        The Background Image 
        Make sure the image you use here is DARK and moody. 
        A close-up of leather texture or tools works best.
      */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 w-full h-[130%]"
      >
        <div
          className="w-full h-full"
          style={{
            // Swap this path out for a close-up of leather or craftsmanship
            backgroundImage: "url('/assortment-antiques-market-objects.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* A heavy dark gradient overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Floating Typography */}
      <motion.div
        style={{ opacity: opacityText, y: yText }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <p className="text-sm font-sans tracking-[0.4em] uppercase text-[#d4af37] mb-8">
          The Workshop
        </p>
        <h2 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight">
          We don't just make shoes. <br />
          <span className="italic text-gray-400">We craft heirlooms.</span>
        </h2>
        <p className="text-lg text-gray-300 font-sans max-w-2xl mx-auto font-light leading-relaxed mt-8">
          Every cut, every stitch, and every finish is executed with a singular
          purpose: to create footwear that commands presence and respects our
          deep-rooted heritage.
        </p>
      </motion.div>
    </section>
  );
}
