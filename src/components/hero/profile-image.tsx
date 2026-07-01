"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { ease, useMotionPrefs } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ProfileImageProps = {
  className?: string;
};

export function ProfileImage({ className }: ProfileImageProps) {
  const { reducedMotion } = useMotionPrefs();

  return (
    <motion.div
      className={cn(
        "relative aspect-[4/3.2] w-full overflow-hidden bg-[#0a0a0c]",
        className,
      )}
      whileHover={reducedMotion ? {} : { scale: 1.01 }}
      transition={{ duration: 0.5, ease }}
    >
      <Image
        src={siteConfig.portrait}
        alt={siteConfig.name}
        fill
        priority
        unoptimized
        sizes="(max-width: 640px) 280px, 300px"
        className="object-contain object-center"
      />
    </motion.div>
  );
}
