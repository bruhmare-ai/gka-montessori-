import Link from "next/link";
import { site } from "@/lib/site";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/classrooms", label: "Classrooms" },
  { href: "/montessori", label: "Montessori" },
  { href: "/admissions", label: "Tuition & Admissions" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * Text logo lockup (no image asset yet). Reusable outside the header —
 * e.g. the /book-a-tour minimal logo-only bar (tone="light", linked=false).
 */
export function Logo({
  tone = "light",
  linked = true,
  className = "",
}: {
  /** "light" for dark backgrounds (white text), "dark" for light backgrounds (navy text). */
  tone?: "light" | "dark";
  linked?: boolean;
  className?: string;
}) {
  const lockup = (
    <span className={`inline-block leading-none ${className}`}>
      <span
        className={`font-display text-3xl font-black tracking-tight ${
          tone === "light" ? "text-white" : "text-navy"
        }`}
      >
        GKA<span className="text-lime">.</span>
      </span>
      <span
        className={`mt-1 block text-[0.62rem] font-bold uppercase tracking-widest ${
          tone === "light" ? "text-white/75" : "text-navy/70"
        }`}
      >
        Montessori School
      </span>
    </span>
  );

  if (!linked) return lockup;

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
    >
      {lockup}
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-navy text-white shadow-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:uppercase focus:tracking-widest focus:text-navy"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-white/85 decoration-lime decoration-2 underline-offset-8 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Button href="/book-a-tour" size="sm">
            Book a Tour
          </Button>
          <MobileMenu links={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}
