import type { Metadata } from "next";

import { siteConfig, siteTitle, siteUrl } from "@/config/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
};

export const socialImage = {
  url: siteConfig.ogImage,
  alt: `${siteConfig.name} — criação de sites profissionais`,
} as const;

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords,
}: PageMetadataInput): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = `${title} — ${siteConfig.name}`;

  return {
    title,
    description,
    keywords: keywords
      ? keywords.split(",").map((item) => item.trim())
      : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage.url],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s — ${siteConfig.name}`,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [socialImage.url],
  },
};
