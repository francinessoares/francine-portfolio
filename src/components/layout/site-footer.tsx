"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { siteConfig } from "@/config/site";
import {
  footerNavItems,
  footerServiceItems,
  footerTechStack,
} from "@/data/footer";
import { useLocale, useTranslations } from "@/i18n/context";
import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const footerLinkClass = cn(
  "text-[14px] tracking-[-0.01em] text-fg-muted transition-premium",
  "hover:text-accent-light",
);

type FooterLinkListProps = {
  title: string;
  children: React.ReactNode;
};

function FooterLinkList({ title, children }: FooterLinkListProps) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.12em] text-fg-faint uppercase">
        {title}
      </p>
      <ul className="mt-[20px] flex flex-col gap-[14px]">{children}</ul>
    </div>
  );
}

export function SiteFooter() {
  const t = useTranslations();
  const { locale } = useLocale();
  const copy = t.footer;

  const contactLinks = [
    {
      id: "whatsapp",
      label: copy.contact.whatsapp,
      href: getWhatsAppQuoteUrl(locale),
      external: true,
      icon: SiWhatsapp,
      iconClass: "text-[#25D366]",
    },
    {
      id: "email",
      label: copy.contact.email,
      href: `mailto:${siteConfig.email}`,
      external: false,
      icon: Mail,
      iconClass: "text-accent-light",
    },
    {
      id: "linkedin",
      label: copy.contact.linkedIn,
      href: siteConfig.linkedInProfile,
      external: true,
      icon: LinkedInIcon,
      iconClass: "text-fg-muted group-hover:text-accent-light",
    },
    {
      id: "github",
      label: copy.contact.github,
      href: siteConfig.githubProfile,
      external: true,
      icon: GitHubIcon,
      iconClass: "text-fg-muted group-hover:text-accent-light",
    },
  ] as const;

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#040406]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/35 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[160px] bg-[radial-gradient(ellipse_70%_80%_at_50%_-20%,rgba(139,92,246,0.08),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1180px] px-[20px] py-[72px] sm:px-[32px] sm:py-[88px] lg:py-[96px]">
        <div className="grid gap-[48px] sm:grid-cols-2 lg:grid-cols-12 lg:gap-[40px]">
          <div className="sm:col-span-2 lg:col-span-5">
            <Link href="/" className="focus-ring group inline-flex items-center gap-[12px]">
              <Image
                src={siteConfig.logo}
                alt=""
                width={36}
                height={36}
                unoptimized
                className="size-[36px] object-contain"
              />
              <div className="leading-none">
                <span className="block text-[18px] font-semibold tracking-[-0.02em] text-fg-primary">
                  Francine
                  <span className="text-accent-light">.</span>
                </span>
                <span className="mt-[6px] block text-[12px] font-medium text-fg-muted">
                  {siteConfig.role}
                </span>
              </div>
            </Link>
            <p className="text-body mt-[24px] max-w-[36ch] text-[15px] leading-[26px] text-fg-body">
              {copy.brand.description}
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <FooterLinkList title={copy.sections.navigation}>
              {footerNavItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className={footerLinkClass}>
                    {copy.nav[item.id]}
                  </Link>
                </li>
              ))}
            </FooterLinkList>
          </div>

          <div className="lg:col-span-2">
            <FooterLinkList title={copy.sections.services}>
              {footerServiceItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className={footerLinkClass}>
                    {copy.services[item.id]}
                  </Link>
                </li>
              ))}
            </FooterLinkList>
          </div>

          <div className="lg:col-span-2">
            <FooterLinkList title={copy.sections.contact}>
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className={cn(
                        "group focus-ring inline-flex items-center gap-[10px]",
                        footerLinkClass,
                      )}
                    >
                      <Icon
                        className={cn("size-[16px] shrink-0", item.iconClass)}
                        aria-hidden
                      />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </FooterLinkList>
          </div>
        </div>

        <div className="mt-[56px] flex flex-col gap-[24px] border-t border-white/[0.06] pt-[32px] lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[13px] leading-[22px] text-fg-muted">
            {copy.bottom.copyright}
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            {copy.bottom.rights}
          </p>

          <div className="flex flex-wrap items-center gap-[8px] text-[12px] text-fg-faint">
            <span>{copy.bottom.builtWith}</span>
            {footerTechStack.map((tech, index) => (
              <span key={tech} className="inline-flex items-center gap-[8px]">
                {index > 0 ? (
                  <span className="text-white/10" aria-hidden>
                    ·
                  </span>
                ) : null}
                <span className="font-medium tracking-[-0.01em] text-fg-muted">
                  {tech}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
