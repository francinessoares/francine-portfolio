"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { HoverLift } from "@/components/primitives/hover-lift";
import { TagList } from "@/components/primitives/tag-list";
import { outlineButtonClass } from "@/components/primitives/button-styles";
import { Button } from "@/components/ui/button";
import type { FeaturedProject } from "@/data/featured-projects";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

type FeaturedProjectCardProps = {
  project: FeaturedProject;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const t = useTranslations();
  const featured = t.projects.featured;
  const item = featured.items[project.id];

  return (
    <article className="projects-card overflow-hidden">
      {project.image ? (
        <div className="relative border-b border-white/[0.06] bg-surface px-[24px] pt-[28px] pb-[24px] sm:px-[40px] sm:pt-[36px] sm:pb-[28px]">
          <div className="relative overflow-hidden rounded-[16px] border border-white/[0.08] shadow-[0_24px_64px_-24px_rgba(0,0,0,0.55)]">
            <Image
              src={project.image}
              alt={item.name}
              width={1536}
              height={900}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="h-auto w-full object-cover object-top"
              priority
            />
          </div>
        </div>
      ) : null}

      <div className="px-[28px] py-[40px] sm:px-[48px] sm:py-[52px]">
        <div className="flex flex-wrap items-center gap-[12px]">
          <h3 className="projects-card-title">{item.name}</h3>
          <span className="rounded-[8px] border border-[var(--color-eyebrow-border)] bg-[var(--color-eyebrow-muted)] px-[12px] py-[5px] text-[11px] font-medium tracking-[0.14em] text-[var(--color-eyebrow)] uppercase">
            {item.status}
          </span>
        </div>

        <div className="mt-[24px] flex max-w-[72ch] flex-col gap-[16px]">
          {item.paragraphs.map((paragraph) => (
            <p key={paragraph} className="projects-body">
              {paragraph}
            </p>
          ))}
        </div>

        <TagList tags={project.stack} className="mt-[28px]" />

        <div className="mt-[32px]">
          <HoverLift offset={1} enableTap>
            <Button
              nativeButton={false}
              size="lg"
              variant="outline"
              className={cn(outlineButtonClass, "gap-[8px]")}
              render={
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              {featured.visit}
              <ArrowUpRight className="size-[14px]" strokeWidth={1.75} />
            </Button>
          </HoverLift>
        </div>
      </div>
    </article>
  );
}
