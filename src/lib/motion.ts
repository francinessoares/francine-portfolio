"use client";

import { useReducedMotion } from "framer-motion";
import type { Transition, Variants } from "framer-motion";

export const ease = [0.16, 1, 0.3, 1] as const;

export const spring = {
  type: "spring" as const,
  stiffness: 420,
  damping: 32,
};

export function useMotionPrefs() {
  const reducedMotion = useReducedMotion() ?? false;
  return { reducedMotion, ease, spring };
}

export function buildHeroVariants(reducedMotion: boolean) {
  const itemTransition: Transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.75, ease };

  const container: Variants = {
    hidden: {},
    visible: {
      transition: reducedMotion
        ? {}
        : { staggerChildren: 0.06, delayChildren: 0.08 },
    },
  };

  const item: Variants = {
    hidden: reducedMotion
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : { opacity: 0, y: 10, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: itemTransition,
    },
  };

  const headline: Variants = {
    hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ...itemTransition, duration: reducedMotion ? 0 : 0.85 },
    },
  };

  const badgeContainer: Variants = {
    hidden: {},
    visible: {
      transition: reducedMotion
        ? {}
        : { staggerChildren: 0.03, delayChildren: 0.04 },
    },
  };

  const badge: Variants = {
    hidden: reducedMotion ? { opacity: 1 } : { opacity: 0, y: 4 },
    visible: { opacity: 1, y: 0, transition: itemTransition },
  };

  return { container, item, headline, badgeContainer, badge };
}
