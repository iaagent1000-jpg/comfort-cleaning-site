import Link from "next/link";
import { formatPrice, type Service } from "@/data/services";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <Link href={`/services/${service.slug}`} className="service-card group" style={{ "--card-index": index } as React.CSSProperties}>
      <div className="mb-10 flex items-start justify-between gap-4"><span className="chip">{service.category}</span><span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-signal group-hover:text-ink">↗</span></div>
      <h3 className="text-2xl font-semibold tracking-tight">{service.name}</h3>
      <p className="mt-3 min-h-16 text-sm leading-6 text-black/60">{service.shortDescription}</p>
      <div className="mt-7 flex items-end justify-between border-t border-black/10 pt-5"><span className="text-xs font-semibold uppercase tracking-[.16em] text-black/45">Current price</span><span className="text-right font-semibold">{formatPrice(service)}</span></div>
    </Link>
  );
}
