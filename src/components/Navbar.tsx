"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const links = [
  { href: "#", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#story", label: "Our Story" },
  { href: "#gallery", label: "Gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  const { scrollY } = useScroll();

  // Update state when scroll crosses the 50px threshold
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      // Smoothly transition background, text color, and border based on scroll state
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(0, 0, 0, 0)",
        backdropFilter: isScrolled ? "blur(8px)" : "blur(0px)",
        borderBottom: isScrolled
          ? "1px solid rgba(0,0,0,0.05)"
          : "1px solid rgba(255,255,255,0)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
        {/* Brand / Logo */}

        <Link href="/" className="relative z-50 flex items-center">
          <motion.div
            animate={{ color: isScrolled || open ? "#171717" : "#ffffff" }}
            transition={{ duration: 0.3 }}
          >
            <Logo />
          </motion.div>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10">
          {links.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              animate={{
                color: isScrolled ? "#171717" : "#ffffff",
              }}
              transition={{ duration: 0.3 }}
              className="text-sm font-sans uppercase tracking-widest hover:opacity-50 transition-opacity"
            >
              {l.label}
            </motion.a>
          ))}
        </nav>
        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden relative z-50"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{
              color: isScrolled || open ? "#171717" : "#ffffff",
            }}
          >
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: open ? 1 : 0,
          y: open ? 0 : -20,
          pointerEvents: open ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden absolute top-0 left-0 w-full h-screen bg-white pt-24 px-6"
      >
        <ul className="flex flex-col items-start gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-4xl font-serif text-[#171717] hover:text-gray-500 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </motion.header>
  );
}
