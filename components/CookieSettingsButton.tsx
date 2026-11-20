"use client";

import { openCookieSettings } from "@/components/CookieConsent";

export const CookieSettingsButton = () => (
  <button type="button" onClick={openCookieSettings} className="btn btn-forest my-2">
    Deschide setările cookie-urilor
  </button>
);
