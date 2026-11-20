import Link from "next/link";
import type { ReactNode } from "react";
import { legalNav, site } from "@/lib/site";

type LegalPageProps = {
  title: string;
  intro: string;
  current: string;
  children: ReactNode;
};

export const LegalPage = ({ title, intro, current, children }: LegalPageProps) => (
  <div className="pb-24 pt-[calc(var(--header-h)+4rem)] md:pb-32 md:pt-[calc(var(--header-h)+6rem)]">
    <div className="container-x grid gap-12 lg:grid-cols-12">
      <aside className="lg:col-span-3">
        <nav aria-label="Documente legale" className="lg:sticky lg:top-28">
          <p className="eyebrow mb-4">Informații legale</p>
          <ul className="space-y-2 text-sm">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={item.href === current ? "page" : undefined}
                  className={item.href === current ? "font-semibold text-forest-deep" : "text-ink/65 hover:text-forest-deep"}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <article className="lg:col-span-8 lg:col-start-5">
        <h1 className="display text-[clamp(2.6rem,6vw,4.75rem)] text-forest-deep">{title}</h1>
        <p className="mt-4 text-sm text-ink/55">Ultima actualizare: {site.legal.lastUpdated}</p>
        <p className="lead mt-8 max-w-2xl">{intro}</p>
        <div className="prose-legal mt-4">{children}</div>
      </article>
    </div>
  </div>
);

export const Operator = () => (
  <p>
    <strong>{site.legal.company}</strong>, CUI {site.legal.cui}, nr. Registrul Comerțului {site.legal.regCom}, cu sediul în{" "}
    {site.address.street}, {site.address.city} {site.address.postalCode}, jud. {site.address.county}, care operează{" "}
    {site.name}. Contact: <a href={`mailto:${site.email}`}>{site.email}</a>, telefon {site.phone}.
  </p>
);
