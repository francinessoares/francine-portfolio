"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";
import { GlassCard } from "@/components/primitives/glass-card";
import { HoverLift } from "@/components/primitives/hover-lift";
import { SectionHeader } from "@/components/primitives/section-header";
import {
  outlineButtonClass,
} from "@/components/primitives/button-styles";
import { Button } from "@/components/ui/button";
import { MetricList } from "@/components/primitives/metric-list";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function AboutPageContent() {
  const t = useTranslations();
  const hero = t.about;
  const metrics = Object.values(t.profileCard.metrics);

  return (
    <PageShell>
      <div className="pb-[80px] pt-[32px] sm:pt-[48px]">
        <header className="mx-auto max-w-[640px] pb-[48px] text-center sm:pb-[64px]">
          <SectionHeader
            as="h1"
            eyebrow={hero.hero.eyebrow}
            title={hero.hero.title}
            subtitle={hero.hero.subtitle}
            align="center"
            titleId="about-heading"
          />
        </header>

        <ScrollReveal>
          <GlassCard variant="experience" className="mx-auto max-w-[720px]">
            <div className="px-[24px] py-[32px] sm:px-[40px] sm:py-[40px]">
              <h2 className="text-display-compact">{hero.approach.title}</h2>
              <div className="mt-[24px] flex flex-col gap-[16px]">
                {hero.approach.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-body-section text-left"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-[32px] border-t border-white/[0.05] pt-[24px]">
                <MetricList items={metrics} />
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

        <div className="mt-[40px] flex justify-center">
          <HoverLift offset={1} enableTap>
            <Button
              nativeButton={false}
              size="lg"
              variant="outline"
              className={cn(outlineButtonClass, "gap-[8px]")}
              render={<Link href="/stack" />}
            >
              {hero.viewStack}
              <ArrowRight
                className="size-[14px] transition-transform duration-300 group-hover/button:translate-x-[2px]"
                strokeWidth={1.75}
              />
            </Button>
          </HoverLift>
        </div>
      </div>
    </PageShell>
  );
}
