"use client";

import { Section } from "@/components/primitives/section";
import { SectionHeader } from "@/components/primitives/section-header";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { clientIndustries } from "@/data/clients";
import { useTranslations } from "@/i18n/context";

export function HomeClientsSection() {
  const t = useTranslations();
  const copy = t.home.clients;

  return (
    <Section id="clientes" bordered={false} className="!pb-[48px] !pt-[48px] sm:!pb-[64px] sm:!pt-[64px]">
      <SectionHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        align="center"
        titleId="home-clients-heading"
        showDot={false}
      />

      <div className="mt-[32px] flex flex-wrap items-center justify-center gap-[12px]">
        {clientIndustries.map((id, index) => (
          <ScrollReveal key={id} delay={index * 0.04}>
            <span className="glass-pill px-[18px] py-[10px] text-[13px] font-medium tracking-[-0.01em] text-fg-tertiary">
              {copy.items[id]}
            </span>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
