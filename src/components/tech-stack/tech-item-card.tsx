"use client";

import { motion } from "framer-motion";

import { TechIcon } from "@/components/tech-stack/tech-icon";
import type { TechId } from "@/data/tech-stack";
import { ease, useMotionPrefs } from "@/lib/motion";
import { cn } from "@/lib/utils";

type TechItemCardProps = {
  techId: TechId;
  name: string;
  description: string;
  tags: string[];
};

export function TechItemCard({
  techId,
  name,
  description,
  tags,
}: TechItemCardProps) {
  const { reducedMotion } = useMotionPrefs();

  return (
    <motion.article
      className={cn(
        "group transition-premium relative overflow-hidden rounded-[12px] p-[16px]",
        "border border-white/[0.06] bg-white/[0.02]",
        "hover:border-white/[0.1] hover:bg-white/[0.035]",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
        "hover:shadow-[0_0_32px_-12px_rgba(139,92,246,0.15)]",
      )}
      whileHover={reducedMotion ? {} : { y: -2 }}
      transition={{ duration: 0.35, ease }}
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
            {name}
          </h4>
          <p className="mt-[6px] text-[12px] leading-[18px] text-white/38">
            {description}
          </p>
          <div className="mt-[12px] flex flex-wrap gap-[6px]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="glass-pill px-[8px] py-[3px] text-[10px] text-white/35"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
