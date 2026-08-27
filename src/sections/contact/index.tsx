"use client";

import { Suspense } from "react";

import { ContactFormFromQuery } from "@/components/contact/contact-form-from-query";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { PageShell } from "@/components/layout/page-shell";
import { GlassCard } from "@/components/primitives/glass-card";
import { HoverLift } from "@/components/primitives/hover-lift";
import { SectionHeader } from "@/components/primitives/section-header";
import { getWhatsAppUrl, siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/tech-stack/scroll-reveal";
import { useTranslations } from "@/i18n/context";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function ContactPageContent() {
  const t = useTranslations();
  const hero = t.contact.hero;
  const channels = t.contact.channels;
  const whatsappHref = getWhatsAppUrl(t.contact.whatsappMessage);

  const channelLinks = [
    ...(whatsappHref
      ? [
          {
            key: "whatsapp",
            label: t.a11y.whatsapp,
            href: whatsappHref,
            detail: t.a11y.whatsapp,
            external: true,
            icon: FaWhatsapp,
          },
        ]
      : []),
    {
      key: "email",
      label: channels.email,
      href: `mailto:${siteConfig.email}`,
      detail: siteConfig.email,
      external: false,
      icon: Mail,
    },
    {
      key: "linkedIn",
      label: channels.linkedIn,
      href: siteConfig.linkedInProfile,
      detail: siteConfig.linkedInProfile.replace(/^https?:\/\/(www\.)?/, ""),
      external: true,
      icon: LinkedInIcon,
    },
    {
      key: "github",
      label: channels.github,
      href: siteConfig.githubProfile,
      detail: siteConfig.githubProfile.replace(/^https?:\/\/(www\.)?/, ""),
      external: true,
      icon: GitHubIcon,
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
            const Icon = channel.icon;

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
                          {channel.detail}
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
