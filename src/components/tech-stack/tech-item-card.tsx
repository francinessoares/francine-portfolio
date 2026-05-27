"use client";

import { HoverLift } from "@/components/primitives/hover-lift";
import { TagList } from "@/components/primitives/tag-list";
import { TechIcon } from "@/components/tech-stack/tech-icon";
import type { TechId } from "@/data/tech-stack";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

type TechItemCardProps = {
  techId: TechId;
};

export function TechItemCard({ techId }: TechItemCardProps) {
  const tech = useTranslations().techStack.techs[techId];

  return (
    <HoverLift
      as="article"
      offset={2}
      className={cn(
        "group transition-premium relative overflow-hidden rounded-[12px] p-[16px]",
        "border border-white/[0.06] bg-white/[0.02]",
        "hover:border-white/[0.1] hover:bg-white/[0.035]",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
        "hover:shadow-[0_0_32px_-12px_rgba(139,92,246,0.15)]",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.04), transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative flex gap-[14px]">
        <TechIcon techId={techId} />
        <div className="min-w-0 flex-1">
          <h4 className="text-[14px] font-medium tracking-[-0.02em] text-white/90">
            {tech.name}
          </h4>
          <p className="mt-[6px] text-[12px] leading-[18px] text-white/38">
            {tech.description}
          </p>
          <TagList tags={tech.tags} className="mt-[12px]" />
        </div>
      </div>
    </HoverLift>
  );
}
