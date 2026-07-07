"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Menu, X } from "lucide-react";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { navItems } from "@/config/navigation";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

import { NavLink } from "./site-header-nav-link";

type MobileMenuProps = {
  isActive: (href: string) => boolean;
};

const INTERACTION_GUARD_MS = 450;

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
  "mobile-menu-toggle focus-ring absolute inset-0 flex size-[44px] cursor-pointer touch-manipulation items-center justify-center rounded-[10px] border border-white/[0.12] bg-[rgba(15,15,20,0.96)] text-fg-muted [-webkit-tap-highlight-color:transparent] lg:hidden";

export function MobileMenu({ isActive }: MobileMenuProps) {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [interactionReady, setInteractionReady] = useState(false);
  const isClient = useSyncExternalStore(
    subscribeNoop,
    getClientSnapshot,
    getServerSnapshot,
  );

  const openMenu = () => {
    setInteractionReady(false);
    setOpen(true);
  };

  const closeMenu = () => {
    if (!interactionReady) return;
    setInteractionReady(false);
    setOpen(false);
  };

  const closeMenuForNav = () => {
    setInteractionReady(false);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const guardTimer = window.setTimeout(() => {
      setInteractionReady(true);
    }, INTERACTION_GUARD_MS);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setInteractionReady(false);
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(guardTimer);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleBackdropDismiss = () => {
    if (!interactionReady) return;
    closeMenu();
  };

  const stopTouchGhostClick = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "touch") {
      event.preventDefault();
    }
    event.stopPropagation();
  };

  const overlay =
    isClient && open
      ? (
          <>
            <button
              type="button"
              className={cn(
                "mobile-menu-backdrop lg:hidden",
                !interactionReady && "pointer-events-none",
              )}
              aria-label={t.a11y.closeMenu}
              aria-hidden={!interactionReady}
              tabIndex={interactionReady ? 0 : -1}
              onPointerUp={(event) => {
                stopTouchGhostClick(event);
                handleBackdropDismiss();
              }}
              onClick={(event) => {
                event.stopPropagation();
                handleBackdropDismiss();
              }}
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
                    onClick={closeMenuForNav}
                    className="touch-manipulation py-[12px]"
                  />
                ))}
                <div className="mt-[10px] flex items-center justify-between border-t border-white/[0.08] pt-[14px]">
                  <LocaleSwitcher inline disableMotion />
                </div>
              </nav>
            </div>
          </>
        )
      : null;

  return (
    <>
      <div className="relative z-[10] size-[44px] shrink-0 lg:hidden">
        {!open ? (
          <button
            type="button"
            className={menuButtonClass}
            aria-expanded={false}
            aria-controls="mobile-menu-panel"
            aria-haspopup="dialog"
            aria-label={t.a11y.openMenu}
            onPointerUp={(event) => {
              stopTouchGhostClick(event);
              openMenu();
            }}
            onClick={(event) => {
              event.stopPropagation();
              openMenu();
            }}
          >
            <Menu className="pointer-events-none size-[18px]" strokeWidth={1.75} aria-hidden />
          </button>
        ) : (
          <button
            type="button"
            className={cn(
              menuButtonClass,
              !interactionReady && "pointer-events-none",
            )}
            aria-expanded
            aria-controls="mobile-menu-panel"
            aria-haspopup="dialog"
            aria-label={t.a11y.closeMenu}
            tabIndex={interactionReady ? 0 : -1}
            onPointerUp={(event) => {
              stopTouchGhostClick(event);
              closeMenu();
            }}
            onClick={(event) => {
              event.stopPropagation();
              closeMenu();
            }}
          >
            <X className="pointer-events-none size-[18px]" strokeWidth={1.75} aria-hidden />
          </button>
        )}
      </div>
      {overlay}
    </>
  );
}
