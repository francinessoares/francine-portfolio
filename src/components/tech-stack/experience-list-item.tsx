"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

import { useStaggerInView } from "@/hooks/use-stagger-in-view";
import { cn } from "@/lib/utils";

type ExperienceListItemProps = {
  children: string;
  index: number;
};

export function ExperienceListItem({ children, index }: ExperienceListItemProps) {
  const motionProps = useStaggerInView({ index });

  return (
    <motion.li className="flex items-start gap-[14px]" {...motionProps}>
      <span
        className={cn(
          "mt-[2px] flex size-[22px] shrink-0 items-center justify-center rounded-full",
          "border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-400/80",
        )}
      >
        <Check className="size-[12px]" strokeWidth={2} />
      </span>
      <span className="text-[15px] leading-[24px] tracking-[-0.01em] text-white/62 sm:text-[16px]">
        {children}
      </span>
    </motion.li>
  );
}
