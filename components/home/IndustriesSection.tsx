"use client";

import { motion } from "framer-motion";
import { Car, Cog, HardHat, Zap, Package, Utensils } from "lucide-react";
import { SectionHeading } from "@/components/ui/UIComponents";

interface Industry {
  icon: React.ElementType;
  name: string;
  description: string;
}

const industries: Industry[] = [
  {
    icon: Car,
    name: "Automotive",
    description: "Chrome-plated piston rods and cylinders for engine and hydraulic systems.",
  },
  {
    icon: Cog,
    name: "Heavy Machinery",
    description: "Wear-resistant coatings that extend the lifespan of critical machine components.",
  },
  {
    icon: HardHat,
    name: "Construction Equipment",
    description: "Hard chrome on hydraulic rams and boom arms for earthmovers and excavators.",
  },
  {
    icon: Zap,
    name: "Power Generation",
    description: "Precision shafts and cylinders for turbines, generators, and compressors.",
  },
  {
    icon: Package,
    name: "PVC / Plastics Manufacturing",
    description: "Extrusion tooling and chrome-coated screws for uninterrupted PVC production.",
  },
  {
    icon: Utensils,
    name: "Food & Beverage Packaging",
    description: "Corrosion-resistant chrome plating compliant with food-safe industrial standards.",
  },
];

const IndustriesSection = () => {
  return (
    <section className="bg-idc-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Industries We Serve"
          subtitle="IDC's chrome plating and manufacturing services power operations across a wide range of industrial sectors."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex gap-4 p-6 rounded-2xl border border-gray-200 hover:border-idc-blue/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-idc-navy flex items-center justify-center group-hover:bg-idc-blue transition-colors duration-300">
                <industry.icon size={22} className="text-idc-sky" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-idc-navy text-base mb-1">
                  {industry.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
