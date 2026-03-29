"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/UIComponents";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    step: 1,
    title: "Surface Preparation",
    description:
      "The component is thoroughly cleaned, degreased, and polished to remove all contaminants, rust, and old coatings. Proper surface preparation is critical to chrome adhesion and coating uniformity.",
  },
  {
    step: 2,
    title: "Electroplating",
    description:
      "The component is submerged in a chromic acid solution and subjected to direct electric current via IDC's Low Voltage High Ampere method (5–12 HV). Chromium ions deposit onto the surface at a controlled rate.",
  },
  {
    step: 3,
    title: "Finishing and Quality Check",
    description:
      "Post-plating, the component is polished to the required surface finish. Hardness (55–60 RC) and plating thickness (5–500 µm) are verified before the component is returned to the client.",
  },
];

const statChips = [
  { label: "Thickness Range", value: "5–500 µm" },
  { label: "Hardness", value: "55–60 RC" },
  { label: "Technique", value: "Low Voltage High Ampere" },
  { label: "Voltage Range", value: "5–12 HV" },
];

const ChromePlatingExplainer = () => {
  return (
    <section className="bg-idc-navy py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <SectionHeading
            title="What is Hard Chrome Plating?"
            subtitle="Hard chrome plating (electroplating) is an electrochemical process that deposits a layer of chromium onto a metal surface to improve hardness, wear resistance, corrosion resistance, and reduce friction."
            onDark
            centered
          />
        </div>

        {/* Key stat chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {statChips.map((chip) => (
            <div
              key={chip.label}
              className="flex items-center gap-3 bg-idc-white/5 border border-idc-sky/30 rounded-xl px-5 py-3"
            >
              <span className="text-idc-white/60 text-xs">{chip.label}:</span>
              <span className="text-idc-sky font-bold text-sm font-heading">{chip.value}</span>
            </div>
          ))}
        </div>

        {/* 3 process steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-6 rounded-2xl border border-idc-sky/20 bg-idc-white/5"
            >
              {/* Step number */}
              <div className="w-12 h-12 rounded-full bg-idc-orange flex items-center justify-center text-idc-white font-heading font-bold text-lg mb-4">
                {step.step}
              </div>
              <h3 className="font-heading font-bold text-idc-white text-lg mb-3">{step.title}</h3>
              <p className="text-idc-white/60 text-sm leading-relaxed">{step.description}</p>

              {/* Connector arrow (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-4 text-idc-sky/40 text-2xl z-10">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional context */}
        <div className="mt-12 p-6 rounded-2xl border border-idc-sky/20 bg-idc-white/5 max-w-3xl mx-auto text-center">
          <p className="text-idc-white/70 text-sm leading-relaxed">
            Hard chrome plating is vital for sectors including PVC manufacturing, earth movers, and
            food and beverage packaging — wherever components are exposed to mechanical stress,
            chemical corrosion, and continuous operational wear. IDC has been delivering this
            specialist service since 1992.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChromePlatingExplainer;
