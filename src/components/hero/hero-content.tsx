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
      <motion.div
        variants={variants.item}
        className="mb-[18px] h-[30px]"
        aria-hidden
      />

      <motion.h1
        variants={variants.headline}
        className="text-display-hero text-left"
      >
        <span className="block whitespace-nowrap">{t.hero.headlineLine1}</span>
        <span className="block whitespace-nowrap">{t.hero.headlineLine2}</span>
        <span className="block whitespace-nowrap bg-gradient-to-r from-[#E879F9] via-[#A855F7] to-[#7C3AED] bg-clip-text text-transparent">
          {t.hero.headlineHighlight}
        </span>
      </motion.h1>

      <motion.p
        variants={variants.item}
        className={cn(
          "mt-[22px] max-w-[42ch] text-pretty text-left text-[15px] leading-[1.7] tracking-[-0.01em] text-fg-secondary sm:max-w-[46ch] sm:text-[16px]",
        )}
      >
        {t.hero.subtitle}
      </motion.p>
    </>
  );
}

export function HeroTrust() {
  const t = useTranslations();
  const { variants } = useHeroMotionContext();

  return (
    <motion.p
      variants={variants.item}
      className="mt-[32px] text-[13px] leading-[1.6] tracking-[-0.01em] text-fg-tertiary"
    >
      {t.hero.trust.join(" • ")}
    </motion.p>
  );
}
