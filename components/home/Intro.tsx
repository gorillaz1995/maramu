import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Drift } from "@/components/motion/Drift";
import { Img } from "@/components/motion/Img";
import { photos } from "@/lib/images";

const FACTS = [
  "Baie proprie și balcon în fiecare cameră",
  "Restaurant cu bucate tradiționale",
  "Horincă și pălincă de casă",
  "Formații live și foc de tabără",
];

export const Intro = () => (
  <section className="relative overflow-hidden py-24 md:py-36">
    <div className="container-x grid items-center gap-16 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <Reveal as="p" className="eyebrow">
          Pensiune de familie · Sighetu Marmației
        </Reveal>
        <SplitReveal className="display mt-5 text-[clamp(2.6rem,6vw,5rem)] text-forest-deep">
          Un refugiu în mijlocul naturii.
        </SplitReveal>
        <Reveal className="lead mt-7 max-w-lg space-y-4">
          <p>
            Dincolo de apă, la marginea Sighetului, e casa noastră. O pensiune de familie unde timpul curge mai încet:
            dimineți cu cafea pe balcon, prânzuri gătite ca la bunica și seri care se lungesc la foc, cu muzică și povești.
          </p>
          <p>
            <strong className="font-semibold text-forest-deep">Liniște, bucate alese și voie bună</strong> — pentru familii cu
            copii, prieteni în drumeție sau oricine are nevoie de o pauză adevărată.
          </p>
        </Reveal>
        <Reveal as="ul" stagger={0.08} className="mt-9 grid gap-x-6 gap-y-3 text-[0.95rem] sm:grid-cols-2">
          {FACTS.map((fact) => (
            <li key={fact} className="flex gap-3 border-t border-forest-deep/15 pt-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {fact}
            </li>
          ))}
        </Reveal>
        <Reveal className="mt-10">
          <Link href="/camere" className="btn btn-clay">
            Descoperă camerele
          </Link>
        </Reveal>
      </div>

      <div className="relative lg:col-span-6 lg:col-start-7">
        <ParallaxImage
          photo={photos.houseSummer}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="aspect-[4/5] rounded-xl md:aspect-[5/6]"
        />
        <Drift amount={-60} className="absolute -bottom-12 -left-6 w-[46%] md:-left-16">
          <div className="overflow-hidden rounded-lg shadow-2xl ring-4 ring-cream">
            <Img photo={photos.woodenGate} sizes="25vw" className="aspect-[4/5] w-full object-cover" />
          </div>
        </Drift>
        <Drift amount={30} className="absolute -top-12 right-2 md:right-6">
          <p className="script rotate-[-6deg] whitespace-nowrap text-5xl text-clay md:text-6xl">bine ați venit</p>
        </Drift>
      </div>
    </div>
  </section>
);
