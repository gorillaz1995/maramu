"use client";

import Script from "next/script";
import { useHasConsent } from "@/components/providers/ConsentProvider";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/** Google Analytics, loaded only after "Statistici" consent and only if NEXT_PUBLIC_GA_ID is set. */
export const Analytics = () => {
  const allowed = useHasConsent("analytics");
  if (!GA_ID || !allowed) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
};
