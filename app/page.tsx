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
      <section className="noise relative overflow-hidden bg-ink text-white md:min-h-[92svh]">
        <Image
          className="hero-image absolute inset-0 hidden h-full w-full object-cover object-[62%_center] opacity-60 md:block"
          src={images.hero}
          alt="Professional cleaner polishing a modern home interior"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/80 to-ink/10 md:block" />
        <div className="orb absolute -left-20 top-28 h-72 w-72 rounded-full bg-signal/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 pb-0 pt-28 sm:px-8 md:flex md:min-h-[92svh] md:items-center md:pb-0 md:pt-28">
          <div className="max-w-3xl md:pb-12">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[.2em] text-signal sm:mb-5 sm:text-xs sm:tracking-[.24em]">
              {homeContent.eyebrow}
            </p>
            <h1 className="text-[3rem] font-semibold leading-[.94] tracking-[-.055em] sm:text-7xl lg:text-[6.5rem]">
              {homeContent.title}
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-6 text-white/75 sm:mt-6 sm:text-lg sm:leading-7">
              {homeContent.intro}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-row">
              <Link className="button button-primary" href="/book">
                Book a visit <span aria-hidden>↗</span>
              </Link>
              <Link
                className="button border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20"
                href="/services"
              >
                View services
              </Link>
            </div>
            <p className="mt-5 text-xs leading-5 text-white/55 sm:mt-7 sm:text-sm">
              First visit? A manager assesses your property before confirming
              the cleaning plan.
            </p>
            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-t-[1.75rem] border border-b-0 border-white/15 md:hidden">
              <Image
                src={images.hero}
                alt="Professional female cleaner caring for a modern home"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[68%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-signal px-3 py-2 text-[10px] font-bold uppercase tracking-[.12em] text-ink shadow-lg">
                Local care · Gorey + 30 km
              </span>
            </div>
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
          <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
            {residential.map((service, index) => (
              <Reveal key={service.id} delay={index * 80} className="h-full">
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <Reveal className="section-inner overflow-hidden rounded-[2rem] bg-signal shadow-xl">
          <div className="grid md:grid-cols-[1.15fr_.85fr]">
            <div className="p-6 sm:p-10 lg:p-12">
              <p className="eyebrow">Need a clear quote?</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                Request a manager visit in a few simple steps.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-black/65 sm:text-base">
                Choose the services, share your Eircode and preferred time, and
                we’ll contact you to confirm the assessment.
              </p>
              <Link href="/book" className="button button-dark mt-7 w-full sm:w-auto">
                Request a visit <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-3 border-t border-black/15 bg-ink p-5 text-white md:grid-cols-1 md:border-l md:border-t-0 sm:p-8">
              {["Choose services", "Add your Eircode", "Pick a visit time"].map((item, index) => (
                <div key={item} className="flex min-w-0 flex-col justify-between gap-4 border-l border-white/15 px-2 py-2 text-center first:border-l-0 md:flex-row md:items-center md:border-l-0 md:border-t md:px-0 md:py-5 md:text-left md:first:border-t-0">
                  <span className="text-xs font-bold text-signal">0{index + 1}</span>
                  <span className="text-xs font-semibold leading-4 sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
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
