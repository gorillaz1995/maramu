"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

type DriftProps = {
  children: ReactNode;
  className?: string;
  /** yPercent travelled across the viewport. Negative = moves up faster than the page. */
  amount?: number;
  /** Horizontal travel in percent, for marquee-like lines. */
  x?: number;
};

/** Scroll-scrubbed offset: gives collage layers their own depth. */
export const Drift = ({ children, className, amount = -30, x = 0 }: DriftProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          el,
          { yPercent: -amount / 2, xPercent: -x / 2 },
          {
            yPercent: amount / 2,
            xPercent: x / 2,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
          },
        );
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
