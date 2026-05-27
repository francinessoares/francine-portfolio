"use client";

import { motion } from "framer-motion";

import { HeroContent } from "@/components/hero/hero-content";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { HeroProfileCard } from "@/components/hero/hero-profile-card";
import { HeroSocial } from "@/components/hero/hero-social";
import { HeroTechBadges } from "@/components/hero/hero-tech-badges";
import { PageBackground } from "@/components/primitives/page-background";
import {
  HeroMotionProvider,
  useHeroMotionContext,
} from "@/hooks/use-hero-motion";
import { cn } from "@/lib/utils";

function HeroContentColumn() {
  const { variants } = useHeroMotionContext();

  return (
    <motion.div
      className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left"
      variants={variants.container}
      initial="hidden"
      animate="visible"
    >
      <HeroContent />
      <HeroTechBadges />
      <HeroCtas />
      <HeroSocial />
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-safe-padding relative flex min-h-[100dvh] min-h-[100svh] items-center overflow-x-hidden"
    >
      <PageBackground variant="hero" />

      <HeroMotionProvider>
        <div className="relative z-10 mx-auto w-full max-w-[1140px]">
          <div
            className={cn(
              "grid w-full items-center gap-[52px]",
              "md:gap-[60px]",
              "lg:grid-cols-[minmax(0,1fr)_352px] lg:gap-[68px]",
              "xl:grid-cols-[minmax(0,1fr)_368px] xl:gap-[80px]",
            )}
          >
            <HeroContentColumn />
            <HeroProfileCard />
          </div>
        </div>
      </HeroMotionProvider>
    </section>
  );
}
