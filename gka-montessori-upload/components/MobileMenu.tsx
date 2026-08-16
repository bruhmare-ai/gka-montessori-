"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * The only client boundary in the header — a hamburger toggle + slide-down
 * panel. Receives serializable link data from the server Header.
 */
export default function MobileMenu({
  links,
}: {
  links: ReadonlyArray<{ href: string; label: string }>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          className="h-6 w-6"
        >
          {open ? (
            <path d="M6 6 18 18 M18 6 6 18" />
          ) : (
            <path d="M4 7h16 M4 12h16 M4 17h16" />
          )}
        </svg>
      </button>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main menu"
          className="absolute inset-x-0 top-full border-t border-white/10 bg-navy px-6 pb-8 pt-4 shadow-lg"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm uppercase tracking-widest text-white/90 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-lime"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
