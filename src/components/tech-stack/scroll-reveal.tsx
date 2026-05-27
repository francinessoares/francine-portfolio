"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { ease, useMotionPrefs } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });
  const { reducedMotion } = useMotionPrefs();

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={
        reducedMotion
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 20, filter: "blur(4px)" }
      }
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : reducedMotion
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : undefined
      }
      transition={
        reducedMotion
          ? { duration: 0 }
          : { duration: 0.75, delay, ease }
      }
    >
      {children}
    </motion.div>
  );
}
