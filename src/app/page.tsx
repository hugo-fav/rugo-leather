import Hero from "@/components/Hero";
import ParallaxProducts from "@/components/ParallaxProducts";
import ParallaxStory from "@/components/ParallaxStory";
import ProductGrid from "@/components/ProductGrid";

// export const metadata = {
//   title: "Home – KAIRA Footwear",
//   description:
//     "Browse our featured collection or start a WhatsApp chat with us.",
// };

export default function Home() {
  return (
    <div>
      <Hero
        buttonText="Browse Collection"
        buttonLink="#products"
        whatsappText="Chat on WhatsApp"
      />
      <ProductGrid />
      <ParallaxStory />
      <ParallaxProducts />
    </div>
  );
}
