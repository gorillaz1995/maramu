"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import type { Photo } from "@/lib/images";
import { Img } from "./Img";

type ParallaxImageProps = {
  photo: Photo;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  /** Percent of travel. Positive moves image slower than the page. */
  speed?: number;
  /** Clip-path reveal when the frame enters. */
  reveal?: boolean;
  priority?: boolean;
};

/** Image inside a clipping frame that drifts on scroll and slowly settles its zoom. */
export const ParallaxImage = ({
  photo,
  className = "",
  imgClassName = "",
  sizes,
  speed = 12,
  reveal = true,
  priority,
}: ParallaxImageProps) => {
  const frame = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = frame.current;
      const img = el?.querySelector("img");
      if (!el || !img) return;

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          img,
          { yPercent: -speed / 2, scale: 1.18 },
          {
            yPercent: speed / 2,
            scale: 1.06,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
        if (reveal) {
          gsap.from(el, {
            clipPath: "inset(18% 8% 18% 8% round 0.75rem)",
            duration: 1.6,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        }
      });
    },
    { scope: frame },
  );

  return (
    <div
      ref={frame}
      className={`relative overflow-hidden ${className}`}
      style={{ clipPath: "inset(0% 0% 0% 0% round 0rem)" }}
    >
      <Img
        photo={photo}
        sizes={sizes}
        priority={priority}
        className={`img-cover absolute inset-0 will-change-transform ${imgClassName}`}
      />
    </div>
  );
};
