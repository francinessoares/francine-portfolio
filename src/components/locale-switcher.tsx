"use client";

import { motion, useReducedMotion } from "framer-motion";

import { locales, type Locale } from "@/i18n";
import { useLocale } from "@/i18n/context";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

const localeAria: Record<Locale, string> = {
  pt: "Português",
  en: "English",
};

export function LocaleSwitcher() {
  const { locale, setLocale, dictionary } = useLocale();
  const reducedMotion = useReducedMotion() ?? false;
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
                "font-mono-label relative rounded-[7px] px-[10px] py-[5px] text-[10px] transition-premium",
                active
                  ? "bg-white/[0.1] text-white/85"
                  : "text-white/35 hover:bg-white/[0.04] hover:text-white/55",
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
