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

type LocaleSwitcherProps = {
  inline?: boolean;
  disableMotion?: boolean;
};

export function LocaleSwitcher({
  inline = false,
  disableMotion = false,
}: LocaleSwitcherProps) {
  const { locale, setLocale, dictionary } = useLocale();
  const { reducedMotion } = useMotionPrefs();
  const labels = dictionary.localeSwitcher;

  return (
    <div
      className={cn(
        !inline &&
          "fixed top-[max(16px,env(safe-area-inset-top,0px)+12px)] right-[max(16px,env(safe-area-inset-right,0px)+12px)] z-50",
      )}
      role="group"
      aria-label={labels.label}
    >
      <div
        className={cn(
          "flex items-center gap-[6px]",
          !inline && "rounded-[12px] border border-white/[0.08] bg-white/[0.03] p-[3px]",
        )}
      >
        {locales.map((code) => {
          const active = locale === code;
          const buttonClass = cn(
            "focus-ring min-w-[32px] rounded-[8px] px-[10px] py-[5px] text-[11px] font-semibold tracking-[0.08em] uppercase transition-premium",
            active
              ? "bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] text-white shadow-[0_2px_10px_rgba(139,92,246,0.4)]"
              : "bg-transparent text-fg-muted hover:text-fg-tertiary",
          );
          const buttonProps = {
            type: "button" as const,
            onClick: () => setLocale(code),
            className: buttonClass,
            "aria-pressed": active,
            "aria-current": active ? ("true" as const) : undefined,
            "aria-label": localeAria[code],
            children: labels[code],
          };

          if (disableMotion) {
            return <button key={code} {...buttonProps} />;
          }

          return (
            <motion.button
              key={code}
              {...buttonProps}
              whileHover={reducedMotion || active ? {} : { scale: 1.02 }}
              whileTap={reducedMotion || active ? {} : { scale: 0.96 }}
              transition={spring}
            />
          );
        })}
      </div>
    </div>
  );
}
