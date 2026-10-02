import type { MetadataRoute } from "next";
import { business } from "@/data/content";
import { activeServices } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/book", "/about", "/contact"].map((path) => ({ url: `${business.baseUrl}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : .8 }));
  return [...routes, ...activeServices.map((service) => ({ url: `${business.baseUrl}/services/${service.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .7 }))];
}
