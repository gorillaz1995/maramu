"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/lib/images";
import { Img } from "@/components/motion/Img";

type GalleryProps = {
  photos: Photo[];
  label: string;
};

/** Swipeable strip with arrows and a full-screen viewer. Native scroll-snap, no autoplay. */
export const Gallery = ({ photos, label }: GalleryProps) => {
  const track = useRef<HTMLUListElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const scrollBy = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const step = useCallback(
    (direction: 1 | -1) =>
      setActive((index) => (index === null ? index : (index + direction + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (active === null) dialog.current?.close();
    else if (!dialog.current?.open) dialog.current?.showModal();
  }, [active]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, step]);

  return (
    <div className="relative">
      <ul
        ref={track}
        aria-label={label}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] md:gap-5"
      >
        {photos.map((photo, index) => (
          <li key={photo.src + index} className="w-[86%] shrink-0 snap-start sm:w-[60%] lg:w-[38%]">
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group block w-full overflow-hidden rounded-xl"
              aria-label={`Mărește: ${photo.alt}`}
            >
              <Img
                photo={photo}
                sizes="(min-width: 1024px) 38vw, 86vw"
                className="aspect-[3/2] w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex gap-2">
        <button type="button" onClick={() => scrollBy(-1)} className="btn btn-outline h-11 w-11 p-0" aria-label="Înapoi">
          ←
        </button>
        <button type="button" onClick={() => scrollBy(1)} className="btn btn-outline h-11 w-11 p-0" aria-label="Înainte">
          →
        </button>
      </div>

      <dialog
        ref={dialog}
        onClose={() => setActive(null)}
        onClick={(event) => event.target === dialog.current && setActive(null)}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/85"
        aria-label={label}
      >
        {active !== null && (
          <div className="relative flex h-[100dvh] w-[100vw] items-center justify-center p-4">
            <Img photo={photos[active]} sizes="100vw" className="max-h-full max-w-full rounded-lg object-contain" />
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-paper/15 text-2xl text-paper"
              aria-label="Închide"
            >
              ×
            </button>
            <button
              type="button"
              onClick={() => step(-1)}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/15 text-paper"
              aria-label="Fotografia anterioară"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/15 text-paper"
              aria-label="Fotografia următoare"
            >
              →
            </button>
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm tabular-nums text-paper/70">
              {active + 1} / {photos.length}
            </p>
          </div>
        )}
      </dialog>
    </div>
  );
};
