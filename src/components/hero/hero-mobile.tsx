"use client";

import { ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import { HeroShowcase } from "@/components/hero/hero-showcase";
import { HoverLift } from "@/components/primitives/hover-lift";
import {
  outlineButtonClass,
  primaryButtonClass,
} from "@/components/primitives/button-styles";
import { Button } from "@/components/ui/button";
import { useHeroMotionContext } from "@/hooks/use-hero-motion";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function HeroMobile() {
  const t = useTranslations();
  const { variants } = useHeroMotionContext();
  const [m1, m2, m3, m4] = t.hero.headlineMobile;

  return (
    <div className="flex flex-col items-center lg:hidden">
      <motion.div variants={variants.item} className="mb-[24px]">
        <div className="inline-flex items-start justify-center gap-[10px] text-left">
          <span className="mt-[7px] size-[8px] shrink-0 rounded-full bg-accent-light shadow-[0_0_10px_rgba(168,85,247,0.9)]" />
          <div className="min-w-0 leading-[1.25]">
            <p className="text-[14px] font-semibold tracking-[-0.01em] text-fg-primary">
              {t.hero.badgeRole}
            </p>
            <p className="mt-[4px] text-[13px] text-fg-muted">
              {t.hero.badgeExperience}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.h1
        variants={variants.headline}
        className="text-center text-[36px] leading-[1.1] font-semibold tracking-[-0.04em] text-fg-primary sm:text-[42px]"
      >
        <span className="block">{m1}</span>
        <span className="block">{m2}</span>
        <span className="block">{m3}</span>
        <span className="block bg-gradient-to-r from-[#E879F9] via-[#A855F7] to-[#7C3AED] bg-clip-text text-transparent">
          {m4}
        </span>
      </motion.h1>

      <motion.p
        variants={variants.item}
        className="mt-[20px] max-w-[34ch] text-center text-pretty text-[15px] leading-[1.65] tracking-[-0.01em] text-fg-secondary"
      >
        {t.hero.subtitleMobile}
      </motion.p>

      <motion.div variants={variants.item} className="mt-[28px] w-full">
        <HeroShowcase variant="mobile" />
      </motion.div>

      <motion.div
        variants={variants.item}
        className="mt-[28px] flex w-full flex-col gap-[12px]"
      >
        <HoverLift offset={1} className="w-full" enableTap>
          <Button
            nativeButton={false}
            size="lg"
            className={cn(
              primaryButtonClass,
              "h-[52px] w-full gap-[8px] rounded-[12px] text-[15px] sm:min-w-0",
            )}
            render={<Link href="/contato" />}
          >
            {t.hero.primaryCta}
            <Send className="size-[15px]" strokeWidth={1.75} />
          </Button>
        </HoverLift>

        <HoverLift offset={1} className="w-full" enableTap>
          <Button
            nativeButton={false}
            size="lg"
            variant="outline"
            className={cn(
              outlineButtonClass,
              "h-[52px] w-full gap-[8px] rounded-[12px] border-white/[0.14] text-[15px] text-fg-primary sm:min-w-0",
            )}
            render={<Link href="/#servicos" />}
          >
            {t.hero.secondaryCta}
            <ArrowRight className="size-[15px]" strokeWidth={1.75} />
          </Button>
        </HoverLift>
      </motion.div>

      <motion.p
        variants={variants.item}
        className="mt-[36px] max-w-[36ch] text-center text-[13px] leading-[1.6] text-fg-tertiary"
      >
        {t.hero.trust.join(" • ")}
      </motion.p>
    </div>
  );
}
