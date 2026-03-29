"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/UIComponents";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    year: "1992",
    title: "Founded in Kolkata",
    description:
      "India Development Company was established in Kolkata, West Bengal, with a focus on hard chrome plating services for local industrial manufacturers.",
  },
  {
    year: "2000s",
    title: "Product Category Expansion",
    description:
      "IDC expanded its manufacturing capabilities, adding PVC extrusion tools, piston components, industrial rollers, and screws and barrels to its service portfolio.",
  },
  {
    year: "2010s",
    title: "80+ Industrial Clients",
    description:
      "Grew client base to include major industrial names including Oriplast Ltd., National Plastics, LongLast India, Neptune India, Vektra Engineering, and Lingaraj Pipes.",
  },
  {
    year: "2020s",
    title: "4000A Rectifier Installation",
    description:
      "Installed a high-capacity 4000-ampere rectifier to enhance production output, enabling higher-volume chrome plating orders with uncompromised quality.",
  },
  {
    year: "Today",
    title: "Serving India's Industry",
    description:
      "IDC continues to serve automotive, construction, PVC, and power generation sectors — delivering precision chrome plating and manufacturing across India.",
  },
];

const CompanyTimeline = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Company story text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="Our Story"
              subtitle="Three decades of industrial precision, built one client at a time."
              accentWord="Story"
            />
            <div className="flex flex-col gap-4 text-gray-600 text-base leading-relaxed">
              <p>
                India Development Company was founded in 1992 in Kolkata, West Bengal, with a
                singular purpose: to deliver precision hard chrome plating to India&apos;s growing
                industrial sector. What began as a focused service offering has grown into a
                comprehensive industrial manufacturing and surface treatment operation.
              </p>
              <p>
                Over three decades, IDC has refined its electroplating processes using the Low
                Voltage High Ampere technique, achieving consistent chrome hardness of 55–60 RC
                across all batches. Our plating thickness range of 5–500 µm accommodates everything
                from fine-tolerance repair coats to heavy-duty new coat applications.
              </p>
              <p>
                Today, with 80+ satisfied clients across India&apos;s manufacturing heartland and a
                4000-ampere rectifier enabling large-volume output, IDC stands as one of Kolkata&apos;s
                most trusted chrome plating and precision manufacturing partners.
              </p>
            </div>
          </motion.div>

          {/* Right: Animated vertical timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-idc-sky/30" />

            <div className="flex flex-col gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Circle marker */}
                  <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full bg-idc-orange border-4 border-white shadow-md -translate-x-1/2" />

                  {/* Year badge */}
                  <span className="inline-block bg-idc-navy text-idc-sky text-xs font-bold px-3 py-1 rounded-full mb-2 tracking-widest">
                    {event.year}
                  </span>
                  <h3 className="font-heading font-bold text-idc-navy text-base mb-1">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
