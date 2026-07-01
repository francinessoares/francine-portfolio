import type { Metadata } from "next";

import { AboutPageContent } from "@/sections/about";
import { defaultLocale, getDictionary } from "@/i18n";

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: `${dict.about.meta.title} — Francine Soares`,
  description: dict.about.meta.description,
};

export default function AboutPage() {
  return <AboutPageContent />;
}
