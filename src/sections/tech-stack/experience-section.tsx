"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { experienceIds } from "@/data/tech-stack";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

import { ease, useMotionPrefs } from "@/lib/motion";

export function ExperienceSection() {
  const t = useTranslations();
  const { reducedMotion } = useMotionPrefs();
  const copy = t.techStack.experience;

  return (
    <section className="pb-[120px] sm:pb-[140px]">
      <ScrollReveal>
        <div
          className={cn(
            "glass-panel relative mx-auto max-w-[720px] overflow-hidden rounded-[14px]",
            "shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_32px_64px_-32px_rgba(0,0,0,0.55)]",
          )}
        >
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.14] to-transparent" />
          <div className="absolute -top-[120px] left-1/2 h-[240px] w-[400px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_70%)] blur-[60px]" />

          <div className="relative px-[24px] py-[32px] sm:px-[40px] sm:py-[44px]">
            <span className="font-mono-label text-[10px] text-white/30">
              {copy.eyebrow}
            </span>
            <h2
              className={cn(
                "font-heading mt-[10px] text-[24px] font-medium tracking-[-0.038em] text-white/[0.95]",
                "sm:text-[32px] sm:tracking-[-0.042em]",
              )}
            >
              {copy.title}
            </h2>

            <ul className="mt-[32px] flex flex-col gap-[14px]">
              {experienceIds.map((id, index) => (
                <motion.li
                  key={id}
                  className="flex items-start gap-[14px]"
                  initial={reducedMotion ? {} : { opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={
                    reducedMotion
                      ? { duration: 0 }
                      : { duration: 0.6, delay: index * 0.08, ease }
                  }
                >
                  <span
                    className={cn(
                      "mt-[2px] flex size-[22px] shrink-0 items-center justify-center rounded-full",
                      "border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-400/80",
                    )}
                  >
                    <Check className="size-[12px]" strokeWidth={2} />
                  </span>
                  <span className="text-[15px] leading-[24px] tracking-[-0.01em] text-white/62 sm:text-[16px]">
                    {copy.items[id]}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
