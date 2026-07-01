"use client";

import { motion } from "framer-motion";

import { HeroContent } from "@/components/hero/hero-content";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { PageBackground } from "@/components/primitives/page-background";
import {
  HeroMotionProvider,
  useHeroMotionContext,
} from "@/hooks/use-hero-motion";

function HeroContentColumn() {
  const { variants } = useHeroMotionContext();

  return (
    <motion.div
      className="mx-auto flex max-w-[720px] flex-col items-center text-center"
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
        <div className="relative z-10 mx-auto w-full max-w-[1080px]">
          <HeroContentColumn />
        </div>
      </HeroMotionProvider>
    </section>
  );
}
