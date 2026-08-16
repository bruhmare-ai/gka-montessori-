import type { CSSProperties } from "react";

/** A small single leaf, used only as an ambient drifting accent. */
function Leaf({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`gka-leaf absolute ${className}`}
      style={style}
    >
      <path d="M12 2C6 6 3.5 14 12 22c8.5-8 6-16 0-20Z" opacity="0.9" />
      <path d="M12 4v16" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
    </svg>
  );
}

/**
 * Ambient leaves that drift slowly over the hero — a calm, nature-forward
 * touch for a Montessori school. Decorative only; CSS stops all motion under
 * prefers-reduced-motion.
 */
export default function FloatingLeaves({ className = "" }: { className?: string }) {
  const leaves: { style: CSSProperties; cls: string }[] = [
    { cls: "left-[8%] top-[22%] h-6 w-6 text-lime/25", style: { ["--r"]: "-18deg", ["--dur"]: "13s", ["--delay"]: "0s" } as CSSProperties },
    { cls: "left-[24%] top-[68%] h-4 w-4 text-white/20", style: { ["--r"]: "24deg", ["--dur"]: "17s", ["--delay"]: "-4s" } as CSSProperties },
    { cls: "right-[14%] top-[30%] h-7 w-7 text-brand/25", style: { ["--r"]: "12deg", ["--dur"]: "15s", ["--delay"]: "-8s" } as CSSProperties },
    { cls: "right-[26%] top-[74%] h-5 w-5 text-lime/20", style: { ["--r"]: "-30deg", ["--dur"]: "19s", ["--delay"]: "-2s" } as CSSProperties },
    { cls: "left-[52%] top-[14%] h-4 w-4 text-white/15", style: { ["--r"]: "8deg", ["--dur"]: "21s", ["--delay"]: "-11s" } as CSSProperties },
  ];
  return (
    <div aria-hidden="true" className={`pointer-events-none overflow-hidden ${className}`}>
      {leaves.map((l, i) => (
        <Leaf key={i} className={l.cls} style={l.style} />
      ))}
    </div>
  );
}
