"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

type HeroBackgroundProps = {
  reducedMotion: boolean;
};

export function HeroBackground({ reducedMotion }: HeroBackgroundProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#050506]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-15%,rgba(255,255,255,0.045),transparent_52%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_8%_55%,rgba(255,255,255,0.02),transparent_48%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_92%_45%,rgba(139,92,246,0.045),transparent_52%)]" />

      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 50% 0%, black 0%, transparent 72%)",
        }}
      />

      <motion.div
        className={cn(
          "absolute top-[12%] left-[12%] h-[380px] w-[380px] rounded-full",
          "bg-[radial-gradient(circle,rgba(255,255,255,0.035)_0%,transparent_68%)] blur-[88px]",
        )}
        animate={
          reducedMotion ? { opacity: 0.3 } : { opacity: [0.2, 0.32, 0.2] }
        }
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: 18, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className={cn(
          "absolute top-[18%] right-[6%] h-[440px] w-[440px] rounded-full",
          "bg-[radial-gradient(circle,rgba(167,139,250,0.06)_0%,transparent_65%)] blur-[100px]",
        )}
        animate={
          reducedMotion
            ? { opacity: 0.35 }
            : { opacity: [0.25, 0.4, 0.25], scale: [1, 1.03, 1] }
        }
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: 20, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_50%,transparent_40%,rgba(5,5,6,0.4)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[140px] bg-gradient-to-t from-[#050506] to-transparent" />
    </div>
  );
}
