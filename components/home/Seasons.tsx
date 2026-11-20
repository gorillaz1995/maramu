"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { useSeason } from "@/components/providers/SeasonProvider";
import { seasons, type Season } from "@/lib/content";
import { Img } from "@/components/motion/Img";
import { Drift } from "@/components/motion/Drift";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

const KEYS = Object.keys(seasons) as Season[];

export const Seasons = () => {
  const { season, setSeason } = useSeason();
  const copy = useRef<HTMLDivElement>(null);
  const current = seasons[season];

  // Soft swap of the season copy whenever the toggle (here or in the booking bar) changes.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          ".season-swap",
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.06, ease: "expo.out" },
        );
      });
    },
    { scope: copy, dependencies: [season] },
  );

  return (
    <section className="relative overflow-hidden bg-forest-deep py-24 text-paper md:py-36" aria-labelledby="anotimpuri">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12">
        <div className="relative order-2 lg:order-1 lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            {KEYS.map((key) => (
              <Img
                key={key}
                photo={seasons[key].portrait}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className={`img-cover absolute inset-0 transition-[opacity,transform] duration-[1400ms] ease-[var(--ease-out-expo)] ${
                  season === key ? "scale-100 opacity-100" : "scale-110 opacity-0"
                }`}
              />
            ))}
          </div>
          <Drift amount={-70} className="absolute -right-4 bottom-10 w-[42%] md:-right-12">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-2xl ring-4 ring-forest-deep">
              {KEYS.map((key) => (
                <Img
                  key={key}
                  photo={seasons[key].inset}
                  sizes="20vw"
                  className={`img-cover absolute inset-0 transition-opacity duration-1000 ${
                    season === key ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </Drift>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
          <Reveal as="p" className="eyebrow text-gold">
            Anotimpuri
          </Reveal>
          <SplitReveal id="anotimpuri" className="display mt-5 text-[clamp(2.6rem,6vw,5rem)]">
            Refugiul tău în orice anotimp
          </SplitReveal>
          <Reveal as="p" className="lead mt-7 max-w-md !text-paper/75">
            Timpul trece, dar frumusețea rămâne. Verdele crud al primăverii sau albul pur al iernii te vor fermeca
            indiferent când vii.
          </Reveal>

          <Reveal className="mt-10">
            <div role="tablist" aria-label="Alege anotimpul" className="inline-flex rounded-xl bg-paper/10 p-1">
              {KEYS.map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={season === key}
                  onClick={() => setSeason(key)}
                  className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                    season === key ? "bg-gold text-forest-deep" : "text-paper/70 hover:text-paper"
                  }`}
                >
                  {seasons[key].label}
                </button>
              ))}
            </div>

            <div ref={copy} className="mt-8 min-h-[16rem]" aria-live="polite">
              <h3 className="season-swap script text-5xl text-gold md:text-6xl">{current.title}</h3>
              <p className="season-swap mt-4 max-w-md leading-relaxed text-paper/80">{current.text}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {current.list.map((item) => (
                  <li key={item} className="season-swap flex items-center gap-3 text-sm text-paper/85">
                    <span className="h-px w-5 bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
