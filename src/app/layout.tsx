import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

import { Providers } from "@/components/providers";
import { siteTitle } from "@/config/site";
import { defaultLocale, getDictionary, htmlLang } from "@/i18n";
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

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: siteTitle,
  description: defaultDescription,
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
      className={cn(
        "dark font-sans antialiased",
        geistSans.variable,
        geistMono.variable,
      )}
    >
      <body className="overflow-x-hidden bg-[#050506] text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
