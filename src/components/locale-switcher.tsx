"use client";

import { motion } from "framer-motion";

import { locales, type Locale } from "@/i18n";
import { useLocale } from "@/i18n/context";
import { spring, useMotionPrefs } from "@/lib/motion";
import { cn } from "@/lib/utils";

const localeAria: Record<Locale, string> = {
  pt: "Português",
  en: "English",
};

export function LocaleSwitcher() {
  const { locale, setLocale, dictionary } = useLocale();
  const { reducedMotion } = useMotionPrefs();
  const labels = dictionary.localeSwitcher;

  return (
    <div
      className="fixed top-[max(16px,env(safe-area-inset-top,0px)+12px)] right-[max(16px,env(safe-area-inset-right,0px)+12px)] z-50"
      role="group"
      aria-label={labels.label}
    >
      <div className="glass-pill flex items-center gap-[2px] p-[3px]">
        {locales.map((code) => {
          const active = locale === code;

          return (
            <motion.button
              key={code}
              type="button"
              onClick={() => setLocale(code)}
              disabled={active}
              whileHover={reducedMotion || active ? {} : { scale: 1.02 }}
              whileTap={reducedMotion || active ? {} : { scale: 0.96 }}
              transition={spring}
              className={cn(
                "focus-ring text-label relative rounded-[7px] px-[10px] py-[5px] transition-premium",
                active
                  ? "bg-surface-glass-active text-fg-interactive-hover"
                  : "text-fg-subtle hover:bg-surface-glass-hover hover:text-fg-body",
              )}
              aria-pressed={active}
              aria-label={localeAria[code]}
            >
              {labels[code]}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
