"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { GlassCard } from "@/components/primitives/glass-card";
import { HoverLift } from "@/components/primitives/hover-lift";
import { primaryButtonClass } from "@/components/primitives/button-styles";
import { Section } from "@/components/primitives/section";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function HomeBeyondSection() {
  const t = useTranslations();
  const copy = t.home.beyond;

  return (
    <Section id="alem-do-site" bordered={false}>
      <ScrollReveal>
        <GlassCard variant="experience" topLine="bright">
          <div className="relative px-[28px] py-[48px] text-center sm:px-[56px] sm:py-[64px]">
            <p className="text-[12px] font-semibold tracking-[0.18em] text-accent-light uppercase">
              {copy.eyebrow}
            </p>
            <h2
              id="home-beyond-heading"
              className="text-display-section mx-auto mt-[16px] max-w-[18ch] text-balance"
            >
              {copy.title}
            </h2>
            <p className="text-subtitle mx-auto mt-[16px] max-w-[52ch]">
              {copy.subtitle}
            </p>
            <div className="mt-[32px] flex justify-center">
              <HoverLift offset={1} enableTap>
                <Button
                  nativeButton={false}
                  size="lg"
                  className={cn(primaryButtonClass, "gap-[8px]")}
                  render={
                    <Link href="/contato?assunto=Projeto%20personalizado" />
                  }
                >
                  {copy.cta}
                  <ArrowRight className="size-[15px]" strokeWidth={1.75} />
                </Button>
              </HoverLift>
            </div>
          </div>
        </GlassCard>
      </ScrollReveal>
    </Section>
  );
}
