"use client";

import Link from "next/link";
import Image from "next/image";
import { CopyPhone } from "@/components/CopyPhone";
import { openCookieSettings } from "@/components/CookieConsent";
import { nav, legalNav, site, mailHref } from "@/lib/site";

const BADGES = [
  {
    src: "/anpc-logo.webp",
    alt: "ANPC — Soluționarea alternativă a litigiilor",
    href: "https://anpc.ro/ce-este-sal/",
  },
  {
    src: "/litigii-logo.webp",
    alt: "Soluționarea online a litigiilor",
    href: "https://ec.europa.eu/consumers/odr",
  },
  {
    src: "/comunicat-ue-logo.webp",
    alt: "Uniunea Europeană — informare pentru consumatori",
    href: "https://consumer-redress.ec.europa.eu/index_ro",
  },
];

export const Footer = () => (
  <footer data-site-footer className="bg-forest-deep text-paper/80">
    <div className="container-x grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:py-24">
      <div>
        <Image src="/logo_w.png" alt="Pensiunea După Apă la Răzvan" width={168} height={168} className="-ml-4 -mt-6" />
        <p className="display mt-2 max-w-xs text-3xl text-paper">Vrei să ne vizitezi?</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <CopyPhone className="btn bg-gold text-forest-deep hover:bg-yellow">Contactează-ne</CopyPhone>
          <a href={mailHref} className="btn btn-outline text-paper">
            Scrie-ne
          </a>
        </div>
      </div>

      <div className="space-y-6 text-sm">
        <div>
          <p className="eyebrow mb-3 text-gold/80">Ne găsești</p>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
            {site.address.street}, {site.address.city} {site.address.postalCode}
          </a>
        </div>
        <div>
          <p className="eyebrow mb-3 text-gold/80">Contact</p>
          <a href={mailHref} className="link-underline block">
            {site.email}
          </a>
        </div>
        <div>
          <p className="eyebrow mb-3 text-gold/80">Pagini</p>
          <ul className="space-y-1.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-6 text-sm">
        <div>
          <p className="eyebrow mb-3 text-gold/80">Legal</p>
          <ul className="space-y-1.5">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button type="button" onClick={openCookieSettings} className="link-underline text-left">
                Setări cookie-uri
              </button>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap items-center gap-3" aria-label="Protecția consumatorilor">
          {BADGES.map((badge) => (
            <li key={badge.src}>
              <a
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md bg-white p-1 transition-opacity hover:opacity-85"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={badge.src} alt={badge.alt} height={40} className="h-10 w-auto" loading="lazy" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-paper/10">
      <div className="container-x flex flex-col gap-2 py-6 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. {site.legal.company} · CUI {site.legal.cui}
        </p>
        <p className="script text-xl text-gold/90">Cu dragoste și tradiție.</p>
      </div>
    </div>
  </footer>
);
