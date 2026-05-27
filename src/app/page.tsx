import { Hero } from "@/sections/hero";
import { TechStackSection } from "@/sections/tech-stack";

export default function Home() {
  return (
    <main className="relative bg-surface">
      <Hero />
      <TechStackSection />
    </main>
  );
}
