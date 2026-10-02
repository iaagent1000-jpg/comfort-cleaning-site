export const business = {
  name: "Comfort Cleaning",
  legalName: "Comfort Cleaning",
  description:
    "Professional home, commercial and specialist cleaning in Gorey and across a 30 km service area.",
  phoneDisplay: "+353 87 343 9698",
  phoneHref: "+353873439698",
  email: "comfort.cleaning.ie@gmail.com",
  locality: "Gorey",
  region: "County Wexford",
  country: "IE",
  serviceArea: "Gorey and approximately 30 km across County Wexford",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
} as const;

export const images = {
  hero: "/images/hero-cleaning.png",
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const homeContent = {
  eyebrow: "Professional cleaning · Gorey, Co. Wexford",
  title: "A cleaner space. A calmer day.",
  intro:
    "Thoughtful cleaning for homes, workplaces and specialist spaces — delivered with care, clear pricing and a proper first assessment.",
  valuePoints: ["Clear, central pricing", "30 km around Gorey", "Assessment-led care", "Homes & businesses"],
  why: [
    { title: "Care before the clean", text: "We assess first-time properties properly, then confirm the work and time required with you." },
    { title: "Clear from the start", text: "Browse real service prices and understand where a tailored quote is the right next step." },
    { title: "Local and responsive", text: "A practical local service for Gorey and surrounding communities across County Wexford." },
  ],
} as const;

export const assessmentWindows = ["Morning · 8:00–12:00", "Afternoon · 12:00–16:00", "Evening · 16:00–19:00"] as const;
