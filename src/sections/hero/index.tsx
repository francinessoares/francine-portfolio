"use client";

import {
  CalendarDays,
  Code2,
  FolderKanban,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

import { HeroContent, HeroTrust } from "@/components/hero/hero-content";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { HeroShowcase } from "@/components/hero/hero-showcase";
import { PageBackground } from "@/components/primitives/page-background";
import {
  HeroMotionProvider,
  useHeroMotionContext,
} from "@/hooks/use-hero-motion";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

const statIcons = [CalendarDays, FolderKanban, Code2, Smartphone, Sparkles] as const;

function HeroStats() {
  const t = useTranslations();
  const { variants } = useHeroMotionContext();

  return (
    <motion.div
      variants={variants.item}
      className="mt-[20px] overflow-hidden rounded-[16px] border border-white/[0.08] bg-white/[0.02] backdrop-blur-[12px] sm:mt-[24px] lg:-mt-[8px] xl:-mt-[16px]"
    >
      <div className="grid gap-[0] sm:grid-cols-2 lg:grid-cols-5">
        {t.hero.stats.map((stat, index) => {
          const Icon = statIcons[index] ?? Sparkles;
          return (
            <div
              key={`${stat.label}-${index}`}
              className={cn(
                "flex items-start gap-[12px] px-[18px] py-[18px]",
                index < t.hero.stats.length - 1 &&
                  "border-b border-white/[0.06] lg:border-r lg:border-b-0",
              )}
            >
              <span className="mt-[2px] flex size-[28px] shrink-0 items-center justify-center rounded-[8px] border border-accent/20 bg-accent/[0.08] text-accent-light">
                <Icon className="size-[14px]" strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <p className="text-[13px] font-medium leading-[1.35] tracking-[-0.01em] text-fg-primary">
                  {stat.label}
                </p>
                <p className="mt-[2px] text-[12px] leading-[1.35] text-fg-muted">
                  {stat.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function HeroInner() {
  const { variants } = useHeroMotionContext();

  return (
    <motion.div
      variants={variants.container}
      initial="hidden"
      animate="visible"
    >
      <div className="grid items-start gap-[40px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] lg:gap-[20px] xl:gap-[28px]">
        <div className="min-w-0 text-left">
          <HeroContent />
          <HeroCtas />
          <HeroTrust />
        </div>
        <div className="relative min-w-0 overflow-visible lg:w-full lg:justify-self-stretch">
          <HeroShowcase />
        </div>
      </div>
      <HeroStats />
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-safe-padding relative flex items-start overflow-x-hidden pb-[64px] sm:pb-[80px]"
    >
      <PageBackground variant="hero" />

      <HeroMotionProvider>
        <div className="layout-rail relative z-10 mx-auto w-full">
          <HeroInner />
        </div>
      </HeroMotionProvider>
    </section>
  );
}
