import type { Metadata } from "next";
import Link from "next/link";
import Band from "@/components/Band";
import Button from "@/components/Button";
import LeadForm from "@/components/LeadForm";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import SectionHeading from "@/components/SectionHeading";
import TuitionTables from "@/components/TuitionTables";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Tuition & Admissions in ${site.address.city}, ${site.address.state}`,
  description: `Transparent Montessori preschool tuition in ${site.address.city}, ${site.address.state} for ${site.ages.toLowerCase()}. Published full-time and half-day rates, a simple four-step enrollment, DSHS accepted — book a tour of ${site.name}.`,
};

/** Fees & policies from the approved copy deck (website/design/copy-deck.md). */
const feesPolicies = [
  { lead: "Registration", detail: "$200 one-time fee, non-refundable." },
  { lead: "Wait list", detail: "$100 fee." },
  { lead: "Tuition", detail: "due between the 1st and 5th of each month." },
  {
    lead: "Absences & closures",
    detail: "no refunds for absences, holidays, or school closures.",
  },
  { lead: "Late pick-up", detail: "billed at $10 per minute." },
];

const enrollmentSteps = [
  {
    title: "Book a tour",
    body: "Visit our Edmonds classroom, meet the people who will guide your child, and get every question answered — no pressure, no paperwork yet.",
  },
  {
    title: "Complete the registration packet",
    body: "Ready to join us? Complete the registration packet and return it with the one-time registration fee to begin your child’s enrollment.",
  },
  {
    title: "Submit immunization records",
    body: "Washington State (DCYF) requires current immunization records for every child in care. We’ll tell you exactly what to submit.",
  },
  {
    title: "Reserve your start date",
    body: "Choose the schedule that fits your family — full-time or half-day — and we’ll reserve your child’s spot and confirm the start date.",
  },
];

const faqs = [
  {
    question: "Do you accept DSHS subsidy?",
    answer:
      "Yes — we accept DSHS child care subsidy where applicable. Mention it when you book your tour and we’ll help you sort out the details.",
  },
  {
    question: "Is there a sibling discount?",
    answer:
      "Sibling discounts may be available — ask at your tour and we’ll walk through the numbers for your family.",
  },
  {
    question: "What does my child need to bring?",
    answer:
      "Full-time children bring a packed, nutritious lunch from home. Snacks are provided for every child and included in tuition.",
  },
  {
    question: "What ages do you serve?",
    answer: `Our mixed-age Montessori classroom serves children ${site.ages.toLowerCase()}. Whether your child attends full-time or half-day, they’re part of the same classroom community.`,
  },
  {
    question: "What are your hours?",
    answer: `We’re open ${site.hours}. Half-day mornings and afternoons run inside that window — the tuition tables above list every schedule.`,
  },
];

export default function AdmissionsPage() {
  return (
    <>
      {/* 1 — Hero: full-bleed photo + navy overlay, arc into the welcome band */}
      <Band
        color="navy"
        padded={false}
        edgeBottom="arc"
        edgeBottomColor="tintCyan"
        className="isolate"
      >
        <div className="absolute inset-0 -z-10">
          <PhotoPlaceholder
            src="/photos/shelf-materials-a.jpg"
            alt="Montessori shelf lined with wooden trays of hands-on materials in soft light"
            priority
            sizes="100vw"
            shape="rect"
            className="h-full"
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-24 pt-20 text-center sm:pb-32 sm:pt-28">
          <p className="font-display text-2xl italic text-lime sm:text-3xl">
            We’d love to meet your family
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-balance text-white sm:text-5xl md:text-6xl">
            Transparent tuition, simple enrollment
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Every rate, fee, and enrollment step is published right on this
            page — see what fits your family, then come see the classroom.
          </p>
          <div className="mt-8">
            <Button href="#book-a-tour">Book a Tour</Button>
          </div>
        </div>
      </Band>

      {/* 2 — Welcome intro: emblem badge + display-italic welcome */}
      <Band color="tintCyan">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="mx-auto w-44 sm:w-56">
            <PhotoPlaceholder
              shape="circle"
              ring
              alt="GKA Montessori school emblem"
              label="School emblem"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl italic text-navy sm:text-4xl">
              Welcoming new families
            </h2>
            <p className="mt-4 text-navy/80 sm:text-lg">
              Enrollment at {site.name} is simple by design: every rate, fee,
              and policy lives on this page — no “call for pricing.” Start by{" "}
              <a
                href="#book-a-tour"
                className="rounded-sm font-bold text-brand-dark underline decoration-2 underline-offset-4 transition hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
              >
                booking a tour
              </a>{" "}
              of our {site.address.street} classroom in {site.address.city},
              then read through the steps below.
            </p>
            <p className="mt-4 text-navy/80 sm:text-lg">
              We are honored to welcome your family into our community and look
              forward to growing together.
            </p>
          </div>
        </div>
      </Band>

      {/* 3 — Things to Know: fees & policies on the brand band, arc edges */}
      <Band
        color="brand"
        edgeTop="arc"
        edgeTopColor="tintCyan"
        edgeBottom="arc"
        edgeBottomColor="navy"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-navy/70">
            Fees & Policies
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-balance text-navy sm:text-4xl md:text-5xl">
            Things to know
          </h2>
          <p className="mt-4 text-base text-navy/80 sm:text-lg">
            We publish the practical details up front — the same way we publish
            tuition.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-10 md:grid-cols-2">
          <ul className="space-y-4">
            {feesPolicies.map((item) => (
              <li key={item.lead} className="flex items-start gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 8 8"
                  className="mt-2 h-2 w-2 shrink-0 text-navy"
                >
                  <circle cx="4" cy="4" r="4" fill="currentColor" />
                </svg>
                <p className="text-navy/90">
                  <strong className="font-bold text-navy">{item.lead}:</strong>{" "}
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
          <div className="border-l-2 border-navy/30 pl-6 italic text-navy/80">
            <p>
              {site.name} admits children of every race, color, religion, and
              national or ethnic origin, and every child receives the same
              access to all of our programs and activities.
            </p>
            <p className="mt-4">
              Washington State DCYF licensing details for our program will be
              published here once verification is complete.
            </p>
          </div>
        </div>
      </Band>

      {/* 4 — How to Enroll: static four-step grid on navy */}
      <Band color="navy" className="isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 text-white"
        >
          <svg
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="absolute -right-16 -top-20 h-72 w-72 opacity-[0.06]"
          >
            <circle cx="100" cy="100" r="40" />
            <circle cx="100" cy="100" r="62" />
            <circle cx="100" cy="100" r="82" />
            <circle cx="100" cy="100" r="99" />
          </svg>
          <svg
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="absolute -bottom-24 -left-16 h-80 w-80 opacity-[0.05]"
          >
            <circle cx="100" cy="100" r="46" />
            <circle cx="100" cy="100" r="70" />
            <circle cx="100" cy="100" r="99" />
          </svg>
        </div>
        <SectionHeading
          onDark
          eyebrow="How to Enroll"
          title="Four steps from tour to first day"
          intro="A simple path, and we’re with you at every step."
        />
        <ol role="list" className="mt-12 grid list-none gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {enrollmentSteps.map((step, index) => (
            <li key={step.title}>
              <span className="font-display text-5xl text-lime">
                {index + 1}
              </span>
              <h3 className="mt-3 text-sm font-bold uppercase tracking-widest text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-white/75">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <Button href="#book-a-tour">Book a Tour</Button>
        </div>
      </Band>

      {/* 5 — Tuition tables + assistance column */}
      <Band color="cream" id="tuition" className="scroll-mt-24">
        <SectionHeading
          eyebrow="Transparent Tuition"
          title="Every rate, published right here"
          intro="One classroom community and the same Montessori curriculum on every schedule — choose the one that fits your family."
        />
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <TuitionTables show="both" />
          <aside className="lg:pt-2">
            <h3 className="font-display text-2xl text-navy">
              Help with tuition
            </h3>
            <p className="mt-3 text-navy/80">
              We accept DSHS child care subsidy where applicable, and sibling
              discounts may be available. Bring your questions to your tour —
              we’re happy to walk through the numbers with you.
            </p>
            <p className="mt-3 text-navy/80">
              Want to see how each schedule feels day to day? Visit our{" "}
              <Link
                href="/programs"
                className="rounded-sm font-bold text-brand-dark underline decoration-2 underline-offset-4 transition hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
              >
                Programs page
              </Link>
              .
            </p>
            <div className="mt-6">
              <Button href="#book-a-tour" variant="outline">
                Book a Tour
              </Button>
            </div>
          </aside>
        </div>
      </Band>

      {/* 6 — FAQ accordion, wave entry from cream */}
      <Band color="tint" edgeTop="wave" edgeTopColor="cream">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions parents ask us"
          intro="If yours isn’t here, bring it to your tour — or just call."
        />
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl bg-white shadow-sm ring-1 ring-navy/10"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-4 text-left font-bold text-navy [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark">
                {faq.question}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 shrink-0 text-brand-dark transition-transform group-open:rotate-45"
                >
                  <path
                    d="M8 2v12M2 8h12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </summary>
              <p className="px-6 pb-5 text-navy/80">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Band>

      {/* 7 — Book-a-Tour form band (#book-a-tour), wave into the footer */}
      <Band
        color="tint"
        id="book-a-tour"
        className="scroll-mt-24"
        edgeBottom="wave"
        edgeBottomColor="navy"
      >
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="font-display text-2xl italic text-brand-dark">
              Come see it for yourself
            </p>
            <h2 className="mt-2 font-display text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              Book your tour
            </h2>
            <p className="mt-4 text-navy/80">
              Tell us a little about your family and we’ll text you within a
              minute to set up a time. You’ll meet our team, see the classroom,
              and get every question answered — schedules, tuition, and what a
              Montessori day looks like for your child.
            </p>
            <p className="mt-4 text-navy/80">
              Prefer to talk it through first? Call us at{" "}
              <a
                href={site.phoneHref}
                className="rounded-sm font-bold text-brand-dark underline decoration-2 underline-offset-4 transition hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
              >
                {site.phone}
              </a>
              .
            </p>
            <dl className="mt-8 space-y-5">
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-brand-dark">
                  Visit us
                </dt>
                <dd className="mt-1 text-navy/80">{site.address.full}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-brand-dark">
                  Hours
                </dt>
                <dd className="mt-1 text-navy/80">{site.hours}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-brand-dark">
                  Ages
                </dt>
                <dd className="mt-1 text-navy/80">{site.ages}</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/10 sm:p-8">
            <LeadForm variant="full" />
          </div>
        </div>
      </Band>
    </>
  );
}
