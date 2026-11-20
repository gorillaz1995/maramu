import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Drift } from "@/components/motion/Drift";
import { Img } from "@/components/motion/Img";
import { activities } from "@/lib/content";

// Offsets give the grid a loose, hand-placed collage rhythm on desktop.
const LAYOUT = [
  { className: "md:col-span-5", ratio: "aspect-[4/3]", drift: -20 },
  { className: "md:col-span-4 md:col-start-8 md:mt-40", ratio: "aspect-[3/4]", drift: -50 },
  { className: "md:col-span-4 md:col-start-2 md:-mt-10", ratio: "aspect-[3/4]", drift: -35 },
  { className: "md:col-span-5 md:col-start-7 md:mt-24", ratio: "aspect-[4/5]", drift: -60 },
];

export const Moments = () => (
  <section className="py-24 md:py-36" aria-labelledby="momente">
    <div className="container-x">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal as="p" className="eyebrow">
          Activități
        </Reveal>
        <SplitReveal id="momente" className="display mt-5 text-[clamp(2.6rem,6vw,5rem)] text-forest-deep">
          Aici nu te plictisești
        </SplitReveal>
        <Reveal as="p" className="lead mx-auto mt-6 max-w-xl">
          Petreceri în sala noastră, ședințe foto în port popular, formații live și seri lungi la foc de tabără.
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-14 md:grid-cols-12 md:gap-x-6 md:gap-y-0">
        {activities.map((activity, index) => {
          const layout = LAYOUT[index];
          return (
            <li key={activity.id} className={layout.className}>
              <Drift amount={layout.drift}>
                <Link href={`/activitati#${activity.id}`} className="group block">
                  <div className={`overflow-hidden rounded-xl ${layout.ratio}`}>
                    <Img
                      photo={activity.photos[0]}
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="img-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
                    />
                  </div>
                  <p className="eyebrow mt-5">{activity.eyebrow}</p>
                  <h3 className="display mt-2 text-3xl text-forest-deep md:text-4xl">{activity.title}</h3>
                </Link>
              </Drift>
            </li>
          );
        })}
      </ul>

      <Reveal className="mt-20 text-center">
        <Link href="/activitati" className="btn btn-clay">
          Toate activitățile
        </Link>
      </Reveal>
    </div>
  </section>
);
