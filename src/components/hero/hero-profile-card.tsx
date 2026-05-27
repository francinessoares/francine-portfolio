"use client";

import { motion } from "framer-motion";

import { ProfileImage } from "@/components/hero/profile-image";
import { GlassCard } from "@/components/primitives/glass-card";
import { MetricList } from "@/components/primitives/metric-list";
import { useTranslations } from "@/i18n/context";
import { ease, useMotionPrefs } from "@/lib/motion";
import { cn } from "@/lib/utils";

type HeroProfileCardProps = {
  className?: string;
};

export function HeroProfileCard({ className }: HeroProfileCardProps) {
  const t = useTranslations();
  const { reducedMotion } = useMotionPrefs();
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
      <GlassCard variant="profile" topLine="profile">
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
        <ProfileImage />
        <div className="border-t border-white/[0.05] px-[16px] py-[12px]">
          <MetricList items={metrics} />
        </div>
      </GlassCard>
    </motion.div>
  );
}
