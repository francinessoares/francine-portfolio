"use client";

import { About } from "@/components/about/about";
import { Section } from "@/components/primitives/section";

export function HomeAboutSection() {
  return (
    <Section id="sobre" bordered={false} className="relative overflow-hidden">
      <About />
    </Section>
  );
}
