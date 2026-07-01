"use client";

import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { PageShell } from "@/components/layout/page-shell";
import { GlassCard } from "@/components/primitives/glass-card";
import { HoverLift } from "@/components/primitives/hover-lift";
import { SectionHeader } from "@/components/primitives/section-header";
import { accentButtonClass } from "@/components/primitives/button-styles";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { useLocale, useTranslations } from "@/i18n/context";
import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Mail, MessageCircle } from "lucide-react";

const channelIcons = {
  email: Mail,
  linkedIn: LinkedInIcon,
  github: GitHubIcon,
  whatsapp: MessageCircle,
} as const;

export function ContactPageContent() {
  const t = useTranslations();
  const { locale } = useLocale();
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
    {
      key: "whatsapp" as const,
      label: channels.whatsapp,
      href: getWhatsAppQuoteUrl(locale),
      external: true,
    },
  ];

  return (
    <PageShell>
      <div className="pb-[48px] pt-[32px] sm:pt-[48px]">
        <header className="mx-auto max-w-[640px] pb-[48px] text-center sm:pb-[64px]">
          <SectionHeader
            eyebrow={hero.eyebrow}
            title={hero.title}
            subtitle={hero.subtitle}
            align="center"
            titleId="contact-heading"
          />
        </header>

        <div className="mx-auto grid max-w-[560px] gap-[12px]">
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
                            : channel.key === "whatsapp"
                              ? "WhatsApp"
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

        <section className="mx-auto mt-[56px] max-w-[560px] text-center sm:mt-[72px]">
          <p className="text-body-section">{t.contact.cta.title}</p>
          <div className="mt-[20px] flex justify-center">
            <HoverLift offset={1} enableTap>
              <Button
                nativeButton={false}
                size="lg"
                className={cn(accentButtonClass, "gap-[8px]")}
                render={
                  <a
                    href={getWhatsAppQuoteUrl(locale)}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <MessageCircle className="size-[16px]" strokeWidth={1.75} />
                {t.contact.cta.button}
              </Button>
            </HoverLift>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
