import type { Metadata } from "next";

import { ServicesPageContent } from "@/sections/services";
import { defaultLocale, getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/seo";

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = createPageMetadata({
  title: dict.services.meta.title,
  description: dict.services.meta.description,
  path: "/servicos",
});

export default function ServicesPage() {
  return <ServicesPageContent />;
}
