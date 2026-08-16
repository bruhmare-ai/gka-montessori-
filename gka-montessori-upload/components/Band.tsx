import type { ReactNode } from "react";

export type BandColor =
  | "navy"
  | "brand"
  | "brandDark"
  | "tint"
  | "tintCyan"
  | "cream";

export type BandEdge = "wave" | "arc";

/** Band surface + sensible default text color per the color-role rules. */
const SURFACE: Record<BandColor, string> = {
  navy: "bg-navy text-white",
  brand: "bg-brand text-navy",
  brandDark: "bg-brand-dark text-white",
  tint: "bg-tint text-navy",
  tintCyan: "bg-tint-cyan text-navy",
  cream: "bg-background text-foreground",
};

/** SVG fill color (currentColor) for the adjacent band that carves the edge. */
const FILL: Record<BandColor, string> = {
  navy: "text-navy",
  brand: "text-brand",
  brandDark: "text-brand-dark",
  tint: "text-tint",
  tintCyan: "text-tint-cyan",
  cream: "text-background",
};

/**
 * Organic curves in a 1440x64 box. The filled region is the ADJACENT band's
 * color occupying the top of the box; for bottom edges the SVG is rotated 180°.
 */
const PATHS: Record<BandEdge, string> = {
  wave: "M0,0 H1440 V28 C1220,60 980,10 720,34 C440,60 200,14 0,44 Z",
  arc: "M0,0 H1440 V10 C1110,62 330,62 0,10 Z",
};

function Edge({
  shape,
  color,
  flip = false,
}: {
  shape: BandEdge;
  color: BandColor;
  flip?: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 64"
      preserveAspectRatio="none"
      className={`block h-10 w-full sm:h-14 md:h-16 ${FILL[color]} ${flip ? "rotate-180" : ""}`}
    >
      <path d={PATHS[shape]} fill="currentColor" />
    </svg>
  );
}

type BandProps = {
  /** Color role of this band. Default "cream" (warm off-white page surface). */
  color?: BandColor;
  /** Organic divider at the top edge, carved by the PREVIOUS band's color. */
  edgeTop?: BandEdge;
  /** Organic divider at the bottom edge, carved by the NEXT band's color. */
  edgeBottom?: BandEdge;
  /** Color of the band ABOVE (fills the top divider). Default "cream". */
  edgeTopColor?: BandColor;
  /** Color of the band BELOW (fills the bottom divider). Default "cream". */
  edgeBottomColor?: BandColor;
  /** When true (default) wraps children in a centered max-w-6xl padded container. Set false for full-bleed content (heroes, photo strips). */
  padded?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function Band({
  color = "cream",
  edgeTop,
  edgeBottom,
  edgeTopColor = "cream",
  edgeBottomColor = "cream",
  padded = true,
  id,
  className = "",
  children,
}: BandProps) {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${SURFACE[color]} ${className}`}
    >
      {edgeTop && <Edge shape={edgeTop} color={edgeTopColor} />}
      {padded ? (
        <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:py-20">
          {children}
        </div>
      ) : (
        children
      )}
      {edgeBottom && <Edge shape={edgeBottom} color={edgeBottomColor} flip />}
    </section>
  );
}
