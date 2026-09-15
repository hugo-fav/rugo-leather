"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "../data/products";
import { makeWhatsAppLink } from "../config"; // Import your helper function

export default function ProductGrid() {
  return (
    <section id="products" className="bg-[#f5f1eb] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-[#1c1c1c]">
            Featured <br /> Collection
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product, index) => {
            // Generate the specific message for this product using your config
            const waLink = makeWhatsAppLink(
              `Hello RUGO! I'm interested in the ${product.name}. Can we discuss sizing and availability?`,
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group block"
              >
                <div className="relative h-[450px] w-full overflow-hidden bg-[#e8e3dc] mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex justify-between items-center font-sans mb-4">
                  <h3 className="text-lg text-[#1c1c1c] font-medium tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-[#6b4f3b]">{product.price}</p>
                </div>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-3 border border-[#1c1c1c] text-[#1c1c1c] text-xs uppercase tracking-widest hover:bg-[#1c1c1c] hover:text-white transition-colors duration-300"
                >
                  Inquire via WhatsApp
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
