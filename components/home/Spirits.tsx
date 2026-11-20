"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

/** Gold panel: the two dressed bottles of horincă sway apart as you scroll. */
export const Spirits = () => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const scrollTrigger = { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 1 };
        gsap.fromTo(".bottle-left", { yPercent: 20, rotate: 2 }, { yPercent: -16, rotate: -9, ease: "none", scrollTrigger });
        gsap.fromTo(".bottle-right", { yPercent: 34, rotate: -2 }, { yPercent: -26, rotate: 10, ease: "none", scrollTrigger });
        gsap.fromTo(".spirits-glow", { scale: 0.7, opacity: 0.4 }, { scale: 1.2, opacity: 0.9, ease: "none", scrollTrigger });
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="relative overflow-hidden bg-gold py-24 text-forest-deep md:py-32" aria-labelledby="tarie">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto flex h-[22rem] w-full max-w-md items-end justify-center md:h-[30rem]">
          <div className="spirits-glow absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(255,248,220,0.85),transparent_70%)]" />
          <Image
            src="/sticla3.webp"
            alt="Sticlă de horincă îmbrăcată în costum popular femeiesc"
            width={333}
            height={441}
            className="bottle-left relative -mr-8 w-[48%] drop-shadow-[0_30px_30px_rgba(1,50,32,0.35)]"
          />
          <Image
            src="/sticla2.webp"
            alt="Sticlă de horincă îmbrăcată în costum popular bărbătesc"
            width={333}
            height={441}
            className="bottle-right relative -ml-8 mb-10 w-[48%] drop-shadow-[0_30px_30px_rgba(1,50,32,0.35)]"
          />
        </div>

        <div>
          <Reveal as="p" className="eyebrow !text-forest-deep/70">
            Horincă & pălincă
          </Reveal>
          <SplitReveal id="tarie" className="display mt-5 text-[clamp(2.8rem,7vw,6rem)]">
            Tărie de la Maramu&apos;
          </SplitReveal>
          <Reveal as="p" className="mt-7 max-w-md text-lg leading-relaxed text-forest-deep/85">
            Băuturile noastre emblematice — horinca și pălinca — sunt distilate cu grijă și poartă arome autentice,
            recunoscute în toată lumea. Sticlele îmbrăcate în port popular adaugă un farmec aparte fiecărei picături.
          </Reveal>
          <Reveal as="p" className="script mt-8 text-4xl md:text-5xl">
            Noroc și sănătate!
          </Reveal>
        </div>
      </div>
    </section>
  );
};
