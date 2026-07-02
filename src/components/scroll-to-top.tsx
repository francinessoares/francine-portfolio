"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { useTranslations } from "@/i18n/context";
import { useMotionPrefs } from "@/lib/motion";

const SCROLL_THRESHOLD = 400;

export function ScrollToTopButton() {
  const t = useTranslations();
  const { reducedMotion } = useMotionPrefs();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={reducedMotion ? false : { opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          aria-label={t.a11y.scrollToTop}
          className="focus-ring fixed right-[max(16px,env(safe-area-inset-right,0px)+16px)] bottom-[max(20px,env(safe-area-inset-bottom,0px)+20px)] z-40 flex size-[44px] items-center justify-center rounded-[14px] border border-white/[0.12] bg-[rgba(15,15,20,0.88)] text-fg-muted shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-[16px] transition-premium hover:border-accent/25 hover:text-accent-light hover:shadow-[0_8px_32px_rgba(139,92,246,0.18)]"
        >
          <ArrowUp className="size-[18px]" strokeWidth={1.75} aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
