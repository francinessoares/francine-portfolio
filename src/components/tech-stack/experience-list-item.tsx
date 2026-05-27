"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

import { useStaggerInView } from "@/hooks/use-stagger-in-view";
import { cn } from "@/lib/utils";

type ExperienceListItemProps = {
  children: string;
  index: number;
  variant?: "highlight" | "domain";
};

export function ExperienceListItem({
  children,
  index,
  variant = "highlight",
}: ExperienceListItemProps) {
  const isDomain = variant === "domain";
  const motionProps = useStaggerInView({ index });

  return (
    <motion.li className="flex items-start gap-[14px]" {...motionProps}>
      <span
        className={cn(
          "mt-[2px] flex shrink-0 items-center justify-center rounded-full",
          isDomain
            ? "size-[8px] bg-violet-400/60"
            : cn(
                "size-[22px]",
                "border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-400/80",
              ),
        )}
      >
        {!isDomain ? <Check className="size-[12px]" strokeWidth={2} /> : null}
      </span>
      <span
        className={cn(
          "tracking-[-0.01em] text-fg-body",
          isDomain
            ? "pt-[0px] text-[14px] leading-[22px] sm:text-[15px]"
            : "text-[15px] leading-[24px] sm:text-[16px]",
        )}
      >
        {children}
      </span>
    </motion.li>
  );
}
