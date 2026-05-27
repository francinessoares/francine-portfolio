"use client";

import { GlassCard } from "@/components/primitives/glass-card";
import { SectionHeader } from "@/components/primitives/section-header";
import { ExperienceListItem } from "@/components/tech-stack/experience-list-item";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { experienceIds } from "@/data/tech-stack";
import { useTranslations } from "@/i18n/context";

export function ExperienceSection() {
  const t = useTranslations();
  const copy = t.techStack.experience;

  return (
    <section className="pb-[120px] sm:pb-[140px]">
      <ScrollReveal>
        <GlassCard variant="experience" topLine="bright">
          <div className="absolute -top-[120px] left-1/2 h-[240px] w-[400px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_70%)] blur-[60px]" />

          <div className="relative px-[24px] py-[32px] sm:px-[40px] sm:py-[44px]">
            <SectionHeader
              eyebrow={copy.eyebrow}
              title={copy.title}
              align="left"
              size="compact"
            />

            <ul className="mt-[32px] flex flex-col gap-[14px]">
              {experienceIds.map((id, index) => (
                <ExperienceListItem key={id} index={index}>
                  {copy.items[id]}
                </ExperienceListItem>
              ))}
            </ul>
          </div>
        </GlassCard>
      </ScrollReveal>
    </section>
  );
}
