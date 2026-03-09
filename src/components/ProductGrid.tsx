"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <section id="products" className="bg-[#f5f1eb] pt-20 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1c1c1c] mb-12 text-center">
          Featured Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-72">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-medium text-[#1c1c1c]">
                  {product.name}
                </h3>
                <p className="text-[#6b4f3b] mt-2 font-semibold">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
