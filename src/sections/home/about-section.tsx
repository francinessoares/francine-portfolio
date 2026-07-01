"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HoverLift } from "@/components/primitives/hover-lift";
import { Section } from "@/components/primitives/section";
import { SectionHeader } from "@/components/primitives/section-header";
import {
  outlineButtonClass,
} from "@/components/primitives/button-styles";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function HomeAboutSection() {
  const t = useTranslations();
  const copy = t.home.about;

  return (
    <Section id="sobre">
      <div className="grid items-start gap-[48px] lg:grid-cols-[1fr_1.1fr] lg:gap-[64px]">
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          subtitle={copy.subtitle}
          align="left"
          titleId="home-about-heading"
        />

        <ScrollReveal>
          <div className="flex flex-col gap-[20px]">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-[32px]">
            <HoverLift offset={1} enableTap>
              <Button
                nativeButton={false}
                size="lg"
                variant="outline"
                className={cn(outlineButtonClass, "gap-[8px]")}
                render={<Link href="/stack" />}
              >
                {copy.viewStack}
                <ArrowRight className="size-[14px]" strokeWidth={1.75} />
              </Button>
            </HoverLift>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
