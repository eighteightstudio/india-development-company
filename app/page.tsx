import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProductRangeStrip from "@/components/home/ProductRangeStrip";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Home | India Development Company",
  description:
    "India Development Company — 25+ years of precision hard chrome plating and industrial manufacturing in Kolkata. Serving 80+ industrial clients across India.",
  openGraph: {
    title: "Home | India Development Company",
    description:
      "30+ years of precision hard chrome plating and industrial manufacturing in Kolkata.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesOverview />
      <ProductRangeStrip />
      <IndustriesSection />
      <TestimonialsCarousel />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
