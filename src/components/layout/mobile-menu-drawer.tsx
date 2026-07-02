"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
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
  "focus-ring relative z-[4] flex size-[44px] shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-[10px] border border-white/[0.12] bg-[rgba(15,15,20,0.96)] text-fg-muted [-webkit-tap-highlight-color:transparent] lg:hidden";

export function MobileMenu({ isActive }: MobileMenuProps) {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const isClient = useSyncExternalStore(
    subscribeNoop,
    getClientSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const overlay =
    isClient
      ? createPortal(
          <>
            <button
              type="button"
              className={cn("mobile-menu-backdrop lg:hidden", !open && "hidden")}
              aria-label={t.a11y.closeMenu}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            />
            <div
              id="mobile-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-hidden={!open}
              aria-label={t.a11y.mainNav}
              className={cn("mobile-menu-panel lg:hidden", !open && "hidden")}
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
                    onClick={() => setOpen(false)}
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
        onClick={() => setOpen((value) => !value)}
      >
        <Menu
          className={cn("size-[18px]", open && "hidden")}
          strokeWidth={1.75}
          aria-hidden
        />
        <X
          className={cn("size-[18px]", !open && "hidden")}
          strokeWidth={1.75}
          aria-hidden
        />
      </button>
      {overlay}
    </>
  );
}
