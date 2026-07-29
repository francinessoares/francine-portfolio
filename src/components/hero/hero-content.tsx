"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

import { useHeroMotionContext } from "@/hooks/use-hero-motion";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function HeroContent() {
  const t = useTranslations();
  const { variants } = useHeroMotionContext();

  return (
    <>
      <motion.div variants={variants.item} className="mb-[18px]">
        <span className="inline-flex items-center gap-[8px] rounded-[999px] border border-white/[0.08] bg-white/[0.03] px-[12px] py-[6px] text-[11px] font-medium tracking-[0.14em] text-fg-tertiary uppercase">
          <span className="size-[6px] rounded-full bg-accent-light shadow-[0_0_8px_rgba(168,85,247,0.85)]" />
          {t.hero.badge}
        </span>
      </motion.div>

      <motion.h1
        variants={variants.headline}
        className="text-display-hero text-left"
      >
        <span className="block">{t.hero.headlineLine1}</span>
        <span className="block">{t.hero.headlineLine2}</span>
        <span className="block bg-gradient-to-r from-[#E879F9] via-[#A855F7] to-[#7C3AED] bg-clip-text text-transparent">
          {t.hero.headlineHighlight}
        </span>
      </motion.h1>

      <motion.p
        variants={variants.item}
        className={cn(
          "mt-[22px] max-w-[46ch] text-pretty text-left text-[16px] leading-[1.7] tracking-[-0.01em] text-fg-secondary",
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
    <motion.ul
      variants={variants.item}
      className="mt-[32px] flex flex-col gap-[10px] sm:flex-row sm:flex-wrap sm:gap-x-[18px] sm:gap-y-[10px]"
    >
      {t.hero.trust.map((item) => (
        <li
          key={item}
          className="inline-flex items-center gap-[8px] text-[13px] text-fg-tertiary"
        >
          <span className="flex size-[16px] shrink-0 items-center justify-center rounded-full bg-accent/[0.15] text-accent-light">
            <Check className="size-[10px]" strokeWidth={2.75} />
          </span>
          {item}
        </li>
      ))}
    </motion.ul>
  );
}
