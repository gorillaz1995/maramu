"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";
import { useSeason } from "@/components/providers/SeasonProvider";
import { seasons } from "@/lib/content";
import { Img } from "@/components/motion/Img";

const LINES = ["În natură.", "La masă.", "În camerele noastre.", "La noi."];

export const Hero = () => {
  const root = useRef<HTMLElement>(null);
  const { season } = useSeason();

  useGSAP(
    () => {
      gsap.set(".hero-reveal", { visibility: "visible" });
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        const title = SplitText.create(".hero-title", { type: "words,lines", mask: "lines" });
        const intro = gsap.timeline({ defaults: { ease: "expo.out" }, delay: 0.15 });
        intro
          .from(".hero-media", { scale: 1.25, duration: 2.6, ease: "power2.out" }, 0)
          .from(".hero-shade", { opacity: 0, duration: 1.4 }, 0)
          .from(title.words, { yPercent: 115, duration: 1.5, stagger: 0.08 }, 0.35)
          .from(".hero-script", { clipPath: "inset(0 100% 0 0)", duration: 1.8, ease: "power2.inOut" }, 0.9)
          .from(".hero-line", { autoAlpha: 0, x: -14, duration: 1, stagger: 0.12 }, 1.2)
          .from(".hero-inset", { autoAlpha: 0, y: 60, rotate: 4, duration: 1.6 }, 1)
          .from(".hero-cue", { autoAlpha: 0, duration: 1 }, 1.8);

        // Content lifts away and media settles as you leave the hero.
        gsap
          .timeline({
            scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
          })
          .to(".hero-content", { yPercent: -28, autoAlpha: 0.1, ease: "none" }, 0)
          .to(".hero-parallax", { yPercent: 18, ease: "none" }, 0)
          .to(".hero-inset", { yPercent: -40, ease: "none" }, 0);

        return () => title.revert();
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative h-[100svh] min-h-[38rem] overflow-hidden bg-forest-deep text-paper"
      aria-label="Bun venit"
    >
      <div className="hero-parallax absolute inset-0">
        <div className="hero-media absolute inset-0">
          {/* Mobile: the vertical winter video of the house */}
          <video
            className="img-cover absolute inset-0 lg:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/media/hero-mobile-poster.jpg"
            aria-hidden
          >
            <source src="/media/hero-mobile.mp4" type="video/mp4" />
          </video>

          {/* Desktop: the house, following the selected season */}
          <div className="absolute inset-0 hidden lg:block">
            {(Object.keys(seasons) as (keyof typeof seasons)[]).map((key) => (
              <Img
                key={key}
                photo={seasons[key].house}
                priority={key === "vara"}
                className={`img-cover absolute inset-0 transition-opacity duration-[1400ms] ${
                  season === key ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hero-shade pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(1,30,20,0.72)_0%,rgba(1,30,20,0.45)_45%,rgba(1,30,20,0.12)_75%,transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-forest-deep/55 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-forest-deep/60 to-transparent" />

      <div className="hero-content container-x relative flex h-full flex-col justify-center pt-[var(--header-h)]">
        <h1 className="hero-reveal" data-reveal>
          <span className="hero-title display block text-[clamp(3.1rem,11vw,9.5rem)] leading-[0.92]">
            Te așteptăm
            <br />
            cu drag,
          </span>
          <span className="hero-script script mt-2 block pl-[4vw] text-[clamp(2.1rem,7vw,6rem)] text-gold md:pl-[14vw]">
            în inima Maramureșului.
          </span>
        </h1>

        <ul className="mt-10 ml-auto mr-[2vw] space-y-1.5 text-lg font-medium md:mr-[14vw] md:text-xl lg:mr-[30vw]" aria-label="Unde ne găsești">
          {LINES.map((line) => (
            <li key={line} className="hero-line hero-reveal" data-reveal>
              {line}
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop collage: the real winter video as a framed card */}
      <div className="hero-inset hero-reveal absolute bottom-[10vh] right-[4vw] hidden w-[15vw] min-w-48 max-w-64 overflow-hidden rounded-xl shadow-2xl ring-1 ring-paper/20 lg:block" data-reveal>
        <video
          className="aspect-[9/16] w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/media/hero-mobile-poster.jpg"
          aria-hidden
        >
          <source src="/media/hero-mobile.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-cue hero-reveal absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.7rem] uppercase tracking-[0.25em] text-paper/70" data-reveal>
        Descoperă
        <span className="block h-10 w-px origin-top animate-pulse bg-paper/60" />
      </div>
    </section>
  );
};
