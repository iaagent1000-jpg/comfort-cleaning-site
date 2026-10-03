import type { Metadata } from "next";
import Link from "next/link";
import { AssessmentWizard } from "@/components/AssessmentWizard";

export const metadata: Metadata = { title: "Book a Cleaning Assessment", description: "Request a manager visit for professional cleaning in Gorey and County Wexford. Choose services, share property details and select a preferred assessment time.", alternates: { canonical: "/book" } };

export default async function BookPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  return (
    <>
      <section className="bg-ink px-5 pb-20 pt-32 text-white sm:px-8 sm:pb-28 sm:pt-36">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow !text-signal">New customer assessment</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[.98] tracking-[-.05em] sm:text-7xl">
            Start with a visit. Finish with a clear plan.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/65 sm:mt-6 sm:text-base sm:leading-7">
            Tell us what you need and choose a preferred manager visit. Your
            cleaning time and final scope are confirmed after the assessment.
          </p>
        </div>
      </section>
      <section className="relative z-10 mx-auto -mt-10 max-w-5xl px-3 pb-20 sm:-mt-16 sm:px-8 sm:pb-24">
        <AssessmentWizard initialService={service} />
        <div className="mt-6 rounded-2xl border border-black/10 bg-white/50 p-4 text-center text-sm leading-6 text-black/55 sm:mt-8 sm:p-5">
          <strong className="text-ink">Already a customer?</strong>{" "}
          Returning-customer booking is coming next. For now,{" "}
          <Link className="font-semibold underline" href="/contact">
            contact the team directly
          </Link>
          .
        </div>
      </section>
    </>
  );
}
