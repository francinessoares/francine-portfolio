"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type TechStackBackgroundProps = {
  className?: string;
};

export function TechStackBackground({ className }: TechStackBackgroundProps) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(255,255,255,0.04),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_0%_60%,rgba(99,102,241,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_100%_30%,rgba(139,92,246,0.06),transparent_52%)]" />

      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 85% 70% at 50% 0%, black 0%, transparent 75%)",
        }}
      />

      <motion.div
        className="absolute top-[8%] left-[20%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] blur-[80px]"
        animate={reducedMotion ? {} : { opacity: [0.15, 0.28, 0.15] }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: 16, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className="absolute top-[35%] right-[10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.07)_0%,transparent_68%)] blur-[96px]"
        animate={
          reducedMotion ? {} : { opacity: [0.2, 0.35, 0.2], scale: [1, 1.02, 1] }
        }
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: 18, repeat: Infinity, ease: "easeInOut" }
        }
      />

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute size-[2px] rounded-full bg-white/20"
          style={{
            top: `${12 + i * 14}%`,
            left: `${8 + ((i * 17) % 80)}%`,
          }}
          animate={
            reducedMotion
              ? { opacity: 0.2 }
              : { opacity: [0.1, 0.35, 0.1], scale: [1, 1.2, 1] }
          }
          transition={
            reducedMotion
              ? { duration: 0 }
              : {
                  duration: 4 + i * 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }
          }
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_50%,transparent_35%,rgba(5,5,6,0.5)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </div>
  );
}
