"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiAngular,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { techBrandColors, type TechId } from "@/data/tech-stack";
import { ease, useMotionPrefs } from "@/lib/motion";
import { cn } from "@/lib/utils";

const iconMap = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  angular: SiAngular,
  tailwindcss: SiTailwindcss,
  scss: SiSass,
  nodejs: SiNodedotjs,
  nestjs: SiNestjs,
  firebase: SiFirebase,
  postgresql: SiPostgresql,
  reactNative: SiReact,
  figma: SiFigma,
  git: SiGit,
  docker: SiDocker,
  github: SiGithub,
  vercel: SiVercel,
} as const;

type TechIconProps = {
  techId: TechId;
  className?: string;
  size?: number;
};

export function TechIcon({ techId, className, size = 22 }: TechIconProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "48px" });
  const Icon = iconMap[techId];
  const color = techBrandColors[techId];
  const { reducedMotion } = useMotionPrefs();
  const shouldAnimate = !reducedMotion && inView;

  return (
    <motion.span
      ref={ref}
      className={cn(
        "flex size-[44px] shrink-0 items-center justify-center rounded-[10px]",
        "border border-white/[0.06] bg-white/[0.03]",
        className,
      )}
      whileHover={
        reducedMotion
          ? {}
          : {
              borderColor: "rgba(255,255,255,0.12)",
              boxShadow: `0 0 24px -4px ${color}40`,
            }
      }
      transition={{ duration: 0.35, ease }}
    >
      <motion.span
        animate={shouldAnimate ? { y: [0, -1, 0] } : {}}
        transition={
          shouldAnimate
            ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0 }
        }
      >
        <Icon size={size} style={{ color }} aria-hidden />
      </motion.span>
    </motion.span>
  );
}
