"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

import { primaryButtonClass } from "@/components/primitives/button-styles";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/i18n/context";
import { cn } from "@/lib/utils";

const fieldClass = cn(
  "w-full rounded-[10px] border border-white/[0.08] bg-white/[0.03] px-[14px] py-[12px]",
  "text-[14px] leading-[22px] text-fg-primary placeholder:text-fg-faint",
  "outline-none transition-premium",
  "hover:border-white/[0.12]",
  "focus:border-accent/40 focus:bg-white/[0.04] focus:ring-[3px] focus:ring-accent/15",
);

const labelClass =
  "mb-[8px] block text-[12px] font-medium tracking-[0.04em] text-fg-muted uppercase";

type FormStatus = "idle" | "submitting" | "success" | "error";

type ContactFormProps = {
  className?: string;
  initialSubject?: string;
};

export function ContactForm({ className, initialSubject = "" }: ContactFormProps) {
  const t = useTranslations();
  const copy = t.contact.form;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          website: honeypot,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? copy.error);
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setHoneypot("");
    } catch {
      setStatus("error");
      setErrorMessage(copy.error);
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-[16px] border border-accent/25 bg-accent-muted px-[24px] py-[32px] text-center",
          className,
        )}
        role="status"
      >
        <p className="text-[16px] font-medium tracking-[-0.02em] text-fg-primary">
          {copy.success}
        </p>
        <button
          type="button"
          className="focus-ring mt-[16px] text-[14px] text-accent-light underline-offset-4 hover:underline"
          onClick={() => setStatus("idle")}
        >
          {copy.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("relative flex flex-col gap-[20px]", className)}
      noValidate
    >
      <div className="grid gap-[20px] sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            {copy.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={120}
            placeholder={copy.namePlaceholder}
            className={fieldClass}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            {copy.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={160}
            placeholder={copy.emailPlaceholder}
            className={fieldClass}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className={labelClass}>
          {copy.subject}
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          maxLength={160}
          placeholder={copy.subjectPlaceholder}
          className={fieldClass}
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          {copy.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          maxLength={4000}
          placeholder={copy.messagePlaceholder}
          className={cn(fieldClass, "min-h-[140px] resize-y")}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>

      {/* Honeypot no final + nome obscuro para não ser preenchido por autofill */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-[1px] w-[1px] overflow-hidden opacity-0"
        style={{ left: "-10000px", top: "auto" }}
      >
        <label htmlFor="contact-company-tax-id">Company</label>
        <input
          id="contact-company-tax-id"
          name="company_tax_id"
          type="text"
          tabIndex={-1}
          autoComplete="new-password"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      {status === "error" ? (
        <p className="text-[14px] text-red-400" role="alert">
          {errorMessage || copy.error}
        </p>
      ) : null}

      <div className="flex justify-start">
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className={cn(primaryButtonClass, "gap-[8px] disabled:opacity-60")}
        >
          <Send className="size-[15px]" strokeWidth={1.75} />
          {status === "submitting" ? copy.submitting : copy.submit}
        </Button>
      </div>
    </form>
  );
}
