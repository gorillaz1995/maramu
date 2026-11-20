import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { SeasonProvider } from "@/components/providers/SeasonProvider";
import { ConsentProvider } from "@/components/providers/ConsentProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingBar } from "@/components/layout/BookingBar";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";

const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const script = Great_Vibes({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-script-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — pensiune de familie în Maramureș`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: site.name,
    images: [{ url: "/images/site/house-summer-1600.webp", width: 1600, height: 831 }],
  },
  icons: { icon: "/logo_w.png" },
};

export const viewport: Viewport = {
  themeColor: "#013220",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/images/site/house-summer-1600.webp`,
  priceRange: "150–180 RON",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.county,
    postalCode: site.address.postalCode,
    addressCountry: "RO",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${display.variable} ${sans.variable} ${script.variable}`} suppressHydrationWarning>
      <head>
        <script
          // Marks JS as available so [data-reveal] elements can start hidden without a flash.
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <ConsentProvider>
          <SeasonProvider>
            <SmoothScroll>
              <a
                href="#continut"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-lg focus:bg-paper focus:px-4 focus:py-2"
              >
                Sari la conținut
              </a>
              <Header />
              <main id="continut">{children}</main>
              <Footer />
              <BookingBar />
              <CookieConsent />
              <Analytics />
            </SmoothScroll>
          </SeasonProvider>
        </ConsentProvider>
      </body>
    </html>
  );
}
