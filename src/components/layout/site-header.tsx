"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { navItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { useLocale, useTranslations } from "@/i18n/context";
import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

function SiteLogo() {
  return (
    <Link
      href="/"
      className="focus-ring group flex items-center gap-[10px]"
      aria-label={siteConfig.name}
    >
      <Image
        src={siteConfig.logo}
        alt=""
        width={32}
        height={32}
        priority
        unoptimized
        className="size-[32px] shrink-0 object-contain"
      />
      <div className="hidden min-w-0 leading-none sm:block">
        <span className="block text-[16px] font-semibold tracking-[-0.02em] text-fg-primary">
          Francine
          <span className="text-accent-light">.</span>
        </span>
        <span className="mt-[5px] block text-[11px] font-medium text-fg-muted">
          {siteConfig.role}
        </span>
      </div>
    </Link>
  );
}

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "focus-ring relative px-[16px] py-[10px] text-[13px] font-medium tracking-[-0.01em] transition-premium",
        active ? "text-accent-light" : "text-fg-muted hover:text-fg-secondary",
      )}
    >
      {label}
      {active ? (
        <span className="absolute inset-x-[16px] bottom-[6px] h-[2px] rounded-full bg-accent-light shadow-[0_0_8px_rgba(167,139,250,0.6)]" />
      ) : null}
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
      <div className="glass-nav pointer-events-auto relative mx-auto max-w-[1180px] px-[16px] py-[12px] sm:px-[24px] sm:py-[14px]">
        <div className="flex items-center justify-between gap-[16px] lg:grid lg:grid-cols-[1fr_auto_1fr]">
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

          <div className="flex items-center justify-end gap-[10px]">
            <HeaderCta />
            <HeaderDivider />
            <div className="hidden sm:block">
              <LocaleSwitcher inline />
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="focus-ring flex size-[38px] items-center justify-center rounded-[10px] border border-white/[0.12] bg-[rgba(15,15,20,0.92)] text-fg-muted backdrop-blur-[12px] transition-premium hover:border-accent/20 hover:text-fg-primary lg:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            >
              {menuOpen ? (
                <X className="size-[18px]" strokeWidth={1.75} />
              ) : (
                <Menu className="size-[18px]" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.button
              key="menu-backdrop"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto fixed inset-0 z-40 bg-[rgba(5,5,8,0.72)] backdrop-blur-[4px] lg:hidden"
              aria-label={t.a11y.closeMenu}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="menu-panel"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="glass-nav-menu pointer-events-auto relative z-50 mx-auto mt-[10px] max-w-[1180px] overflow-hidden lg:hidden"
            >
            <nav
              className="flex flex-col gap-[2px] p-[14px]"
              aria-label={t.a11y.mainNav}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  href={item.href}
                  label={t.nav[item.id]}
                  active={isActive(item.href)}
                  onClick={() => setMenuOpen(false)}
                />
              ))}
              <div className="mt-[10px] flex items-center justify-between border-t border-white/[0.08] pt-[14px]">
                <LocaleSwitcher inline />
              </div>
            </nav>
          </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
