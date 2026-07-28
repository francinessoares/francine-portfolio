"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { useHeroMotionContext } from "@/hooks/use-hero-motion";
import showroomImage from "@/docs/image/showroom-2.png";

const springConfig = { stiffness: 55, damping: 20, mass: 0.7 };

export function HeroShowcase() {
  const { reducedMotion } = useHeroMotionContext();
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);
  const glowOpacity = useTransform(smoothX, [-0.5, 0.5], [0.55, 0.9]);

  useEffect(() => {
    if (reducedMotion) return;

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
  }, [mouseX, mouseY, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-[5/4] w-full max-w-[720px] sm:max-w-[780px] lg:mx-0 lg:max-w-none lg:aspect-[4/3.1] lg:min-h-[520px] xl:min-h-[580px] 2xl:min-h-[640px]"
    >
      {/* Neon glow — camada externa */}
      <motion.div
        className="pointer-events-none absolute top-[8%] left-[2%] h-[86%] w-[96%] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.55)_0%,rgba(192,132,252,0.22)_38%,transparent_68%)] blur-[70px]"
        style={reducedMotion ? undefined : { opacity: glowOpacity }}
        animate={
          reducedMotion
            ? undefined
            : { opacity: [0.55, 0.85, 0.55], scale: [1, 1.06, 1] }
        }
        transition={
          reducedMotion
            ? undefined
            : { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }
        aria-hidden
      />

      {/* Neon glow — núcleo */}
      <div
        className="pointer-events-none absolute top-[28%] left-[22%] h-[48%] w-[56%] rounded-full bg-[radial-gradient(circle,rgba(232,121,249,0.45)_0%,rgba(168,85,247,0.28)_42%,transparent_70%)] blur-[40px]"
        aria-hidden
      />

      {/* Reflexo neon no chão */}
      <div
        className="pointer-events-none absolute inset-x-[10%] bottom-[0%] h-[32%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.5)_0%,rgba(192,132,252,0.18)_45%,transparent_72%)] blur-[28px]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 24% 30%, rgba(255,255,255,0.1) 0 1px, transparent 1.5px), radial-gradient(circle at 70% 55%, rgba(255,255,255,0.06) 0 1px, transparent 1.5px), radial-gradient(circle at 48% 78%, rgba(168,85,247,0.28) 0 1px, transparent 1.5px)",
          backgroundSize: "120px 120px, 160px 160px, 90px 90px",
        }}
      />

      <motion.div
        className="relative z-[1] h-full w-full will-change-transform lg:origin-center lg:scale-[1.18] xl:scale-[1.24]"
        style={reducedMotion ? undefined : { x: parallaxX, y: parallaxY }}
        animate={reducedMotion ? undefined : { y: [0, -7, 0] }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 7.2, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <Image
          src={showroomImage}
          alt="Showroom de produtos digitais"
          fill
          priority
          sizes="(max-width: 1024px) 92vw, (max-width: 1536px) 55vw, 720px"
          className="object-contain object-center drop-shadow-[0_0_40px_rgba(168,85,247,0.35),0_36px_70px_rgba(0,0,0,0.55)]"
        />
      </motion.div>
    </div>
  );
}
