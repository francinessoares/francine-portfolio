"use client";

import { HeroContent, HeroTrust } from "@/components/hero/hero-content";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { HeroMobile } from "@/components/hero/hero-mobile";
import {
  HeroShowcase,
  SHOWROOM_DESKTOP,
  SHOWROOM_MOBILE,
} from "@/components/hero/hero-showcase";
import { PageBackground } from "@/components/primitives/page-background";
import {
  HeroMotionProvider,
  useHeroMotionContext,
} from "@/hooks/use-hero-motion";
import { useIsDesktop } from "@/hooks/use-media-query";
import { motion } from "framer-motion";

function HeroDesktop() {
  return (
    <div className="grid items-start gap-[40px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] lg:gap-[20px] xl:gap-[28px]">
      <div className="min-w-0 text-left">
        <HeroContent />
        <HeroCtas />
        <HeroTrust />
      </div>
      <div className="relative min-w-0 overflow-visible lg:w-full lg:justify-self-stretch">
        <HeroShowcase variant="desktop" />
      </div>
    </div>
  );
}

function HeroInner() {
  const isDesktop = useIsDesktop();
  const { variants } = useHeroMotionContext();

  return (
    <motion.div
      variants={variants.container}
      initial="hidden"
      animate="visible"
    >
      {isDesktop === true ? <HeroDesktop /> : <HeroMobile />}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-safe-padding relative flex items-start overflow-x-hidden pb-[64px] sm:pb-[80px]"
    >
      <link
        rel="preload"
        as="image"
        href={SHOWROOM_MOBILE}
        media="(max-width: 1023px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href={SHOWROOM_DESKTOP}
        media="(min-width: 1024px)"
        fetchPriority="high"
      />
      <PageBackground variant="hero" />

      <HeroMotionProvider>
        <div className="layout-rail relative z-10 mx-auto w-full">
          <HeroInner />
        </div>
      </HeroMotionProvider>
    </section>
  );
}
