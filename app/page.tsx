import HeroSection from "@/components/home/HeroSection";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import OriginSection from "@/components/home/OriginSection";
import FounderStory from "@/components/home/FounderStory";
import StatsSection from "@/components/home/StatsSection";
import FounderQuote from "@/components/home/FounderQuote";
import ServicesTeaser from "@/components/home/ServicesTeaser";
import ProductsTeaser from "@/components/home/ProductsTeaser";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <OriginSection />
      <FounderStory />
      <StatsSection />
      <FounderQuote />
      <ServicesTeaser />
      <ProductsTeaser />
    </>
  );
}
