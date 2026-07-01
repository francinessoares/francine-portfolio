"use client";

import { motion } from "framer-motion";

import { useMotionPrefs } from "@/lib/motion";
import { cn } from "@/lib/utils";

type PageBackgroundProps = {
  variant: "hero" | "stack";
  className?: string;
};

export function PageBackground({ variant, className }: PageBackgroundProps) {
  const { reducedMotion } = useMotionPrefs();
  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-surface" />

      <div
        className={cn(
          "absolute inset-0",
          isHero
            ? "bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,rgba(139,92,246,0.12),transparent_60%)]"
            : "bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(139,92,246,0.08),transparent_55%)]",
        )}
      />

      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.006) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.006) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 75%)",
        }}
      />

      <motion.div
        className="absolute top-[8%] left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_70%)] blur-[100px]"
        animate={
          reducedMotion ? { opacity: 0.5 } : { opacity: [0.35, 0.55, 0.35] }
        }
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: 20, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {isHero ? (
        <div className="absolute inset-x-0 bottom-0 h-[120px] bg-gradient-to-t from-surface to-transparent" />
      ) : null}
    </div>
  );
}
