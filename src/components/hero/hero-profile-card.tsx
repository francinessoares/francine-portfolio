"use client";

import { motion } from "framer-motion";
import { Calendar, Code2, MonitorSmartphone } from "lucide-react";

import { ProfileImage } from "@/components/hero/profile-image";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/i18n/context";
import { ease, useMotionPrefs } from "@/lib/motion";
import { cn } from "@/lib/utils";

type HeroProfileCardProps = {
  className?: string;
};

type ProfileRowProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
  showDivider?: boolean;
};

function ProfileRow({ icon, children, showDivider = true }: ProfileRowProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-[10px] py-[9px]",
        showDivider && "border-t border-white/[0.05]",
      )}
    >
      <span className="flex size-[24px] shrink-0 items-center justify-center rounded-[7px] border border-accent/15 bg-accent/[0.06] text-accent-light">
        {icon}
      </span>
      <span className="text-[12px] font-medium tracking-[-0.01em] text-fg-body">
        {children}
      </span>
    </div>
  );
}

export function HeroProfileCard({ className }: HeroProfileCardProps) {
  const t = useTranslations();
  const copy = t.hero.profile;
  const { reducedMotion } = useMotionPrefs();

  return (
    <motion.div
      className={cn(
        "relative w-full max-w-[280px] justify-self-center lg:max-w-[300px] lg:justify-self-end",
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
        className="pointer-events-none absolute -inset-[24px] rounded-[20px] bg-[radial-gradient(circle,rgba(139,92,246,0.1)_0%,transparent_68%)] blur-[32px]"
        aria-hidden
      />

      <div
        className={cn(
          "relative overflow-hidden rounded-[14px] border border-white/[0.08]",
          "bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_48px_-24px_rgba(0,0,0,0.65),0_0_56px_-20px_rgba(139,92,246,0.16)]",
          "backdrop-blur-[16px]",
        )}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"
          aria-hidden
        />

        <ProfileImage className="rounded-none" />

        <div className="px-[16px] pb-[14px] pt-[14px]">
          <p className="text-[16px] font-semibold tracking-[-0.03em] text-fg-primary">
            {siteConfig.name}
          </p>
          <p className="mt-[3px] text-[12px] font-medium text-accent-light">
            {copy.role}
          </p>

          <div className="mt-[2px]">
            <ProfileRow
              showDivider={false}
              icon={<Calendar className="size-[12px]" strokeWidth={1.75} />}
            >
              {copy.experience}
            </ProfileRow>
            <ProfileRow
              icon={<Code2 className="size-[12px]" strokeWidth={1.75} />}
            >
              {copy.stack}
            </ProfileRow>
            <ProfileRow
              icon={
                <MonitorSmartphone className="size-[12px]" strokeWidth={1.75} />
              }
            >
              {copy.focus}
            </ProfileRow>
            <ProfileRow
              icon={
                <span className="size-[7px] rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.45)]" />
              }
            >
              {copy.available}
            </ProfileRow>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
