"use client";

import { useState } from "react";
import { useHasConsent } from "@/components/providers/ConsentProvider";
import { openCookieSettings } from "@/components/CookieConsent";
import { Img } from "@/components/motion/Img";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

/** Google Maps sets third-party cookies, so the iframe loads only with marketing consent or a one-off click. */
export const MapEmbed = () => {
  const allowed = useHasConsent("marketing");
  const [once, setOnce] = useState(false);
  const show = allowed || once;

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-forest-deep sm:aspect-[16/9]">
      {show ? (
        <iframe
          src={site.mapsEmbed}
          title={`Hartă: ${site.address.street}, ${site.address.city}`}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <>
          <Img photo={photos.attVaduIzei} sizes="100vw" className="img-cover absolute inset-0 opacity-45" />
          <div className="relative flex h-full flex-col items-center justify-center gap-4 p-6 text-center text-paper">
            <p className="display text-3xl">Harta Google</p>
            <p className="max-w-md text-sm text-paper/80">
              Harta este oferită de Google, care poate seta cookie-uri și primi adresa ta IP. O încărcăm doar dacă ești de
              acord.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <button type="button" onClick={() => setOnce(true)} className="btn bg-gold text-forest-deep hover:bg-yellow">
                Afișează harta
              </button>
              <button type="button" onClick={openCookieSettings} className="btn btn-outline text-paper">
                Setări cookie-uri
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
