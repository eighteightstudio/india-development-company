import type { Metadata } from "next";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | India Development Company",
  description:
    "Contact India Development Company for chrome plating inquiries, product queries, or manufacturing requirements. Based in Kolkata — +91 99036 21231.",
  openGraph: {
    title: "Contact | India Development Company",
    description:
      "Reach IDC for chrome plating and industrial manufacturing inquiries. 36 Chaulpatty Road, Kolkata 700010.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-idc-navy to-idc-blue pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-idc-sky/10 text-idc-sky border border-idc-sky/40 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              We are based in Kolkata
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-idc-white leading-tight mb-4">
              Contact Us
            </h1>
            <p className="text-idc-sky/80 text-lg leading-relaxed">
              Get in touch for chrome plating inquiries, product quotes, or partnership
              discussions. We respond within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Two-column contact layout */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
