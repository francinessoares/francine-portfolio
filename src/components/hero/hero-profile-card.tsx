"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

type HeroProfileCardProps = {
  className?: string;
};

export function HeroProfileCard({ className }: HeroProfileCardProps) {
  const t = useTranslations();
  const reducedMotion = useReducedMotion() ?? false;
  const metrics = Object.values(t.profileCard.metrics);

  return (
    <motion.div
      className={cn(
        "relative w-full max-w-[328px] justify-self-center lg:max-w-[352px] lg:justify-self-end",
        className,
      )}
      initial={
        reducedMotion
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 16, filter: "blur(6px)" }
      }
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      whileHover={reducedMotion ? {} : { y: -2 }}
      transition={
        reducedMotion
          ? { duration: 0 }
          : {
              opacity: { duration: 0.9, delay: 0.18, ease },
              filter: { duration: 0.9, delay: 0.18, ease },
              y: { type: "spring", stiffness: 380, damping: 30 },
            }
      }
    >
      <div
        className="pointer-events-none absolute -inset-[40px] rounded-[24px] bg-[radial-gradient(circle,rgba(167,139,250,0.08)_0%,transparent_68%)] blur-[48px] transition-opacity duration-700 group-hover:opacity-100"
        aria-hidden
      />
      <div
        className={cn(
          "glass-panel group transition-premium relative overflow-hidden rounded-[13px]",
          "shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_24px_48px_-20px_rgba(0,0,0,0.6),0_0_64px_-24px_rgba(139,92,246,0.1)]",
          "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_28px_56px_-18px_rgba(0,0,0,0.65),0_0_72px_-20px_rgba(139,92,246,0.14)]",
        )}
      >
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="flex items-center justify-between border-b border-white/[0.05] px-[16px] py-[11px]">
          <div className="flex items-center gap-[7px]">
            <span className="size-[6px] rounded-full bg-emerald-400/80 shadow-[0_0_6px_rgba(52,211,153,0.35)]" />
            <span className="font-mono-label text-[10px] text-white/42">
              {t.profileCard.available}
            </span>
          </div>
          <span className="font-mono-label text-[10px] text-white/22">
            {t.profileCard.profile}
          </span>
        </div>
        <div className="relative aspect-square w-full overflow-hidden bg-[#070708]">
          <motion.div
            className="relative size-full"
            whileHover={reducedMotion ? {} : { scale: 1.015 }}
            transition={{ duration: 0.5, ease }}
          >
            <Image
              src="/francine-portrait-pixel.png"
              alt={siteConfig.name}
              fill
              priority
              sizes="(max-width: 1024px) 328px, 352px"
              className="object-cover object-center [image-rendering:pixelated]"
            />
          </motion.div>
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,6,0)_0%,rgba(5,5,6,0.3)_55%,rgba(5,5,6,0.9)_100%)]"
            aria-hidden
          />
          <div className="absolute inset-x-[16px] bottom-[16px]">
            <p className="text-[18px] font-medium tracking-[-0.032em] text-white/95">
              {siteConfig.name}
            </p>
            <p className="mt-[3px] text-[11px] tracking-[-0.01em] text-white/40">
              {siteConfig.role}
            </p>
          </div>
        </div>
        <div className="border-t border-white/[0.05] px-[16px] py-[12px]">
          {metrics.map((row, index) => (
            <div
              key={row.label}
              className={cn(
                "flex items-start justify-between gap-[12px] py-[9px]",
                index !== metrics.length - 1 && "border-b border-white/[0.035]",
              )}
            >
              <span className="font-mono-label shrink-0 pt-[1px] text-[10px] text-white/28">
                {row.label}
              </span>
              <span className="max-w-[190px] text-right text-[11px] leading-[1.45] tracking-[-0.01em] text-white/[0.58]">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
