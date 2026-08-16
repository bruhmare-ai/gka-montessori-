import type { Metadata } from "next";
import Band from "@/components/Band";
import Button from "@/components/Button";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import SectionHeading from "@/components/SectionHeading";
import TuitionTables from "@/components/TuitionTables";
import { site, tuition, learningAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: `Montessori Programs & Tuition in ${site.address.city}, ${site.address.state} | ${site.name}`,
  description: `Full-Time (${tuition.fullTime.hours}) and Half-Day morning or afternoon Montessori preschool schedules for ${site.ages.toLowerCase()} in ${site.address.city}, ${site.address.state}. One classroom community, transparent monthly tuition — book a tour today.`,
};

const halfDayAm = tuition.halfDay.options[0];
const halfDayPm = tuition.halfDay.options.slice(1);

const DAY_RHYTHM = [
  {
    title: "Morning work cycle",
    body: "The classroom hums with purposeful activity. Children choose their own work from the shelves — pouring, buttoning, and food preparation from practical life; sensorial materials; early language and math — while a guide presents new lessons to one child, or a small group, at a time.",
    alt: "Children choosing Montessori materials from low shelves during the morning work cycle",
    src: "/photos/morning-work-cycle.jpg",
    flip: false,
  },
  {
    title: "Lunch, rest & outdoor play",
    body: "Midday is for nourishment and fresh air: lunch together, unhurried conversation, and outdoor play. Children who need rest have a calm, quiet space for it — no one is rushed through their day.",
    alt: "Children eating lunch together and playing outdoors at midday",
    src: "/photos/outdoor-lunch-play.jpg",
    flip: true,
  },
  {
    title: "Afternoon exploration",
    body: "Afternoons open into a second work cycle — science and nature discovery, cultural studies, art and music — with time in the garden whenever the weather invites us outside.",
    alt: "A child painting at an easel during afternoon exploration time",
    src: "/photos/child-painting.jpg",
    flip: false,
  },
] as const;

function Accordion({
  label = "More information",
  onDark = false,
  children,
}: {
  label?: string;
  onDark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <details
      className={`group mt-5 rounded-2xl ring-1 ${
        onDark ? "bg-white/5 ring-white/15" : "bg-tint/40 ring-navy/10"
      }`}
    >
      <summary
        className={`flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl px-5 py-3.5 text-sm font-bold uppercase tracking-widest focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden ${
          onDark
            ? "text-lime focus-visible:outline-lime"
            : "text-brand-dark focus-visible:outline-navy"
        }`}
      >
        {label}
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180"
        >
          <path d="M3 6 L8 11 L13 6" />
        </svg>
      </summary>
      <div
        className={`space-y-3 px-5 pb-5 ${onDark ? "text-white/80" : "text-navy/80"}`}
      >
        {children}
      </div>
    </details>
  );
}

export default function ProgramsPage() {
  return (
    <>
      {/* 1 — Hero: full-bleed photo + navy overlay */}
      <Band
        color="navy"
        padded={false}
        edgeBottom="wave"
        edgeBottomColor="brandDark"
      >
        <div className="relative">
          <PhotoPlaceholder
            src="/photos/hero-classroom-a.jpg"
            alt="Wide sunlit Montessori classroom with low open shelves prepared for the morning work cycle"
            priority
            sizes="100vw"
            shape="rect"
            aspect="21/9"
            className="min-h-[32rem] w-full md:min-h-[36rem]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-navy/60" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-3xl text-center text-white">
              <p className="text-sm font-bold uppercase tracking-widest text-lime">
                {site.ages} · {site.address.city}, {site.address.state}
              </p>
              <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
                One classroom community,
                <span className="block italic">flexible schedules</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/85 sm:text-lg">
                Full-Time and Half-Day Montessori programs for children{" "}
                {site.ages.toLowerCase()} — every child experiences the same
                rich curriculum, whatever their schedule.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button href="/book-a-tour">Book a Tour</Button>
                <Button href="#full-time" variant="outline" onDark>
                  See Tuition
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* 2 — Curriculum intro split */}
      <Band color="brandDark">
        <div className="grid items-center gap-10 md:grid-cols-[2fr_3fr] md:gap-14">
          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <PhotoPlaceholder
              src="/photos/child-choosing-materials.jpg"
              shape="rect"
              aspect="3/4"
              alt="Child concentrating on Montessori materials at a low shelf"
              className="rounded-t-full rounded-b-3xl"
            />
            <div className="absolute -bottom-4 -right-2 flex h-24 w-24 items-center justify-center rounded-full bg-brand text-navy shadow-md ring-4 ring-brand-dark sm:h-28 sm:w-28">
              <span className="px-2 text-center font-display text-lg italic leading-tight">
                {site.ages}
              </span>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              onDark
              eyebrow="Our Programs"
              title="One curriculum, every schedule"
            />
            <p className="mt-5 text-white/85">
              Every child at GKA — full-time or part-time — joins the same
              mixed-age classroom community and works with the same hands-on
              Montessori materials. Schedules flex around your family; the
              curriculum never does.
            </p>
            <p className="mt-4 text-white/85">
              Children choose real, purposeful work and learn at their own
              individual pace — building strong foundations academically,
              socially, emotionally, and creatively.
            </p>
            <p className="mt-6 text-sm font-bold uppercase tracking-widest text-lime">
              In every schedule
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {learningAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-white ring-1 ring-white/15"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Band>

      {/* 3 — Full-Time (8–5) */}
      <Band color="navy" edgeTop="wave" edgeTopColor="brandDark">
        <SectionHeading
          onDark
          eyebrow={`${tuition.fullTime.label} · ${tuition.fullTime.hours}`}
          title="A full Montessori day, built around your working week"
          intro="Our longest schedule follows the natural arc of a child's day within one consistent, caring classroom."
        />
        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <PhotoPlaceholder
            src="/photos/children-lunch.jpg"
            aspect="4/3"
            alt="Children sharing lunch together in the GKA classroom during the full-time day"
          />
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-lime">
              {tuition.fullTime.label} Program
            </h3>
            <p className="mt-1 italic text-white/70">{tuition.fullTime.hours}</p>
            <p className="mt-4 text-white/85">
              An unhurried morning work cycle, a shared lunch and outdoor play,
              rest for those who need it, and an afternoon of exploration —
              with five, four, or three days a week to choose from.
            </p>
            <Accordion onDark>
              <p>
                Children arrive to a prepared classroom and settle straight
                into the morning work cycle — choosing practical life,
                sensorial, language, and math work from the shelves while a
                guide presents new lessons individually or in small groups.
              </p>
              <p>
                Midday brings lunch together — families pack a nutritious
                lunch, and snacks are included — followed by outdoor play.
                Children who need rest have a quiet, peaceful space for it.
              </p>
              <p>
                Afternoons hold a second work cycle with time for art and
                music, science and nature discovery, and cultural studies
                before pickup.
              </p>
            </Accordion>
          </div>
        </div>
        <TuitionTables
          show="fullTime"
          showNotes={false}
          className="mx-auto mt-12 max-w-2xl"
        />
        <div className="mt-10 text-center">
          <Button href="/book-a-tour" variant="inverted">
            Book a Tour
          </Button>
        </div>
      </Band>

      {/* 4 — Half-Day AM / PM */}
      <Band edgeTop="wave" edgeTopColor="navy">
        <SectionHeading
          eyebrow={tuition.halfDay.label}
          title="Mornings or afternoons — the same rich classroom"
          intro="Half-day children are full members of the classroom community, with schedules that fit around naps, siblings, and family life."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/10 sm:p-8">
            <PhotoPlaceholder
              src="/photos/child-focus-materials.jpg"
              aspect="4/3"
              alt="Child working independently with Montessori materials in the morning light"
            />
            <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-brand-dark">
              Morning Half-Day
            </h3>
            <p className="mt-1 italic text-navy/60">{halfDayAm.schedule}</p>
            <p className="mt-4 text-navy/80">
              The morning work cycle is the heart of a Montessori day — and
              morning children experience all of it. Your child greets their
              friends, chooses their own work, and builds concentration
              through purposeful, self-chosen activity.
            </p>
            <Accordion>
              <p>
                Mornings move at a child&apos;s pace: independent work with
                Montessori materials, lessons presented one-on-one by a guide,
                snack when your child feels ready, and time to care for the
                classroom before midday pickup.
              </p>
            </Accordion>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/10 sm:p-8">
            <PhotoPlaceholder
              src="/photos/art-area-a.jpg"
              alt="Child-sized easel with paints and art supplies in a bright classroom corner"
              sizes="(max-width: 767px) 100vw, 50vw"
              aspect="4/3"
            />
            <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-brand-dark">
              Afternoon Half-Day
            </h3>
            <p className="mt-1 italic text-navy/60">
              {halfDayPm.map((option) => (
                <span key={option.schedule} className="block">
                  {option.schedule}
                </span>
              ))}
            </p>
            <p className="mt-4 text-navy/80">
              Afternoon children join the classroom for a work cycle with room
              for art and music, science and nature discovery, and outdoor
              play and gardening — three or four afternoons a week, whichever
              fits your family.
            </p>
            <Accordion>
              <p>
                After settling in with a snack, children move into afternoon
                work: hands-on materials, small-group lessons, creative
                projects, and outdoor time in every kind of weather the
                Pacific Northwest sends us.
              </p>
            </Accordion>
          </div>
        </div>
        <TuitionTables
          show="halfDay"
          showNotes={false}
          className="mx-auto mt-12 max-w-2xl"
        />
        <div className="mt-10 text-center">
          <Button href="/book-a-tour">Book a Tour</Button>
        </div>
      </Band>

      {/* 5 — Good-to-know strip */}
      <Band
        color="tintCyan"
        padded={false}
        edgeTop="arc"
        edgeTopColor="cream"
        edgeBottom="arc"
        edgeBottomColor="cream"
      >
        <div className="mx-auto max-w-6xl px-6 py-8 text-center sm:py-10">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-dark">
            Good to know
          </h2>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {tuition.notes.map((note) => (
              <li
                key={note}
                className="flex items-center gap-2.5 text-navy/90"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 8 8"
                  className="h-2 w-2 shrink-0 text-brand-dark"
                >
                  <circle cx="4" cy="4" r="4" fill="currentColor" />
                </svg>
                {note}
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* 6 — A Day at GKA (zigzag rows) */}
      <Band>
        <SectionHeading
          eyebrow="Daily Rhythm"
          title="A day at GKA"
          intro="However long your child stays, their day follows a calm, predictable rhythm — the kind young children thrive on."
        />
        <div className="mt-12 space-y-14 sm:space-y-16">
          {DAY_RHYTHM.map((row) => (
            <div
              key={row.title}
              className="grid items-center gap-8 md:grid-cols-5 md:gap-12"
            >
              <div
                className={`md:col-span-2 ${row.flip ? "md:order-2" : ""}`}
              >
                <PhotoPlaceholder src={row.src} aspect="4/3" alt={row.alt} />
              </div>
              <div className="md:col-span-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-dark">
                  {row.title}
                </h3>
                <p className="mt-3 text-navy/80">{row.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Band>

      {/* 7 — Welcome-quote band (parent testimonials pending) */}
      <Band
        color="tint"
        edgeTop="wave"
        edgeTopColor="cream"
        edgeBottom="wave"
        edgeBottomColor="navy"
      >
        <div className="grid items-center gap-10 lg:grid-cols-3">
          <blockquote className="lg:col-span-2">
            <p className="font-display text-2xl leading-snug text-navy sm:text-3xl">
              &ldquo;We are honored to welcome your family into our community
              and look forward to growing together.&rdquo;
            </p>
            <footer className="mt-6 text-sm font-bold uppercase tracking-widest text-brand-dark">
              — The GKA Montessori Team
            </footer>
          </blockquote>
          <div className="lg:text-right">
            <p className="font-display text-2xl italic text-brand-dark">
              A word of welcome
            </p>
            <p className="mt-2 text-sm text-navy/70">
              Parent stories will live here once our first families join us
              this fall.
            </p>
          </div>
        </div>
      </Band>

      {/* 8 — Final CTA: full-bleed photo band */}
      <Band
        color="navy"
        padded={false}
        edgeBottom="wave"
        edgeBottomColor="navy"
      >
        <div className="relative">
          <PhotoPlaceholder
            src="/photos/classroom-sunlit-a.jpg"
            sizes="100vw"
            shape="rect"
            aspect="21/9"
            alt="Sunlit GKA Montessori classroom ready for an afternoon tour"
            className="min-h-[24rem] w-full"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-navy/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="max-w-2xl font-display text-3xl leading-tight text-balance text-white sm:text-4xl md:text-5xl">
              Not sure which schedule fits?
            </h2>
            <p className="mt-4 font-display text-xl italic text-lime sm:text-2xl">
              Book a tour and we&apos;ll help you choose.
            </p>
            <Button href="/book-a-tour" variant="inverted" className="mt-8">
              Book a Tour
            </Button>
          </div>
        </div>
      </Band>
    </>
  );
}
