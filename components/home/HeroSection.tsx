"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Shield, Award, Users } from "lucide-react";
import Link from "next/link";

// Technical specification chips for the hero card
const techSpecs = [
  { label: "Plating Thickness", value: "5–500 µm" },
  { label: "Hardness Rating", value: "55–60 RC" },
  { label: "Rectifier Capacity", value: "4000A" },
  { label: "Technique", value: "Low Voltage High Ampere" },
];

// Trust badges shown below hero CTAs
const trustBadges = [
  { icon: Award, label: "Est. 1992" },
  { icon: Shield, label: "30+ Years" },
  { icon: Users, label: "80+ Clients" },
  { icon: CheckCircle2, label: "Safety Compliant" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-idc-navy via-idc-navy to-idc-blue overflow-hidden pt-24">
      {/* Decorative industrial mesh/grid SVG background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#83CDEF" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Subtle radial glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-idc-blue/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left column — main hero content (60%) */}
          <div className="lg:col-span-3 flex flex-col gap-7">

            {/* Location badge chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-idc-sky/50 bg-idc-sky/10 text-idc-sky text-xs font-semibold tracking-wide">
                <Zap size={12} />
                Hard Chrome Plating | Kolkata, India
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-idc-white leading-[1.1] tracking-tight">
                Precision Chrome Plating
                <br />
                for Industrial{" "}
                <span className="relative inline-block text-idc-white">
                  Excellence
                  <span className="underline-orange" />
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-idc-sky/80 text-lg leading-relaxed max-w-xl"
            >
              India Development Company has delivered precision hard chrome plating and
              industrial manufacturing services for 30+ years across Kolkata and beyond
              — trusted by 80+ industrial clients.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-idc-orange text-idc-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors duration-200"
              >
                Explore Our Services
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-idc-white/40 text-idc-white font-semibold px-6 py-3 rounded-lg hover:bg-idc-white/10 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Trust badges row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-5 pt-2"
            >
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-idc-white/70 text-sm">
                  <badge.icon size={15} className="text-idc-orange" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — floating specs card (40%) */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="float-animate w-full max-w-sm"
            >
              {/* Glassmorphism card */}
              <div className="relative rounded-2xl border border-idc-sky/30 bg-idc-white/5 backdrop-blur-sm p-7 shadow-2xl shadow-idc-navy/50">
                {/* Glow accent */}
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-idc-sky/20 rounded-full blur-xl" />

                <div className="relative">
                  <p className="text-idc-sky text-xs font-semibold tracking-widest uppercase mb-5">
                    Key Specifications
                  </p>

                  {/* Spec chips */}
                  <div className="flex flex-col gap-4">
                    {techSpecs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-center justify-between p-3 rounded-xl bg-idc-white/5 border border-idc-sky/20"
                      >
                        <span className="text-idc-white/60 text-xs">{spec.label}</span>
                        <span className="text-idc-sky font-bold text-sm font-heading">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="mt-6 pt-5 border-t border-idc-sky/20">
                    <p className="text-idc-white/40 text-xs text-center">
                      Consistent quality — every batch, every time
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
