"use client";

import { motion } from "framer-motion";

import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

import { ease, useMotionPrefs } from "@/lib/motion";

export function TechStackHero() {
  const t = useTranslations();
  const { reducedMotion } = useMotionPrefs();

  return (
    <section className="relative pt-[72px] pb-[64px] sm:pt-[88px] sm:pb-[80px]">
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="mx-auto max-w-[720px] text-center"
      >
        <span className="glass-pill font-mono-label inline-flex items-center gap-[8px] px-[12px] py-[6px] text-[10px] text-white/38">
          <span className="size-[5px] rounded-full bg-violet-400/70 shadow-[0_0_8px_rgba(167,139,250,0.35)]" />
          {t.techStack.hero.eyebrow}
        </span>
        <h2
          id="stack-heading"
          className={cn(
            "font-heading mt-[24px] text-balance font-medium text-white/[0.97]",
            "text-[36px] leading-[1.05] tracking-[-0.042em]",
            "sm:text-[48px] sm:tracking-[-0.048em]",
            "lg:text-[56px] lg:tracking-[-0.05em]",
          )}
        >
          <span className="text-gradient-display">{t.techStack.hero.title}</span>
        </h2>
        <ScrollReveal delay={0.1}>
          <p
            className={cn(
              "mx-auto mt-[24px] max-w-[560px] text-pretty text-[15px] leading-[26px] text-white/38",
              "sm:mt-[28px] sm:text-[16px] sm:leading-[27px]",
            )}
          >
            {t.techStack.hero.subtitle}
          </p>
        </ScrollReveal>
      </motion.div>
    </section>
  );
}
