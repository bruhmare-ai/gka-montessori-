import type { Metadata } from "next";
import Band from "@/components/Band";
import Button from "@/components/Button";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import SectionHeading from "@/components/SectionHeading";
import { site, learningAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: `Our Montessori Approach — ${site.ages} in ${site.address.city}, ${site.address.state}`,
  description: `What Montessori looks like at ${site.name}: mixed-age classrooms for children ${site.ages.toLowerCase()}, trained guides, hands-on learning areas, and self-paced, whole-child growth. Montessori preschool in ${site.address.city}, ${site.address.state} — book a tour.`,
};

/** Six pillars from the GKA collateral (copy deck, Our Approach). */
const PILLARS = [
  {
    title: "Independence",
    line: "Children do real things for themselves — and discover they can.",
  },
  {
    title: "Respect",
    line: "For each child, for one another, and for the work of the classroom.",
  },
  {
    title: "Concentration",
    line: "Long, unhurried stretches of focus where deep attention takes root.",
  },
  {
    title: "Hands-on exploration",
    line: "Concrete materials children can touch, move, and master.",
  },
  {
    title: "Self-paced learning",
    line: "Every child moves forward at their own individual pace.",
  },
  {
    title: "Creative expression",
    line: "Art, music, and open-ended work that let ideas take shape.",
  },
] as const;

/** Parent-friendly one-liner for every learning area exported from @/lib/site. */
const AREA_NOTES: Record<(typeof learningAreas)[number], string> = {
  "Practical Life":
    "Pouring, buttoning, preparing snack — real work that builds coordination, focus, and confidence.",
  Sensorial:
    "Materials that refine the senses: sorting, grading, and comparing size, sound, texture, and color.",
  "Language Development":
    "From rich conversation to tracing letters — an unhurried path toward reading and writing.",
  Mathematics:
    "Beads, rods, and counters make quantities real long before abstract symbols appear.",
  "Cultural Studies":
    "Geography, science, and nature discovery that open the wider world to curious minds.",
  "Art & Music":
    "Daily chances to draw, paint, sing, and move — creative expression treated as real work.",
  "Social & Emotional Learning":
    "Grace and courtesy lessons: how we greet, share, wait our turn, and care for one another.",
};

/** Bold-lead bullets for the prepared-environment split. */
const ENVIRONMENT = [
  {
    lead: "One mixed-age community",
    rest: `Children ${site.ages.toLowerCase()} share a single classroom — younger children learn by watching, older children grow by leading.`,
  },
  {
    lead: "Uninterrupted work cycles",
    rest: "A long, protected morning stretch where concentration is never cut short by the clock.",
  },
  {
    lead: "Hands-on Montessori materials",
    rest: "Beautiful, purposeful materials that let children feel an idea before they name it.",
  },
  {
    lead: "Outdoor exploration",
    rest: "Time outside every week, with outdoor play and gardening woven into classroom life.",
  },
  {
    lead: "Self-paced learning",
    rest: "Guides follow each child's readiness — not a one-size-fits-all timetable.",
  },
] as const;

/** Oversized GKA sprout line-art, ghosted behind band content. */
function Watermark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 96 96"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`pointer-events-none absolute ${className}`}
    >
      <path d="M48 88 V28" />
      <path d="M48 54 C34 52 22 40 21 22 C39 24 48 36 48 54 Z" />
      <path d="M48 40 C62 38 74 26 75 8 C57 10 48 22 48 40 Z" />
      <path d="M48 70 C40 69 33 63 32 52 C43 53 48 60 48 70 Z" />
    </svg>
  );
}

export default function MontessoriPage() {
  return (
    <>
      {/* 1 — Hero quote banner: full-bleed navy band, oversized watermark, wave into cream */}
      <Band color="navy" edgeBottom="wave" edgeBottomColor="cream">
        <Watermark className="-right-24 -top-16 h-[26rem] w-[26rem] text-white/5 sm:h-[34rem] sm:w-[34rem]" />
        <div className="relative mx-auto max-w-3xl py-6 text-center sm:py-10">
          <SectionHeading
            as="h1"
            onDark
            eyebrow={`Our Approach · ${site.ages} · ${site.address.city}, ${site.address.state}`}
            title="What Montessori looks like at GKA"
            className="mx-auto"
          />
          <p className="mx-auto mt-6 max-w-2xl font-display text-xl italic leading-relaxed text-lime sm:text-2xl">
            Our program develops the whole child — academically, socially,
            emotionally, and creatively — through meaningful daily activities
            and self-paced learning.
          </p>
        </div>
      </Band>

      {/* 2 — Who / What intro: two question blocks + overlapping photo collage */}
      <Band color="cream">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-dark">
                Who was Maria Montessori?
              </h2>
              <p className="mt-3 text-navy/80">
                Dr. Maria Montessori was an Italian physician and scientist who
                spent her life observing how young children actually learn. Her
                discovery — that children teach themselves when given real
                work, real choices, and a carefully prepared environment —
                became the foundation of Montessori education around the world,
                more than a century of practice strong.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-dark">
                What is Montessori?
              </h2>
              <p className="mt-3 text-navy/80">
                Montessori is a child-led approach to early learning. Instead
                of one lesson delivered to the whole group, children choose
                meaningful work from carefully prepared shelves and learn at
                their own individual pace — in a warm, engaging, and supportive
                environment where a trained adult guides rather than directs.
                Independence is the through-line: children who do things for
                themselves come to believe they can.
              </p>
            </div>
          </div>
          <div className="relative mb-10 lg:mb-0">
            <PhotoPlaceholder
              src="/photos/real-cylinder-work.jpg"
              alt="A GKA student building the knobless cylinder tower during the morning work cycle"
              sizes="(max-width: 1023px) 100vw, 50vw"
              aspect="4/3"
              shape="rounded"
            />
            <div className="absolute -bottom-8 -left-4 w-32 sm:w-40">
              <PhotoPlaceholder
                src="/photos/materials-macro-a.jpg"
                alt="Close-up of pink tower cubes and knobless cylinders, classic Montessori materials"
                sizes="160px"
                shape="circle"
                ring
              />
            </div>
          </div>
        </div>
      </Band>

      {/* 3 — Trust strip: shallow brand band, emblem left, one-liner right */}
      <Band
        color="brand"
        edgeTop="arc"
        edgeTopColor="cream"
        edgeBottom="arc"
        edgeBottomColor="tint"
      >
        <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
          <PhotoPlaceholder
            alt="GKA Montessori school emblem"
            shape="circle"
            ring
            className="mx-auto w-32 sm:w-40"
          />
          <div className="text-center md:text-left">
            <h2 className="font-display text-2xl text-navy sm:text-3xl">
              Montessori, done openly
            </h2>
            <p className="mt-3 text-navy/80">
              Our classroom is led by trained Montessori guides, our{" "}
              <a
                href="/admissions"
                className="font-bold underline underline-offset-4 hover:text-brand-dark"
              >
                tuition is published
              </a>{" "}
              for every schedule, and we are preparing our {site.address.city}{" "}
              home to Washington&rsquo;s childcare licensing standards — so you
              always know exactly what your family is choosing.
            </p>
          </div>
        </div>
      </Band>

      {/* 4 — Pillars grid: six habits, 3-col cards on tint, wave into cream */}
      <Band color="tint" edgeBottom="wave" edgeBottomColor="cream">
        <SectionHeading
          eyebrow="The Pillars"
          title="Six habits we nurture every day"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center font-display text-xl italic text-brand-dark">
          Every material, lesson, and routine at GKA serves one of these.
        </p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <li key={pillar.title} className="rounded-3xl bg-white p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-dark">
                {pillar.title}
              </h3>
              <p className="mt-2 text-navy/80">{pillar.line}</p>
            </li>
          ))}
        </ul>
      </Band>

      {/* 5 — Learning-areas grid: parent-friendly one-liners from @/lib/site */}
      <Band color="cream">
        <SectionHeading
          eyebrow="The Learning Areas"
          title="What your child will work on"
          intro="Seven connected areas, one classroom. Every shelf has a purpose, and every child finds their own path through them."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learningAreas.map((area) => (
            <li key={area} className="rounded-3xl bg-tint/60 p-6">
              <h3 className="font-display text-xl text-navy">{area}</h3>
              <p className="mt-2 text-navy/75">{AREA_NOTES[area]}</p>
            </li>
          ))}
          <li className="flex flex-col items-start justify-center gap-4 rounded-3xl bg-brand p-6 text-navy">
            <p className="font-display text-xl">
              The best explanation is a visit.
            </p>
            <Button href="/book-a-tour" variant="inverted" size="sm">
              Book a Tour
            </Button>
          </li>
        </ul>
      </Band>

      {/* 6 — Photo divider A: full-width classroom strip */}
      <Band color="cream" padded={false}>
        <PhotoPlaceholder
          src="/photos/prepared-classroom-a.jpg"
          sizes="100vw"
          alt="Wide view of the prepared Montessori classroom at GKA — low shelves, natural light, children at work"
          aspect="21/9"
          shape="rect"
        />
      </Band>

      {/* 7 — Montessori quote band: navy, wave top (parent-quote slot grows as reviews arrive) */}
      <Band color="navy" edgeTop="wave" edgeTopColor="cream">
        <figure className="mx-auto max-w-3xl text-center">
          <blockquote>
            <p className="font-display text-2xl italic leading-snug text-balance sm:text-4xl">
              &ldquo;To stimulate life — leaving it then free to develop, to
              unfold — herein lies the first task of the educator.&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-6 text-sm font-bold uppercase tracking-widest text-lime">
            Dr. Maria Montessori · The Montessori Method
          </figcaption>
          <p className="mt-6 text-white/75">
            It&rsquo;s the idea behind every shelf, every lesson, and every
            unhurried morning at GKA.
          </p>
        </figure>
      </Band>

      {/* 8 — Environment split: bold-lead bullets + photo on brand-dark */}
      <Band color="brandDark">
        <div className="grid items-center gap-12 lg:grid-cols-[11fr_9fr]">
          <div>
            <SectionHeading
              align="left"
              onDark
              eyebrow="The Prepared Environment"
              title="The GKA Montessori environment"
            />
            <ul className="mt-8 space-y-4">
              {ENVIRONMENT.map((item) => (
                <li key={item.lead} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-lime"
                  />
                  <p className="text-white/80">
                    <span className="font-bold text-white">{item.lead}</span>
                    {" — "}
                    {item.rest}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <PhotoPlaceholder
            src="/photos/floor-mat-work.jpg"
            alt="Children working independently on floor mats in a light-filled Montessori classroom"
            aspect="3/4"
            shape="rounded"
          />
        </div>
      </Band>

      {/* 9 — The Guide split (mirrored): photo + watermark left, copy right */}
      <Band color="cream">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <Watermark className="-left-12 -top-12 h-72 w-72 text-tint" />
            <PhotoPlaceholder
              src="/photos/guide-with-child.jpg"
              alt="A GKA guide kneeling beside a child, quietly observing their work"
              aspect="4/3"
              shape="rounded"
              className="relative"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="The Role of"
              title="The guide"
            />
            <p className="mt-6 text-navy/80">
              In a Montessori classroom, the adult&rsquo;s job looks different.
              Rather than teaching from the front of the room, a GKA guide
              presents lessons to one child at a time — then steps back to
              observe, letting practice and repetition do their quiet work.
            </p>
            <p className="mt-4 text-navy/80">
              Because our guides watch each child closely, they know when
              someone is ready for the next challenge — and when to simply
              protect their concentration. Part mentor, part scientist, the
              guide is how independence gets nurtured rather than assigned.
            </p>
          </div>
        </div>
      </Band>

      {/* 10 — Photo divider B: children outdoors */}
      <Band color="cream" padded={false}>
        <PhotoPlaceholder
          src="/photos/outdoor-play-b.jpg"
          alt="Natural outdoor play yard with grass, logs, and evergreen trees"
          sizes="100vw"
          aspect="21/9"
          shape="rect"
        />
      </Band>

      {/* 11 — Closing CTA: brand band, wave into the navy footer */}
      <Band color="brand" edgeBottom="wave" edgeBottomColor="navy">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="See It Yourself"
            title="Come see Montessori in action"
            intro={`The best way to understand a Montessori morning is to stand in the middle of one. Tour our ${site.address.city} classroom, meet our guides, and get every question answered — schedules, tuition, and how your child would settle in.`}
          />
          <div className="mt-8">
            <Button href="/book-a-tour" variant="inverted">
              Book a Tour
            </Button>
          </div>
        </div>
      </Band>
    </>
  );
}
