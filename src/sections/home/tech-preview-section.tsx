"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HoverLift } from "@/components/primitives/hover-lift";
import { Section } from "@/components/primitives/section";
import { SectionHeader } from "@/components/primitives/section-header";
import { outlineButtonClass } from "@/components/primitives/button-styles";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { stackCategories } from "@/data/tech-stack";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

const previewTechIds = stackCategories.flatMap((c) => c.techIds).slice(0, 10);

export function HomeTechPreviewSection() {
  const t = useTranslations();
  const copy = t.home.techPreview;

  return (
    <Section id="tecnologias">
      <SectionHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
        titleId="home-tech-heading"
      />

      <ScrollReveal>
        <div className="mt-[40px] flex flex-wrap justify-center gap-[12px]">
          {previewTechIds.map((techId) => (
            <span
              key={techId}
              className="glass-pill px-[18px] py-[10px] text-[13px] font-medium tracking-[-0.01em] text-fg-tertiary"
            >
              {t.techStack.techs[techId].name}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <div className="mt-[36px] flex justify-center">
        <HoverLift offset={1} enableTap>
          <Button
            nativeButton={false}
            size="lg"
            variant="outline"
            className={cn(outlineButtonClass, "gap-[8px]")}
            render={<Link href="/stack" />}
          >
            {copy.cta}
            <ArrowRight className="size-[14px]" strokeWidth={1.75} />
          </Button>
        </HoverLift>
      </div>
    </Section>
  );
}
