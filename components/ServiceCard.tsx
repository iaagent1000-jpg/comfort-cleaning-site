import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Service } from "@/data/services";

export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="service-card group"
      style={{ "--card-index": index } as React.CSSProperties}
    >
      <div className="relative -mx-6 -mt-6 mb-6 aspect-[4/3] overflow-hidden bg-black/5">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
          style={{ objectPosition: service.imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
        <span className="chip absolute left-4 top-4 !bg-white/90 !text-ink backdrop-blur">
          {service.category}
        </span>
        <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-signal group-hover:text-ink">
          ↗
        </span>
      </div>
      <h3 className="text-2xl font-semibold tracking-tight">{service.name}</h3>
      <p className="mt-3 min-h-16 text-sm leading-6 text-black/60">
        {service.shortDescription}
      </p>
      <div className="mt-7 flex items-end justify-between border-t border-black/10 pt-5">
        <span className="text-xs font-semibold uppercase tracking-[.16em] text-black/45">
          Current price
        </span>
        <span className="text-right font-semibold">{formatPrice(service)}</span>
      </div>
    </Link>
  );
}
