"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { photos, type Photo } from "@/lib/images";
import { Img } from "@/components/motion/Img";

type Slide = { photo: Photo; title: string; note: string };

const SLIDES: Slide[] = [
  { photo: photos.churchGate, title: "Biserici de lemn", note: "Patrimoniu UNESCO, la câțiva kilometri" },
  { photo: photos.sapanta, title: "Săpânța", note: "Cimitirul Vesel · ≈ 18 km" },
  { photo: photos.mocanitaTrain, title: "Mocănița", note: "Valea Vaserului · ≈ 65 km" },
  { photo: photos.barsana, title: "Bârsana", note: "Mănăstirea de lemn · ≈ 20 km" },
  { photo: photos.houseWell, title: "Muzeul Satului", note: "Sighetu Marmației · ≈ 4 km" },
  { photo: photos.frostedRoad, title: "Iarna pe dealuri", note: "Cavnic și Borșa pentru schi" },
];

/** Desktop: the strip is pinned and scrolls sideways. Mobile: native swipe. */
export const Region = () => {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`(min-width: 1024px) and ${MOTION_OK}`, () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth + 80;
        gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
        gsap.utils.toArray<HTMLElement>(".region-img").forEach((img) => {
          gsap.fromTo(
            img,
            { xPercent: -8 },
            {
              xPercent: 8,
              ease: "none",
              scrollTrigger: { trigger: section.current, start: "top top", end: () => `+=${distance()}`, scrub: true },
            },
          );
        });
      });
    },
    { scope: section },
  );

  return (
    <section ref={section} className="relative overflow-hidden bg-forest-deep text-paper" aria-labelledby="maramures">
      <div className="flex min-h-[100svh] flex-col justify-center py-20 lg:py-0">
        <div className="container-x mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-gold">Maramureșul, la un pas</p>
            <h2 id="maramures" className="display mt-4 text-[clamp(2.6rem,6vw,5rem)]">
              Unde timpul merge la pas
            </h2>
          </div>
          <Link href="/activitati#obiective" className="btn btn-outline self-start text-paper lg:self-auto">
            Obiective turistice
          </Link>
        </div>

        <ul
          ref={track}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:px-10 lg:snap-none lg:gap-6 lg:overflow-visible"
        >
          {SLIDES.map((slide) => (
            <li key={slide.title} className="w-[78vw] shrink-0 snap-start sm:w-[50vw] lg:w-[min(28vw,calc((100svh-15rem)*0.75))]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Img photo={slide.photo} sizes="(min-width: 1024px) 30vw, 80vw" className="region-img img-cover absolute inset-0 scale-[1.18]" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <p className="display text-3xl">{slide.title}</p>
                  <p className="mt-1 text-sm text-paper/75">{slide.note}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
