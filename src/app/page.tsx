import Hero from "@/components/Hero";
import Idea from "@/components/Idea";
import ParallaxProducts from "@/components/ParallaxProducts";
import ParallaxStory from "@/components/ParallaxStory";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductGrid />
      <ParallaxStory />
      <ParallaxProducts />
      <Idea />
    </div>
  );
}
