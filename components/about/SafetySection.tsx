"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HardHat, Hand, Footprints, FlaskConical, AlertTriangle } from "lucide-react";
import { SectionHeading } from "@/components/ui/UIComponents";

interface SafetyItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const safetyItems: SafetyItem[] = [
  {
    icon: ShieldCheck,
    title: "Acid-Proof Clothing",
    description:
      "All electroplating personnel are equipped with acid-resistant protective clothing to guard against chemical splashes during the plating process.",
  },
  {
    icon: Hand,
    title: "Hand-Gloves",
    description:
      "Chemical-resistant hand-gloves are mandatory for all workers handling chromic acid solutions and post-plating components.",
  },
  {
    icon: Footprints,
    title: "Safety Boots",
    description:
      "Protective boots are worn to safeguard against chemical spills and heavy component handling in the factory environment.",
  },
  {
    icon: HardHat,
    title: "Helmets and Head Protection",
    description:
      "Helmets are worn at all times in the manufacturing and plating areas to protect against overhead hazards.",
  },
  {
    icon: FlaskConical,
    title: "Chemical Solution Maintenance",
    description:
      "Chromic acid and other chemical solutions are maintained, tested, and refreshed on a regular schedule to ensure safe and effective plating operations.",
  },
  {
    icon: AlertTriangle,
    title: "Safe Practice Compliance",
    description:
      "All staff follow strict safe practice instructions specific to the electroplating industry — covering chemical storage, ventilation, and emergency protocols.",
  },
];

const SafetySection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Safety Standards"
          subtitle="The electroplating industry involves chemicals, metals, and electric currents. IDC operates with rigorous safety protocols to protect every worker, every day."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {safetyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 rounded-2xl border border-gray-200 hover:border-idc-blue/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-idc-orange/10 border border-idc-orange/20 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-idc-orange" />
              </div>
              <h3 className="font-heading font-semibold text-idc-navy text-base mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
