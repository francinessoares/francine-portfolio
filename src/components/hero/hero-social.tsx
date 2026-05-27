"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { HoverLift } from "@/components/primitives/hover-lift";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useHeroMotionContext } from "@/hooks/use-hero-motion";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

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

export function HeroSocial() {
  const t = useTranslations();
  const { variants } = useHeroMotionContext();

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
              <HoverLift offset={1} enableTap>
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
              </HoverLift>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
