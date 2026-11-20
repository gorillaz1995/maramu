import type { MetadataRoute } from "next";
import { nav, legalNav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...nav, ...legalNav].map((item) => ({
    url: `${site.url}${item.href === "/" ? "" : item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : legalNav.some((legal) => legal.href === item.href) ? 0.2 : 0.8,
  }));
}
