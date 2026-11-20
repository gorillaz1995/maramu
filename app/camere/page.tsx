import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Gallery } from "@/components/Gallery";
import { rooms, roomFacilities, roomGallery, formatPrice } from "@/lib/content";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Camere",
  description:
    "Camere single, duble și triple cu baie proprie și balcon privat, în Sighetu Marmației. Cameră dublă 180 RON, single 150 RON.",
};

export default function CamerePage() {
  return (
    <>
      <PageHero eyebrow="Camere" title="Odihnă" script="ca acasă" photo={photos.roomDouble3}>
        Camere create cu drag, fiecare cu personalitatea ei și cu tot confortul de care ai nevoie pentru o ședere
        liniștită.
      </PageHero>

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal as="p" className="eyebrow">
              În fiecare cameră
            </Reveal>
            <SplitReveal className="display mt-5 text-[clamp(2.4rem,5vw,4.25rem)] text-forest-deep">
              Confortul tău e prioritatea noastră
            </SplitReveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal as="p" className="lead">
              Fiecare baie are apă caldă la temperatura potrivită și presiune bună, prosoape curate, produse de igienă și
              tot ce-ți trebuie. Tu doar te bucuri de ședere.
            </Reveal>
            <Reveal as="ul" stagger={0.07} className="mt-8 divide-y divide-forest-deep/12 border-y border-forest-deep/12">
              {roomFacilities.map((item) => (
                <li key={item} className="flex items-center gap-4 py-4 text-[1.05rem]">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <div className="space-y-28 pb-28 md:space-y-40 md:pb-40">
        {rooms.map((room, index) => (
          <section key={room.slug} id={room.slug} className="scroll-mt-24" aria-labelledby={`${room.slug}-title`}>
            <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className={`lg:col-span-7 ${index % 2 ? "lg:order-2 lg:col-start-6" : ""}`}>
                <ParallaxImage photo={room.cover} sizes="(min-width: 1024px) 58vw, 100vw" className="aspect-[4/3] rounded-xl" />
              </div>
              <div className={`lg:col-span-4 ${index % 2 ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`}>
                <Reveal as="p" className="eyebrow">
                  {room.tagline}
                </Reveal>
                <SplitReveal
                  id={`${room.slug}-title`}
                  className="display mt-4 text-[clamp(2.4rem,5vw,4rem)] text-forest-deep"
                >
                  {room.name}
                </SplitReveal>
                <Reveal as="p" className="lead mt-5">
                  {room.summary}
                </Reveal>
                <Reveal className="mt-8 flex flex-wrap items-center gap-5">
                  <p className="display text-4xl text-forest-deep">
                    {room.price ?? "La cerere"}
                    {room.price && (
                      <span className="ml-1 font-sans text-sm font-semibold tracking-normal text-clay">RON / noapte</span>
                    )}
                  </p>
                  <Link href={`/contact?camera=${room.slug}#rezervare`} className="btn btn-clay">
                    Rezervă
                  </Link>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-forest-deep py-24 text-paper md:py-32" aria-labelledby="galerie">
        <div className="container-x">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal as="p" className="eyebrow text-gold">
                Galerie
              </Reveal>
              <SplitReveal id="galerie" className="display mt-4 text-[clamp(2.4rem,5vw,4.25rem)]">
                Privește înăuntru
              </SplitReveal>
            </div>
            <Reveal as="p" className="max-w-sm text-paper/70">
              {roomGallery.length} fotografii din camerele noastre. Apasă pe oricare pentru a o mări.
            </Reveal>
          </div>
          <Gallery photos={roomGallery} label="Galerie foto camere" />
        </div>
      </section>

      <section className="py-24 text-center md:py-32">
        <div className="container-x">
          <SplitReveal className="display mx-auto max-w-3xl text-[clamp(2.4rem,5vw,4.5rem)] text-forest-deep">
            O experiență autentică în inima Maramureșului
          </SplitReveal>
          <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/contact#rezervare" className="btn btn-clay">
              Rezervă acum
            </Link>
            <p className="w-full pt-3 text-sm text-ink/60">
              {rooms.map((room) => `${room.name}: ${formatPrice(room.price)}`).join(" · ")}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
