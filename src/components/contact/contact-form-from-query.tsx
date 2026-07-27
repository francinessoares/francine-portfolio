"use client";

import { useSearchParams } from "next/navigation";

import { ContactForm } from "@/components/contact/contact-form";

type ContactFormFromQueryProps = {
  className?: string;
};

export function ContactFormFromQuery({ className }: ContactFormFromQueryProps) {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get("assunto") ?? "";

  return <ContactForm className={className} initialSubject={initialSubject} />;
}
