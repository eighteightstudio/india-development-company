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
    image: "https://eawgcaiojcewbfemfhtq.supabase.co/storage/v1/object/public/All%20Images/Piston_Rods.png",
    category: "PVC Extrusion Tools",
    products: ["Die-Head", "Adapter", "Spider", "Cone", "HDP Die", "Spiral", "Filter", "Mandrel"],
    spec: "Custom sizes to client drawings",
  },
  {
    image: "https://eawgcaiojcewbfemfhtq.supabase.co/storage/v1/object/public/All%20Images/Screw%20Rod%202.png",
    category: "Piston Components",
    products: ["Piston Rod", "Cylinder", "Compression Tube", "Exhaust Cylinder"],
    spec: 'Dia 4–6" | Length 50–90"',
  },
  {
    image: "https://eawgcaiojcewbfemfhtq.supabase.co/storage/v1/object/public/All%20Images/Spiral_Metal.png",
    category: "Industrial Rollers",
    products: ["Packing Rollers", "Press Rollers"],
    spec: 'Packing: Dia 6–9" | Press: Length 70"',
  },
  {
    image: "https://eawgcaiojcewbfemfhtq.supabase.co/storage/v1/object/public/All%20Images/Screw_Rod_Og.png",
    category: "Screws and Barrels",
    products: ["Custom Screws", "Custom Barrels"],
    spec: 'Up to 4" diameter and 90" length',
  },
  {
    image: "https://eawgcaiojcewbfemfhtq.supabase.co/storage/v1/object/public/All%20Images/Spiral_Metal.png",
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

        {/* CAROUSEL CONTAINER */}
        <div className="mt-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 w-max px-1">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[260px] sm:min-w-[300px] lg:min-w-[320px] bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-idc-blue/30 transition-all duration-300"
              >
                {/* IMAGE (4:5 preserved) */}
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.category}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-heading font-bold text-idc-navy text-lg mb-1">
                    {cat.category}
                  </h3>

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
      </div>
    </section>
  );
};

export default ProductCatalogue;
