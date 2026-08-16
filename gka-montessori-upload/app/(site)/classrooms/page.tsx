import type { Metadata } from "next";
import Link from "next/link";
import Band from "@/components/Band";
import Button from "@/components/Button";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import SectionHeading from "@/components/SectionHeading";
import { site, tuition } from "@/lib/site";

export const metadata: Metadata = {
  title: `Our Classrooms | ${site.name} — ${site.address.city}, ${site.address.state}`,
  description: `Step inside the prepared environment at ${site.name} in ${site.address.city}, ${site.address.state}: child-scale spaces, hands-on Montessori materials, and daily outdoor play for children ${site.ages.toLowerCase()}. Book a tour.`,
};

/** Decorative line-art icons in the GKA leaf/sprout motif (S3 highlights). */
function IconMixedAges() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-12 w-12"
    >
      <path d="M8 40h32" />
      <path d="M14 40V26" />
      <path d="M14 30c-5-1-8-5-8-11 6 1 8 5 8 11Z" />
      <path d="M24 40V14" />
      <path d="M24 20c6-1 9-6 9-13-7 1-9 6-9 13Z" />
      <path d="M34 40V30" />
      <path d="M34 33c-4-1-6-4-6-8 5 1 6 4 6 8Z" />
    </svg>
  );
}

function IconGuide() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-12 w-12"
    >
      <path d="M10 38c0-16 12-26 28-26 0 16-12 26-28 26Z" />
      <path d="M10 38C18 30 28 22 38 12" />
      <path d="M16 40c2 2 6 3 9 2" />
    </svg>
  );
}

function IconWorkCycle() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-12 w-12"
    >
      <circle cx={24} cy={24} r={17} />
      <path d="M24 24V13" />
      <path d="M24 24l8 5" />
      <path d="M24 24c-4-1-6-4-6-8 5 1 6 4 6 8Z" />
    </svg>
  );
}

const HIGHLIGHTS = [
  {
    icon: <IconMixedAges />,
    title: "A mixed-age 2–6 classroom",
    body: "Younger children stretch toward the work of older friends; older children lead by helping. One community, four years of growth.",
  },
  {
    icon: <IconGuide />,
    title: "Trained Montessori guides",
    body: "Lessons are presented one child at a time, so your child moves through the materials at their own pace — never rushed, never held back.",
  },
  {
    icon: <IconWorkCycle />,
    title: "Uninterrupted work cycles",
    body: "Long stretches of self-chosen work protect the thing Montessori prizes most: deep, satisfied concentration.",
  },
] as const;

const FEATURES = [
  {
    title: "Child-led learning",
    body: "Materials are arranged so children can choose real work that meets their interests — and stay with it for as long as it holds them.",
  },
  {
    title: "Order & calm",
    body: "Everything has a place. Tidy, uncluttered shelves quiet the room's distractions and help children focus and follow through.",
  },
  {
    title: "Mixed-age community",
    body: "Two- to six-year-olds share one classroom, so leadership, patience, and belonging are practiced every single day.",
  },
  {
    title: "Quality materials",
    body: "Beautiful, hands-on Montessori materials that isolate one idea at a time — made to be handled, not just watched.",
  },
  {
    title: "Child-scale spaces",
    body: "Tables, chairs, and shelves at your child's height, so independence is built into the room itself.",
  },
  {
    title: "Hands-on work",
    body: "From pouring and buttoning to counting beads, children learn by doing real things with real objects.",
  },
] as const;

export default function ClassroomsPage() {
  return (
    <>
      {/* S1 — Hero: full-bleed photo slot + navy overlay, 2-line H1, CTA */}
      <Band color="navy" padded={false}>
        <div className="relative flex min-h-[72svh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <PhotoPlaceholder
              src="/photos/hero-classroom-b.jpg"
              alt="Sunlit Montessori classroom with low wooden shelves and child-sized furniture"
              priority
              sizes="100vw"
              shape="rect"
              className="h-full"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-navy/60" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-navy"
          />
          <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center text-white">
            <p className="uppercase tracking-widest text-sm text-white/80">
              Our Classrooms · {site.ages} · {site.address.city},{" "}
              {site.address.state}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-balance sm:text-5xl md:text-6xl">
              A classroom that nurtures{" "}
              <span className="block italic text-lime">independent minds</span>
            </h1>
            <div className="mt-8">
              <Button href="/book-a-tour">Book a Tour</Button>
            </div>
          </div>
        </div>
      </Band>

      {/* S2 — Video/intro: centered media slot + prepared-environment intro */}
      <Band color="cream" edgeTop="wave" edgeTopColor="navy">
        <div className="mx-auto max-w-3xl">
          <PhotoPlaceholder
            aspect="16/9"
            alt="Walkthrough video tour of the GKA Montessori classroom"
            label="Classroom walkthrough — video coming soon"
          />
          <SectionHeading
            className="mt-10"
            eyebrow="The Prepared Environment"
            title="A room that says “help me do it myself”"
          />
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-center">
            <p>
              Montessori teachers call it the <em>prepared environment</em>: a
              classroom arranged so carefully that children can help
              themselves. Low open shelves, real tools, and materials set out
              in sequence let a three-year-old choose meaningful work — and
              finish it — without waiting for an adult.
            </p>
            <p>
              Our {site.address.city} classroom is built exactly this way for
              children {site.ages.toLowerCase()}: a warm, engaging, and
              supportive environment where independence is designed into the
              room and children learn at their own pace.
            </p>
          </div>
        </div>
      </Band>

      {/* S3 — 3-column icon highlights on navy */}
      <Band color="navy" edgeTop="wave" edgeTopColor="cream">
        <SectionHeading
          onDark
          eyebrow="The GKA Classroom"
          title="What every schedule shares"
        />
        <div className="mt-12 grid gap-10 text-center sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <span className="text-lime">{item.icon}</span>
              <h3 className="mt-4 font-bold uppercase tracking-widest text-sm">
                {item.title}
              </h3>
              <p className="mt-3 text-white/85">{item.body}</p>
            </div>
          ))}
        </div>
      </Band>

      {/* S4 — Jump-ahead anchor bar */}
      <Band color="tintCyan" padded={false}>
        <nav
          aria-label="On this page"
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-6 py-6"
        >
          <span className="uppercase tracking-widest text-sm font-bold">
            Jump ahead:
          </span>
          <Button size="sm" href="#our-classroom">
            Our Classroom
          </Button>
          <Button size="sm" href="#outdoor-play">
            Outdoor Play
          </Button>
          <Button size="sm" href="#day-to-day">
            Day to Day
          </Button>
        </nav>
      </Band>

      {/* S5 — Facility feature A: Our Classroom (brand-dark, watermark, gallery) */}
      <Band
        color="brandDark"
        id="our-classroom"
        edgeBottom="wave"
        edgeBottomColor="cream"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 96 96"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none absolute -right-16 -top-10 h-80 w-80 text-white/5"
        >
          <path d="M48 82V30" />
          <path d="M48 52C36 50 26 40 25 24c16 2 23 12 23 28Z" />
          <path d="M48 40c12-2 22-12 23-28-16 2-23 12-23 28Z" />
          <path d="M30 82h36" />
        </svg>
        <div className="relative grid items-center gap-10 lg:grid-cols-[45fr_55fr]">
          <div>
            <SectionHeading
              onDark
              align="left"
              eyebrow="Our Classroom"
              title="A second home, built at your child's height"
            />
            <div className="mt-6 space-y-4 text-white/90">
              <p>
                Step inside and the first thing you notice is the scale:
                child-height tables and chairs, low open shelves, and hooks and
                trays a three-year-old can reach without asking. The room is
                arranged into flexible learning spaces — work at a table, on a
                floor mat, alone, or beside a friend.
              </p>
              <p>
                Every shelf holds real Montessori materials, set out left to
                right in the order children meet them: practical life,
                sensorial work, language, math, and cultural studies. Nothing
                is clutter; everything is an invitation.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/book-a-tour">Book a Tour</Button>
            </div>
          </div>
          <PhotoPlaceholder
            src="/photos/classroom-wide-a.jpg"
            aspect="4/3"
            alt="Wide view of the GKA Montessori classroom with child-scale furniture and low shelves"
          />
        </div>
        <div className="relative mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <PhotoPlaceholder
            src="/photos/shelf-materials-a.jpg"
            alt="White open shelf with wooden trays of Montessori materials arranged in sequence"
            sizes="(max-width: 767px) 50vw, 25vw"
            aspect="1/1"
          />
          <PhotoPlaceholder
            src="/photos/reading-corner-a.jpg"
            alt="Cozy reading corner with picture books on a low shelf and floor cushions"
            sizes="(max-width: 767px) 50vw, 25vw"
            aspect="1/1"
          />
          <PhotoPlaceholder
            src="/photos/art-area-a.jpg"
            alt="Art easel and shelves of creative supplies in a bright corner"
            sizes="(max-width: 767px) 50vw, 25vw"
            aspect="1/1"
          />
          <PhotoPlaceholder
            src="/photos/gathering-space-a.jpg"
            alt="Classroom gathering area with soft seating around a low materials shelf"
            sizes="(max-width: 767px) 50vw, 25vw"
            aspect="1/1"
          />
        </div>
      </Band>

      {/* S6 — 6-item classroom features grid */}
      <Band color="cream">
        <SectionHeading
          eyebrow="Why it works"
          title="Classroom features"
          intro="Six choices we made on purpose — each one aimed at the same goal: a child who can say “I did it myself.”"
        />
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title}>
              <h3 className="uppercase tracking-widest text-sm font-bold text-brand-dark">
                {feature.title}
              </h3>
              <p className="mt-2">{feature.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/book-a-tour">Book a Tour</Button>
        </div>
      </Band>

      {/* S7 — Testimonial band 1 (launch: founder/team welcome quote; swap in a parent quote when reviews arrive) */}
      <Band
        color="brand"
        edgeTop="wave"
        edgeTopColor="cream"
        edgeBottom="wave"
        edgeBottomColor="tint"
      >
        <figure className="mx-auto max-w-3xl text-center">
          <p className="font-display italic text-brand-dark">From our team</p>
          <blockquote className="mt-4 font-display text-2xl leading-snug text-balance sm:text-3xl">
            “Every corner of this classroom has been{" "}
            <strong>prepared with your child in mind</strong>. We are honored
            to welcome your family into our community — and we look forward to
            growing together.”
          </blockquote>
          <figcaption className="mt-6 uppercase tracking-widest text-sm">
            — The {site.name} Team
          </figcaption>
        </figure>
      </Band>

      {/* S8 — Facility feature B: Outdoor Play */}
      <Band color="tint" id="outdoor-play">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Outdoor Play"
              title="Fresh air is part of the curriculum"
            />
            <div className="mt-6 space-y-4">
              <p>
                Outdoor time isn’t a break from learning — it’s where a lot of
                it happens. Our children head outside daily to run, dig,
                balance, and observe, carrying the classroom’s calm order into
                the open air of {site.address.city}.
              </p>
              <p>
                Gardening and nature observation grow straight out of our
                cultural-studies work, and group games become gentle practice
                in grace &amp; courtesy: taking turns, inviting a friend,
                waiting well.
              </p>
            </div>
            <details className="group mt-6">
              <summary className="cursor-pointer list-none uppercase tracking-widest text-sm font-bold text-brand-dark">
                <span aria-hidden="true" className="mr-2 inline-block transition-transform group-open:rotate-90">
                  ›
                </span>
                What outdoor time looks like
              </summary>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Time outside every day, with gear for gray Pacific Northwest skies</li>
                <li>Gardening and nature observation, straight from our cultural studies</li>
                <li>Room to run, climb, balance, and build</li>
                <li>Group games that practice grace &amp; courtesy</li>
              </ul>
            </details>
          </div>
          <PhotoPlaceholder
            src="/photos/outdoor-play-b.jpg"
            alt="Grassy outdoor play area with natural climbing logs shaded by evergreen trees"
            sizes="(max-width: 1023px) 100vw, 50vw"
            shape="blob"
            aspect="4/3"
          />
        </div>
      </Band>

      {/* S9 — Pull-quote banner (public-domain Maria Montessori quote) */}
      <Band
        color="navy"
        edgeTop="arc"
        edgeTopColor="tint"
        edgeBottom="arc"
        edgeBottomColor="tint"
      >
        <figure className="mx-auto max-w-3xl text-center">
          <blockquote className="font-display text-2xl italic leading-snug text-balance sm:text-4xl">
            “The child who concentrates is immensely happy.”
          </blockquote>
          <figcaption className="mt-6 uppercase tracking-widest text-sm text-lime">
            — Dr. Maria Montessori
          </figcaption>
        </figure>
      </Band>

      {/* S10 — Facility feature C: Day to Day (indoor movement / practical life, rainy-day PNW angle) */}
      <Band color="tint" id="day-to-day">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Day to Day"
              title="Rainy days are working days"
            />
            <p className="mt-6">
              When the {site.address.city} sky turns gray, the rhythm of the
              day doesn’t change. Children keep moving and keep working
              indoors — pouring, food preparation, care of the classroom, and
              movement games that give small bodies big things to do. Practical
              life, Montessori’s name for real everyday work, is often the
              rainy-day favorite.
            </p>
          </div>
          <PhotoPlaceholder
            src="/photos/practical-life-a.jpg"
            alt="Practical-life pouring tray with small pitchers arranged on a low table"
            sizes="(max-width: 1023px) 100vw, 50vw"
            aspect="4/3"
          />
        </div>
      </Band>

      {/*
        S11 — Testimonial band 2 (bg-tint-cyan quote carousel): deliberately
        deferred per template-map decision #12 — a brand-new school won't have
        two quote carousels at launch. Add here once parent reviews exist.
      */}

      {/* S12 — Final CTA banner: photo + navy overlay, schedules + transparent-tuition invite */}
      <Band
        color="navy"
        padded={false}
        edgeTop="wave"
        edgeTopColor="tint"
        edgeBottom="wave"
        edgeBottomColor="navy"
      >
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <PhotoPlaceholder
              src="/photos/guide-small-group.jpg"
              sizes="100vw"
              shape="rect"
              alt="Children and a Montessori guide together in the GKA classroom"
              className="h-full"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-navy/60" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-navy to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-navy to-transparent"
          />
          <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center text-white sm:py-28">
            <h2 className="font-display text-3xl leading-tight text-balance sm:text-4xl md:text-5xl">
              {tuition.fullTime.label} ({tuition.fullTime.hours}) and{" "}
              {tuition.halfDay.label} schedules for {site.ages.toLowerCase()}
            </h2>
            <p className="mt-4 uppercase tracking-widest text-sm text-white/85">
              Transparent tuition — every rate published before you visit
            </p>
            <div className="mt-8">
              <Button href="/book-a-tour">Book a Tour</Button>
            </div>
            <p className="mt-5 text-sm text-white/80">
              Prefer numbers first?{" "}
              <Link
                href="/admissions"
                className="underline underline-offset-4 hover:text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
              >
                See Tuition &amp; Admissions
              </Link>
            </p>
          </div>
        </div>
      </Band>
    </>
  );
}
