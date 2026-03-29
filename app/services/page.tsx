import type { Metadata } from "next";
import ServiceCards from "@/components/services/ServiceCards";
import ProductCatalogue from "@/components/services/ProductCatalogue";
import SectorsServed from "@/components/services/SectorsServed";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Services | India Development Company",
  description:
    "Explore IDC's full range of industrial services — hard chrome plating (repair and new coat), PVC extrusion tools, piston components, industrial rollers, screws and barrels.",
  openGraph: {
    title: "Services | India Development Company",
    description:
      "Hard chrome plating, precision manufacturing, and industrial tooling services from India Development Company, Kolkata.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-idc-navy to-idc-blue pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-idc-sky/10 text-idc-sky border border-idc-sky/40 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              Our Services and Products
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-idc-white leading-tight mb-4">
              Precision Industrial Services and Manufacturing
            </h1>
            <p className="text-idc-sky/80 text-lg leading-relaxed">
              From hard chrome plating to precision component manufacturing — IDC delivers
              consistent, high-specification industrial services across Kolkata and across India.
            </p>
          </div>
        </div>
      </section>

      <ServiceCards />
      <ProductCatalogue />
      <SectorsServed />
      <CTABanner />
    </>
  );
}
