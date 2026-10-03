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
      <div className="relative -mx-5 -mt-5 mb-5 aspect-[4/3] overflow-hidden bg-black/5 sm:-mx-6 sm:-mt-6 sm:mb-6">
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
      </div>
      <h3 className="text-2xl font-semibold tracking-tight">{service.name}</h3>
      <p className="mt-3 text-sm leading-6 text-black/60 lg:min-h-[4.5rem]">
        {service.shortDescription}
      </p>
      <div className="mt-auto pt-7">
        <div className="flex items-end justify-between gap-3 border-t border-black/10 pt-5">
          <span className="text-xs font-semibold uppercase tracking-[.14em] text-black/45">
            Current price
          </span>
          <span className="text-right text-sm font-semibold sm:text-base">{formatPrice(service)}</span>
        </div>
        <span className="mt-5 flex min-h-11 w-full items-center justify-between rounded-full bg-ink px-5 text-sm font-semibold text-white transition group-hover:bg-signal group-hover:text-ink">
          View service <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
