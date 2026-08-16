"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Element to render — defaults to a div. */
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms (use index * n inside a grid). */
  delay?: number;
  style?: CSSProperties;
};

/**
 * Gently rises its children into view once, on scroll. The hidden start
 * state only applies when JS is present (html.gka-js) and reduced-motion
 * is off, so the content is always readable without JS or animation.
 */
export default function Reveal({
  children,
  as,
  className = "",
  delay = 0,
  style,
}: RevealProps) {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
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
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`.trim()}
      style={
        delay
          ? ({ ["--reveal-delay"]: `${delay}ms`, ...style } as CSSProperties)
          : style
      }
    >
      {children}
    </Tag>
  );
}
