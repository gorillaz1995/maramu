"use client";

import { useRef, type ReactNode } from "react";
import { gsap, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";
import type { Photo } from "@/lib/images";
import { Img } from "@/components/motion/Img";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  script?: string;
  photo: Photo;
  children?: ReactNode;
};

export const PageHero = ({ eyebrow, title, script, photo, children }: PageHeroProps) => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".ph-reveal", { visibility: "visible" });
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const split = SplitText.create(".ph-title", { type: "words,lines", mask: "lines" });
        gsap
          .timeline({ defaults: { ease: "expo.out" } })
          .from(".ph-media", { scale: 1.2, duration: 2.2, ease: "power2.out" }, 0)
          .from(".ph-eyebrow", { autoAlpha: 0, y: 12, duration: 1 }, 0.2)
          .from(split.words, { yPercent: 115, duration: 1.4, stagger: 0.07 }, 0.3)
          .from(".ph-script", { clipPath: "inset(0 100% 0 0)", duration: 1.6, ease: "power2.inOut" }, 0.8)
          .from(".ph-body", { autoAlpha: 0, y: 20, duration: 1 }, 1);

        gsap.to(".ph-media", {
          yPercent: 16,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
        });
        return () => split.revert();
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="relative flex min-h-[88svh] items-end overflow-hidden bg-forest-deep text-paper">
      <div className="ph-media absolute inset-0">
        <Img photo={photo} priority className="img-cover absolute inset-0" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/30 to-forest-deep/40" />

      <div className="container-x relative pb-16 pt-40 md:pb-24">
        <p className="ph-eyebrow ph-reveal eyebrow text-gold" data-reveal>
          {eyebrow}
        </p>
        <h1 className="ph-reveal mt-4" data-reveal>
          <span className="ph-title display block text-[clamp(3.2rem,10vw,8.5rem)]">{title}</span>
          {script && (
            <span className="ph-script script mt-1 block pl-[10vw] text-[clamp(2.2rem,6vw,5rem)] text-gold">
              {script}
            </span>
          )}
        </h1>
        {children && (
          <div className="ph-body ph-reveal mt-8 max-w-xl text-lg leading-relaxed text-paper/85" data-reveal>
            {children}
          </div>
        )}
      </div>
    </section>
  );
};
