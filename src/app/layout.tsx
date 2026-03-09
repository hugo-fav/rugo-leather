import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import WhatsAppButton from "../components/WhatsAppButton";
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "RUGO LEATHER",
  description:
    "Modern African footwear rooted in heritage. Contact us on WhatsApp.",
  openGraph: {
    title: "RUGO LEATHER – Rooted in Heritage",
    description: "Modern African footwear crafted for presence.",

    siteName: "RUGO LEATHER",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RUGO LEATHER Shoes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} font-serif min-h-screen flex flex-col justify-between bg-background text-foreground`}
      >
        <Navbar />
        <main className="pt-16">
          {children}
          <Footer />
        </main>
        {/* global floating WhatsApp chat button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
