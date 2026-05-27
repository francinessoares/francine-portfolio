"use client";

import { motion } from "framer-motion";

import { useHeroMotionContext } from "@/hooks/use-hero-motion";
import { useTranslations } from "@/i18n/context";

export function HeroTechBadges() {
  const t = useTranslations();
  const { reducedMotion, ease, variants } = useHeroMotionContext();

  return (
    <motion.div
      variants={variants.badgeContainer}
      className="mt-[32px] flex max-w-[500px] flex-wrap justify-center gap-[6px] lg:mt-[36px] lg:justify-start"
    >
      {t.hero.techBadges.map((tech) => (
        <motion.span
          key={tech}
          variants={variants.badge}
          whileHover={
            reducedMotion
              ? {}
              : {
                  borderColor: "rgba(255,255,255,0.12)",
                  backgroundColor: "rgba(255,255,255,0.045)",
                }
          }
          transition={{ duration: 0.3, ease }}
          className="glass-pill transition-premium inline-flex cursor-default items-center px-[10px] py-[5px] text-[11px] text-white/40"
        >
          {tech}
        </motion.span>
      ))}
    </motion.div>
  );
}
