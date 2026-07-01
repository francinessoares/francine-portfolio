"use client";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipToContent } from "@/components/skip-to-content";
import { LocaleProvider } from "@/i18n/context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <SkipToContent />
      <SiteHeader />
      {children}
      <SiteFooter />
    </LocaleProvider>
  );
}
