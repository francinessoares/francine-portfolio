"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { navItems } from "@/config/navigation";
import { useTranslations } from "@/i18n/context";

import { NavLink } from "./site-header-nav-link";

type MobileMenuDrawerProps = {
  isActive: (href: string) => boolean;
};

export function MobileMenuDrawer({ isActive }: MobileMenuDrawerProps) {
  const t = useTranslations();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenedAtRef = useRef(0);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  const MENU_OPEN_GUARD_MS = 80;

  const openMenu = () => {
    menuOpenedAtRef.current = Date.now();
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const canDismissMenu = () =>
    Date.now() - menuOpenedAtRef.current > MENU_OPEN_GUARD_MS;

  const handleMenuToggle = () => {
    if (menuOpen) {
      if (canDismissMenu()) closeMenu();
      return;
    }
    openMenu();
  };

  const handleBackdropDismiss = () => {
    if (canDismissMenu()) closeMenu();
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const panel = menuPanelRef.current;
    if (!panel) return;

    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    window.requestAnimationFrame(() => first?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        menuToggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <button
        ref={menuToggleRef}
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          handleMenuToggle();
        }}
        className="focus-ring flex size-[34px] touch-manipulation items-center justify-center rounded-[10px] border border-white/[0.12] bg-[rgba(15,15,20,0.92)] text-fg-muted backdrop-blur-[12px] transition-premium hover:border-accent/20 hover:text-fg-primary sm:size-[38px] lg:hidden"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu-panel"
        aria-haspopup="dialog"
        aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
      >
        {menuOpen ? (
          <X className="size-[18px]" strokeWidth={1.75} />
        ) : (
          <Menu className="size-[18px]" strokeWidth={1.75} />
        )}
      </button>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.button
              key="menu-backdrop"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="pointer-events-auto fixed inset-0 z-40 touch-manipulation bg-[rgba(5,5,8,0.72)] backdrop-blur-[4px] lg:hidden"
              aria-label={t.a11y.closeMenu}
              onClick={handleBackdropDismiss}
            />
            <motion.div
              ref={menuPanelRef}
              key="menu-panel"
              id="mobile-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label={t.a11y.mainNav}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.12 }}
              className="glass-nav-menu pointer-events-auto relative z-[55] mx-auto mt-[10px] max-w-[1180px] overflow-hidden lg:hidden"
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
                    onClick={closeMenu}
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
    </>
  );
}
