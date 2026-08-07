"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe media query.
 * Returns `null` on the server and on the first client paint, then the real
 * match after mount — keeps hydration stable and avoids dual media downloads.
 */
export function useMediaQuery(query: string): boolean | null {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

export function useIsDesktop(): boolean | null {
  return useMediaQuery("(min-width: 1024px)");
}
