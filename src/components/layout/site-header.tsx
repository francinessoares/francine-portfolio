"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { SiWhatsapp } from "react-icons/si";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { navItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { useLocale, useTranslations } from "@/i18n/context";
import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";

import { MobileMenuDrawer } from "./mobile-menu-drawer";
import { NavLink } from "./site-header-nav-link";

function subscribeHash(listener: () => void) {
  window.addEventListener("hashchange", listener);
  return () => window.removeEventListener("hashchange", listener);
}

function getHashSnapshot() {
  return window.location.hash;
}

function getServerHashSnapshot() {
  return "";
}

function SiteLogo() {
  return (
    <Link
      href="/"
      className="focus-ring group flex items-center gap-[8px] sm:gap-[10px]"
      aria-label={siteConfig.name}
    >
      <Image
        src={siteConfig.logo}
        alt=""
        width={32}
        height={32}
        className="size-[24px] shrink-0 object-contain sm:size-[32px]"
      />
      <div className="hidden min-w-0 leading-none sm:block">
        <span className="block text-[15px] font-semibold tracking-[-0.02em] text-fg-primary sm:text-[16px]">
          Francine
          <span className="text-accent-light">.</span>
        </span>
        <span className="mt-[4px] block text-[10px] font-medium text-fg-muted sm:mt-[5px] sm:text-[11px]">
          {siteConfig.role}
        </span>
      </div>
    </Link>
  );
}

function HeaderCta() {
  const t = useTranslations();
  const { locale } = useLocale();

  return (
    <a
      href={getWhatsAppQuoteUrl(locale)}
      target="_blank"
      rel="noopener noreferrer"
      className="nav-cta focus-ring"
      aria-label={t.header.cta}
    >
      <SiWhatsapp className="size-[16px] text-accent-light" aria-hidden />
      <span className="hidden md:inline">{t.header.cta}</span>
    </a>
  );
}

function HeaderDivider() {
  return (
    <span
      className="hidden h-[24px] w-[1px] bg-white/[0.1] sm:block"
      aria-hidden
    />
  );
}

export function SiteHeader() {
  const t = useTranslations();
  const pathname = usePathname();
  const hash = useSyncExternalStore(
    subscribeHash,
    getHashSnapshot,
    getServerHashSnapshot,
  );

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && !hash;
    }
    if (href.startsWith("/#")) {
      return pathname === "/" && hash === href.slice(1);
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-[16px] pt-[max(14px,env(safe-area-inset-top,0px)+10px)] sm:px-[24px]">
      <div className="glass-nav pointer-events-auto relative z-[60] mx-auto max-w-[1180px] px-[12px] py-[10px] sm:px-[24px] sm:py-[14px]">
        <div className="flex items-center justify-between gap-[12px] lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-[16px]">
          <div className="justify-self-start">
            <SiteLogo />
          </div>

          <nav
            className="hidden items-center justify-center lg:flex"
            aria-label={t.a11y.mainNav}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                href={item.href}
                label={t.nav[item.id]}
                active={isActive(item.href)}
              />
            ))}
          </nav>

          <div className="flex items-center justify-end gap-[8px] sm:gap-[10px]">
            <HeaderCta />
            <HeaderDivider />
            <div className="hidden sm:block">
              <LocaleSwitcher inline />
            </div>

            <MobileMenuDrawer
              key={`${pathname}${hash}`}
              isActive={isActive}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
