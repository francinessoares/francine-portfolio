"use client";

import { Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

const socialIcons = {
  linkedIn: LinkedInIcon,
  github: GitHubIcon,
  email: Mail,
} as const;

type SocialKey = keyof typeof socialIcons;

const socialLinks: {
  key: SocialKey;
  href: string;
  external: boolean;
}[] = [
  { key: "linkedIn", href: siteConfig.linkedInProfile, external: true },
  { key: "github", href: siteConfig.githubProfile, external: true },
  { key: "email", href: `mailto:${siteConfig.email}`, external: false },
];

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  const t = useTranslations();

  return (
    <ul
      className={cn("flex items-center justify-center gap-[10px]", className)}
      aria-label={t.hero.socialLinks}
    >
      {socialLinks.map(({ key, href, external }) => {
        const Icon = socialIcons[key];
        const label = t.hero.social[key];

        return (
          <li key={key}>
            <Button
              nativeButton={false}
              variant="ghost"
              size="icon-lg"
              className={cn(
                "transition-premium size-[42px] rounded-[12px]",
                "border border-white/[0.08] bg-[#121214] text-accent-light",
                "hover:border-accent/45 hover:bg-accent/[0.12] hover:text-accent-light",
                "hover:shadow-[0_0_22px_-6px_rgba(168,85,247,0.55)]",
              )}
              render={
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={label}
                />
              }
            >
              <Icon />
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
