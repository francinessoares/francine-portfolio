"use client";

import { createContext, useContext, useMemo } from "react";

import { buildHeroVariants, useMotionPrefs } from "@/lib/motion";

type HeroMotionContextValue = ReturnType<typeof useHeroMotion>;

const HeroMotionContext = createContext<HeroMotionContextValue | null>(null);

export function useHeroMotion() {
  const { reducedMotion, ease, spring } = useMotionPrefs();
  const variants = useMemo(
    () => buildHeroVariants(reducedMotion),
    [reducedMotion],
  );

  return { reducedMotion, ease, spring, variants };
}

export function HeroMotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = useHeroMotion();

  return (
    <HeroMotionContext.Provider value={value}>
      {children}
    </HeroMotionContext.Provider>
  );
}

export function useHeroMotionContext() {
  const context = useContext(HeroMotionContext);

  if (!context) {
    throw new Error("useHeroMotionContext must be used within HeroMotionProvider");
  }

  return context;
}
