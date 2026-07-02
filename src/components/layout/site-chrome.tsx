"use client";

import { ScrollToTopButton } from "@/components/scroll-to-top";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipToContent } from "@/components/skip-to-content";

type SiteChromeProps = {
  children: React.ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  return (
    <>
      <SkipToContent />
      <SiteHeader />
      {children}
      <SiteFooter />
      <ScrollToTopButton />
    </>
  );
}
