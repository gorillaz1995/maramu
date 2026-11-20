import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Drift } from "@/components/motion/Drift";
import { Img } from "@/components/motion/Img";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

const MEALS = [
  { label: "Mic dejun", price: site.prices.breakfast },
  { label: "Prânz sau cină", price: site.prices.meal },
];

export const Table = () => (
  <section className="relative pb-28 md:pb-40" aria-labelledby="la-masa">
    <div className="container-x grid gap-16 lg:grid-cols-12">
      <div className="relative min-h-[34rem] lg:col-span-7 lg:min-h-[44rem]">
        <ParallaxImage
          photo={photos.tableSpread}
          sizes="(min-width: 1024px) 40vw, 80vw"
          className="aspect-[3/4] w-[78%] rounded-xl lg:w-[64%]"
        />
        <Drift amount={-55} className="absolute right-0 top-[18%] w-[46%] lg:right-[4%] lg:w-[40%]">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <Img photo={photos.food2} sizes="25vw" className="aspect-[3/4] w-full object-cover" />
          </div>
        </Drift>
        <Drift amount={-110} className="absolute bottom-[-6%] left-[30%] w-[34%] lg:w-[28%]">
          <div className="overflow-hidden rounded-lg shadow-2xl ring-4 ring-cream">
            <Img photo={photos.food1} sizes="20vw" className="aspect-square w-full object-cover" />
          </div>
        </Drift>
      </div>

      <div className="flex flex-col justify-center lg:col-span-5">
        <Reveal as="p" className="eyebrow">
          La masă
        </Reveal>
        <SplitReveal id="la-masa" className="display mt-5 text-[clamp(2.6rem,6vw,5rem)] text-forest-deep">
          Gusturile autentice ale Maramureșului
        </SplitReveal>
        <Reveal as="p" className="lead mt-7 max-w-md">
          Preparate tradiționale, gătite cu grijă din ingrediente proaspete de la poalele munților. Ziua o petreceți poate
          pe drumuri, prin sate și la mănăstiri — dar dimineața și seara vă așteaptă masa întinsă la noi.
        </Reveal>

        <Reveal as="dl" stagger={0.1} className="mt-10 grid max-w-md grid-cols-2 gap-3">
          {MEALS.map((meal) => (
            <div key={meal.label} className="rounded-xl bg-paper p-5 ring-1 ring-forest-deep/10">
              <dt className="text-sm text-ink/65">{meal.label}</dt>
              <dd className="display mt-2 text-4xl text-forest-deep">
                {meal.price}
                <span className="ml-1 font-sans text-sm font-semibold tracking-normal text-clay">RON</span>
              </dd>
            </div>
          ))}
        </Reveal>
        <Reveal as="p" className="mt-4 text-xs text-ink/55">
          Prețuri de persoană. Pentru grupuri și evenimente, întreabă-ne de meniuri speciale.
        </Reveal>
      </div>
    </div>
  </section>
);
