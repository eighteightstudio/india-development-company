import type { Metadata } from "next";
import CompanyTimeline from "@/components/about/CompanyTimeline";
import ChromePlatingExplainer from "@/components/about/ChromePlatingExplainer";
import SafetySection from "@/components/about/SafetySection";
import CertificationsSection from "@/components/about/CertificationsSection";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About | India Development Company",
  description:
    "Learn about India Development Company — established in 1992 in Kolkata. Our history, chrome plating expertise, safety standards, and quality assurance practices.",
  openGraph: {
    title: "About | India Development Company",
    description:
      "30+ years of hard chrome plating and precision manufacturing in Kolkata — our story, process, and safety standards.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-idc-navy to-idc-blue pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-idc-sky/10 text-idc-sky border border-idc-sky/40 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              Est. 1992 | Kolkata, West Bengal
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-idc-white leading-tight mb-4">
              About India Development Company
            </h1>
            <p className="text-idc-sky/80 text-lg leading-relaxed">
              Three decades of precision chrome plating, built on experience, safety, and a
              relentless commitment to industrial quality.
            </p>
          </div>
        </div>
      </section>

      <CompanyTimeline />
      <ChromePlatingExplainer />
      <SafetySection />
      <CertificationsSection />
      <CTABanner />
    </>
  );
}
