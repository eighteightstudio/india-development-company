"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface ServiceCardData {
  image: string;
  title: string;
  description: string;
  specs: string[];
}

const serviceCards: ServiceCardData[] = [
  {
    image: "https://placehold.co/800x500/11123B/83CDEF?text=Chrome+Plating+Repair",
    title: "Hard Chrome Plating — Repair Service",
    description:
      "IDC's repair chrome plating service restores worn or damaged chromium coatings on industrial components, extending machine life and reducing replacement costs. Ideal for piston rods, cylinders, rollers, and shafts that have seen heavy operational wear.",
    specs: [
      "Low Voltage High Ampere technique (5–12 HV)",
      "Hardness regulated at 55–60 RC",
      "Extends machine and component lifespan",
      "Suitable for all standard alloy steels",
      "Post-plating finishing and polishing available",
    ],
  },
  {
    image: "https://placehold.co/800x500/0C4D8B/FFFFFF?text=New+Chrome+Coat",
    title: "Hard Chrome Plating — New Coat Service",
    description:
      "For newly manufactured components requiring a chrome coating, IDC applies precision electroplated hard chrome that delivers exceptional hardness, corrosion resistance, and dimensional accuracy. Critical for PVC manufacturing, earth movers, and food-grade applications.",
    specs: [
      "Plating thickness: 5–500 µm",
      "Resistant to mechanical stress and chemical corrosion",
      "Suitable for PVC extrusion, food & beverage, construction",
      "4000A rectifier capacity for high-volume output",
      "Consistent adhesion on cast iron and steel substrates",
    ],
  },
  {
    image: "https://placehold.co/800x500/11123B/83CDEF?text=Precision+Manufacturing",
    title: "Precision Component Manufacturing",
    description:
      "Beyond chrome plating, IDC manufactures a full range of precision industrial components to client drawings. All parts are produced from cast iron for maximum durability and dimensional consistency across production runs.",
    specs: [
      "Manufactured to client-supplied engineering drawings",
      "Cast iron construction for durability",
      "Piston rods: Dia 4–6\", Length 50–90\"",
      "Industrial rollers: Packing and Press types",
      "Custom screws and barrels up to 4\" dia, 90\" length",
    ],
  },
];

const ServiceCards = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          {serviceCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image — alternate sides */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h2 className="font-heading font-bold text-idc-navy text-2xl md:text-3xl mb-4">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">{card.description}</p>
                <ul className="flex flex-col gap-2.5">
                  {card.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-idc-orange mt-0.5 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
