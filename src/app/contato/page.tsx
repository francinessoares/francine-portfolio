import type { Metadata } from "next";

import { ContactPageContent } from "@/sections/contact";
import { defaultLocale, getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/seo";

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = createPageMetadata({
  title: dict.contact.meta.title,
  description: dict.contact.meta.description,
  path: "/contato",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
