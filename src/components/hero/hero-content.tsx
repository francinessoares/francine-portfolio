"use client";

import { motion } from "framer-motion";

import { Eyebrow } from "@/components/primitives/eyebrow";
import { siteConfig } from "@/config/site";
import { useHeroMotionContext } from "@/hooks/use-hero-motion";
import { useTranslations } from "@/i18n/context";
import { splitDisplayName } from "@/lib/name";
import { cn } from "@/lib/utils";

export function HeroContent() {
  const t = useTranslations();
  const { variants } = useHeroMotionContext();
  const { first, last } = splitDisplayName(siteConfig.name);

  return (
    <>
      <motion.div variants={variants.item} className="mb-[28px]">
        <Eyebrow dot="emerald">{siteConfig.role}</Eyebrow>
      </motion.div>

      <motion.h1
        variants={variants.headline}
        className="text-display-hero max-w-[600px]"
      >
        <span className="block">{first}</span>
        {last ? (
          <span className="text-gradient-display mt-[2px] block sm:mt-[4px]">
            {last}
          </span>
        ) : null}
      </motion.h1>

      <motion.p
        variants={variants.item}
        className={cn(
          "text-body-hero mt-[28px] max-w-[500px]",
          "sm:mt-[32px]",
          "lg:max-w-[460px] lg:text-[17px] lg:leading-[28px]",
        )}
      >
        {t.hero.subtitle}
      </motion.p>
    </>
  );
}
