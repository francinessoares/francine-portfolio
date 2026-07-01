import type { Metadata } from "next";

import { ContactPageContent } from "@/sections/contact";
import { defaultLocale, getDictionary } from "@/i18n";

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: `${dict.contact.meta.title} — Francine Soares`,
  description: dict.contact.meta.description,
};

export default function ContactPage() {
  return <ContactPageContent />;
}
