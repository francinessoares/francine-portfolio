"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Code2,
  Globe2,
  Send,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { MetricCard } from "@/components/about/metric-card";
import { ProfileCard } from "@/components/about/profile-card";
import { HoverLift } from "@/components/primitives/hover-lift";
import {
  outlineButtonClass,
  primaryButtonClass,
} from "@/components/primitives/button-styles";
import { Button } from "@/components/ui/button";
import { ease, useMotionPrefs } from "@/lib/motion";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

const metricIcons = [CalendarDays, Code2, Globe2] as const;

export function About() {
  const t = useTranslations();
  const copy = t.home.about;
  const { reducedMotion } = useMotionPrefs();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const show = inView || reducedMotion;

  return (
    <div ref={ref} className="relative">
      <div
        className="pointer-events-none absolute -top-[40px] right-[-8%] hidden h-[220px] w-[340px] opacity-70 lg:block"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(168,85,247,0.55) 0 1.2px, transparent 1.8px), radial-gradient(circle at 70% 60%, rgba(232,121,249,0.35) 0 1px, transparent 1.6px), radial-gradient(circle at 40% 80%, rgba(168,85,247,0.28) 0 1px, transparent 1.5px)",
          backgroundSize: "42px 42px, 58px 58px, 36px 36px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 70% 30%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 70% 30%, black 0%, transparent 75%)",
        }}
      />

      <div className="grid items-start gap-[36px] lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-[48px] xl:gap-[64px]">
        <div className="flex justify-center lg:justify-start lg:pt-[8px]">
          {show ? (
            <ProfileCard
              firstName={copy.profile.firstName}
              lastName={copy.profile.lastName}
              role={copy.profile.role}
              stack={copy.profile.stack}
              reducedMotion={reducedMotion}
            />
          ) : (
            <div className="aspect-[4/5] w-full max-w-[280px]" aria-hidden />
          )}
        </div>

        <div className="min-w-0 text-center lg:text-left">
          <motion.div
            initial={
              reducedMotion
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -20 }
            }
            animate={show ? { opacity: 1, x: 0 } : undefined}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 0.7, ease }
            }
          >
            <div className="inline-flex flex-col items-center lg:items-start">
              <p className="text-[12px] font-semibold tracking-[0.18em] text-accent-light uppercase">
                {copy.eyebrow}
              </p>
              <span className="mt-[8px] h-[2px] w-[36px] rounded-full bg-accent" />
            </div>

            <h2
              id="home-about-heading"
              className="mt-[18px] text-[32px] font-semibold leading-[1.15] tracking-[-0.04em] text-fg-primary sm:text-[36px] lg:text-[40px]"
            >
              {copy.title}{" "}
              <span className="text-accent-light">{copy.titleHighlight}</span>
            </h2>

            <div className="mt-[22px] flex max-w-[62ch] flex-col gap-[14px] mx-auto lg:mx-0">
              {copy.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-pretty text-[15px] leading-[1.7] tracking-[-0.01em] text-fg-secondary"
                >
                  {paragraph.map((segment, segmentIndex) =>
                    segment.accent ? (
                      <span
                        key={`${index}-${segmentIndex}`}
                        className="font-medium text-accent-light"
                      >
                        {segment.text}
                      </span>
                    ) : (
                      <span key={`${index}-${segmentIndex}`}>
                        {segment.text}
                      </span>
                    ),
                  )}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-[28px] grid grid-cols-2 gap-[12px] lg:grid-cols-3"
            initial="hidden"
            animate={show ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: reducedMotion
                  ? {}
                  : { staggerChildren: 0.07, delayChildren: 0.1 },
              },
            }}
          >
            {copy.metrics.map((metric, index) => {
              const Icon = metricIcons[index] ?? CalendarDays;
              return (
                <MetricCard
                  key={`${metric.value}-${metric.label}`}
                  icon={Icon}
                  value={metric.value}
                  label={metric.label}
                  reducedMotion={reducedMotion}
                />
              );
            })}
          </motion.div>

          <motion.div
            className="mt-[28px] flex w-full flex-col gap-[12px] sm:flex-row sm:justify-center lg:justify-start"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={show ? { opacity: 1 } : undefined}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 0.5, delay: 0.22, ease }
            }
          >
            <HoverLift offset={1} enableTap className="w-full sm:w-auto">
              <Button
                nativeButton={false}
                size="lg"
                className={cn(primaryButtonClass, "gap-[8px]")}
                render={<Link href="/contato" />}
              >
                {copy.ctaPrimary}
                <Send className="size-[15px]" strokeWidth={1.75} />
              </Button>
            </HoverLift>

            <HoverLift offset={1} enableTap className="w-full sm:w-auto">
              <Button
                nativeButton={false}
                size="lg"
                variant="outline"
                className={cn(
                  outlineButtonClass,
                  "gap-[8px] border-white/[0.14] text-fg-primary",
                )}
                render={<Link href="/projetos" />}
              >
                {copy.ctaSecondary}
                <ArrowRight className="size-[15px]" strokeWidth={1.75} />
              </Button>
            </HoverLift>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
