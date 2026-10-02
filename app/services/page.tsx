import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { activeServices, serviceCategories } from "@/data/services";

export const metadata: Metadata = { title: "Cleaning Services & Prices", description: "Browse Comfort Cleaning home, commercial and specialist cleaning services and current price baselines in Gorey, County Wexford.", alternates: { canonical: "/services" } };

export default function ServicesPage() {
  return <><section className="bg-ink px-5 pb-16 pt-40 text-white sm:px-8 md:pb-24"><div className="mx-auto max-w-7xl"><p className="eyebrow !text-signal">Services & pricing</p><h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[.96] tracking-[-.05em] sm:text-7xl">One trusted team. Every kind of clean.</h1><p className="mt-6 max-w-2xl leading-7 text-white/60">Browse the complete current catalogue. Prices are clear baselines; a manager assessment confirms the scope and required time for first-time properties.</p></div></section><div className="section"><div className="section-inner space-y-20">{serviceCategories.map((category)=><section key={category} id={category.toLowerCase().replaceAll(" ","-")}><div className="mb-8 flex items-end justify-between border-b border-black/15 pb-5"><h2 className="text-3xl font-semibold tracking-tight">{category}</h2><span className="text-sm text-black/45">{activeServices.filter((s)=>s.category===category).length} services</span></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{activeServices.filter((s)=>s.category===category).map((service,index)=><ServiceCard service={service} index={index} key={service.id}/>)}</div></section>)}</div></div></>;
}
