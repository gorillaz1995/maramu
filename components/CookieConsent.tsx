"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useConsent, type ConsentCategory } from "@/components/providers/ConsentProvider";
import { gsap, useGSAP } from "@/lib/gsap";

const CATEGORIES: { id: ConsentCategory; title: string; text: string }[] = [
  {
    id: "necessary",
    title: "Strict necesare",
    text: "Fac site-ul să funcționeze: rețin alegerea ta privind cookie-urile și sezonul afișat. Nu pot fi dezactivate.",
  },
  {
    id: "preferences",
    title: "Preferințe",
    text: "Rețin setări precum limba sau ultimele date căutate pentru rezervare.",
  },
  {
    id: "analytics",
    title: "Statistici",
    text: "Ne arată, anonim și agregat, ce pagini sunt citite, ca să îmbunătățim site-ul (de ex. Google Analytics).",
  },
  {
    id: "marketing",
    title: "Marketing",
    text: "Permit afișarea hărților, a videoclipurilor externe și măsurarea campaniilor (de ex. Google Maps, Meta Pixel).",
  },
];

export const CookieConsent = () => {
  const { bannerOpen, settingsOpen, consent, acceptAll, rejectAll, openSettings, closeSettings, save } =
    useConsent();
  const bannerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!bannerOpen || !bannerRef.current) return;
      gsap.from(bannerRef.current, { yPercent: 30, autoAlpha: 0, duration: 0.9, delay: 1.2, ease: "expo.out" });
    },
    { dependencies: [bannerOpen] },
  );

  useEffect(() => {
    const open = () => openSettings();
    window.addEventListener("open-cookie-settings", open);
    return () => window.removeEventListener("open-cookie-settings", open);
  }, [openSettings]);

  return (
    <>
      {bannerOpen && (
        <div
          ref={bannerRef}
          role="region"
          aria-label="Consimțământ cookie-uri"
          className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-xl rounded-2xl bg-cream p-5 text-ink shadow-[0_20px_60px_-15px_rgba(20,30,25,0.45)] ring-1 ring-ink/10 sm:bottom-5 sm:p-6"
        >
          <p className="eyebrow mb-2">Cookie-uri</p>
          <p className="text-[0.95rem] leading-relaxed text-ink/80">
            Folosim cookie-uri strict necesare ca site-ul să funcționeze. Cu acordul tău, folosim și cookie-uri de
            statistică și marketing. Poți schimba oricând alegerea din subsolul paginii. Detalii în{" "}
            <Link href="/politica-cookies" className="underline underline-offset-4 hover:text-clay">
              Politica de cookie-uri
            </Link>
            .
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <button type="button" onClick={acceptAll} className="btn btn-clay">
              Accept toate
            </button>
            <button type="button" onClick={rejectAll} className="btn btn-outline">
              Doar necesare
            </button>
            <button type="button" onClick={openSettings} className="btn btn-ghost">
              Personalizează
            </button>
          </div>
        </div>
      )}

      {settingsOpen && (
        <CookieSettings
          initial={consent}
          onClose={closeSettings}
          onSave={save}
          onAcceptAll={acceptAll}
        />
      )}
    </>
  );
};

type SettingsProps = {
  initial: ReturnType<typeof useConsent>["consent"];
  onClose: () => void;
  onSave: ReturnType<typeof useConsent>["save"];
  onAcceptAll: () => void;
};

const CookieSettings = ({ initial, onClose, onSave, onAcceptAll }: SettingsProps) => {
  const [choice, setChoice] = useState({
    preferences: initial?.preferences ?? false,
    analytics: initial?.analytics ?? false,
    marketing: initial?.marketing ?? false,
  });
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);

  const toggle = (id: Exclude<ConsentCategory, "necessary">) =>
    setChoice((current) => ({ ...current, [id]: !current[id] }));

  return (
    <dialog
      ref={dialogRef}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      aria-labelledby="cookie-settings-title"
      className="m-auto w-[min(100%-1.5rem,36rem)] rounded-2xl bg-cream p-0 text-ink backdrop:bg-forest-deep/60 backdrop:backdrop-blur-sm"
      data-lenis-prevent
    >
      <div className="max-h-[85dvh] overflow-y-auto p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 id="cookie-settings-title" className="font-display text-3xl font-light">
            Setări cookie-uri
          </h2>
          <button type="button" onClick={onClose} aria-label="Închide" className="-m-2 p-2 text-2xl leading-none">
            ×
          </button>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink/75">
          Alege ce categorii accepți. Alegerea se păstrează 6 luni, apoi te întrebăm din nou.
        </p>

        <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
          {CATEGORIES.map((category) => {
            const locked = category.id === "necessary";
            const checked = locked || choice[category.id as keyof typeof choice];
            return (
              <li key={category.id} className="flex items-start justify-between gap-6 py-4">
                <div>
                  <p className="font-medium">{category.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">{category.text}</p>
                </div>
                <label className="relative mt-1 inline-flex shrink-0 cursor-pointer items-center">
                  <span className="sr-only">{category.title}</span>
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={checked}
                    disabled={locked}
                    onChange={() => !locked && toggle(category.id as Exclude<ConsentCategory, "necessary">)}
                  />
                  <span className="h-6 w-11 rounded-full bg-ink/20 transition-colors peer-checked:bg-forest peer-disabled:opacity-60 peer-focus-visible:ring-2 peer-focus-visible:ring-clay peer-focus-visible:ring-offset-2" />
                  <span className="absolute left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
                </label>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          <button type="button" onClick={() => onSave(choice)} className="btn btn-outline">
            Salvează alegerea
          </button>
          <button type="button" onClick={onAcceptAll} className="btn btn-clay">
            Accept toate
          </button>
        </div>
      </div>
    </dialog>
  );
};

export const openCookieSettings = () => window.dispatchEvent(new Event("open-cookie-settings"));
