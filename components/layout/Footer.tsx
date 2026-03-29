import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-idc-navy text-idc-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1 — Brand & Contact */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-heading font-bold text-xl text-idc-white tracking-tight">
                India Development Co.
              </p>
              <p className="text-idc-sky text-xs font-medium tracking-widest mt-0.5">
                Est. 1992 | Kolkata, India
              </p>
            </div>
            <p className="text-idc-white/70 text-sm leading-relaxed">
              Specialists in hard chrome plating and precision industrial
              manufacturing, serving B2B clients across India for over 30 years.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-start gap-3 text-sm text-idc-white/80">
                <MapPin size={16} className="text-idc-sky mt-0.5 shrink-0" />
                <span>36 Chaulpatty Road, Kolkata 700010, West Bengal</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-idc-white/80">
                <Phone size={16} className="text-idc-sky shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+919903621231" className="hover:text-idc-orange transition-colors">
                    +91 99036 21231
                  </a>
                  <a href="tel:+919831171196" className="hover:text-idc-orange transition-colors">
                    +91 98311 71196
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-idc-white/80">
                <Mail size={16} className="text-idc-sky shrink-0" />
                <a
                  href="mailto:jpbanik@indiadevelopmentcompany.in"
                  className="hover:text-idc-orange transition-colors break-all"
                >
                  jpbanik@indiadevelopmentcompany.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-idc-sky text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Blogs", href: "/blogs" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-idc-white/70 hover:text-idc-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="font-heading font-semibold text-idc-sky text-sm tracking-widest uppercase mb-5">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Hard Chrome Plating", href: "/services" },
                { label: "PVC Extrusion Tools", href: "/services" },
                { label: "Piston Components", href: "/services" },
                { label: "Industrial Rollers", href: "/services" },
                { label: "Screws and Barrels", href: "/services" },
                { label: "PVC Fittings", href: "/services" },
              ].map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-idc-white/70 hover:text-idc-orange transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-idc-sky/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-idc-white/50 text-sm">
            &copy; {currentYear} India Development Company. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/privacy" className="text-idc-white/50 hover:text-idc-orange transition-colors">
              Privacy Policy
            </Link>
            <span className="text-idc-white/30">|</span>
            <Link href="/terms" className="text-idc-white/50 hover:text-idc-orange transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
