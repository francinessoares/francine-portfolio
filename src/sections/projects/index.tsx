"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";
import { GlassCard } from "@/components/primitives/glass-card";
import { HoverLift } from "@/components/primitives/hover-lift";
import { SectionHeader } from "@/components/primitives/section-header";
import { outlineButtonClass } from "@/components/primitives/button-styles";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function ProjectsPageContent() {
  const t = useTranslations();
  const hero = t.projects.hero;
  const domains = t.projects.domains;
  const cta = t.projects.cta;

  return (
    <PageShell>
      <div className="pb-[80px] pt-[32px] sm:pt-[48px]">
        <header className="mx-auto max-w-[640px] pb-[48px] text-center sm:pb-[64px]">
          <SectionHeader
            eyebrow={hero.eyebrow}
            title={hero.title}
            subtitle={hero.subtitle}
            align="center"
            titleId="projects-heading"
          />
        </header>

        <section aria-labelledby="domains-heading">
          <ScrollReveal>
            <h2
              id="domains-heading"
              className="text-display-compact text-center"
            >
              {domains.title}
            </h2>
          </ScrollReveal>

          <div className="mt-[32px] flex flex-col gap-[16px] sm:gap-[20px]">
            {domains.items.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.05}>
                <GlassCard variant="expertise" className="p-[24px] sm:p-[28px]">
                  <h3 className="text-card-title-lg">{item.title}</h3>
                  <p className="text-card-desc mt-[8px]">{item.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="mt-[56px] text-center sm:mt-[72px]">
          <p className="text-body-section">{cta.title}</p>
          <div className="mt-[20px] flex justify-center">
            <HoverLift offset={1} enableTap>
              <Button
                nativeButton={false}
                size="lg"
                variant="outline"
                className={cn(outlineButtonClass, "gap-[8px]")}
                render={<Link href="/stack" />}
              >
                {cta.button}
                <ArrowRight
                  className="size-[14px] transition-transform duration-300 group-hover/button:translate-x-[2px]"
                  strokeWidth={1.75}
                />
              </Button>
            </HoverLift>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
