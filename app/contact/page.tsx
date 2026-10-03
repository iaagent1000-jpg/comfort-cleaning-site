import type { Metadata } from "next";
import Link from "next/link";
import { business, enabledSocialLinks } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact Comfort Cleaning",
  description:
    "Contact Comfort Cleaning in Gorey, County Wexford by phone or email, or request a manager assessment online.",
  alternates: { canonical: "/contact" },
};
export default function ContactPage() {
  return (
    <>
      <section className="bg-ink px-5 pb-20 pt-40 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow !text-signal">Contact</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[.96] tracking-[-.05em] sm:text-7xl">
            A straightforward conversation starts here.
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="section-inner grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[2rem] bg-signal p-8 sm:p-10">
            <p className="eyebrow">Direct contact</p>
            <div className="mt-10 space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[.18em] text-black/45">
                  Phone
                </p>
                <a
                  className="mt-2 block text-2xl font-semibold"
                  href={`tel:${business.phoneHref}`}
                >
                  {business.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[.18em] text-black/45">
                  Email
                </p>
                <a
                  className="mt-2 block break-words text-base font-semibold sm:text-xl"
                  href={`mailto:${business.email}`}
                >
                  {business.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[.18em] text-black/45">
                  Area
                </p>
                <p className="mt-2 text-xl font-semibold">
                  {business.serviceArea}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[.18em] text-black/45">
                  Social
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {enabledSocialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold transition hover:bg-ink hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-8 sm:p-10">
            <p className="eyebrow">New customer?</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              The assessment form captures everything we need.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-black/60">
              Select services, share your contact details and Eircode, choose a
              preferred visit window, then review the full request before
              sending.
            </p>
            <Link href="/book" className="button button-dark mt-8">
              Book an Assessment <span>→</span>
            </Link>
            <div className="mt-10 border-t border-black/10 pt-7">
              <p className="text-sm leading-6 text-black/50">
                Existing customer? Call or email the team directly while the
                streamlined returning-customer booking flow is prepared.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
