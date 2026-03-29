"use client";

import { motion } from "framer-motion";
import { Car, Cog, HardHat, Zap, Package, Utensils } from "lucide-react";
import { SectionHeading } from "@/components/ui/UIComponents";

interface Sector {
  icon: React.ElementType;
  name: string;
  detail: string;
}

const sectors: Sector[] = [
  {
    icon: Car,
    name: "Automotive",
    detail:
      "Chrome-plated piston rods, shafts, and hydraulic cylinders are critical to automotive manufacturing. IDC's 55–60 RC hardness ensures durability under high-load, high-cycle conditions.",
  },
  {
    icon: Cog,
    name: "Heavy Machinery",
    detail:
      "Industrial machines lose efficiency as components wear. IDC's repair chrome plating restores original dimensions and hardness, extending asset life and reducing replacement capital expenditure.",
  },
  {
    icon: HardHat,
    name: "Construction Equipment",
    detail:
      "Earthmovers, excavators, and cranes rely on chrome-coated hydraulic rams. IDC supplies new coatings and repair plating that withstand abrasive site environments.",
  },
  {
    icon: Zap,
    name: "Power Generation",
    detail:
      "Turbines, compressors, and generators require precision-dimensioned shafts and cylinders. IDC's manufacturing and plating services meet the tight tolerances required in power infrastructure.",
  },
  {
    icon: Package,
    name: "PVC / Plastics Manufacturing",
    detail:
      "PVC extrusion demands precisely machined tools and chrome-coated screws. IDC manufactures and plates the full extrusion tooling suite — die-heads, adapters, spirals, and more.",
  },
  {
    icon: Utensils,
    name: "Food & Beverage Packaging",
    detail:
      "The food industry requires corrosion-resistant, food-safe chrome coatings. IDC's electroplating delivers non-reactive, chemically stable surfaces suitable for food-contact packaging machinery.",
  },
];

const SectorsServed = () => {
  return (
    <section className="bg-idc-navy py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Sectors We Serve"
          subtitle="IDC's chrome plating and manufacturing solutions are deployed across these key industrial verticals."
          onDark
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 rounded-2xl border border-idc-sky/20 bg-idc-white/5 hover:border-idc-sky/50 hover:bg-idc-white/8 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-idc-blue flex items-center justify-center mb-4">
                <sector.icon size={22} className="text-idc-sky" />
              </div>
              <h3 className="font-heading font-bold text-idc-white text-lg mb-2">{sector.name}</h3>
              <p className="text-idc-white/60 text-sm leading-relaxed">{sector.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsServed;
