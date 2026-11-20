"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { Menu } from "./Menu";
import { useLenis } from "@/components/providers/SmoothScroll";

// Routes that open with a full-bleed dark image: header starts transparent.
const IMMERSIVE = ["/", "/camere", "/activitati", "/contact"];

export const Header = () => {
  const pathname = usePathname();
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  const immersive = IMMERSIVE.includes(pathname);
  const solid = scrolled || !immersive;

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = Math.max(0, window.scrollY);
      setScrolled(y > 40);
      if (y < 320) {
        setHidden(false);
        lastY.current = y;
        return;
      }
      // Only react to a clear change of direction; small per-frame deltas accumulate
      // until they pass the threshold, so the header never toggles back and forth.
      const delta = y - lastY.current;
      if (Math.abs(delta) < 8) return;
      setHidden(delta > 0);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open, lenis]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,color,box-shadow] duration-500 ease-[var(--ease-out-expo)] ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${
          open
            ? "bg-transparent text-paper"
            : solid
              ? "bg-cream/92 text-forest-deep shadow-[0_1px_0_rgba(1,50,32,0.08)] backdrop-blur-md"
              : "bg-transparent text-paper"
        }`}
      >
        <div className="container-x flex h-[var(--header-h)] items-center justify-between">
          <Link href="/" aria-label="După Apă la Răzvan — acasă" className="text-[0.95rem] md:text-base">
            <Logo accent={solid && !open ? "text-clay" : "text-gold"} />
          </Link>

          <div className="flex items-center gap-3 md:gap-5">
            <Link
              href="/contact#rezervare"
              className={`btn hidden min-h-0 px-4 py-2.5 text-sm sm:inline-flex ${
                solid && !open ? "btn-forest" : "bg-paper/15 text-paper backdrop-blur hover:bg-paper/25"
              }`}
            >
              Rezervă
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Închide meniul" : "Deschide meniul"}
              className="group relative -mr-2 flex h-11 w-11 items-center justify-center"
            >
              <span
                className={`absolute h-[1.5px] w-7 bg-current transition-transform duration-500 ease-[var(--ease-out-expo)] ${
                  open ? "rotate-45" : "-translate-y-[4px] group-hover:-translate-y-[5px]"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-7 bg-current transition-transform duration-500 ease-[var(--ease-out-expo)] ${
                  open ? "-rotate-45" : "translate-y-[4px] group-hover:translate-y-[5px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>
      <Menu open={open} onClose={() => setOpen(false)} />
    </>
  );
};
