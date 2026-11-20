"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Season } from "@/lib/content";

type SeasonContextValue = {
  season: Season;
  setSeason: (season: Season) => void;
};

const SeasonContext = createContext<SeasonContextValue | null>(null);
const STORAGE_KEY = "season";

const seasonForToday = (): Season => {
  const month = new Date().getMonth(); // 0 = ianuarie
  return month >= 10 || month <= 2 ? "iarna" : "vara";
};

export const SeasonProvider = ({ children }: { children: ReactNode }) => {
  const [season, setSeasonState] = useState<Season>("vara");

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = sessionStorage.getItem(STORAGE_KEY);
    } catch {}
    setSeasonState(stored === "vara" || stored === "iarna" ? stored : seasonForToday());
  }, []);

  useEffect(() => {
    document.documentElement.dataset.season = season;
  }, [season]);

  const setSeason = useCallback((next: Season) => {
    setSeasonState(next);
    try {
      sessionStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  const value = useMemo(() => ({ season, setSeason }), [season, setSeason]);
  return <SeasonContext.Provider value={value}>{children}</SeasonContext.Provider>;
};

export const useSeason = () => {
  const context = useContext(SeasonContext);
  if (!context) throw new Error("useSeason must be used inside SeasonProvider");
  return context;
};
