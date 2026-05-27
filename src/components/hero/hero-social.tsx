"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/i18n/context";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Variants } from "framer-motion";

const socialIcons = {
  github: GitHubIcon,
  linkedIn: LinkedInIcon,
  email: Mail,
} as const;

type SocialKey = keyof typeof socialIcons;

const socialLinks: {
  key: SocialKey;
  href: string;
  external: boolean;
}[] = [
  { key: "github", href: siteConfig.githubProfile, external: true },
  { key: "linkedIn", href: siteConfig.linkedInProfile, external: true },
  { key: "email", href: `mailto:${siteConfig.email}`, external: false },
];

type HeroSocialProps = {
  reducedMotion: boolean;
  variants: { item: Variants };
};

export function HeroSocial({ reducedMotion, variants }: HeroSocialProps) {
  const t = useTranslations();

  return (
    <motion.div variants={variants.item} className="mt-[44px] lg:mt-[48px]">
      <ul
        className="glass-pill flex items-center gap-[2px] p-[3px]"
        aria-label={t.hero.socialLinks}
      >
        {socialLinks.map(({ key, href, external }) => {
          const Icon = socialIcons[key];
          const label = t.hero.social[key];

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
                      {...(external
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
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
  );
}
