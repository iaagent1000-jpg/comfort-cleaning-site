import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { business } from "@/data/content";
import {
  activeServices,
  formatOptionPrice,
  formatPrice,
  getService,
} from "@/data/services";

export function generateStaticParams() {
  return activeServices.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in Gorey`,
    description: `${service.shortDescription} View current pricing and request an assessment from Comfort Cleaning in County Wexford.`,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | Comfort Cleaning`,
      description: service.shortDescription,
      url: `/services/${service.slug}`,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.fullDescription,
    image: `${business.baseUrl}${service.image}`,
    provider: {
      "@type": "HouseCleaning",
      name: business.name,
      telephone: business.phoneDisplay,
    },
    areaServed: `${business.locality}, ${business.region}`,
    url: `${business.baseUrl}/services/${service.slug}`,
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: business.baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${business.baseUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${business.baseUrl}/services/${service.slug}`,
      },
    ],
  };
  return (
    <>
      <article>
        <section className="bg-ink px-5 pb-16 pt-36 text-white sm:px-8 md:pb-24">
          <div className="mx-auto max-w-7xl">
            <nav
              aria-label="Breadcrumb"
              className="mb-10 text-sm text-white/45"
            >
              <Link href="/">Home</Link> <span aria-hidden> / </span>
              <Link href="/services">Services</Link>{" "}
              <span aria-hidden> / </span>
              <span>{service.name}</span>
            </nav>
            <span className="rounded-full bg-signal px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-ink">
              {service.category}
            </span>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h1 className="max-w-4xl text-5xl font-semibold leading-[.96] tracking-[-.05em] sm:text-7xl">
                  {service.name}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                  {service.shortDescription}
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[.17em] text-white/45">
                  Current baseline
                </p>
                <p className="mt-2 text-3xl font-semibold text-signal">
                  {formatPrice(service)}
                </p>
                {service.minimumHours && (
                  <p className="mt-2 text-sm text-white/50">
                    Minimum {service.minimumHours} hours
                  </p>
                )}
              </div>
            </div>
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[2rem] bg-white/5 sm:aspect-[16/7]">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width: 1279px) 100vw, 1280px"
                className="object-cover"
                style={{ objectPosition: service.imagePosition }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-inner grid gap-14 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="eyebrow">About this service</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                A clear plan for a better result.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
                {service.fullDescription}
              </p>
              <h3 className="mt-12 text-xl font-semibold">What to expect</h3>
              <ul className="mt-5 grid gap-3">
                {service.includes.map((item) => (
                  <li className="flex gap-3 rounded-xl bg-white p-4" key={item}>
                    <span className="text-signal">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="rounded-[2rem] bg-signal p-7 sm:p-9">
              <p className="eyebrow">First visit</p>
              <h2 className="mt-3 text-3xl font-semibold">
                Assessment before confirmation.
              </h2>
              <p className="mt-4 text-sm leading-6 text-black/65">
                We do not invent cleaning hours online. A manager reviews the
                property, agrees priorities and confirms the time and price with
                you.
              </p>
              <Link
                href={`/book?service=${service.id}`}
                className="button button-dark mt-7 w-full"
              >
                Book an Assessment
              </Link>
            </aside>
          </div>
        </section>
        {service.options && (
          <section className="section bg-white">
            <div className="section-inner">
              <p className="eyebrow">Available options</p>
              <h2 className="section-title mt-4">
                Choose what fits your space.
              </h2>
              <div className="mt-10 grid gap-3 md:grid-cols-2">
                {service.options.map((option) => (
                  <div
                    className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 p-5"
                    key={option.name}
                  >
                    <span className="font-medium">{option.name}</span>
                    <span className="shrink-0 font-semibold">
                      {formatOptionPrice(option)}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-black/50">
                Listed prices are the current public baseline. Condition, access
                and scope are confirmed before service.
              </p>
            </div>
          </section>
        )}
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
