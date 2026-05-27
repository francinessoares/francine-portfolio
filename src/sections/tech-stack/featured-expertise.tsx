"use client";

import {
  Gauge,
  LayoutGrid,
  Layers,
  Lightbulb,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

import { GlassCard } from "@/components/primitives/glass-card";
import { HoverLift } from "@/components/primitives/hover-lift";
import { IconBox } from "@/components/primitives/icon-box";
import { SectionHeader } from "@/components/primitives/section-header";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { expertiseIds, type ExpertiseId } from "@/data/tech-stack";
import { useTranslations } from "@/i18n/context";

const expertiseIcons: Record<ExpertiseId, LucideIcon> = {
  architecture: Layers,
  designSystems: LayoutGrid,
  performance: Gauge,
  responsive: MonitorSmartphone,
  productThinking: Lightbulb,
};

export function FeaturedExpertise() {
  const t = useTranslations();
  const copy = t.techStack.featured;

  return (
    <section className="py-[80px] sm:py-[96px]">
      <ScrollReveal>
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          subtitle={copy.subtitle}
        />
      </ScrollReveal>

      <div className="mt-[48px] grid gap-[12px] sm:grid-cols-2 lg:grid-cols-3">
        {expertiseIds.map((id, index) => {
          const item = copy.items[id];
          const Icon = expertiseIcons[id];

          return (
            <ScrollReveal key={id} delay={index * 0.05}>
              <HoverLift as="article" offset={3} className="h-full">
                <GlassCard variant="expertise" topLine={false} className="h-full p-[22px]">
                  <IconBox icon={Icon} />
                  <h3 className="mt-[18px] text-[16px] font-medium tracking-[-0.025em] text-white/90">
                    {item.title}
                  </h3>
                  <p className="mt-[8px] text-[13px] leading-[21px] text-white/36">
                    {item.description}
                  </p>
                </GlassCard>
              </HoverLift>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
