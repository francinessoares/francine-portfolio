"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

type MetricCardProps = {
  icon: LucideIcon;
  value: string;
  label: string;
  reducedMotion?: boolean;
};

export function MetricCard({
  icon: Icon,
  value,
  label,
  reducedMotion = false,
}: MetricCardProps) {
  return (
    <motion.div
      variants={{
        hidden: reducedMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: reducedMotion
            ? { duration: 0 }
            : { duration: 0.5, ease },
        },
      }}
      className={cn(
        "relative flex min-h-[118px] flex-col rounded-[14px] border border-white/[0.08] bg-white/[0.03] px-[14px] py-[16px]",
        "shadow-[0_12px_28px_-18px_rgba(0,0,0,0.55)]",
        "transition-premium hover:border-accent/30 hover:bg-white/[0.045]",
      )}
    >
      <Icon
        className="size-[18px] text-accent-light"
        strokeWidth={1.75}
      />
      <p className="mt-[14px] text-[15px] font-semibold leading-[1.2] tracking-[-0.02em] text-fg-primary">
        {value}
      </p>
      <p className="mt-[4px] text-[12px] leading-[1.3] text-fg-muted">
        {label}
      </p>
      <span className="mt-auto pt-[12px]">
        <span className="block h-[2px] w-[28px] rounded-full bg-accent" />
      </span>
    </motion.div>
  );
}
