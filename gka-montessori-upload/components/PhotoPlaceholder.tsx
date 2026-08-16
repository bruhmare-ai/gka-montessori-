import Image from "next/image";

type PhotoPlaceholderProps = {
  /** Required — describes the photo that will eventually fill this slot (a11y). */
  alt: string;
  /** Optional real photo (path under /public). When absent, the branded placeholder renders. */
  src?: string;
  /** Preload hint for above-the-fold images (maps to next/image `preload`). Only used with `src`. */
  priority?: boolean;
  /** Responsive `sizes` attribute for the image. Only used with `src`. */
  sizes?: string;
  /** Extra classes on the <img> itself (e.g. a hover zoom). Only used with `src`. */
  imageClassName?: string;
  /** Optional small visible label on the placeholder. */
  label?: string;
  /** CSS aspect-ratio value, e.g. "4/3" (default), "16/9", "1/1", "3/4", "21/9". Ignored for shape="circle" (always 1/1). */
  aspect?: string;
  shape?: "rect" | "rounded" | "circle" | "blob";
  /** Thin brand ring with a gap — the template's circle-photo treatment. Works with any shape. */
  ring?: boolean;
  className?: string;
};

const BLOB_RADIUS = "58% 42% 55% 45% / 48% 58% 42% 52%";

export default function PhotoPlaceholder({
  alt,
  src,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  imageClassName = "",
  label,
  aspect = "4/3",
  shape = "rounded",
  ring = false,
  className = "",
}: PhotoPlaceholderProps) {
  const ratio = shape === "circle" ? "1/1" : aspect;
  const radius =
    shape === "rounded" ? "rounded-3xl" : shape === "circle" ? "rounded-full" : "";
  const blobStyle =
    shape === "blob" ? { borderRadius: BLOB_RADIUS } : undefined;

  const face = src ? (
    <div
      style={{ aspectRatio: ratio, ...blobStyle }}
      className={`relative w-full overflow-hidden ${radius} ${
        ring ? "" : className
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        preload={priority}
        sizes={sizes}
        className={`object-cover ${imageClassName}`.trim()}
      />
    </div>
  ) : (
    <div
      role="img"
      aria-label={alt}
      style={{ aspectRatio: ratio, ...blobStyle }}
      className={`relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden bg-linear-to-br from-tint via-background to-tint-cyan ${radius} ${
        ring ? "" : className
      }`}
    >
      {/* Sprout line-art — GKA leaf/tree motif */}
      <svg
        aria-hidden="true"
        viewBox="0 0 96 96"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-1/4 min-w-10 max-w-20 text-brand-dark/35"
      >
        <path d="M48 82 V30" />
        <path d="M48 52 C36 50 26 40 25 24 C41 26 48 36 48 52 Z" />
        <path d="M48 40 C60 38 70 28 71 12 C55 14 48 24 48 40 Z" />
        <path d="M30 82 H66" />
      </svg>
      {label && (
        <span className="px-3 text-center text-xs uppercase tracking-widest text-navy/50">
          {label}
        </span>
      )}
    </div>
  );

  if (!ring) return face;

  return (
    <div
      style={blobStyle}
      className={`w-full border-2 border-brand/60 p-1.5 ${radius} ${className}`}
    >
      {face}
    </div>
  );
}
