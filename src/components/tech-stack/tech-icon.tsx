"use client";

import { motion } from "framer-motion";
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

import {
  techBrandColors,
  type TechId,
} from "@/data/tech-stack";
import { useMotionPrefs } from "@/lib/motion";
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
  const Icon = iconMap[techId];
  const color = techBrandColors[techId];
  const { reducedMotion } = useMotionPrefs();

  return (
    <motion.span
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
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.span
        animate={reducedMotion ? {} : { y: [0, -1, 0] }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <Icon size={size} style={{ color }} aria-hidden />
      </motion.span>
    </motion.span>
  );
}
