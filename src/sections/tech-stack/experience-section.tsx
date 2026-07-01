"use client";

import { GlassCard } from "@/components/primitives/glass-card";
import { SectionHeader } from "@/components/primitives/section-header";
import { ExperienceListItem } from "@/components/tech-stack/experience-list-item";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const t = useTranslations();
  const copy = t.techStack.experience;

  return (
    <section className="pb-[120px] sm:pb-[140px]">
      <ScrollReveal>
        <GlassCard variant="experience" topLine="bright">
          <div className="absolute -top-[120px] left-1/2 h-[240px] w-[400px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(155,168,196,0.06)_0%,transparent_70%)] blur-[60px]" />

          <div className="relative px-[24px] py-[32px] sm:px-[40px] sm:py-[44px]">
            <SectionHeader
              eyebrow={copy.eyebrow}
              title={copy.title}
              align="left"
            />

            <ul className="mt-[32px] flex flex-col gap-[14px]">
              {copy.highlights.map((item, index) => (
                <ExperienceListItem key={item} index={index}>
                  {item}
                </ExperienceListItem>
              ))}
            </ul>

            <p
              className={cn(
                "text-label-ghost mt-[28px]",
                "sm:mt-[32px]",
              )}
            >
              {copy.systemsTitle}
            </p>

            <ul className="mt-[16px] flex flex-col gap-[12px]">
              {copy.systems.map((item, index) => (
                <ExperienceListItem
                  key={item}
                  index={copy.highlights.length + index}
                  variant="domain"
                >
                  {item}
                </ExperienceListItem>
              ))}
            </ul>
          </div>
        </GlassCard>
      </ScrollReveal>
    </section>
  );
}
