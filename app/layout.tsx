import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | India Development Company",
    default: "India Development Company | Hard Chrome Plating Kolkata",
  },
  description:
    "India Development Company (IDC) — 30+ years of precision hard chrome plating and industrial manufacturing in Kolkata, India. Trusted by 80+ industrial clients.",
  keywords: [
    "hard chrome plating",
    "chrome plating Kolkata",
    "industrial manufacturing",
    "PVC extrusion tools",
    "piston rods",
    "industrial rollers",
    "India Development Company",
  ],
  authors: [{ name: "India Development Company" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://indiadevelopmentcompany.in",
    siteName: "India Development Company",
    title: "India Development Company | Hard Chrome Plating Kolkata",
    description:
      "30+ years of precision hard chrome plating and industrial manufacturing in Kolkata, India. Trusted by 80+ industrial clients.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — Inter + Space Grotesk */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
