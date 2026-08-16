import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import Band from "@/components/Band";
import Button from "@/components/Button";
import FloatingLeaves from "@/components/FloatingLeaves";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Sprout from "@/components/Sprout";
import { site, tuition, learningAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: `Montessori Preschool in ${site.address.city}, ${site.address.state} · ${site.ages} | ${site.name}`,
  description: `${site.name} is a Montessori preschool for children ages 2–6 in Edmonds, WA. Full-time and half-day schedules, transparent published tuition, DSHS accepted. Book a tour today.`,
};

/** Tagline is stored with a bang for collateral; the H1 drops it. */
const heroTitle = site.tagline.replace(/!+$/, "");

const whyGka = [
  {
    title: "True Montessori Foundations",
    body: "Practical life, sensorial work, language, math, science, and cultural studies — explored through hands-on Montessori materials.",
    alt: "Child concentrating on hands-on Montessori materials at a low table",
    src: "/photos/child-focus-materials.jpg",
  },
  {
    title: "The Whole Child",
    body: "Academic, social, emotional, and creative growth, guided by independence, respect, and concentration.",
    alt: "Child painting at an easel in a calm Montessori classroom",
    src: "/photos/child-painting.jpg",
  },
  {
    title: "A Partner to Your Family",
    body: "Transparent tuition, open communication, and a team that treats your child's journey as a shared one.",
    alt: "Teacher warmly greeting a parent and child at the classroom door",
    src: "/photos/welcome-at-door.jpg",
  },
] as const;

const programCards = [
  {
    title: tuition.fullTime.label,
    meta: [
      tuition.fullTime.hours,
      tuition.fullTime.options.map((o) => o.schedule).join(" · "),
    ],
    body: "A complete Montessori day — the morning work cycle, lunch and rest, then afternoon exploration and outdoor play.",
    href: "/programs#full-time",
    cta: "Explore Full-Time",
    alt: "Children sharing lunch together at child-sized tables",
    src: "/photos/children-lunch.jpg",
  },
  {
    title: `${tuition.halfDay.label} Mornings`,
    meta: [tuition.halfDay.options[0].schedule],
    body: "The heart of the Montessori day: the uninterrupted morning work cycle, snack, and time outside — home by lunch.",
    href: "/programs#half-day",
    cta: "Explore Half-Day",
    alt: "Morning work cycle with children choosing materials from low shelves",
    src: "/photos/morning-work-cycle.jpg",
  },
  {
    title: `${tuition.halfDay.label} Afternoons`,
    meta: tuition.halfDay.options.slice(1).map((o) => o.schedule),
    body: "Gentle, hands-on afternoons of practical life, art, and outdoor play — an easy first step into a school rhythm.",
    href: "/programs#half-day",
    cta: "Explore Half-Day",
    alt: "Children gardening together in the outdoor play area",
    src: "/photos/children-gardening.jpg",
  },
] as const;

const enrollSteps = [
  "Book a tour",
  "Meet us & see the classroom",
  "Reserve your child's spot",
] as const;

export default function HomePage() {
  return (
    <>
      {/* Seasonal announcement strip (template row 0) */}
      <div className="bg-brand px-6 py-2.5 text-center">
        <p className="text-sm font-semibold text-navy">
          Now enrolling for fall at our 76th Ave location — spots are limited.{" "}
          <Link
            href="/book-a-tour"
            className="font-bold underline underline-offset-2 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            Book a tour
          </Link>
        </p>
      </div>

      {/* 1 · Hero — full-bleed photo slot + navy overlay, curved cream sweep */}
      <Band color="navy" padded={false} edgeBottom="wave" edgeBottomColor="cream">
        <div className="relative flex min-h-[70vh] items-center justify-center">
          <div className="absolute inset-0">
            <PhotoPlaceholder
              src="/photos/hero-classroom-a.jpg"
              alt="Sunlit Montessori classroom with low white shelves, wooden materials, and child-sized tables"
              priority
              sizes="100vw"
              shape="rect"
              className="h-full"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-navy/60" />
          <FloatingLeaves className="absolute inset-0 z-[1]" />
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">
            <h1 className="gka-load font-display text-4xl leading-tight tracking-tight text-balance text-white sm:text-5xl md:text-6xl">
              {heroTitle}
            </h1>
            <p
              className="gka-load mt-5 text-sm font-bold uppercase tracking-widest text-lime"
              style={{ "--d": "140ms" } as CSSProperties}
            >
              Montessori school in {site.address.city}, {site.address.state} ·{" "}
              {site.ages}
            </p>
            <div
              className="gka-load mt-9 flex flex-col items-center gap-4 sm:flex-row"
              style={{ "--d": "280ms" } as CSSProperties}
            >
              <Button href="/book-a-tour" pulse>
                Book a Tour
              </Button>
              <Button href="/programs" variant="outline" onDark>
                Explore Our Programs
              </Button>
            </div>
          </div>
        </div>
      </Band>

      {/* 2 · Welcome intro — text left, organic photo collage right */}
      <Band color="cream">
        <Sprout className="absolute -left-10 top-6 h-52 w-52 -rotate-12 text-brand/20" />
        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Welcome to GKA"
              title="Where independence takes root"
            />
            <p className="mt-6 text-base leading-relaxed text-navy/80 sm:text-lg">
              {site.name} is a Montessori-based early learning program for
              children {site.ages.toLowerCase()} in {site.address.city},{" "}
              {site.address.state} — a warm, engaging, and supportive
              environment where children learn at their own individual pace.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy/80 sm:text-lg">
              This fall, our center at {site.address.street} opens with a
              renewed vision. We&rsquo;re preparing a beautiful learning
              environment where children feel safe, valued, inspired, and
              encouraged to grow every day.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="outline">
                Our Story
              </Button>
            </div>
          </Reveal>
          <Reveal className="relative pb-8 pl-6" delay={140}>
            <PhotoPlaceholder
              src="/photos/materials-macro-a.jpg"
              alt="Close-up of the Montessori pink tower and knobless cylinders on a wooden surface"
              sizes="(max-width: 1023px) 100vw, 50vw"
              shape="blob"
              aspect="4/3"
            />
            <div className="absolute -bottom-2 left-0 w-32 sm:w-40">
              <PhotoPlaceholder
                src="/photos/real-cylinder-work.jpg"
                alt="A GKA student concentrating while stacking the yellow knobless cylinders"
                sizes="160px"
                shape="circle"
                ring
              />
            </div>
          </Reveal>
        </div>
      </Band>

      {/* 3 · Why Choose GKA — navy band, 3 ring-circle columns */}
      <Band color="navy" edgeTop="wave" edgeTopColor="cream">
        <Reveal>
          <SectionHeading
            onDark
            eyebrow="Why GKA"
            title="Why families choose GKA"
          />
        </Reveal>
        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
          {whyGka.map((item, i) => (
            <Reveal key={item.title} className="group text-center" delay={i * 110}>
              <div className="mx-auto w-36 sm:w-44">
                <PhotoPlaceholder
                  src={item.src}
                  alt={item.alt}
                  shape="circle"
                  ring
                  imageClassName="transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-lime">
                {item.title}
              </h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/80">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* 4 · Testimonial band — founder welcome quote until parent reviews arrive */}
      <Band
        color="tint"
        edgeTop="wave"
        edgeTopColor="navy"
        edgeBottom="wave"
        edgeBottomColor="cream"
      >
        <Sprout className="absolute -right-8 top-1/2 h-64 w-64 -translate-y-1/2 rotate-6 text-brand-dark/20" />
        <Reveal as="figure" className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <blockquote className="font-display text-xl leading-relaxed text-navy sm:text-2xl">
              <p>
                {"“"}We are{" "}
                <strong>honored to welcome your family</strong> into our
                community — and we can&rsquo;t wait to show you the classroom
                we&rsquo;re preparing, where children feel safe, valued, and
                inspired to grow every day.{"”"}
              </p>
            </blockquote>
            <figcaption className="mt-6 text-sm font-bold uppercase tracking-widest text-brand-dark">
              — The GKA Montessori Team
            </figcaption>
          </div>
          <p className="shrink-0 font-display text-2xl italic text-brand-dark lg:pb-2">
            A warm welcome, from our family to yours
          </p>
        </Reveal>
      </Band>

      {/* 5 · Programs card grid */}
      <Band color="cream">
        <Reveal>
          <SectionHeading
            eyebrow="Our Programs"
            title="One classroom community, flexible schedules"
            intro="Every schedule shares the same prepared classroom, the same guides, and the same Montessori curriculum — choose the rhythm that fits your family."
          />
        </Reveal>
        <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2">
          {learningAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-brand-dark/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-dark"
            >
              {area}
            </li>
          ))}
        </ul>
        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
          {programCards.map((card, i) => (
            <Reveal
              as="article"
              key={card.title}
              className="group flex flex-col text-center"
              delay={i * 110}
            >
              <PhotoPlaceholder
                src={card.src}
                alt={card.alt}
                shape="rounded"
                aspect="4/3"
                imageClassName="transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-brand-dark">
                {card.title}
              </h3>
              <div className="mt-2">
                {card.meta.map((line) => (
                  <p key={line} className="text-sm italic text-navy/70">
                    {line}
                  </p>
                ))}
              </div>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-navy/80">
                {card.body}
              </p>
              <div className="mt-6">
                <Button href={card.href} variant="outline" size="sm">
                  {card.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* 6 · Transparent Tuition band (repurposed accreditation slot) */}
      <Band color="tint" edgeTop="wave" edgeTopColor="cream">
        <Sprout className="absolute -left-12 bottom-0 h-56 w-56 rotate-12 text-brand-dark/20" />
        <div className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="Tuition & Admissions"
              title="Transparent tuition, simple enrollment"
              intro="We publish our full-time and half-day rates right on the site — no hidden fees, no calling for pricing. Getting started takes three simple steps."
            />
          </Reveal>
          <ol className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-6 sm:flex-row sm:items-start sm:gap-10">
            {enrollSteps.map((step, i) => (
              <Reveal
                as="li"
                key={step}
                className="flex max-w-[14rem] flex-col items-center gap-3 text-center"
                delay={i * 120}
              >
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-display text-xl text-navy"
                >
                  {i + 1}
                </span>
                <span className="font-semibold text-navy">{step}</span>
              </Reveal>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Button href="/admissions">See Tuition &amp; Admissions</Button>
          </div>
        </div>
      </Band>

      {/* 7 · Quote band — arched edges */}
      <Band color="navy" edgeTop="arc" edgeTopColor="tint">
        <Reveal as="figure" className="mx-auto max-w-3xl py-4 text-center">
          <blockquote>
            <p className="font-display text-2xl italic leading-snug text-balance text-white sm:text-3xl md:text-4xl">
              {
                "“The greatest sign of success for a teacher is to be able to say, ‘The children are now working as if I did not exist.’”"
              }
            </p>
          </blockquote>
          <figcaption className="mt-6 text-sm font-bold uppercase tracking-widest text-lime">
            — Dr. Maria Montessori
          </figcaption>
        </Reveal>
      </Band>

      {/* 8 · Final CTA band — arched top, wave into the navy footer */}
      <Band
        color="brand"
        edgeTop="arc"
        edgeTopColor="navy"
        edgeBottom="wave"
        edgeBottomColor="navy"
      >
        <Sprout className="absolute -right-8 -top-4 h-56 w-56 rotate-12 text-navy/20" />
        <Reveal className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl leading-tight tracking-tight text-balance text-navy sm:text-4xl md:text-5xl">
            Come see the classroom for yourself.
          </h2>
          <p className="mt-4 text-sm font-bold uppercase tracking-widest text-navy/70">
            {site.ages} · {site.address.city}, {site.address.state}
          </p>
          <div className="mt-8">
            <Button href="/book-a-tour" variant="inverted" pulse>
              Book a Tour
            </Button>
          </div>
        </Reveal>
      </Band>
    </>
  );
}
