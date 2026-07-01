"use client";

import { motion } from "framer-motion";

import { HeroContent } from "@/components/hero/hero-content";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { HeroProfileCard } from "@/components/hero/hero-profile-card";
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
      className={cn(
        "flex min-w-0 flex-col items-center text-center",
        "lg:items-start lg:text-left",
      )}
      variants={variants.container}
      initial="hidden"
      animate="visible"
    >
      <HeroContent />
      <HeroCtas />
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-safe-padding relative flex min-h-[92dvh] items-center overflow-x-hidden"
    >
      <PageBackground variant="hero" />

      <HeroMotionProvider>
        <div className="relative z-10 mx-auto w-full max-w-[1180px]">
          <div
            className={cn(
              "grid w-full items-center gap-[48px]",
              "md:gap-[56px]",
              "lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-[64px]",
            )}
          >
            <HeroContentColumn />
            <HeroProfileCard className="mx-auto lg:mt-[12px] lg:justify-self-end" />
          </div>
        </div>
      </HeroMotionProvider>
    </section>
  );
}
