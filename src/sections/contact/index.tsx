"use client";

import { Suspense } from "react";

import { ContactFormFromQuery } from "@/components/contact/contact-form-from-query";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { PageShell } from "@/components/layout/page-shell";
import { GlassCard } from "@/components/primitives/glass-card";
import { HoverLift } from "@/components/primitives/hover-lift";
import { SectionHeader } from "@/components/primitives/section-header";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { useTranslations } from "@/i18n/context";
import { Mail } from "lucide-react";

const channelIcons = {
  email: Mail,
  linkedIn: LinkedInIcon,
  github: GitHubIcon,
} as const;

export function ContactPageContent() {
  const t = useTranslations();
  const hero = t.contact.hero;
  const channels = t.contact.channels;

  const channelLinks = [
    {
      key: "email" as const,
      label: channels.email,
      href: `mailto:${siteConfig.email}`,
      external: false,
    },
    {
      key: "linkedIn" as const,
      label: channels.linkedIn,
      href: siteConfig.linkedInProfile,
      external: true,
    },
    {
      key: "github" as const,
      label: channels.github,
      href: siteConfig.githubProfile,
      external: true,
    },
  ];

  return (
    <PageShell>
      <div className="pb-[48px] pt-[32px] sm:pt-[48px]">
        <header className="mx-auto max-w-[640px] pb-[40px] text-center sm:pb-[56px]">
          <SectionHeader
            as="h1"
            eyebrow={hero.eyebrow}
            title={hero.title}
            subtitle={hero.subtitle}
            align="center"
            titleId="contact-heading"
          />
        </header>

        <ScrollReveal>
          <GlassCard
            variant="expertise"
            className="mx-auto max-w-[640px] p-[24px] sm:p-[32px]"
          >
            <Suspense
              fallback={
                <div className="h-[360px] animate-pulse rounded-[12px] bg-white/[0.03]" />
              }
            >
              <ContactFormFromQuery />
            </Suspense>
          </GlassCard>
        </ScrollReveal>

        <div className="mx-auto mt-[48px] grid max-w-[640px] gap-[12px] sm:mt-[64px]">
          <p className="mb-[4px] text-center text-[13px] tracking-[-0.01em] text-fg-muted">
            {t.contact.otherChannels}
          </p>
          {channelLinks.map((channel, index) => {
            const Icon = channelIcons[channel.key];

            return (
              <ScrollReveal key={channel.key} delay={index * 0.05}>
                <HoverLift offset={1}>
                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className="focus-ring block"
                  >
                    <GlassCard
                      variant="expertise"
                      className="flex items-center gap-[16px] p-[20px] transition-premium hover:border-border-strong sm:p-[24px]"
                    >
                      <span className="flex size-[40px] shrink-0 items-center justify-center rounded-[10px] border border-white/[0.06] bg-white/[0.03]">
                        <Icon className="size-[18px] text-fg-muted" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-card-title-sm">{channel.label}</p>
                        <p className="text-card-desc mt-[2px] truncate">
                          {channel.key === "email"
                            ? siteConfig.email
                            : channel.href.replace(/^https?:\/\/(www\.)?/, "")}
                        </p>
                      </div>
                    </GlassCard>
                  </a>
                </HoverLift>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}
