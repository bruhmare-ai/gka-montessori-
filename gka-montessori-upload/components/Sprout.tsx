"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The GKA sprout mark that draws itself and grows from its base when it
 * scrolls into view — the site's signature motion motif. Purely decorative
 * (aria-hidden); reduced-motion shows it fully drawn with no animation.
 */
export default function Sprout({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      viewBox="0 0 96 96"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`gka-sprout pointer-events-none select-none ${shown ? "is-in" : ""} ${className}`.trim()}
    >
      <path pathLength={1} className="base" d="M30 82 H66" />
      <path pathLength={1} className="stem" d="M48 82 V30" />
      <path pathLength={1} className="leaf-a" d="M48 52 C36 50 26 40 25 24 C41 26 48 36 48 52 Z" />
      <path pathLength={1} className="leaf-b" d="M48 40 C60 38 70 28 71 12 C55 14 48 24 48 40 Z" />
    </svg>
  );
}
