"use client";

import {
  Box,
  Layers,
  Palette,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { TechItemCard } from "@/components/tech-stack/tech-item-card";
import { categoryById, type StackCategoryId } from "@/data/tech-stack";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

const categoryIcons: Record<StackCategoryId, LucideIcon> = {
  frontend: Layers,
  backend: Server,
  mobile: Smartphone,
  uiUx: Palette,
  devops: Box,
};

type CategoryCardProps = {
  categoryId: StackCategoryId;
  index: number;
};

export function CategoryCard({ categoryId, index }: CategoryCardProps) {
  const t = useTranslations();
  const category = categoryById[categoryId];
  const meta = t.techStack.categories[categoryId];
  const Icon = categoryIcons[categoryId];

  return (
    <ScrollReveal delay={index * 0.06}>
      <section
        className={cn(
          "glass-panel relative overflow-hidden rounded-[14px]",
          "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_48px_-24px_rgba(0,0,0,0.5)]",
        )}
      >
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
        <header className="border-b border-white/[0.05] px-[20px] py-[18px] sm:px-[24px]">
          <div className="flex items-start gap-[14px]">
            <span
              className={cn(
                "flex size-[40px] shrink-0 items-center justify-center rounded-[10px]",
                "border border-white/[0.07] bg-white/[0.03] text-white/50",
              )}
            >
              <Icon className="size-[18px]" strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="text-[18px] font-medium tracking-[-0.03em] text-white/[0.95]">
                {meta.title}
              </h3>
              <p className="mt-[6px] max-w-[480px] text-[13px] leading-[20px] text-white/36">
                {meta.description}
              </p>
            </div>
          </div>
        </header>
        <div
          className={cn(
            "grid gap-[10px] p-[16px] sm:p-[20px]",
            category.techIds.length === 1
              ? "grid-cols-1"
              : "sm:grid-cols-2",
          )}
        >
          {category.techIds.map((techId) => {
            const tech = t.techStack.techs[techId];
            return (
              <TechItemCard
                key={techId}
                techId={techId}
                name={tech.name}
                description={tech.description}
                tags={tech.tags}
              />
            );
          })}
        </div>
      </section>
    </ScrollReveal>
  );
}
