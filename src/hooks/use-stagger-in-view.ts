"use client";

import { ease, useMotionPrefs } from "@/lib/motion";

type UseStaggerInViewOptions = {
  index: number;
  delayStep?: number;
  baseDelay?: number;
};

export function useStaggerInView({
  index,
  delayStep = 0.08,
  baseDelay = 0,
}: UseStaggerInViewOptions) {
  const { reducedMotion } = useMotionPrefs();

  return {
    initial: reducedMotion ? {} : { opacity: 0, x: -8 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-40px" } as const,
    transition: reducedMotion
      ? { duration: 0 }
      : { duration: 0.6, delay: baseDelay + index * delayStep, ease },
  };
}
