import type { Metadata } from "next";

import { defaultLocale, getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/seo";
import { TechStackSection } from "@/sections/tech-stack";

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = createPageMetadata({
  title: dict.techStack.hero.title,
  description: dict.techStack.hero.subtitle,
  path: "/stack",
});

export default function StackPage() {
  return (
    <main
      id="main-content"
      className="relative bg-surface pt-[88px] sm:pt-[96px]"
    >
      <TechStackSection />
    </main>
  );
}
