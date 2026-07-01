"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/primitives/section-header";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { useTranslations } from "@/i18n/context";
import { ease, useMotionPrefs } from "@/lib/motion";

export function TechStackHero() {
  const t = useTranslations();
  const { reducedMotion } = useMotionPrefs();
  const copy = t.techStack.hero;

  return (
    <section className="relative pt-[72px] pb-[64px] sm:pt-[88px] sm:pb-[80px]">
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="mx-auto max-w-[720px]"
      >
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          titleId="stack-heading"
          titleGradient
        />
        <ScrollReveal delay={0.1}>
          <p className="text-subtitle mx-auto mt-[24px] max-w-[560px] text-center">
            {copy.subtitle}
          </p>
        </ScrollReveal>
      </motion.div>
    </section>
  );
}
