"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { useTranslations } from "@/i18n/context";
import { splitDisplayName } from "@/lib/name";
import { cn } from "@/lib/utils";
import type { Variants } from "framer-motion";

type HeroContentProps = {
  variants: {
    item: Variants;
    headline: Variants;
  };
};

export function HeroContent({ variants }: HeroContentProps) {
  const t = useTranslations();
  const { first, last } = splitDisplayName(siteConfig.name);

  return (
    <>
      <motion.div variants={variants.item} className="mb-[28px]">
        <span className="glass-pill font-mono-label inline-flex items-center gap-[8px] px-[12px] py-[6px] text-[10px] text-white/38">
          <span className="size-[5px] rounded-full bg-emerald-400/70 shadow-[0_0_8px_rgba(52,211,153,0.35)]" />
          {siteConfig.role}
        </span>
      </motion.div>

      <motion.h1
        variants={variants.headline}
        className={cn(
          "font-heading w-full max-w-[600px] text-balance font-medium text-white/[0.97]",
          "text-[40px] leading-[1.0] tracking-[-0.044em]",
          "min-[390px]:text-[46px] min-[390px]:leading-[1.01]",
          "sm:text-[54px] sm:tracking-[-0.048em]",
          "lg:text-[56px] xl:text-[62px] xl:tracking-[-0.05em]",
        )}
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
          "mt-[28px] max-w-[500px] text-pretty text-[15px] leading-[26px] text-white/38",
          "sm:mt-[32px] sm:text-[16px] sm:leading-[27px]",
          "lg:max-w-[460px] lg:text-[17px] lg:leading-[28px]",
        )}
      >
        {t.hero.subtitle}
      </motion.p>
    </>
  );
}
