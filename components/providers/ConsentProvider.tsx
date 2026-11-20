"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type ConsentCategory = "necessary" | "preferences" | "analytics" | "marketing";

export type Consent = {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
  version: number;
};

type ConsentContextValue = {
  consent: Consent | null;
  ready: boolean;
  bannerOpen: boolean;
  settingsOpen: boolean;
  save: (choice: Omit<Consent, "necessary" | "updatedAt" | "version">) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  openSettings: () => void;
  closeSettings: () => void;
};

// Bump when categories or vendors change: everyone is asked again.
const CONSENT_VERSION = 1;
const STORAGE_KEY = "cookie-consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 6 luni

const ConsentContext = createContext<ConsentContextValue | null>(null);

const readStored = (): Consent | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    return parsed.version === CONSENT_VERSION ? parsed : null;
  } catch {
    return null;
  }
};

const persist = (consent: Consent) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {}
  // Mirror as a first-party cookie so the server could read the choice later.
  const flags = `p${+consent.preferences}a${+consent.analytics}m${+consent.marketing}`;
  document.cookie = `${STORAGE_KEY}=${flags}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent("consent-change", { detail: consent }));
};

export const ConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    setConsent(readStored());
    setReady(true);
  }, []);

  const save = useCallback<ConsentContextValue["save"]>((choice) => {
    const next: Consent = {
      necessary: true,
      ...choice,
      updatedAt: new Date().toISOString(),
      version: CONSENT_VERSION,
    };
    persist(next);
    setConsent(next);
    setSettingsOpen(false);
  }, []);

  const acceptAll = useCallback(
    () => save({ preferences: true, analytics: true, marketing: true }),
    [save],
  );
  const rejectAll = useCallback(
    () => save({ preferences: false, analytics: false, marketing: false }),
    [save],
  );
  const openSettings = useCallback(() => setSettingsOpen(true), []);
  const closeSettings = useCallback(() => setSettingsOpen(false), []);

  const value = useMemo(
    () => ({
      consent,
      ready,
      bannerOpen: ready && !consent && !settingsOpen,
      settingsOpen,
      save,
      acceptAll,
      rejectAll,
      openSettings,
      closeSettings,
    }),
    [consent, ready, settingsOpen, save, acceptAll, rejectAll, openSettings, closeSettings],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
};

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (!context) throw new Error("useConsent must be used inside ConsentProvider");
  return context;
};

/** True only after the visitor explicitly allowed this category. */
export const useHasConsent = (category: ConsentCategory) => {
  const { consent } = useConsent();
  if (category === "necessary") return true;
  return Boolean(consent?.[category]);
};
