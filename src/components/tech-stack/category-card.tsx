"use client";

import {
  Box,
  Layers,
  Palette,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { GlassCard } from "@/components/primitives/glass-card";
import { IconBox } from "@/components/primitives/icon-box";
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
      <GlassCard variant="category">
        <header className="border-b border-white/[0.05] px-[20px] py-[18px] sm:px-[24px]">
          <div className="flex items-start gap-[14px]">
            <IconBox icon={Icon} />
            <div>
              <h3 className="text-card-title-lg">
                {meta.title}
              </h3>
              <p className="text-card-desc mt-[6px] max-w-[480px]">
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
          {category.techIds.map((techId) => (
            <TechItemCard key={techId} techId={techId} />
          ))}
        </div>
      </GlassCard>
    </ScrollReveal>
  );
}
