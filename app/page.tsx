import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { business, homeContent, images } from "@/data/content";
import { featuredServices } from "@/data/services";

export default function HomePage() {
  const residential = featuredServices
    .filter((service) => service.category !== "Commercial")
    .slice(0, 4);
  const commercial = featuredServices
    .filter((service) => service.category === "Commercial")
    .slice(0, 4);
  return (
    <>
      <section className="noise relative min-h-[92svh] overflow-hidden bg-ink text-white">
        <Image
          className="hero-image absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-65"
          src={images.hero}
          alt="Professional cleaner polishing a modern home interior"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
        <div className="orb absolute -left-20 top-28 h-72 w-72 rounded-full bg-signal/20 blur-3xl" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-16 pt-36 sm:px-8 md:items-center md:pb-0">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[.24em] text-signal">
              {homeContent.eyebrow}
            </p>
            <h1 className="text-5xl font-semibold leading-[.94] tracking-[-.055em] sm:text-7xl lg:text-[6.5rem]">
              {homeContent.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg">
              {homeContent.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="button button-primary" href="/book">
                Book an Assessment <span>↗</span>
              </Link>
              <Link
                className="button border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20"
                href="/services"
              >
                Explore Services
              </Link>
            </div>
            <p className="mt-7 text-sm text-white/50">
              First visit? We assess your property before confirming cleaning
              time.
            </p>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-black/10 bg-signal py-4">
        <div className="marquee-track flex w-max gap-10 pr-10">
          {[...homeContent.valuePoints, ...homeContent.valuePoints].map(
            (point, i) => (
              <span
                key={`${point}-${i}`}
                className="flex items-center gap-10 whitespace-nowrap text-sm font-bold uppercase tracking-[.16em]"
              >
                <span>{point}</span>
                <span aria-hidden>✦</span>
              </span>
            ),
          )}
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow">At home</p>
            <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="section-title">Care that respects your space.</h2>
              <Link
                href="/services"
                className="font-semibold underline decoration-signal decoration-4 underline-offset-8"
              >
                View every service
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {residential.map((service, index) => (
              <Reveal key={service.id} delay={index * 80}>
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink text-white">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow !text-signal">For business</p>
            <h2 className="section-title mt-4">
              Ready when your workplace is.
            </h2>
            <p className="mt-6 max-w-2xl text-white/60">
              From offices to restaurants and post-construction handovers, each
              site starts with a clear assessment of access, condition and
              priorities.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 md:grid-cols-2">
            {commercial.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group overflow-hidden bg-ink transition hover:bg-white/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                    style={{ objectPosition: service.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                </div>
                <div className="p-7 sm:p-9">
                  <span className="text-xs font-bold text-signal">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {service.shortDescription}
                  </p>
                  <span className="mt-8 inline-block transition-transform group-hover:translate-x-2">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">How it works</p>
            <h2 className="section-title mt-4">
              A better clean starts with seeing the space.
            </h2>
          </Reveal>
          <div className="grid gap-4">
            {[
              {
                n: "01",
                t: "Tell us what you need",
                d: "Choose services and share the practical details of your home or workplace.",
              },
              {
                n: "02",
                t: "Choose a visit window",
                d: "Pick a preferred time for a manager assessment around Gorey.",
              },
              {
                n: "03",
                t: "We assess in person",
                d: "The manager reviews the work and determines the cleaning time required.",
              },
              {
                n: "04",
                t: "Confirm with confidence",
                d: "You receive a clear confirmation before the cleaning is scheduled.",
              },
            ].map((item, index) => (
              <Reveal key={item.n} delay={index * 70}>
                <div className="grid grid-cols-[auto_1fr] gap-5 rounded-2xl border border-black/10 bg-white p-6">
                  <span className="text-sm font-bold text-black/35">
                    {item.n}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{item.t}</h3>
                    <p className="mt-2 text-sm leading-6 text-black/55">
                      {item.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-signal">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow">Why Comfort Cleaning</p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {homeContent.why.map((item, index) => (
                <div key={item.title} className="border-t border-black/25 pt-6">
                  <span className="text-sm font-bold">0{index + 1}</span>
                  <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/65">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section-inner grid overflow-hidden rounded-[2rem] bg-white shadow-xl lg:grid-cols-2">
          <div className="p-7 sm:p-12">
            <p className="eyebrow">Local service</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Based in Gorey. Built around your day.
            </h2>
            <p className="mt-5 leading-7 text-black/60">
              We serve homes and businesses within approximately 30 km of Gorey
              across County Wexford. Share your location and we’ll confirm
              availability.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${business.phoneHref}`}
                className="button button-dark"
              >
                {business.phoneDisplay}
              </a>
              <Link href="/contact" className="button button-ghost">
                Contact us
              </Link>
            </div>
          </div>
          <div className="relative min-h-72 overflow-hidden bg-ink p-8 text-white">
            <div className="orb absolute right-[-5rem] top-[-4rem] h-64 w-64 rounded-full bg-signal blur-3xl" />
            <div className="absolute bottom-8 left-8">
              <p className="text-xs uppercase tracking-[.2em] text-signal">
                Service radius
              </p>
              <p className="mt-2 text-6xl font-semibold">~30 km</p>
              <p className="mt-2 text-white/55">around Gorey</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <Reveal className="section-inner rounded-[2rem] bg-ink px-6 py-16 text-center text-white sm:px-12">
          <p className="eyebrow !text-signal">Ready when you are</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Let’s understand the space before we clean it.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/60">
            Request a manager assessment. We’ll confirm the visit and agree the
            work with you — no invented hours online.
          </p>
          <Link href="/book" className="button button-primary mt-8">
            Start your request <span>→</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
