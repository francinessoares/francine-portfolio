"use client";

import { motion } from "framer-motion";

import { useMotionPrefs } from "@/lib/motion";
import { cn } from "@/lib/utils";

const particlePositions = [
  { top: "12%", left: "8%" },
  { top: "26%", left: "25%" },
  { top: "40%", left: "59%" },
  { top: "54%", left: "76%" },
  { top: "68%", left: "42%" },
  { top: "82%", left: "18%" },
] as const;

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

      {isHero ? (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-15%,rgba(255,255,255,0.045),transparent_52%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_8%_55%,rgba(255,255,255,0.02),transparent_48%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_92%_45%,rgba(139,92,246,0.045),transparent_52%)]" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(255,255,255,0.04),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_0%_60%,rgba(99,102,241,0.05),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_100%_30%,rgba(139,92,246,0.06),transparent_52%)]" />
        </>
      )}

      <div
        className={cn(
          "absolute inset-0",
          isHero ? "opacity-[0.22]" : "opacity-[0.18]",
        )}
        style={{
          backgroundImage: isHero
            ? "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)"
            : "linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)",
          backgroundSize: isHero ? "64px 64px" : "72px 72px",
          maskImage: isHero
            ? "radial-gradient(ellipse 80% 65% at 50% 0%, black 0%, transparent 72%)"
            : "radial-gradient(ellipse 85% 70% at 50% 0%, black 0%, transparent 75%)",
        }}
      />

      <motion.div
        className={cn(
          "absolute rounded-full",
          isHero
            ? "top-[12%] left-[12%] h-[380px] w-[380px] bg-[radial-gradient(circle,rgba(255,255,255,0.035)_0%,transparent_68%)] blur-[88px]"
            : "top-[8%] left-[20%] h-[320px] w-[320px] bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] blur-[80px]",
        )}
        animate={
          reducedMotion
            ? { opacity: isHero ? 0.3 : 0.2 }
            : isHero
              ? { opacity: [0.2, 0.32, 0.2] }
              : { opacity: [0.15, 0.28, 0.15] }
        }
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: isHero ? 18 : 16, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <motion.div
        className={cn(
          "absolute rounded-full",
          isHero
            ? "top-[18%] right-[6%] h-[440px] w-[440px] bg-[radial-gradient(circle,rgba(167,139,250,0.06)_0%,transparent_65%)] blur-[100px]"
            : "top-[35%] right-[10%] h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(167,139,250,0.07)_0%,transparent_68%)] blur-[96px]",
        )}
        animate={
          reducedMotion
            ? { opacity: isHero ? 0.35 : 0.2 }
            : isHero
              ? { opacity: [0.25, 0.4, 0.25], scale: [1, 1.03, 1] }
              : { opacity: [0.2, 0.35, 0.2], scale: [1, 1.02, 1] }
        }
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: isHero ? 20 : 18, repeat: Infinity, ease: "easeInOut" }
        }
      />

      {!isHero &&
        particlePositions.map((position, index) => (
          <motion.div
            key={index}
            className="absolute size-[2px] rounded-full bg-white/20"
            style={position}
            animate={
              reducedMotion
                ? { opacity: 0.2 }
                : { opacity: [0.1, 0.35, 0.1], scale: [1, 1.2, 1] }
            }
            transition={
              reducedMotion
                ? { duration: 0 }
                : {
                    duration: 4 + index * 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }
            }
          />
        ))}

      <div
        className={cn(
          "absolute inset-0",
          isHero
            ? "bg-[radial-gradient(ellipse_100%_80%_at_50%_50%,transparent_40%,rgba(5,5,6,0.4)_100%)]"
            : "bg-[radial-gradient(ellipse_100%_80%_at_50%_50%,transparent_35%,rgba(5,5,6,0.5)_100%)]",
        )}
      />
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent to-transparent",
          isHero ? "via-white/[0.07]" : "via-white/[0.06]",
        )}
      />
      {isHero ? (
        <div className="absolute inset-x-0 bottom-0 h-[140px] bg-gradient-to-t from-surface to-transparent" />
      ) : null}
    </div>
  );
}
