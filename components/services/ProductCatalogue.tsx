"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/UIComponents";

interface CatalogueCategory {
  image: string;
  category: string;
  products: string[];
  spec: string;
}

const categories: CatalogueCategory[] = [
  {
    image: "https://placehold.co/600x400/11123B/83CDEF?text=PVC+Extrusion+Tools",
    category: "PVC Extrusion Tools",
    products: ["Die-Head", "Adapter", "Spider", "Cone", "HDP Die", "Spiral", "Filter", "Mandrel"],
    spec: "Custom sizes to client drawings",
  },
  {
    image: "https://placehold.co/600x400/0C4D8B/FFFFFF?text=Piston+Components",
    category: "Piston Components",
    products: ["Piston Rod", "Cylinder", "Compression Tube", "Exhaust Cylinder"],
    spec: 'Dia 4–6" | Length 50–90"',
  },
  {
    image: "https://placehold.co/600x400/11123B/83CDEF?text=Industrial+Rollers",
    category: "Industrial Rollers",
    products: ["Packing Rollers", "Press Rollers"],
    spec: 'Packing: Dia 6–9" | Press: Length 70"',
  },
  {
    image: "https://placehold.co/600x400/0C4D8B/FFFFFF?text=Screws+%26+Barrels",
    category: "Screws and Barrels",
    products: ["Custom Screws", "Custom Barrels"],
    spec: 'Up to 4" diameter and 90" length',
  },
  {
    image: "https://placehold.co/600x400/11123B/83CDEF?text=PVC+Fittings",
    category: "PVC Fittings",
    products: ["Mould", "Cavity", "Punch", "Runner Bush"],
    spec: "All standard PVC fitting types",
  },
];

const ProductCatalogue = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Product Catalogue"
          subtitle="Five categories of precision-manufactured industrial components and tooling, available to client specifications."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-idc-blue/30 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.category}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-idc-navy text-lg mb-1">{cat.category}</h3>
                <p className="text-idc-blue text-xs font-semibold mb-4 bg-idc-sky/10 inline-block px-2 py-0.5 rounded border border-idc-sky/30">
                  {cat.spec}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.products.map((product) => (
                    <span
                      key={product}
                      className="bg-idc-navy/5 text-idc-navy text-xs px-3 py-1 rounded-full border border-idc-navy/10 font-medium"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalogue;
