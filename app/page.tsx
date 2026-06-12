import HeroSection from "@/components/home/HeroSection";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import OriginSection from "@/components/home/OriginSection";
import FounderQuote from "@/components/home/FounderQuote";
import StatsSection from "@/components/home/StatsSection";
import ServicesTeaser from "@/components/home/ServicesTeaser";
import ProductsTeaser from "@/components/home/ProductsTeaser";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <OriginSection />
      <FounderQuote />
      <StatsSection />
      <ServicesTeaser />
      <ProductsTeaser />
    </>
  );
}
