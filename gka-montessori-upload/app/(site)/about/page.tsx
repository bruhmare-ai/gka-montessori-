import type { Metadata } from "next";
import Link from "next/link";
import Band from "@/components/Band";
import Button from "@/components/Button";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import SectionHeading from "@/components/SectionHeading";
import { site, tuition } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Montessori Preschool in Edmonds, WA",
  description: `${site.name} is reopening its ${site.address.city} home at ${site.address.street} with a renewed vision. Montessori early learning for ${site.ages.toLowerCase()} — meet our team and book a tour.`,
};

/** Placeholder team slots — names/photos/bios land here as hiring is finalized. */
const TEAM_SLOTS = [
  {
    name: "Our Director",
    role: "School leadership",
    blurb:
      "Leads the school day to day and partners with families from the first tour to the first day of school.",
    alt: "Headshot placeholder for the GKA Montessori director",
  },
  {
    name: "Our Lead Guide",
    role: "Montessori guide, ages 2–6",
    blurb:
      "Prepares the classroom, presents lessons one-on-one, and follows each child's own pace.",
    alt: "Headshot placeholder for the GKA Montessori lead guide",
  },
  {
    name: "Our Assistant Guide",
    role: "Classroom support",
    blurb:
      "Supports the work cycle, snacks and meals, and outdoor play with warmth and consistency.",
    alt: "Headshot placeholder for the GKA Montessori assistant guide",
  },
] as const;

/** GKA sprout motif — watermark-scale line art (decorative). */
function SproutMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 96 96"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M48 82 V30" />
      <path d="M48 52 C36 50 26 40 25 24 C41 26 48 36 48 52 Z" />
      <path d="M48 40 C60 38 70 28 71 12 C55 14 48 24 48 40 Z" />
      <path d="M30 82 H66" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* 1 — Hero image banner */}
      <Band color="navy" padded={false} edgeBottom="wave" edgeBottomColor="cream">
        <div className="relative">
          <div className="absolute inset-0">
            <PhotoPlaceholder
              src="/photos/hero-classroom-b.jpg"
              alt="Bright Montessori classroom with wooden furniture, low shelves, and warm natural light"
              priority
              sizes="100vw"
              shape="rect"
              className="h-full"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-navy/60" />
          <div className="relative mx-auto flex min-h-[45vh] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[55vh]">
            <p className="text-sm font-bold uppercase tracking-widest text-lime">
              About {site.name}
            </p>
            <p className="mt-4 font-display text-3xl italic text-white text-balance sm:text-5xl">
              {site.tagline}
            </p>
          </div>
        </div>
      </Band>

      {/* 2 — Intro statement (h1) */}
      <Band>
        <div className="grid items-center gap-10 md:grid-cols-[1fr_2fr]">
          <SproutMark className="mx-auto hidden w-40 text-brand-dark/15 md:block lg:w-56" />
          <div>
            <SectionHeading
              as="h1"
              align="left"
              eyebrow={`${site.ages} · ${site.address.city}, ${site.address.state}`}
              title="A renewed vision for our 76th Ave home"
              intro={site.description}
            />
          </div>
        </div>
      </Band>

      {/* 3 — Mission + Story */}
      <Band>
        <div className="grid items-center gap-12 lg:grid-cols-[11fr_9fr]">
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-dark">
                Our Mission
              </h2>
              <p className="mt-4 text-navy/80">
                GKA Montessori exists for the development of the whole child —
                academically, socially, emotionally, and creatively. In a warm,
                engaging, and supportive environment, children choose meaningful
                work, learn at their own individual pace, and build the
                independence and concentration that carry them for life.
              </p>
              <p className="mt-4 text-navy/80">
                We treat respect as a daily practice: respect for each child,
                for the classroom community, and for the families we partner
                with.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-dark">
                Our Story
              </h2>
              <p className="mt-4 text-navy/80">
                GKA Montessori is opening this fall at {site.address.street} in{" "}
                {site.address.city} — our center reopening with a renewed vision
                as a Montessori-based early learning program for children ages
                2–6.
              </p>
              <p className="mt-4 text-navy/80">
                Our team is preparing a beautiful learning environment where
                children feel safe, valued, inspired, and encouraged to grow
                every day — child-scale spaces, real Montessori materials, and
                room to explore outdoors.
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md pr-10 pb-16">
            <PhotoPlaceholder
              src="/photos/child-pouring.jpg"
              shape="circle"
              ring
              alt="A child pouring water during practical-life work in the GKA classroom"
              className="w-3/4"
            />
            <div className="absolute right-0 bottom-0 w-1/2">
              <PhotoPlaceholder
                src="/photos/guide-with-child.jpg"
                shape="circle"
                ring
                alt="A guide sitting alongside a child during a one-on-one lesson"
              />
            </div>
          </div>
        </div>
      </Band>

      {/* 4 — Meet Our Team intro */}
      <Band
        color="navy"
        edgeTop="wave"
        edgeTopColor="cream"
        edgeBottom="wave"
        edgeBottomColor="cream"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[9fr_11fr]">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-t-[999px] rounded-b-3xl">
            <PhotoPlaceholder
              src="/photos/guide-small-group.jpg"
              shape="rect"
              aspect="4/5"
              alt="A GKA guide and children gathered around a low table of Montessori materials"
            />
          </div>
          <div>
            <p className="font-script text-3xl text-lime sm:text-4xl">Meet</p>
            <h2 className="mt-1 font-display text-3xl text-white sm:text-4xl md:text-5xl">
              Our Team
            </h2>
            <p className="mt-5 max-w-xl text-white/80">
              We are building a small team of trained Montessori educators for
              our {site.address.city} classroom. Our guides observe first and
              teach second — presenting lessons one child at a time so that
              every child feels safe, valued, inspired, and encouraged to grow
              every day.
            </p>
            <div className="mt-8">
              <Button href="#team" variant="inverted">
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </Band>

      {/* 5 — Team card grid */}
      <Band id="team">
        <SectionHeading
          eyebrow="Our Team"
          title="The people your child will know by name"
          intro="Introductions — names, faces, and full bios — will appear here as we finalize our team ahead of fall."
        />
        <ul className="mt-12 grid list-none gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_SLOTS.map((member) => (
            <li
              key={member.name}
              className="rounded-3xl bg-white p-8 text-center shadow-sm"
            >
              <div className="mx-auto w-36">
                <PhotoPlaceholder shape="circle" ring alt={member.alt} />
              </div>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-navy">
                {member.name}
              </h3>
              <p className="mt-1 font-display italic text-brand-dark">
                {member.role}
              </p>
              <p className="mt-3 text-sm text-navy/75">{member.blurb}</p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-xl text-center text-sm italic text-navy/60">
          Bios and photos are on the way — or skip ahead and{" "}
          <Link
            href="/book-a-tour"
            className="font-semibold text-brand-dark underline decoration-brand decoration-2 underline-offset-4 hover:text-navy"
          >
            meet everyone in person at your tour
          </Link>
          .
        </p>
      </Band>

      {/* 6 — Programs teaser (mirrored band) */}
      <Band
        color="brandDark"
        edgeTop="wave"
        edgeTopColor="cream"
        edgeBottom="arc"
        edgeBottomColor="cream"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[11fr_9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-lime">
              Our Programs
            </p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl md:text-5xl">
              One classroom community, flexible schedules
            </h2>
            <p className="mt-5 max-w-xl text-white/80">
              Choose Full-Time ({tuition.fullTime.hours}) or Half-Day mornings
              and afternoons — every child, {site.ages.toLowerCase()},
              experiences the same Montessori curriculum. And because we believe
              in partnering openly with families, our tuition is published for
              every schedule.
            </p>
            <div className="mt-8">
              <Button href="/programs" variant="inverted">
                Explore Our Programs
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xs">
            <PhotoPlaceholder
              shape="circle"
              ring
              label="GKA emblem"
              alt="Circular GKA Montessori emblem placeholder"
            />
          </div>
        </div>
      </Band>

      {/* 7 — Letter from the Director */}
      <Band>
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
          <div>
            <p className="font-script text-3xl text-brand-dark sm:text-4xl">
              A note from
            </p>
            <h2 className="mt-1 font-display text-3xl text-navy sm:text-4xl md:text-5xl">
              Our Director
            </h2>
            <div className="mt-6 space-y-4 text-navy/80">
              <p>
                Welcome to {site.name}. Our classroom at {site.address.street}{" "}
                in {site.address.city} is being prepared with a single purpose:
                the development of the whole child — academically, socially,
                emotionally, and creatively.
              </p>
              <p>
                Montessori gives children real work to love: pouring and
                buttoning in practical life, sensorial exploration, early
                language and math, science, and cultural studies — each child
                learning at their own individual pace in a warm, engaging, and
                supportive environment.
              </p>
              <p>
                We are excited to partner with families. The best way to
                understand a Montessori classroom is to stand in one — so{" "}
                <Link
                  href="/book-a-tour"
                  className="font-semibold text-brand-dark underline decoration-brand decoration-2 underline-offset-4 hover:text-navy"
                >
                  book a tour
                </Link>{" "}
                and bring every question about schedules, tuition, and your
                child&apos;s first day.
              </p>
              <p>
                We are honored to welcome your family into our community and
                look forward to growing together.
              </p>
            </div>
            <p className="mt-8 font-script text-3xl text-navy">With gratitude,</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-brand-dark">
              Director, {site.name}
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <PhotoPlaceholder
              shape="rounded"
              aspect="3/4"
              label="Director portrait"
              alt="Portrait placeholder for the GKA Montessori director"
            />
            <p className="mt-3 text-center text-sm italic text-navy/60">
              Our director&apos;s introduction is coming soon.
            </p>
          </div>
        </div>
      </Band>

      {/* 8 — Come meet us: quote + CTA band */}
      <Band
        color="navy"
        padded={false}
        edgeTop="wave"
        edgeTopColor="cream"
        edgeBottom="wave"
        edgeBottomColor="navy"
      >
        <div className="relative">
          <div className="absolute inset-0">
            <PhotoPlaceholder
              src="/photos/classroom-afternoon-a.jpg"
              sizes="100vw"
              shape="rect"
              alt="Warm afternoon light across the GKA Montessori classroom, chairs tucked in and shelves ready"
              className="h-full"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-navy/70" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center sm:py-24">
            <p className="font-script text-3xl text-lime sm:text-4xl">
              {site.taglineAlt}
            </p>
            <h2 className="mt-4 font-display text-3xl text-white text-balance sm:text-4xl md:text-5xl">
              Come meet us at our {site.address.city} classroom
            </h2>
            <p className="mt-4 max-w-xl text-white/80">
              Tour the classroom, meet the team, and get every question
              answered — schedules, tuition, and what a Montessori day looks
              like for your child.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/book-a-tour">Book a Tour</Button>
              <Button href="/admissions" variant="outline" onDark>
                See Tuition
              </Button>
            </div>
          </div>
        </div>
      </Band>
    </>
  );
}
