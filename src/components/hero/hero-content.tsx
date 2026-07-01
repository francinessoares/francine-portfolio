"use client";

import { motion } from "framer-motion";

import { useHeroMotionContext } from "@/hooks/use-hero-motion";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function HeroContent() {
  const t = useTranslations();
  const { variants } = useHeroMotionContext();

  return (
    <>
      <motion.div variants={variants.item} className="mb-[24px]">
        <span
          className={cn(
            "text-eyebrow inline-flex items-center gap-[10px] uppercase tracking-[0.14em]",
          )}
        >
          <span className="size-[5px] rounded-full bg-accent shadow-[0_0_8px_rgba(139,92,246,0.45)]" />
          {t.hero.role}
          <span className="size-[5px] rounded-full bg-accent shadow-[0_0_8px_rgba(139,92,246,0.45)]" />
        </span>
      </motion.div>

      <motion.h1
        variants={variants.headline}
        className="text-display-hero max-w-[18ch] lg:max-w-none"
      >
        {t.hero.headlineLead}
        <span className="text-accent-light">{t.hero.headlineHighlight}</span>
      </motion.h1>

      <motion.p
        variants={variants.item}
        className={cn(
          "text-subtitle mt-[24px] max-w-[560px]",
          "mx-auto lg:mx-0",
        )}
      >
        {t.hero.subtitle}
      </motion.p>
    </>
  );
}
