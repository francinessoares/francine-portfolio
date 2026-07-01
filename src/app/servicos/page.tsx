import type { Metadata } from "next";

import { ServicesPageContent } from "@/sections/services";
import { defaultLocale, getDictionary } from "@/i18n";

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: `${dict.services.meta.title} — Francine Soares`,
  description: dict.services.meta.description,
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
