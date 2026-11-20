"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSeason } from "@/components/providers/SeasonProvider";
import { useConsent } from "@/components/providers/ConsentProvider";
import { seasons, type Season } from "@/lib/content";

const SunIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" strokeLinecap="round" />
  </svg>
);

const SnowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <path d="M12 2v20M3.3 7l17.4 10M3.3 17l17.4-10M9.5 3.5 12 6l2.5-2.5M9.5 20.5 12 18l2.5 2.5M3.6 10.4l3.3-.9-.9-3.3M20.4 13.6l-3.3.9.9 3.3M3.6 13.6l3.3.9-.9 3.3M20.4 10.4l-3.3-.9.9-3.3" />
  </svg>
);

const OPTIONS: { id: Season; Icon: () => React.JSX.Element }[] = [
  { id: "vara", Icon: SunIcon },
  { id: "iarna", Icon: SnowIcon },
];

/** Floating season switch + availability CTA, like a concierge always at hand. */
export const BookingBar = () => {
  const { season, setSeason } = useSeason();
  const { bannerOpen, settingsOpen } = useConsent();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-site-footer], [data-hide-booking]");
    const intersecting = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.isIntersecting ? intersecting.add(entry.target) : intersecting.delete(entry.target),
        );
        setFooterInView(intersecting.size > 0);
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const show = visible && !footerInView && !bannerOpen && !settingsOpen && pathname !== "/contact";

  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-30 flex justify-center px-3 transition-[transform,opacity] duration-700 ease-[var(--ease-out-expo)] sm:bottom-6 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[140%] opacity-0"
      }`}
      aria-hidden={!show}
      inert={!show}
    >
      <div className="flex items-center gap-1.5 rounded-2xl bg-paper p-1.5 text-forest-deep shadow-[0_18px_50px_-12px_rgba(1,50,32,0.45)] ring-1 ring-forest-deep/10">
        <div role="radiogroup" aria-label="Anotimp" className="flex items-center gap-1">
          {OPTIONS.map(({ id, Icon }) => {
            const active = season === id;
            return (
              <button
                key={id}
                type="button"
                role="radio"
                aria-checked={active}
                aria-label={seasons[id].label}
                onClick={() => setSeason(id)}
                className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300 ${
                  active ? "bg-forest text-gold" : "text-forest-deep/60 hover:bg-cream"
                }`}
              >
                <Icon />
              </button>
            );
          })}
        </div>
        <span className="w-14 px-1 text-sm text-forest-deep/70 sm:w-16">{seasons[season].label}</span>
        <Link href="/contact#rezervare" className="btn btn-clay min-h-11 px-5 text-sm">
          Disponibilitate
        </Link>
      </div>
    </div>
  );
};
