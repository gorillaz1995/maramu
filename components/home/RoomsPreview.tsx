import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Img } from "@/components/motion/Img";
import { rooms, formatPrice } from "@/lib/content";

export const RoomsPreview = () => (
  <section className="bg-cream-2/60 py-24 md:py-36" aria-labelledby="camere-preview">
    <div className="container-x">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal as="p" className="eyebrow">
            Camere
          </Reveal>
          <SplitReveal id="camere-preview" className="display mt-5 text-[clamp(2.6rem,6vw,5rem)] text-forest-deep">
            Odihnă ca acasă
          </SplitReveal>
        </div>
        <Reveal as="p" className="lead max-w-sm">
          Fiecare cameră are personalitatea ei, baie proprie și balcon. Alegi doar câte paturi îți trebuie.
        </Reveal>
      </div>

      <Reveal
        as="ul"
        stagger={0.12}
        y={60}
        className="-mx-5 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0"
      >
        {rooms.map((room) => (
          <li key={room.slug} className="w-[82%] shrink-0 snap-start md:w-auto">
            <Link href={`/camere#${room.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Img
                  photo={room.cover}
                  sizes="(min-width: 768px) 30vw, 80vw"
                  className="img-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1.5 text-xs font-semibold text-forest-deep backdrop-blur">
                  {room.price ? `${formatPrice(room.price)} / noapte` : formatPrice(null)}
                </span>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="display text-3xl text-forest-deep">{room.name}</h3>
                <span aria-hidden className="text-clay transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </div>
              <p className="mt-1 text-sm text-ink/65">{room.tagline}</p>
            </Link>
          </li>
        ))}
      </Reveal>
    </div>
  </section>
);
