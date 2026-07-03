"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { navItems } from "@/config/navigation";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

import { NavLink } from "./site-header-nav-link";

type MobileMenuProps = {
  isActive: (href: string) => boolean;
};

const BACKDROP_GUARD_MS = 320;

function subscribeNoop() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

const menuButtonClass =
  "mobile-menu-toggle focus-ring relative z-[10] flex size-[44px] shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-[10px] border border-white/[0.12] bg-[rgba(15,15,20,0.96)] text-fg-muted [-webkit-tap-highlight-color:transparent] lg:hidden";

export function MobileMenu({ isActive }: MobileMenuProps) {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const openedAtRef = useRef(0);
  const isClient = useSyncExternalStore(
    subscribeNoop,
    getClientSnapshot,
    getServerSnapshot,
  );

  const closeMenu = () => setOpen(false);

  const toggleMenu = () => {
    setOpen((value) => {
      if (!value) {
        openedAtRef.current = Date.now();
      }
      return !value;
    });
  };

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleBackdropDismiss = () => {
    if (Date.now() - openedAtRef.current < BACKDROP_GUARD_MS) return;
    closeMenu();
  };

  const overlay =
    isClient && open
      ? createPortal(
          <>
            <button
              type="button"
              className="mobile-menu-backdrop lg:hidden"
              aria-label={t.a11y.closeMenu}
              onClick={handleBackdropDismiss}
            />
            <div
              id="mobile-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label={t.a11y.mainNav}
              className="mobile-menu-panel lg:hidden"
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
                    className="touch-manipulation py-[12px]"
                  />
                ))}
                <div className="mt-[10px] flex items-center justify-between border-t border-white/[0.08] pt-[14px]">
                  <LocaleSwitcher inline disableMotion />
                </div>
              </nav>
            </div>
          </>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        className={menuButtonClass}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        aria-haspopup="dialog"
        aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
        onClick={(event) => {
          event.stopPropagation();
          toggleMenu();
        }}
      >
        <Menu
          className={cn("pointer-events-none size-[18px]", open && "hidden")}
          strokeWidth={1.75}
          aria-hidden
        />
        <X
          className={cn("pointer-events-none size-[18px]", !open && "hidden")}
          strokeWidth={1.75}
          aria-hidden
        />
      </button>
      {overlay}
    </>
  );
}
