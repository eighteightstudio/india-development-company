"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/UIComponents";

interface ProductCard {
  image: string;
  name: string;
  specTag: string;
  products: string[];
}

const products: ProductCard[] = [
  {
    image: "https://eawgcaiojcewbfemfhtq.supabase.co/storage/v1/object/public/All%20Images/Piston_Rods.png",
    name: "PVC Extrusion Tools",
    specTag: "7+ Product Types",
    products: ["Die-Head", "Adapter", "Spider", "Cone", "HDP Die", "Spiral", "Filter", "Mandrel"],
  },
  {
    image: "https://eawgcaiojcewbfemfhtq.supabase.co/storage/v1/object/public/All%20Images/Screw%20Rod%202.png",
    name: "Piston Rods and Cylinders",
    specTag: 'Dia 4–6" | Length 50–90"',
    products: ["Piston Rod", "Cylinder", "Compression Tube", "Exhaust Cylinder"],
  },
  {
    image: "https://eawgcaiojcewbfemfhtq.supabase.co/storage/v1/object/public/All%20Images/Spiral_Metal.png",
    name: "Industrial Rollers",
    specTag: 'Dia 6–9" | Press Rollers 70"',
    products: ["Packing Rollers", "Press Rollers"],
  },
  {
    image: "https://eawgcaiojcewbfemfhtq.supabase.co/storage/v1/object/public/All%20Images/Screw_Rod_Og.png",
    name: "Screws and Barrels",
    specTag: 'Up to 4" dia, 90" length',
    products: ["Custom Screws", "Custom Barrels"],
  },
  {
    image: "https://eawgcaiojcewbfemfhtq.supabase.co/storage/v1/object/public/All%20Images/Spiral_Metal.png",
    name: "PVC Fittings",
    specTag: "4 Component Types",
    products: ["Mould", "Cavity", "Punch", "Runner Bush"],
  },
];
const ProductRangeStrip = () => {
  return (
    <section className="bg-idc-navy py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Product Range"
          subtitle="A comprehensive catalogue of precision-manufactured industrial components and tools."
          onDark
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-4">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-idc-white/5 border border-idc-sky/20 rounded-xl overflow-hidden hover:border-idc-sky/60 hover:bg-idc-white/8 transition-all duration-300"
            >
              {/* FIXED: 4:5 but visually smaller */}
              <div className="relative w-full aspect-[4/5] max-h-[160px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>

              <div className="p-4">
                <h3 className="font-heading font-semibold text-idc-white text-sm leading-tight mb-2">
                  {product.name}
                </h3>

                <span className="inline-block bg-idc-sky/15 text-idc-sky border border-idc-sky/30 text-xs px-2 py-0.5 rounded-full mb-3">
                  {product.specTag}
                </span>

                <ul className="flex flex-wrap gap-1.5">
                  {product.products.map((p) => (
                    <li
                      key={p}
                      className="text-xs text-idc-white/60 bg-idc-white/5 px-2 py-0.5 rounded border border-idc-white/10"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-idc-orange text-idc-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-500 transition-colors duration-200"
          >
            View Full Product Catalogue
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductRangeStrip;
