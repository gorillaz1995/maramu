"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Reveal } from "@/components/motion/Reveal";
import { CopyPhone } from "@/components/CopyPhone";
import { site } from "@/lib/site";

/** Closing scene: the starry night timelapse over the valley. */
export const StayCTA = () => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          ".night-media",
          { scale: 1.2, yPercent: -10 },
          {
            scale: 1,
            yPercent: 10,
            ease: "none",
            scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      data-hide-booking
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest-deep text-center text-paper"
      aria-labelledby="vino"
    >
      <video
        className="night-media img-cover absolute inset-0"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/media/night-poster.jpg"
        aria-hidden
      >
        <source src="/media/night.mp4" type="video/mp4" />
        <source src="/media/night.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-forest-deep/45" />

      <div className="container-x relative">
        <SplitReveal id="vino" by="words" className="display text-[clamp(3rem,9vw,8rem)]">
          Vino să stai la noi,
        </SplitReveal>
        <Reveal as="p" delay={0.3} className="script mt-1 text-[clamp(2.6rem,7vw,6rem)] text-gold">
          la Răzvan.
        </Reveal>
        <Reveal as="ul" stagger={0.1} className="mt-12 space-y-3 text-lg font-medium md:text-xl">
          <li>
            <Link href="/contact#rezervare" className="link-underline">
              Rezervă o cameră.
            </Link>
          </li>
          <li>
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
              Vezi drumul până la noi.
            </a>
          </li>
          <li>
            <CopyPhone className="link-underline">Sună-ne.</CopyPhone>
          </li>
        </Reveal>
      </div>
    </section>
  );
};
