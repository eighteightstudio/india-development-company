"use client";

import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/UIComponents";

interface Client {
  initials: string;
  name: string;
  descriptor: string;
}

const clients: Client[] = [
  { initials: "NP", name: "National Plastics & Machining Industries", descriptor: "Reliable chrome plating vendor since 2010" },
  { initials: "OL", name: "Oriplast Ltd.", descriptor: "Trusted partner for PVC extrusion tooling" },
  { initials: "LL", name: "LongLast India Pvt. Ltd.", descriptor: "Consistent quality across every production batch" },
  { initials: "NI", name: "Neptune India Pvt. Ltd.", descriptor: "Precision manufacturing delivered on schedule" },
  { initials: "VE", name: "Vektra Engineering Pvt. Ltd.", descriptor: "Highly responsive team, excellent standards" },
  { initials: "LP", name: "Lingaraj Pipes Ltd.", descriptor: "Our go-to vendor for piston rod reconditioning" },
  { initials: "KP", name: "Karan Polypipes", descriptor: "Exceptional chrome coat quality and turnaround" },
];

// Duplicate for seamless infinite loop
const allClients = [...clients, ...clients];

const ClientChip = ({ client }: { client: Client }) => (
  <div className="flex-shrink-0 flex items-center gap-4 bg-idc-blue border border-idc-sky/30 rounded-2xl px-6 py-4 mx-3 hover:-translate-y-1 transition-transform duration-200 w-72">
    {/* Avatar with initials */}
    <div className="w-12 h-12 rounded-full bg-idc-sky/20 border-2 border-idc-sky flex items-center justify-center shrink-0">
      <span className="text-idc-sky font-bold text-sm">{client.initials}</span>
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-idc-white font-semibold text-sm leading-tight truncate">{client.name}</p>
      <p className="text-idc-white/60 text-xs mt-0.5 leading-relaxed line-clamp-2">{client.descriptor}</p>
      {/* Star rating */}
      <div className="flex gap-0.5 mt-1.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} size={11} className="fill-idc-orange text-idc-orange" />
        ))}
      </div>
    </div>
  </div>
);

const TestimonialsCarousel = () => {
  return (
    <section className="bg-idc-navy py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <SectionHeading
          title="Trusted by Industry Leaders"
          subtitle="Over 80 industrial clients have relied on IDC for precision chrome plating and manufacturing."
          onDark
          centered
        />
      </div>

      {/* Auto-flowing ticker — no pause on hover */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-idc-navy to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-idc-navy to-transparent z-10 pointer-events-none" />

        <div className="flex ticker-animate">
          {allClients.map((client, i) => (
            <ClientChip key={`${client.initials}-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
