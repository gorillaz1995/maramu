"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { nav, site, phoneHref, mailHref } from "@/lib/site";
import { photos } from "@/lib/images";
import { Img } from "@/components/motion/Img";

type MenuProps = {
  open: boolean;
  onClose: () => void;
};

export const Menu = ({ open, onClose }: MenuProps) => {
  const root = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      timeline.current = gsap
        .timeline({ paused: true })
        .set(root.current, { visibility: "visible" })
        .fromTo(
          root.current,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "expo.inOut" },
        )
        .from(".menu-link", { yPercent: 110, duration: 1, stagger: 0.06, ease: "expo.out" }, "-=0.35")
        .from(".menu-fade", { autoAlpha: 0, y: 16, duration: 0.8, stagger: 0.05 }, "-=0.8")
        .from(".menu-image", { scale: 1.15, autoAlpha: 0, duration: 1.4, ease: "expo.out" }, "-=1.2");
    },
    { scope: root },
  );

  useEffect(() => {
    const tl = timeline.current;
    if (!tl) return;
    if (open) tl.timeScale(1).play();
    else tl.timeScale(1.6).reverse();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      ref={root}
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Meniu"
      aria-hidden={!open}
      inert={!open}
      className="invisible fixed inset-0 z-40 bg-forest-deep text-paper"
      data-lenis-prevent
    >
      <div className="container-x grid h-full grid-cols-1 items-center gap-10 overflow-y-auto pb-10 pt-[calc(var(--header-h)+2rem)] lg:grid-cols-[1.2fr_1fr]">
        <nav aria-label="Principal">
          <ul className="space-y-1 md:space-y-2">
            {nav.map((item, index) => {
              const active = pathname === item.href;
              return (
                <li key={item.href} className="overflow-hidden">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="menu-link group flex items-baseline gap-4 py-1"
                  >
                    <span className="w-6 text-xs tabular-nums text-gold/70">0{index + 1}</span>
                    <span
                      className={`display text-[2.6rem] transition-colors duration-300 sm:text-6xl lg:text-7xl ${
                        active ? "text-gold" : "group-hover:text-gold"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 grid gap-6 text-sm text-paper/75 sm:grid-cols-2">
            <div className="menu-fade">
              <p className="eyebrow mb-2 text-gold/80">Rezervări</p>
              <a href={phoneHref} className="link-underline block text-lg text-paper">
                {site.phone}
              </a>
              <a href={mailHref} className="link-underline mt-1 block">
                {site.email}
              </a>
            </div>
            <div className="menu-fade">
              <p className="eyebrow mb-2 text-gold/80">Adresă</p>
              <p>
                {site.address.street}
                <br />
                {site.address.city} {site.address.postalCode}
              </p>
            </div>
          </div>
        </nav>

        <div className="relative hidden h-[70vh] overflow-hidden rounded-2xl lg:block">
          <Img photo={photos.porch} sizes="40vw" className="menu-image img-cover absolute inset-0" />
          <p className="script menu-fade absolute bottom-6 left-6 text-5xl text-paper drop-shadow-lg">
            cu dragoste și tradiție
          </p>
        </div>
      </div>
    </div>
  );
};
