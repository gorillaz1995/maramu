"use client";

import "./globals.css";
import { Rufina, Oxygen } from "next/font/google";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Footer from "./components/Footer";

const DynamicMenux = dynamic(() => import("./components/Menu"), { ssr: false });

const rufina = Rufina({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rufina",
});

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-oxygen",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isServicesPage = pathname === "/services";

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased ${rufina.variable} ${
          oxygen.variable
        } font-sans relative ${isServicesPage ? "overflow-x-auto" : ""}`}
        suppressHydrationWarning
      >
        <DynamicMenux />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
