type SectionHeadingProps = {
  title: string;
  /** All-caps letterspaced label above the heading. */
  eyebrow?: string;
  /** Optional intro paragraph below the heading. */
  intro?: string;
  align?: "center" | "left";
  /** Heading level — one h1 per page; defaults to h2. */
  as?: "h1" | "h2" | "h3";
  /** Set true on dark bands (navy / brand-dark) for light text + lime eyebrow. */
  onDark?: boolean;
  className?: string;
};

export default function SectionHeading({
  title,
  eyebrow,
  intro,
  align = "center",
  as: Tag = "h2",
  onDark = false,
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`text-sm font-bold uppercase tracking-widest ${
            onDark ? "text-lime" : "text-brand-dark"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={`${eyebrow ? "mt-3" : ""} font-display text-3xl leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl ${
          onDark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={`mt-4 text-base sm:text-lg ${
            onDark ? "text-white/80" : "text-navy/75"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
