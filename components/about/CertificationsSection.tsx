"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/UIComponents";

interface Certificate {
  name: string;
  type: string;
  year: string;
  description: string;
}

// Replace with actual certificate images from Supabase when available
const certificates: Certificate[] = [
  {
    name: "Quality Management Certificate",
    type: "Quality Management",
    year: "Active",
    description:
      "Certification of quality management processes in chrome plating and precision manufacturing operations.",
  },
  {
    name: "Industrial Safety Compliance Certificate",
    type: "Safety Compliance",
    year: "Active",
    description:
      "Compliance certification for safe handling of chemicals, electrical equipment, and industrial machinery.",
  },
  {
    name: "Environmental Compliance Certificate",
    type: "Environmental Compliance",
    year: "Active",
    description:
      "Certification confirming adherence to environmental standards specific to the electroplating and surface treatment industry.",
  },
];

const qualityPoints = [
  "30+ Years of hands-on electroplating expertise",
  "Regular equipment maintenance and calibration",
  "Chemical solution testing and refresh cycles",
  "Consistent 55–60 RC hardness on all chrome coats",
  "Client-specific tolerance checks on all components",
];

const CertificationsSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications and Quality Assurance"
          subtitle="IDC's commitment to quality is backed by industry compliance and three decades of consistent output."
          centered
        />

        {/* Quality assurance points */}
        <div className="max-w-2xl mx-auto mb-14">
          <ul className="flex flex-col gap-3">
            {qualityPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 text-gray-700 text-sm">
                <span className="w-5 h-5 rounded-full bg-idc-orange flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">✓</span>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Certificate placeholder cards — replace with Supabase images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Styled like a physical certificate — cream/ivory background, idc-blue border
              className="bg-amber-50 border-2 border-idc-blue/30 rounded-2xl p-8 text-center relative overflow-hidden"
            >
              {/* Corner decorative borders */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-idc-blue/40 rounded-tl" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-idc-blue/40 rounded-tr" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-idc-blue/40 rounded-bl" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-idc-blue/40 rounded-br" />

              {/* Certificate icon */}
              <div className="w-14 h-14 rounded-full bg-idc-blue/10 border-2 border-idc-blue/30 flex items-center justify-center mx-auto mb-4">
                <Award size={26} className="text-idc-blue" />
              </div>

              {/* Certificate type label */}
              <span className="inline-block text-xs font-semibold text-idc-blue/70 tracking-widest uppercase mb-2">
                Certificate of {cert.type}
              </span>

              <h3 className="font-heading font-bold text-idc-navy text-base mb-2">{cert.name}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">{cert.description}</p>

              <div className="text-idc-blue/60 text-xs font-semibold border-t border-idc-blue/20 pt-3 mt-2">
                Status: {cert.year}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-8">
          {/* TODO: Replace placeholder cards with actual certificate images from Supabase */}
          Certificate images will be displayed here. Please upload them to Supabase storage and
          update the image URLs.
        </p>
      </div>
    </section>
  );
};

export default CertificationsSection;
