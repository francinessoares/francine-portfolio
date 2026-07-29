"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { useHeroMotionContext } from "@/hooks/use-hero-motion";
import showroomDesktop from "@/docs/image/showroom-2.png";
import showroomMobile from "@/docs/image/showroom-mobile.png";
import { cn } from "@/lib/utils";

const springConfig = { stiffness: 55, damping: 20, mass: 0.7 };

type HeroShowcaseProps = {
  variant?: "desktop" | "mobile";
};

export function HeroShowcase({ variant = "desktop" }: HeroShowcaseProps) {
  const { reducedMotion } = useHeroMotionContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = variant === "mobile";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);
  const glowOpacity = useTransform(smoothX, [-0.5, 0.5], [0.55, 0.9]);

  useEffect(() => {
    if (reducedMotion || isMobile) return;

    const node = containerRef.current;
    if (!node) return;

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
    };

    const onLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, [mouseX, mouseY, reducedMotion, isMobile]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full",
        isMobile
          ? "mx-auto aspect-[3/4] max-w-[380px]"
          : "mx-auto aspect-[5/4] max-w-[420px] sm:max-w-[520px] lg:mx-0 lg:max-w-none lg:aspect-[4/3.1] lg:min-h-[520px] xl:min-h-[580px] 2xl:min-h-[640px]",
      )}
    >
      <motion.div
        className={cn(
          "pointer-events-none absolute rounded-full blur-[70px]",
          isMobile
            ? "top-[12%] left-[8%] h-[78%] w-[84%] bg-[radial-gradient(circle,rgba(168,85,247,0.5)_0%,rgba(192,132,252,0.2)_40%,transparent_70%)]"
            : "top-[8%] left-[2%] h-[86%] w-[96%] bg-[radial-gradient(circle,rgba(168,85,247,0.55)_0%,rgba(192,132,252,0.22)_38%,transparent_68%)]",
        )}
        style={reducedMotion || isMobile ? undefined : { opacity: glowOpacity }}
        animate={
          reducedMotion
            ? undefined
            : { opacity: [0.55, 0.85, 0.55], scale: [1, 1.05, 1] }
        }
        transition={
          reducedMotion
            ? undefined
            : { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }
        aria-hidden
      />

      <div
        className="pointer-events-none absolute top-[28%] left-[22%] h-[48%] w-[56%] rounded-full bg-[radial-gradient(circle,rgba(232,121,249,0.4)_0%,rgba(168,85,247,0.22)_42%,transparent_70%)] blur-[40px]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-[10%] bottom-[0%] h-[28%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.45)_0%,transparent_72%)] blur-[28px]"
        aria-hidden
      />

      <motion.div
        className={cn(
          "relative z-[1] h-full w-full will-change-transform",
          !isMobile && "lg:origin-center lg:scale-[1.18] xl:scale-[1.24]",
        )}
        style={
          reducedMotion || isMobile ? undefined : { x: parallaxX, y: parallaxY }
        }
        animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 7.2, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <Image
          src={isMobile ? showroomMobile : showroomDesktop}
          alt="Showroom de produtos digitais"
          fill
          priority
          sizes={
            isMobile
              ? "(max-width: 1024px) 90vw, 420px"
              : "(max-width: 1024px) 92vw, (max-width: 1536px) 55vw, 720px"
          }
          className="object-contain object-center drop-shadow-[0_0_40px_rgba(168,85,247,0.35),0_36px_70px_rgba(0,0,0,0.55)]"
        />
      </motion.div>
    </div>
  );
}
