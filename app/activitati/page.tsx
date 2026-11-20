import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Drift } from "@/components/motion/Drift";
import { Img } from "@/components/motion/Img";
import { activities, attractions } from "@/lib/content";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Activități",
  description:
    "Restaurant și sală de evenimente, ședințe foto în costume tradiționale moroșene, formații live, foc de tabără și obiective turistice din Maramureș.",
};

const SEASON_LABEL = { vara: "Vara", iarna: "Iarna", "tot anul": "Tot anul" } as const;

export default function ActivitatiPage() {
  return (
    <>
      <PageHero eyebrow="Activități" title="Aici nu te" script="plictisești" photo={photos.bonfire}>
        Petreceri, port popular, muzică live și seri la foc. Iar ziua, tot Maramureșul de descoperit.
      </PageHero>

      <div className="space-y-28 py-24 md:space-y-44 md:py-36">
        {activities.map((activity, index) => {
          const [main, inset] = activity.photos;
          const flip = index % 2 === 1;
          return (
            <section key={activity.id} id={activity.id} className="scroll-mt-24" aria-labelledby={`${activity.id}-title`}>
              <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                <div className={`relative lg:col-span-6 ${flip ? "lg:order-2 lg:col-start-7" : ""}`}>
                  <ParallaxImage
                    photo={main}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="aspect-[4/5] rounded-xl"
                  />
                  {inset && (
                    <Drift
                      amount={-60}
                      className={`absolute -bottom-10 w-[44%] ${flip ? "-left-4 md:-left-12" : "-right-4 md:-right-12"}`}
                    >
                      <div className="overflow-hidden rounded-lg shadow-2xl ring-4 ring-cream">
                        <Img photo={inset} sizes="22vw" className="aspect-[3/4] w-full object-cover" />
                      </div>
                    </Drift>
                  )}
                </div>
                <div className={`lg:col-span-5 ${flip ? "lg:order-1" : "lg:col-start-8"}`}>
                  <Reveal as="p" className="eyebrow">
                    {activity.eyebrow}
                  </Reveal>
                  <SplitReveal
                    id={`${activity.id}-title`}
                    className="display mt-4 text-[clamp(2.4rem,5vw,4.25rem)] text-forest-deep"
                  >
                    {activity.title}
                  </SplitReveal>
                  <Reveal as="p" className="lead mt-6">
                    {activity.text}
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section id="obiective" className="scroll-mt-20 bg-forest-deep py-24 text-paper md:py-36" aria-labelledby="obiective-title">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal as="p" className="eyebrow text-gold">
              Prin împrejurimi
            </Reveal>
            <SplitReveal id="obiective-title" className="display mt-4 text-[clamp(2.6rem,6vw,5rem)]">
              Obiective turistice
            </SplitReveal>
            <Reveal as="p" className="mt-6 text-paper/70">
              Distanțe aproximative pe drum, de la pensiune. Te ajutăm cu trasee și recomandări la fața locului.
            </Reveal>
          </div>

          <Reveal as="ul" stagger={0.08} y={50} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {attractions.map((place) => (
              <li key={place.name}>
                <a
                  href={place.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[3/4] overflow-hidden rounded-xl"
                >
                  <Img
                    photo={place.photo}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="img-cover absolute inset-0 transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-xs font-semibold text-forest-deep">
                    {SEASON_LABEL[place.season]} · {place.distance}
                  </span>
                  <div className="absolute inset-x-5 bottom-5">
                    <h3 className="display text-3xl">{place.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/80">{place.text}</p>
                    <p className="mt-3 text-sm font-semibold text-gold">
                      Site oficial <span aria-hidden>↗</span>
                      <span className="sr-only">(se deschide într-o filă nouă)</span>
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
