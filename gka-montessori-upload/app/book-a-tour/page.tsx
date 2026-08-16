import type { Metadata } from "next";
import Band from "@/components/Band";
import Button from "@/components/Button";
import { Logo } from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import SectionHeading from "@/components/SectionHeading";
import TuitionTables from "@/components/TuitionTables";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `Book a Montessori Tour in ${site.address.city}, ${site.address.state} | ${site.name}`,
  },
  description: `Tour ${site.name} — a Montessori preschool for children ages 2–6 in ${site.address.city}, ${site.address.state}, opening this fall. See the classroom, meet our team, and get transparent answers on tuition and schedules. Book in seconds and we’ll text you within a minute.`,
};

const TRUST_CHIPS = [
  site.ages,
  `${site.address.city}, ${site.address.state}`,
  "DSHS accepted",
  "Opening this fall",
] as const;

const STEPS = [
  {
    title: "Book your tour",
    body: "Fill out the short form above — we’ll text you within a minute to confirm a time that works for your family.",
  },
  {
    title: "Meet us & see the classroom",
    body: "Walk the prepared environment, meet our Montessori guides, and ask anything — schedules, tuition, or what your child’s day would look like.",
  },
  {
    title: "Reserve your child’s spot",
    body: "Love what you see? We’ll walk you through the registration packet and hold your child’s start date.",
  },
] as const;

const FAQ = [
  {
    q: "Do you accept DSHS subsidy?",
    a: "Yes — DSHS subsidy is accepted, if applicable to your family. Bring your questions to the tour and we’ll walk you through it.",
  },
  {
    q: "Is there a sibling discount?",
    a: "Sibling discounts may be available — ask at your tour and we’ll go over the details for your family.",
  },
  {
    q: "What does my child need to bring?",
    a: "Snacks are included in tuition, and full-time families pack a nutritious lunch from home. We’ll answer the rest in person at your tour.",
  },
  {
    q: "When do you open?",
    a: `We open this fall at ${site.address.street} in ${site.address.city}. Spots are limited — touring now is the simplest way to reserve your child’s place.`,
  },
] as const;

export default function BookATourPage() {
  return (
    <>
      {/* Minimal logo-only header — transparent over the hero, no nav (funnel: minimal escape hatches) */}
      <header className="absolute inset-x-0 top-0 z-20">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-background focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:uppercase focus:tracking-widest focus:text-navy"
        >
          Skip to content
        </a>
        <div className="mx-auto max-w-6xl px-6 py-5">
          <Logo linked={false} />
        </div>
      </header>

      <main id="main-content" className="flex-1">
        {/* 1 — Hero + above-the-fold form */}
        <Band color="navy" padded={false} edgeBottom="wave" edgeBottomColor="cream">
          <div className="relative">
            <div className="absolute inset-0">
              <PhotoPlaceholder
                src="/photos/reading-corner-a.jpg"
                alt="Calm Montessori reading corner with picture books displayed on a low wooden shelf"
                priority
                sizes="100vw"
                shape="rect"
                className="h-full"
              />
              <div className="absolute inset-0 bg-navy/60" />
            </div>

            <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-24 sm:pb-20 sm:pt-28">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                {/* Stacks form-first on mobile; text leads on desktop */}
                <div className="order-2 text-center lg:order-1 lg:text-left">
                  <p className="text-sm font-bold uppercase tracking-widest text-lime">
                    Montessori preschool in {site.address.city},{" "}
                    {site.address.state} · {site.ages}
                  </p>
                  <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight text-balance text-white sm:text-5xl">
                    Come see GKA Montessori for yourself
                  </h1>
                  <p className="mt-5 text-lg text-white/85">
                    Tour our {site.address.city} classroom, meet our team, and
                    get every question answered — tuition, schedules, and what a
                    Montessori day looks like for your child.
                  </p>
                </div>

                <div id="form" className="order-1 scroll-mt-6 lg:order-2">
                  <div className="rounded-3xl bg-background p-6 text-foreground shadow-xl sm:p-8">
                    <h2 className="font-display text-2xl text-navy">
                      Book your tour
                    </h2>
                    <p className="mt-2 text-sm text-navy/70">
                      Four quick fields — we’ll text you within a minute to set
                      up a time.
                    </p>
                    <LeadForm
                      variant="compact"
                      submitLabel="Book My Tour"
                      className="mt-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Band>

        {/* 2 — Trust row */}
        <Band color="cream" padded={false}>
          <div className="mx-auto w-full max-w-6xl px-6 py-8">
            <ul className="flex flex-wrap items-center justify-center gap-3">
              {TRUST_CHIPS.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-navy/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-navy/80"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        </Band>

        {/* 3 — What happens next (3 steps) */}
        <Band
          color="tint"
          edgeTop="wave"
          edgeTopColor="cream"
          edgeBottom="wave"
          edgeBottomColor="cream"
        >
          <SectionHeading
            eyebrow="What happens next"
            title="Three simple steps to your child’s spot"
            intro="From this form to your child’s first day — here’s the whole path."
          />
          <ol className="mt-12 grid gap-10 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <li key={step.title} className="text-center">
                <p
                  aria-hidden="true"
                  className="font-display text-6xl font-black text-brand-dark"
                >
                  {i + 1}
                </p>
                <h3 className="mt-3 text-sm font-bold uppercase tracking-widest text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-navy/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </Band>

        {/* 4 — Transparent tuition */}
        <Band color="cream">
          <SectionHeading
            eyebrow="Transparent tuition"
            title="Tuition, published up front"
            intro="No “call for pricing” here — this is exactly what each schedule costs, and your tour is the place to ask about everything else."
          />
          <TuitionTables className="mt-12" />
          <div className="mt-10 text-center">
            <Button href="#form">Book My Tour</Button>
          </div>
        </Band>

        {/* 5 — Short FAQ */}
        <Band color="tintCyan" edgeTop="wave" edgeTopColor="cream">
          <SectionHeading
            eyebrow="Questions parents ask"
            title="Quick answers before you visit"
          />
          <div className="mx-auto mt-10 max-w-2xl space-y-4">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl bg-white/80 px-6 py-4 open:bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-navy [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="font-display text-2xl leading-none text-brand-dark transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-navy/75">{item.a}</p>
              </details>
            ))}
          </div>
        </Band>

        {/* 6 — Closing quote + CTA back to the form */}
        <Band color="navy" edgeTop="wave" edgeTopColor="tintCyan">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-3xl italic leading-snug text-balance text-white sm:text-4xl">
              {site.taglineAlt}
            </p>
            <p className="mt-4 text-white/75">
              The best way to understand a Montessori classroom is to stand in
              one.
            </p>
            <div className="mt-8">
              <Button href="#form" variant="inverted">
                Book My Tour
              </Button>
            </div>
          </div>
        </Band>
      </main>

      {/* Minimal footer — single NAP line, no link columns */}
      <footer className="bg-navy text-sm text-white/75">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 border-t border-white/10 px-6 py-8 text-center">
          <address className="not-italic">
            <span className="font-bold uppercase tracking-widest text-white/90">
              {site.legalName}
            </span>
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            {site.address.full}
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            <a
              href={site.phoneHref}
              className="rounded-sm underline decoration-white/40 underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              {site.phone}
            </a>
          </address>
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
