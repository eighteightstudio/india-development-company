import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="bg-idc-orange py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-idc-white mb-4">
          Ready to Work with Us?
        </h2>
        <p className="text-idc-white/90 text-lg max-w-xl mx-auto mb-8">
          Get in touch with our team for custom chrome plating or manufacturing requirements.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-idc-navy text-idc-white font-semibold px-8 py-3.5 rounded-lg hover:bg-idc-blue transition-colors duration-200 text-base"
        >
          Request a Quote
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;
