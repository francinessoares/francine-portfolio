"use client";

import { motion } from "framer-motion";

import { Eyebrow } from "@/components/primitives/eyebrow";
import { useHeroMotionContext } from "@/hooks/use-hero-motion";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function HeroContent() {
  const t = useTranslations();
  const { variants } = useHeroMotionContext();

  return (
    <>
      <motion.div variants={variants.item} className="mb-[20px]">
        <Eyebrow dot="accent">{t.hero.role}</Eyebrow>
      </motion.div>

      <motion.h1
        variants={variants.headline}
        className="text-display-hero"
      >
        {t.hero.headline}
      </motion.h1>

      <motion.p
        variants={variants.item}
        className={cn("text-subtitle mt-[24px] max-w-[600px]")}
      >
        {t.hero.subtitle}
      </motion.p>
    </>
  );
}
