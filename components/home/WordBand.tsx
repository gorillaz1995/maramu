"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

type WordBandProps = {
  top: string;
  bottom: string;
  className?: string;
};

/** Two oversized lines sliding in opposite directions as the band crosses the viewport. */
export const WordBand = ({ top, bottom, className = "" }: WordBandProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const scrollTrigger = { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.8 };
        gsap.fromTo(".band-top", { xPercent: 8 }, { xPercent: -22, ease: "none", scrollTrigger });
        gsap.fromTo(".band-bottom", { xPercent: -26 }, { xPercent: 4, ease: "none", scrollTrigger });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={`overflow-hidden py-16 md:py-24 ${className}`} aria-hidden>
      <p className="band-top display whitespace-nowrap text-[clamp(4rem,14vw,13rem)] text-forest-deep">{top}</p>
      <p className="band-bottom script -mt-[0.1em] whitespace-nowrap pl-[20vw] text-[clamp(3.5rem,12vw,11rem)] text-clay">
        {bottom}
      </p>
    </div>
  );
};
