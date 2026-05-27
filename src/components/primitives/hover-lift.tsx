"use client";

import { motion } from "framer-motion";

import { ease, useMotionPrefs } from "@/lib/motion";
import { cn } from "@/lib/utils";

const offsetMap = {
  1: -1,
  2: -2,
  3: -3,
} as const;

type HoverLiftProps = {
  children: React.ReactNode;
  className?: string;
  offset?: keyof typeof offsetMap;
  as?: "div" | "article";
  enableTap?: boolean;
};

export function HoverLift({
  children,
  className,
  offset = 2,
  as = "div",
  enableTap = false,
}: HoverLiftProps) {
  const { reducedMotion, spring } = useMotionPrefs();
  const Component = motion[as];
  const y = offsetMap[offset];

  return (
    <Component
      className={cn(className)}
      whileHover={reducedMotion ? {} : { y }}
      whileTap={
        reducedMotion || !enableTap ? {} : { scale: 0.985 }
      }
      transition={enableTap ? spring : { duration: 0.35, ease }}
    >
      {children}
    </Component>
  );
}
