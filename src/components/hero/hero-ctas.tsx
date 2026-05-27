"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { HeroCvDownloadLink } from "@/components/hero/hero-cv-download-link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/i18n/context";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Variants } from "framer-motion";

const primaryButtonClass = cn(
  "transition-premium h-[42px] w-full rounded-[10px] border-0 px-[22px]",
  "bg-white text-[13px] font-medium tracking-[-0.015em] text-surface",
  "shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_4px_24px_rgba(255,255,255,0.06)]",
  "hover:bg-zinc-50 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_8px_32px_rgba(255,255,255,0.1)]",
  "sm:min-w-[140px] sm:w-auto",
);

const outlineButtonClass = cn(
  "glass-pill transition-premium h-[42px] w-full rounded-[10px] border-white/[0.07] px-[22px]",
  "bg-white/[0.025] text-[13px] font-medium tracking-[-0.015em] text-white/70",
  "hover:border-white/[0.11] hover:bg-white/[0.045] hover:text-white/90",
  "sm:min-w-[140px] sm:w-auto",
);

type HeroCtasProps = {
  reducedMotion: boolean;
  variants: { item: Variants };
};

function CtaWrapper({
  reducedMotion,
  children,
}: {
  reducedMotion: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="w-full sm:w-auto"
      whileHover={reducedMotion ? {} : { y: -1 }}
      whileTap={reducedMotion ? {} : { scale: 0.985 }}
      transition={spring}
    >
      {children}
    </motion.div>
  );
}

export function HeroCtas({ reducedMotion, variants }: HeroCtasProps) {
  const t = useTranslations();

  return (
    <motion.div
      variants={variants.item}
      className={cn(
        "mt-[40px] flex w-full max-w-[360px] flex-col gap-[10px]",
        "sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-[10px]",
        "lg:mt-[44px] lg:justify-start",
      )}
    >
      <CtaWrapper reducedMotion={reducedMotion}>
        <Button
          nativeButton={false}
          size="lg"
          className={primaryButtonClass}
          render={<a href="#stack" />}
        >
          {t.hero.viewWork}
          <ArrowRight
            className="size-[14px] transition-transform duration-300 group-hover/button:translate-x-[2px]"
            strokeWidth={1.75}
          />
        </Button>
      </CtaWrapper>

      <CtaWrapper reducedMotion={reducedMotion}>
        <Button
          nativeButton={false}
          size="lg"
          variant="outline"
          className={cn(outlineButtonClass, "gap-[8px]")}
          render={<HeroCvDownloadLink />}
        >
          {t.hero.downloadCv}
          <Download className="size-[14px]" strokeWidth={1.75} />
        </Button>
      </CtaWrapper>

      <CtaWrapper reducedMotion={reducedMotion}>
        <Button
          nativeButton={false}
          size="lg"
          variant="outline"
          className={outlineButtonClass}
          render={<a href={`mailto:${siteConfig.email}`} />}
        >
          {t.hero.getInTouch}
        </Button>
      </CtaWrapper>
    </motion.div>
  );
}
