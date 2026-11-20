import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { BookingForm } from "@/components/BookingForm";
import { MapEmbed } from "@/components/MapEmbed";
import { CopyPhone } from "@/components/CopyPhone";
import { photos } from "@/lib/images";
import { site, mailHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & rezervări",
  description: `Rezervă o cameră la ${site.name}: ${site.phone}, ${site.email}. ${site.address.street}, ${site.address.city}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact & rezervări" title="Vrei să ne" script="vizitezi?" photo={photos.houseWinter}>
        Sună-ne sau lasă-ne un mesaj. Îți răspundem repede și te ajutăm să alegi camera potrivită.
      </PageHero>

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <Reveal className="space-y-10 lg:col-span-4">
            <div>
              <p className="eyebrow mb-3">Telefon</p>
              <CopyPhone className="display text-4xl text-forest-deep hover:text-clay">{site.phone}</CopyPhone>
            </div>
            <div>
              <p className="eyebrow mb-3">E-mail</p>
              <a href={mailHref} className="link-underline text-lg text-forest-deep">
                {site.email}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-3">Adresă</p>
              <p className="text-lg text-forest-deep">
                {site.address.street}
                <br />
                {site.address.city} {site.address.postalCode}
                <br />
                Jud. {site.address.county}
              </p>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-5">
                Deschide în Google Maps
              </a>
            </div>
            <div>
              <p className="eyebrow mb-3">Restaurant</p>
              <p className="text-forest-deep">
                Mic dejun {site.prices.breakfast} RON · Prânz sau cină {site.prices.meal} RON
              </p>
            </div>
          </Reveal>

          <div id="rezervare" className="scroll-mt-28 lg:col-span-7 lg:col-start-6">
            <Reveal as="h2" className="display text-[clamp(2.4rem,5vw,4rem)] text-forest-deep">
              Cerere de rezervare
            </Reveal>
            <Reveal as="p" className="lead mt-4 max-w-lg">
              Completează datele și îți confirmăm disponibilitatea. Cererea nu este o rezervare fermă până nu o confirmăm noi.
            </Reveal>
            <Suspense>
              <BookingForm />
            </Suspense>
          </div>
        </div>
      </section>

      <section aria-label="Hartă" className="pb-24 md:pb-32">
        <div className="container-x">
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
