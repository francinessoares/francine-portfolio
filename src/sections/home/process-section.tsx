"use client";

import { Section } from "@/components/primitives/section";
import { SectionHeader } from "@/components/primitives/section-header";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { processSteps } from "@/data/projects";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

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

      <ol className="mt-[48px] grid gap-[20px] sm:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((stepId, index) => {
          const step = copy.steps[stepId];

          return (
            <ScrollReveal key={stepId} delay={index * 0.05}>
              <li
                className={cn(
                  "relative h-full rounded-[10px] border border-border-default bg-surface-card p-[24px]",
                )}
              >
                <span className="text-label text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-card-title mt-[16px]">{step.title}</h3>
                <p className="text-card-desc mt-[8px]">{step.description}</p>
              </li>
            </ScrollReveal>
          );
        })}
      </ol>
    </Section>
  );
}
