"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";

type SplitRevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** "lines" for headings, "words" for short punchy lines. */
  by?: "lines" | "words";
  delay?: number;
  /** Play on mount (hero) instead of on scroll. */
  immediate?: boolean;
  id?: string;
};

/** Masked line/word reveal for display headings. */
export const SplitReveal = ({
  as: Tag = "h2",
  children,
  className,
  by = "lines",
  delay = 0,
  immediate = false,
  id,
}: SplitRevealProps) => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      gsap.set(el, { visibility: "visible" });

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const split = SplitText.create(el, {
          type: by === "lines" ? "lines" : "words,lines",
          mask: by,
          autoSplit: true,
          linesClass: "split-line",
          onSplit: (self) =>
            gsap.from(by === "lines" ? self.lines : self.words, {
              yPercent: 110,
              duration: 1.35,
              ease: "expo.out",
              stagger: by === "lines" ? 0.11 : 0.06,
              delay,
              scrollTrigger: immediate ? undefined : { trigger: el, start: "top 88%", once: true },
            }),
        });
        return () => split.revert();
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} id={id} className={className} data-reveal>
      {children}
    </Tag>
  );
};
