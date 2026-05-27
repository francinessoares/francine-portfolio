"use client";

import {
  Gauge,
  LayoutGrid,
  Layers,
  Lightbulb,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { expertiseIds, type ExpertiseId } from "@/data/tech-stack";
import { useTranslations } from "@/i18n/context";
import { ease, useMotionPrefs } from "@/lib/motion";
import { cn } from "@/lib/utils";

const expertiseIcons: Record<ExpertiseId, LucideIcon> = {
  architecture: Layers,
  designSystems: LayoutGrid,
  performance: Gauge,
  responsive: MonitorSmartphone,
  productThinking: Lightbulb,
};

export function FeaturedExpertise() {
  const t = useTranslations();
  const { reducedMotion } = useMotionPrefs();
  const copy = t.techStack.featured;

  return (
    <section className="py-[80px] sm:py-[96px]">
      <ScrollReveal>
        <div className="mx-auto max-w-[560px] text-center">
          <span className="font-mono-label text-[10px] text-white/30">
            {copy.eyebrow}
          </span>
          <h2
            className={cn(
              "font-heading mt-[12px] text-[28px] font-medium tracking-[-0.04em] text-white/[0.95]",
              "sm:text-[36px] sm:tracking-[-0.045em]",
            )}
          >
            {copy.title}
          </h2>
          <p className="mt-[14px] text-[14px] leading-[24px] text-white/36 sm:text-[15px]">
            {copy.subtitle}
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-[48px] grid gap-[12px] sm:grid-cols-2 lg:grid-cols-3">
        {expertiseIds.map((id, index) => {
          const item = copy.items[id];
          const Icon = expertiseIcons[id];

          return (
            <ScrollReveal key={id} delay={index * 0.05}>
              <motion.article
                className={cn(
                  "glass-panel group transition-premium h-full rounded-[12px] p-[22px]",
                  "hover:border-white/[0.1]",
                  "shadow-[0_0_0_1px_rgba(255,255,255,0.03)]",
                  "hover:shadow-[0_0_40px_-16px_rgba(139,92,246,0.12)]",
                )}
                whileHover={reducedMotion ? {} : { y: -3 }}
                transition={{ duration: 0.35, ease }}
              >
                <span
                  className={cn(
                    "flex size-[40px] items-center justify-center rounded-[10px]",
                    "border border-white/[0.07] bg-white/[0.03] text-white/45",
                    "transition-premium group-hover:border-white/[0.12] group-hover:text-white/70",
                  )}
                >
                  <Icon className="size-[18px]" strokeWidth={1.5} />
                </span>
                <h3 className="mt-[18px] text-[16px] font-medium tracking-[-0.025em] text-white/90">
                  {item.title}
                </h3>
                <p className="mt-[8px] text-[13px] leading-[21px] text-white/36">
                  {item.description}
                </p>
              </motion.article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
