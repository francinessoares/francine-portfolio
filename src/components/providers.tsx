"use client";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { LocaleProvider } from "@/i18n/context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <LocaleSwitcher />
      {children}
    </LocaleProvider>
  );
}
