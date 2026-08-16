import Link from "next/link";
import { site, tuition } from "@/lib/site";
import { Logo } from "./Header";

const START_HERE = [
  { href: "/about", label: "About" },
  { href: "/admissions", label: "Tuition & Admissions" },
  { href: "/contact", label: "Contact" },
  { href: "/book-a-tour", label: "Book a Tour" },
] as const;

const EXPLORE = [
  { href: "/montessori", label: "Montessori" },
  { href: "/classrooms", label: "Classrooms" },
  { href: "/programs", label: "Programs" },
] as const;

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ href: string; label: string }>;
}) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-widest text-lime">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-white/80 decoration-lime underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const programLinks = [
    {
      href: "/programs#full-time",
      label: `${tuition.fullTime.label} (${tuition.fullTime.hours})`,
    },
    { href: "/programs#half-day", label: `${tuition.halfDay.label} AM` },
    { href: "/programs#half-day", label: `${tuition.halfDay.label} PM` },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-7 lg:gap-8">
          {/* Zone 1 — logo + tagline */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-xs font-display italic text-lg text-white/85">
              {site.taglineAlt}
            </p>
          </div>

          {/* Zone 2 — NAP block (must match the Google Business Profile exactly) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              {site.legalName}
            </h3>
            <address className="mt-4 space-y-2.5 not-italic text-white/80">
              <p>{site.address.full}</p>
              <p>
                <a
                  href={site.phoneHref}
                  className="decoration-lime underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                >
                  {site.phone}
                </a>
              </p>
              <p>{site.hours}</p>
            </address>
          </div>

          {/* Zones 3–5 — link columns */}
          <LinkColumn title="Start Here" links={START_HERE} />
          <LinkColumn title="Explore" links={EXPLORE} />
          <LinkColumn title="Our Programs" links={programLinks} />
        </div>

        {/* Badge placeholder slots — license badge stays a placeholder until the number is verified in intake */}
        <div className="mt-12 flex flex-wrap gap-3">
          <span className="rounded-full border border-dashed border-white/30 px-4 py-1.5 text-xs uppercase tracking-widest text-white/60">
            WA license badge — pending verification
          </span>
          <span className="rounded-full border border-white/25 px-4 py-1.5 text-xs uppercase tracking-widest text-white/75">
            DSHS accepted
          </span>
        </div>

        {/* Legal line */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            <Link
              href="/privacy"
              className="decoration-lime underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
