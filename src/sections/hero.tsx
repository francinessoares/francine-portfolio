"use client";

import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

import { HeroBackground } from "@/components/hero/hero-background";
import { HeroCvDownloadLink } from "@/components/hero/hero-cv-download-link";
import { HeroProfileCard } from "@/components/hero/hero-profile-card";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;
const spring = { type: "spring" as const, stiffness: 420, damping: 32 };

const techBadges = [
  "React",
  "Angular",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Performance",
  "AI",
] as const;

const socialIcons = {
  github: GitHubIcon,
  linkedIn: LinkedInIcon,
  email: Mail,
} as const;

function buildVariants(reducedMotion: boolean) {
  const itemTransition: Transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.75, ease };

  const container: Variants = {
    hidden: {},
    visible: {
      transition: reducedMotion
        ? {}
        : { staggerChildren: 0.06, delayChildren: 0.08 },
    },
  };

  const item: Variants = {
    hidden: reducedMotion
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : { opacity: 0, y: 10, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: itemTransition,
    },
  };

  const headline: Variants = {
    hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ...itemTransition, duration: reducedMotion ? 0 : 0.85 },
    },
  };

  const badgeContainer: Variants = {
    hidden: {},
    visible: {
      transition: reducedMotion
        ? {}
        : { staggerChildren: 0.03, delayChildren: 0.04 },
    },
  };

  const badge: Variants = {
    hidden: reducedMotion ? { opacity: 1 } : { opacity: 0, y: 4 },
    visible: { opacity: 1, y: 0, transition: itemTransition },
  };

  return { container, item, headline, badgeContainer, badge };
}

export function Hero() {
  const t = useTranslations();
  const reducedMotion = useReducedMotion() ?? false;
  const variants = buildVariants(reducedMotion);

  return (
    <section
      id="hero"
      className="hero-safe-padding relative flex min-h-[100dvh] min-h-[100svh] items-center overflow-x-hidden"
    >
      <HeroBackground reducedMotion={reducedMotion} />

      <div className="relative z-10 mx-auto w-full max-w-[1140px]">
        <div
          className={cn(
            "grid w-full items-center gap-[52px]",
            "md:gap-[60px]",
            "lg:grid-cols-[minmax(0,1fr)_352px] lg:gap-[68px]",
            "xl:grid-cols-[minmax(0,1fr)_368px] xl:gap-[80px]",
          )}
        >
          <motion.div
            className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left"
            variants={variants.container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={variants.item} className="mb-[28px]">
              <span className="glass-pill font-mono-label inline-flex items-center gap-[8px] px-[12px] py-[6px] text-[10px] text-white/38">
                <span className="size-[5px] rounded-full bg-emerald-400/70 shadow-[0_0_8px_rgba(52,211,153,0.35)]" />
                {siteConfig.role}
              </span>
            </motion.div>

            <motion.h1
              variants={variants.headline}
              className={cn(
                "font-heading w-full max-w-[600px] text-balance font-medium text-white/[0.97]",
                "text-[40px] leading-[1.0] tracking-[-0.044em]",
                "min-[390px]:text-[46px] min-[390px]:leading-[1.01]",
                "sm:text-[54px] sm:tracking-[-0.048em]",
                "lg:text-[56px] xl:text-[62px] xl:tracking-[-0.05em]",
              )}
            >
              <span className="block">Francine</span>
              <span className="text-gradient-display mt-[2px] block sm:mt-[4px]">
                Soares
              </span>
            </motion.h1>

            <motion.p
              variants={variants.item}
              className={cn(
                "mt-[28px] max-w-[500px] text-pretty text-[15px] leading-[26px] text-white/38",
                "sm:mt-[32px] sm:text-[16px] sm:leading-[27px]",
                "lg:max-w-[460px] lg:text-[17px] lg:leading-[28px]",
              )}
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              variants={variants.badgeContainer}
              className="mt-[32px] flex max-w-[500px] flex-wrap justify-center gap-[6px] lg:mt-[36px] lg:justify-start"
            >
              {techBadges.map((tech) => (
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

            <motion.div
              variants={variants.item}
              className={cn(
                "mt-[40px] flex w-full max-w-[360px] flex-col gap-[10px]",
                "sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-[10px]",
                "lg:mt-[44px] lg:justify-start",
              )}
            >
              <motion.div
                className="w-full sm:w-auto"
                whileHover={reducedMotion ? {} : { y: -1 }}
                whileTap={reducedMotion ? {} : { scale: 0.985 }}
                transition={spring}
              >
                <Button
                  nativeButton={false}
                  size="lg"
                  className={cn(
                    "transition-premium h-[42px] w-full rounded-[10px] border-0 px-[22px]",
                    "bg-white text-[13px] font-medium tracking-[-0.015em] text-[#050506]",
                    "shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_4px_24px_rgba(255,255,255,0.06)]",
                    "hover:bg-zinc-50 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_8px_32px_rgba(255,255,255,0.1)]",
                    "sm:min-w-[140px] sm:w-auto",
                  )}
                  render={<a href="#projects" />}
                >
                  {t.hero.viewWork}
                  <ArrowRight
                    className="size-[14px] transition-transform duration-300 group-hover/button:translate-x-[2px]"
                    strokeWidth={1.75}
                  />
                </Button>
              </motion.div>
              <motion.div
                className="w-full sm:w-auto"
                whileHover={reducedMotion ? {} : { y: -1 }}
                whileTap={reducedMotion ? {} : { scale: 0.985 }}
                transition={spring}
              >
                <Button
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className={cn(
                    "glass-pill transition-premium h-[42px] w-full gap-[8px] rounded-[10px] border-white/[0.07] px-[22px]",
                    "bg-white/[0.025] text-[13px] font-medium tracking-[-0.015em] text-white/70",
                    "hover:border-white/[0.11] hover:bg-white/[0.045] hover:text-white/90",
                    "sm:min-w-[140px] sm:w-auto",
                  )}
                  render={<HeroCvDownloadLink />}
                >
                  {t.hero.downloadCv}
                  <Download className="size-[14px]" strokeWidth={1.75} />
                </Button>
              </motion.div>
              <motion.div
                className="w-full sm:w-auto"
                whileHover={reducedMotion ? {} : { y: -1 }}
                whileTap={reducedMotion ? {} : { scale: 0.985 }}
                transition={spring}
              >
                <Button
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className={cn(
                    "glass-pill transition-premium h-[42px] w-full rounded-[10px] border-white/[0.07] px-[22px]",
                    "bg-white/[0.025] text-[13px] font-medium tracking-[-0.015em] text-white/70",
                    "hover:border-white/[0.11] hover:bg-white/[0.045] hover:text-white/90",
                    "sm:min-w-[140px] sm:w-auto",
                  )}
                  render={<a href="#contact" />}
                >
                  {t.hero.getInTouch}
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={variants.item}
              className="mt-[44px] lg:mt-[48px]"
            >
              <ul
                className="glass-pill flex items-center gap-[2px] p-[3px]"
                aria-label={t.hero.socialLinks}
              >
                {(
                  [
                    {
                      key: "github",
                      href: siteConfig.githubProfile,
                      label: t.hero.social.github,
                    },
                    {
                      key: "linkedIn",
                      href: siteConfig.linkedInProfile,
                      label: t.hero.social.linkedIn,
                    },
                    {
                      key: "email",
                      href: `mailto:${siteConfig.email}`,
                      label: t.hero.social.email,
                    },
                  ] as const
                ).map(({ key, href, label }) => {
                  const Icon = socialIcons[key];
                  return (
                  <li key={key}>
                    <motion.div
                      whileHover={reducedMotion ? {} : { y: -1 }}
                      whileTap={reducedMotion ? {} : { scale: 0.95 }}
                      transition={spring}
                    >
                      <Button
                        nativeButton={false}
                        variant="ghost"
                        size="icon-lg"
                        className={cn(
                          "transition-premium size-[36px] rounded-[8px] text-white/32",
                          "hover:bg-white/[0.05] hover:text-white/70",
                        )}
                        render={
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                          />
                        }
                      >
                        <Icon />
                      </Button>
                    </motion.div>
                  </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>

          <HeroProfileCard />
        </div>
      </div>
    </section>
  );
}
