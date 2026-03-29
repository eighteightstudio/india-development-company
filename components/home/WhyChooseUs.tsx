"use client";

import { motion } from "framer-motion";
import { Clock, Users, ShieldCheck, Wrench, Zap, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/UIComponents";

interface Reason {
  icon: React.ElementType;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: Clock,
    title: "30+ Years of Domain Expertise",
    description:
      "Since 1992, IDC has refined its chrome plating techniques through decades of hands-on industrial experience — knowledge no new entrant can replicate.",
  },
  {
    icon: Users,
    title: "80+ Satisfied Industrial Clients",
    description:
      "A track record spanning National Plastics, Oriplast, Lingaraj Pipes, and dozens more — relationships built on consistent quality and reliability.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-First Operations",
    description:
      "Full compliance with electroplating safety standards: acid-proof clothing, hand-gloves, boots, helmets, and rigorous chemical solution maintenance.",
  },
  {
    icon: Wrench,
    title: "Precision Cast Iron Manufacturing",
    description:
      "All components manufactured using durable cast iron to client drawings — ensuring dimensional accuracy for every piston rod, cylinder, and tool.",
  },
  {
    icon: Zap,
    title: "4000A Rectifier Capacity",
    description:
      "Our high-ampere rectifier enables high-volume, consistent electroplating output — supporting large orders without sacrificing quality.",
  },
  {
    icon: Target,
    title: "Regulated 55–60 RC Hardness",
    description:
      "Using the Low Voltage High Ampere technique (5–12 HV), every chrome coat achieves the targeted hardness range of 55–60 RC — every time.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose IDC?"
          subtitle="Six reasons why India's top manufacturers trust India Development Company for their chrome plating and manufacturing needs."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-br from-idc-navy/5 to-idc-blue/5 border border-idc-navy/10 hover:border-idc-blue/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-idc-navy flex items-center justify-center">
                <reason.icon size={22} className="text-idc-orange" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-idc-navy text-base mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
