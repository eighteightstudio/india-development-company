"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    /* Floating island navbar — sticky, centered, pill/rounded container */
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`w-full max-w-6xl rounded-2xl border border-idc-sky/40 bg-idc-blue/95 backdrop-blur-md shadow-2xl transition-all duration-300 ${
          scrolled ? "shadow-idc-navy/50" : ""
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo — typographic mark */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-heading font-bold text-idc-white text-lg tracking-tight">
              India Development Co.
            </span>
            <span className="text-idc-sky text-xs font-medium tracking-widest">
              Est. 1992
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-idc-orange border-b-2 border-idc-orange pb-0.5"
                    : "text-idc-white hover:text-idc-orange"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="bg-idc-orange text-idc-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-orange-500 transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-idc-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-idc-sky/30 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-idc-orange"
                    : "text-idc-white hover:text-idc-orange"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-idc-orange text-idc-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center hover:bg-orange-500 transition-colors duration-200 mt-2"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
