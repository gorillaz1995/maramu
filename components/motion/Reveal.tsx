"use client";

import { useRef, type ElementType, type ReactNode, type ComponentPropsWithoutRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  /** Animate direct children one after another instead of the wrapper. */
  stagger?: number;
  delay?: number;
  y?: number;
  start?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

export const Reveal = <T extends ElementType = "div">({
  as,
  children,
  stagger,
  delay = 0,
  y = 36,
  start = "top 85%",
  ...rest
}: RevealProps<T>) => {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets = stagger ? Array.from(el.children) : [el];
      gsap.set(el, { visibility: "visible" });

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(targets, {
          y,
          autoAlpha: 0,
          duration: 1.1,
          ease: "expo.out",
          delay,
          stagger: stagger ?? 0,
          scrollTrigger: { trigger: el, start, once: true },
        });
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} data-reveal {...rest}>
      {children}
    </Tag>
  );
};
