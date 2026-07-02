import type { Metadata } from "next";

import { AboutPageContent } from "@/sections/about";
import { defaultLocale, getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/seo";

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = createPageMetadata({
  title: dict.about.meta.title,
  description: dict.about.meta.description,
  path: "/sobre",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
