"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FeaturedProjectCard } from "@/components/projects/featured-project-card";
import { PageShell } from "@/components/layout/page-shell";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { HoverLift } from "@/components/primitives/hover-lift";
import { outlineButtonClass } from "@/components/primitives/button-styles";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { featuredProjects } from "@/data/featured-projects";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

function ProjectsSectionHeader({
  eyebrow,
  title,
  paragraphs,
  titleId,
  as: TitleTag = "h2",
}: {
  eyebrow?: string;
  title: string;
  paragraphs?: string[];
  titleId: string;
  as?: "h1" | "h2";
}) {
  return (
    <header className="mx-auto max-w-[760px] text-center">
      {eyebrow ? <Eyebrow dot="accent">{eyebrow}</Eyebrow> : null}
      <TitleTag
        id={titleId}
        className={cn(
          TitleTag === "h1" ? "projects-title" : "projects-title-section",
          eyebrow ? "mt-[20px]" : undefined,
        )}
      >
        {title}
      </TitleTag>
      {paragraphs?.length ? (
        <div className="mx-auto mt-[28px] flex max-w-[760px] flex-col gap-[18px] sm:mt-[32px]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="projects-body">
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}
    </header>
  );
}

export function ProjectsPageContent() {
  const t = useTranslations();
  const hero = t.projects.hero;
  const featured = t.projects.featured;
  const cta = t.projects.cta;

  return (
    <PageShell>
      <div className="projects-page pb-[96px] pt-[24px] sm:pb-[120px] sm:pt-[32px]">
        <ProjectsSectionHeader
          as="h1"
          eyebrow={hero.eyebrow}
          title={hero.title}
          paragraphs={hero.paragraphs}
          titleId="projects-heading"
        />

        <section
          aria-labelledby="featured-heading"
          className="mt-[88px] sm:mt-[112px]"
        >
          <ScrollReveal>
            <ProjectsSectionHeader
              eyebrow={featured.eyebrow}
              title={featured.title}
              paragraphs={featured.paragraphs}
              titleId="featured-heading"
            />
          </ScrollReveal>

          <div className="mt-[48px] flex flex-col gap-[28px] sm:mt-[56px]">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.05}>
                <FeaturedProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-[88px] max-w-[760px] text-center sm:mt-[112px]">
          <h2 className="projects-title-section">{cta.title}</h2>
          <p className="projects-body mt-[24px]">{cta.description}</p>
          <div className="mt-[32px] flex justify-center">
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
