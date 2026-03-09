"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: "#", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#story", label: "Our Story" },
  { href: "#gallery", label: "Gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-sm z-40 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-[#1c1c1c]">
          RUGO LEATHER
        </Link>

        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-700 hover:text-gray-900 transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* mobile hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white">
          <ul className="flex flex-col items-center gap-4 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-gray-700 hover:text-gray-900 text-lg"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
