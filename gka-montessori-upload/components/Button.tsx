import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  /** When set, renders a Next.js <Link>; otherwise a <button>. */
  href?: string;
  variant?: "solid" | "outline" | "inverted";
  size?: "sm" | "md";
  /** Set true when the button sits on a dark band (navy / brand-dark) — affects the outline variant + focus ring. */
  onDark?: boolean;
  /** Adds a slow, soft breathing glow — reserve for the primary "Book a Tour" CTA. */
  pulse?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  children: ReactNode;
};

const SIZES = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-7 py-3.5 text-sm",
} as const;

export default function Button({
  href,
  variant = "solid",
  size = "md",
  onDark = false,
  pulse = false,
  type = "button",
  disabled = false,
  className = "",
  children,
}: ButtonProps) {
  const variants = {
    solid:
      "bg-brand text-navy hover:bg-brand-dark hover:text-white focus-visible:outline-brand-dark",
    inverted:
      "bg-background text-navy hover:bg-brand hover:text-navy focus-visible:outline-background",
    outline: onDark
      ? "border-2 border-background/90 text-background hover:bg-background hover:text-navy focus-visible:outline-background"
      : "border-2 border-navy text-navy hover:bg-navy hover:text-background focus-visible:outline-navy",
  } as const;

  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-widest",
    "transition duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    SIZES[size],
    variants[variant],
    pulse && !disabled ? "cta-breathe" : "",
    disabled ? "pointer-events-none opacity-60" : "",
    className,
  ].join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
