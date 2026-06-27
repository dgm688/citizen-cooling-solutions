"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

// Lightweight scroll-reveal: IntersectionObserver toggles `data-shown`, and the
// fade-up transition + reduced-motion handling live in CSS (see globals.css).
// No animation library — this keeps the client bundle small. Content remains
// visible when JS is disabled (the hidden state is gated behind the `.js` class).
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 16,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      data-shown={shown || undefined}
      style={
        { "--reveal-delay": `${delay}s`, "--reveal-y": `${y}px` } as CSSProperties
      }
      className={className}
    >
      {children}
    </div>
  );
}
