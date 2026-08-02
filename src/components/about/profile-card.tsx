"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SocialLinks } from "@/components/about/social-links";
import { siteConfig } from "@/config/site";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ProfileCardProps = {
  firstName: string;
  lastName: string;
  role: string;
  stack: string;
  reducedMotion?: boolean;
  className?: string;
};

export function ProfileCard({
  firstName,
  lastName,
  role,
  stack,
  reducedMotion = false,
  className,
}: ProfileCardProps) {
  return (
    <motion.div
      initial={
        reducedMotion
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 0.96 }
      }
      animate={{ opacity: 1, scale: 1 }}
      transition={
        reducedMotion ? { duration: 0 } : { duration: 0.75, ease }
      }
      className={cn(
        "relative mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-[300px]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -inset-[12%] rounded-[32px] bg-[radial-gradient(circle_at_50%_30%,rgba(168,85,247,0.35)_0%,rgba(168,85,247,0.08)_45%,transparent_70%)] blur-[28px]"
        aria-hidden
      />

      <div
        className={cn(
          "relative overflow-hidden rounded-[22px] border border-accent/40 bg-[#0c0c0f]",
          "shadow-[0_0_0_1px_rgba(168,85,247,0.18),0_28px_56px_-24px_rgba(0,0,0,0.75),0_0_64px_-18px_rgba(168,85,247,0.4)]",
        )}
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={siteConfig.portrait}
            alt={`${firstName} ${lastName}`}
            fill
            sizes="300px"
            className="object-cover object-[center_18%]"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#0c0c0f] via-[#0c0c0f]/70 to-transparent"
            aria-hidden
          />
        </div>

        <div className="relative px-[22px] pt-[4px] pb-[22px] text-center">
          <p className="text-[28px] font-semibold leading-[1.1] tracking-[-0.04em]">
            <span className="text-fg-primary">{firstName}</span>{" "}
            <span className="text-accent-light">{lastName}</span>
          </p>
          <p className="mt-[8px] text-[14px] text-fg-muted">{role}</p>

          <div className="mx-auto mt-[14px] h-[1px] w-[36px] bg-accent/70" />

          <p className="mt-[14px] text-[13px] tracking-[-0.01em] text-fg-secondary">
            {stack}
          </p>

          <SocialLinks className="mt-[18px]" />
        </div>
      </div>
    </motion.div>
  );
}
