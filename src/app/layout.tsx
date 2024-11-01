import type { Metadata } from "next";
import { Cinzel, Fauna_One } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
});

const faunaOne = Fauna_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fauna-one",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${cinzel.variable} ${faunaOne.variable}`}>
        {children}
      </body>
    </html>
  );
}
