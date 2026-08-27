"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FeaturedProjectCard } from "@/components/projects/featured-project-card";
import { HoverLift } from "@/components/primitives/hover-lift";
import { outlineButtonClass } from "@/components/primitives/button-styles";
import { Section } from "@/components/primitives/section";
import { SectionHeader } from "@/components/primitives/section-header";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { featuredProjects } from "@/data/featured-projects";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function HomePortfolioSection() {
  const t = useTranslations();
  const copy = t.home.portfolio;

  return (
    <Section id="portfolio">
      <SectionHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
        titleId="home-portfolio-heading"
      />

      <div className="mt-[48px] flex flex-col gap-[28px]">
        {featuredProjects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.05}>
            <FeaturedProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-[40px] flex justify-center">
        <HoverLift offset={1} enableTap>
          <Button
            nativeButton={false}
            size="lg"
            variant="outline"
            className={cn(outlineButtonClass, "gap-[8px]")}
            render={<Link href="/projetos" />}
          >
            {copy.cta}
            <ArrowRight className="size-[14px]" strokeWidth={1.75} />
          </Button>
        </HoverLift>
      </div>
    </Section>
  );
}
