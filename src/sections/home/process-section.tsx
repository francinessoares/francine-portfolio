"use client";

import { Section } from "@/components/primitives/section";
import { SectionHeader } from "@/components/primitives/section-header";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { processSteps } from "@/data/projects";
import { useTranslations } from "@/i18n/context";

export function HomeProcessSection() {
  const t = useTranslations();
  const copy = t.home.process;

  return (
    <Section id="processo">
      <SectionHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
        titleId="home-process-heading"
      />

      <ol className="mt-[48px] grid gap-[20px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[24px]">
        {processSteps.map((stepId, index) => {
          const step = copy.steps[stepId];
          const isLast = index === processSteps.length - 1;

          return (
            <ScrollReveal key={stepId} delay={index * 0.05}>
              <li className="relative h-full">
                <div className="h-full rounded-[10px] border border-border-default bg-surface-card p-[24px]">
                  <div className="flex items-center gap-[12px]">
                    <span className="flex size-[32px] items-center justify-center rounded-full border border-accent/25 bg-accent/[0.08] text-[12px] font-semibold tracking-[0.04em] text-accent-light">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {!isLast ? (
                      <span
                        className="hidden h-[1px] flex-1 bg-gradient-to-r from-accent/30 to-transparent lg:block"
                        aria-hidden
                      />
                    ) : null}
                  </div>
                  <h3 className="text-card-title mt-[16px]">{step.title}</h3>
                  <p className="text-card-desc mt-[8px]">{step.description}</p>
                </div>
              </li>
            </ScrollReveal>
          );
        })}
      </ol>
    </Section>
  );
}
