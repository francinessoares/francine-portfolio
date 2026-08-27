"use client";

import { GlassCard } from "@/components/primitives/glass-card";
import { IconBox } from "@/components/primitives/icon-box";
import { Section } from "@/components/primitives/section";
import { SectionHeader } from "@/components/primitives/section-header";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { benefits } from "@/data/benefits";
import { useTranslations } from "@/i18n/context";

export function HomeBenefitsSection() {
  const t = useTranslations();
  const copy = t.home.benefits;

  return (
    <Section id="beneficios">
      <SectionHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
        titleId="home-benefits-heading"
      />

      <div className="mt-[48px] grid gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => {
          const item = copy.items[benefit.id];

          return (
            <ScrollReveal key={benefit.id} delay={index * 0.05}>
              <GlassCard variant="expertise" className="h-full p-[24px] sm:p-[28px]">
                <IconBox icon={benefit.icon} size="md" />
                <h3 className="text-card-title mt-[16px]">{item.title}</h3>
                <p className="text-card-desc mt-[8px]">{item.description}</p>
              </GlassCard>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
