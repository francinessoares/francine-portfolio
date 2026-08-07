"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { useHeroMotionContext } from "@/hooks/use-hero-motion";
import { cn } from "@/lib/utils";

const SHOWROOM_DESKTOP = "/products/showroom-desktop.webp";
const SHOWROOM_MOBILE = "/products/showroom-mobile.webp";

export { SHOWROOM_DESKTOP, SHOWROOM_MOBILE };

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

  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

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

    node.addEventListener("pointermove", onMove, { passive: true });
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
          ? "mx-auto aspect-square w-full max-w-[420px]"
          : "mx-auto aspect-[5/4] max-w-[720px] sm:max-w-[780px] lg:mx-0 lg:max-w-none lg:aspect-[4/3.1] lg:min-h-[520px] xl:min-h-[580px] 2xl:min-h-[640px]",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute rounded-full",
          isMobile
            ? "top-[12%] left-[8%] h-[70%] w-[84%] bg-[radial-gradient(circle,rgba(168,85,247,0.45)_0%,rgba(192,132,252,0.18)_40%,transparent_70%)] blur-[48px]"
            : "top-[8%] left-[2%] h-[86%] w-[96%] bg-[radial-gradient(circle,rgba(168,85,247,0.55)_0%,rgba(192,132,252,0.22)_38%,transparent_68%)] blur-[56px]",
        )}
        aria-hidden
      />

      {!isMobile ? (
        <>
          <div
            className="pointer-events-none absolute top-[28%] left-[22%] h-[48%] w-[56%] rounded-full bg-[radial-gradient(circle,rgba(232,121,249,0.45)_0%,rgba(168,85,247,0.28)_42%,transparent_70%)] blur-[32px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-[10%] bottom-[0%] h-[32%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.5)_0%,rgba(192,132,252,0.18)_45%,transparent_72%)] blur-[24px]"
            aria-hidden
          />
        </>
      ) : null}

      <motion.div
        className={cn(
          "relative z-[1] h-full w-full",
          !isMobile && "lg:origin-center lg:scale-[1.18] xl:scale-[1.24]",
          !reducedMotion && !isMobile && "will-change-transform",
        )}
        style={
          reducedMotion || isMobile ? undefined : { x: parallaxX, y: parallaxY }
        }
      >
        <Image
          src={isMobile ? SHOWROOM_MOBILE : SHOWROOM_DESKTOP}
          alt="Showroom de produtos digitais"
          fill
          priority
          sizes={
            isMobile
              ? "(max-width: 1024px) 92vw, 400px"
              : "(max-width: 1536px) 55vw, 720px"
          }
          className="object-contain object-center drop-shadow-[0_0_40px_rgba(168,85,247,0.35),0_36px_70px_rgba(0,0,0,0.55)]"
        />
      </motion.div>
    </div>
  );
}
