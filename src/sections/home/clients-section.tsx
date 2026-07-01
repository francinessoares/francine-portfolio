"use client";

import { Section } from "@/components/primitives/section";
import { SectionHeader } from "@/components/primitives/section-header";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { clientIndustries } from "@/data/clients";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

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

      <ScrollReveal>
        <div
          className={cn(
            "mt-[32px] flex flex-col items-center gap-[12px]",
            "sm:flex-row sm:flex-wrap sm:justify-center",
          )}
        >
          {clientIndustries.map((id) => (
            <span
              key={id}
              className="glass-pill inline-flex w-full max-w-[360px] items-center justify-center px-[18px] py-[10px] text-center text-[13px] font-medium tracking-[-0.01em] text-fg-tertiary sm:w-auto sm:max-w-none"
            >
              {copy.items[id]}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}
