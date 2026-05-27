"use client";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { SkipToContent } from "@/components/skip-to-content";
import { LocaleProvider } from "@/i18n/context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <SkipToContent />
      <LocaleSwitcher />
      {children}
    </LocaleProvider>
  );
}
