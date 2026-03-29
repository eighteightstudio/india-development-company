"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/UIComponents";

interface ServiceCard {
  image: string;
  title: string;
  description: string;
  link: string;
}

const services: ServiceCard[] = [
  {
    image: "https://placehold.co/800x500/0C4D8B/FFFFFF?text=Hard+Chrome+Plating",
    title: "Hard Chrome Plating",
    description:
      "Expert repair and new coat chrome plating using Low Voltage High Ampere technique. Hardness regulated at 55–60 RC for consistent, industry-grade output.",
    link: "/services",
  },
  {
    image: "https://placehold.co/800x500/11123B/83CDEF?text=PVC+Extrusion+Tools",
    title: "PVC Extrusion Tool Manufacturing",
    description:
      "Precision-engineered PVC extrusion tooling including die-heads, adapters, spiders, cones, and filters — made to client specifications using cast iron.",
    link: "/services",
  },
  {
    image: "https://placehold.co/800x500/0C4D8B/FFFFFF?text=Piston+%26+Cylinder",
    title: "Precision Piston and Cylinder Components",
    description:
      "Custom piston rods and cylinders manufactured to client drawings. Available in diameters 4–6\" and lengths 50–90\" for compression and exhaust applications.",
    link: "/services",
  },
];

const ServicesOverview = () => {
  return (
    <section className="bg-idc-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What We Do"
          subtitle="Precision industrial services backed by 30+ years of domain expertise, serving manufacturing facilities across India."
          accentWord="We Do"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-idc-blue/40 transition-all duration-300"
            >
              {/* Card image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-idc-navy text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-1.5 text-idc-orange font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
