import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist } from "next/font/google";

import { SiteChrome } from "@/components/layout/site-chrome";
import { LocaleProvider } from "@/i18n/context";
import { siteTitle, siteUrl } from "@/config/site";
import { defaultLocale, getDictionary, htmlLang } from "@/i18n";
import { rootMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

const defaultDescription = getDictionary(defaultLocale).meta.description;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  ...rootMetadata,
  description: defaultDescription,
  openGraph: {
    ...rootMetadata.openGraph,
    title: siteTitle,
    description: defaultDescription,
    url: siteUrl,
  },
  twitter: {
    ...rootMetadata.twitter,
    title: siteTitle,
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={htmlLang[defaultLocale]}
      suppressHydrationWarning
      className={cn("dark font-sans antialiased", geistSans.variable)}
    >
      <body className="overflow-x-hidden bg-surface text-foreground">
        <LocaleProvider>
          <SiteChrome>{children}</SiteChrome>
        </LocaleProvider>
      </body>
    </html>
  );
}
