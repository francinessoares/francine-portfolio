"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { ease, useMotionPrefs } from "@/lib/motion";

export function ProfileImage() {
  const { reducedMotion } = useMotionPrefs();

  return (
    <div className="relative aspect-square w-full overflow-hidden bg-surface-elevated">
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
  );
}
