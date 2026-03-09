"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxStory() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* BACKGROUND LAYER */
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scaleBackground = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  /* OVERLAY LAYER */
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.4], [0.4, 0.6]);

  /* TEXT LAYER */
  const opacityText = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);
  const yText = useTransform(scrollYProgress, [0.25, 0.55], [60, 0]);

  return (
    <section
      ref={ref}
      id="story"
      className="relative h-[90vh] overflow-hidden bg-[#f5f1eb]"
    >
      {/* BACKGROUND */}
      <motion.div
        style={{ y: yBackground, scale: scaleBackground }}
        className="absolute inset-0"
      >
        <div
          style={{
            backgroundImage: "url('/assortment-antiques-market-objects.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
      </motion.div>

      {/* OVERLAY */}
      <motion.div
        style={{ opacity: opacityOverlay }}
        className="absolute inset-0 bg-black"
      />

      {/* TEXT */}
      <motion.div
        style={{ opacity: opacityText, y: yText }}
        className="relative z-10 flex h-full items-center justify-center text-center px-6"
      >
        <div className="max-w-3xl text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-wide">
            Crafted with Intention.
          </h2>

          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            Every pair of RUGO footwear is handcrafted using premium leather,
            rooted in heritage, and designed for presence.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
