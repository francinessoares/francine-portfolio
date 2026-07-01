"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { GlassCard } from "@/components/primitives/glass-card";
import { HoverLift } from "@/components/primitives/hover-lift";
import { Section } from "@/components/primitives/section";
import { SectionHeader } from "@/components/primitives/section-header";
import { outlineButtonClass } from "@/components/primitives/button-styles";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { homeServices } from "@/data/home-services";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function HomeServicesSection() {
  const t = useTranslations();
  const copy = t.home.services;

  return (
    <Section id="servicos" bordered={false}>
      <SectionHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
        titleId="home-services-heading"
      />

      <div className="mt-[48px] grid gap-[16px] sm:grid-cols-2">
        {homeServices.map((service, index) => {
          const item = copy.items[service.id];

          return (
            <ScrollReveal key={service.id} delay={index * 0.06}>
              <GlassCard
                variant="expertise"
                className="h-full p-[28px]"
              >
                <h3 className="text-card-title-lg">{item.title}</h3>
                <p className="text-card-desc mt-[10px]">{item.description}</p>
              </GlassCard>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="mt-[40px] flex justify-center">
        <HoverLift offset={1} enableTap>
          <Button
            nativeButton={false}
            size="lg"
            variant="outline"
            className={cn(outlineButtonClass, "gap-[8px]")}
            render={<Link href="/servicos" />}
          >
            {copy.cta}
            <ArrowRight className="size-[14px]" strokeWidth={1.75} />
          </Button>
        </HoverLift>
      </div>
    </Section>
  );
}
