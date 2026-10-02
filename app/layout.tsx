import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { business } from "@/data/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const viewport: Viewport = { themeColor: "#11110f", width: "device-width", initialScale: 1 };
export const metadata: Metadata = {
  metadataBase: new URL(business.baseUrl),
  title: { default: "Comfort Cleaning | Professional Cleaning in Gorey", template: "%s | Comfort Cleaning" },
  description: business.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Comfort Cleaning", description: business.description, url: "/", siteName: business.name, locale: "en_IE", type: "website", images: [{ url: "/images/hero-cleaning.png", width: 1680, height: 944, alt: "Professional cleaner caring for a modern home" }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    "@context": "https://schema.org", "@type": "HouseCleaning", name: business.name, url: business.baseUrl,
    telephone: business.phoneDisplay, email: business.email,
    address: { "@type": "PostalAddress", addressLocality: business.locality, addressRegion: business.region, addressCountry: business.country },
    areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", name: business.locality }, geoRadius: "30000" },
  };
  return <html lang="en-IE"><body className={`${inter.variable} ${manrope.variable} font-[family-name:var(--font-inter)] antialiased`}><Header /><main>{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }} /></body></html>;
}
