"use client";

import { useTranslations } from "@/i18n/context";

export function SkipToContent() {
  const t = useTranslations();

  return (
    <a
      href="#main-content"
      className="focus-ring sr-only fixed top-[12px] left-[12px] z-[100] rounded-[8px] bg-surface-elevated px-[12px] py-[8px] text-[13px] font-medium text-fg-primary focus:not-sr-only"
    >
      {t.a11y.skipToContent}
    </a>
  );
}
