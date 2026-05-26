"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code2, Globe, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const socialLinks = [
  { href: "https://github.com", label: "GitHub", icon: Code2 },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Globe },
  { href: "mailto:contato@email.com", label: "E-mail", icon: Mail },
] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-[24px] py-[80px]"
    >
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-center text-center">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-[16px] text-[14px] font-medium tracking-[0.08em] text-muted-foreground uppercase"
        >
          Olá, eu sou
        </motion.p>

        <motion.h1
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-heading text-[48px] leading-[1.1] font-semibold tracking-[-0.02em] text-foreground sm:text-[64px]"
        >
          Francine
        </motion.h1>

        <motion.p
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-[16px] text-[20px] font-medium text-foreground/80 sm:text-[24px]"
        >
          Desenvolvedora Front-end
        </motion.p>

        <motion.p
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-[24px] max-w-[520px] text-[16px] leading-[1.6] text-muted-foreground sm:text-[18px]"
        >
          Construo interfaces digitais com foco em performance, acessibilidade e
          experiência do usuário.
        </motion.p>

        <motion.div
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-[40px] flex flex-wrap items-center justify-center gap-[12px]"
        >
          <Button nativeButton={false} size="lg" render={<a href="#projetos" />}>
            Ver projetos
          </Button>
          <Button
            nativeButton={false}
            size="lg"
            variant="outline"
            render={<a href="#contato" />}
          >
            Entrar em contato
          </Button>
        </motion.div>

        <motion.ul
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-[48px] flex items-center gap-[8px]"
          aria-label="Redes sociais"
        >
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <Button
                nativeButton={false}
                variant="ghost"
                size="icon-lg"
                render={
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  />
                }
              >
                <Icon />
              </Button>
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.a
        href="#projetos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className={cn(
          "absolute bottom-[32px] left-1/2 -translate-x-1/2",
          "flex flex-col items-center gap-[8px] text-muted-foreground transition-colors hover:text-foreground",
        )}
        aria-label="Rolar para projetos"
      >
        <span className="text-[12px] tracking-[0.06em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown className="size-[20px]" />
        </motion.span>
      </motion.a>
    </section>
  );
}
