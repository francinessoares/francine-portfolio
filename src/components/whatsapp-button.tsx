"use client";

import { FaWhatsapp } from "react-icons/fa";

import { getWhatsAppUrl } from "@/config/site";
import { useTranslations } from "@/i18n/context";

export function WhatsAppButton() {
  const t = useTranslations();
  const href = getWhatsAppUrl(t.contact.whatsappMessage);

  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.a11y.whatsapp}
      className="focus-ring fixed bottom-[max(20px,env(safe-area-inset-bottom,0px)+20px)] left-[max(16px,env(safe-area-inset-left,0px)+16px)] z-40 flex size-[48px] items-center justify-center rounded-[14px] border border-white/[0.1] bg-[rgba(15,15,20,0.88)] text-[#25D366] shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-[16px] transition-premium hover:border-[#25D366]/30 hover:text-[#4ADE80] hover:shadow-[0_8px_32px_rgba(37,211,102,0.16)]"
    >
      <FaWhatsapp className="size-[22px]" aria-hidden />
    </a>
  );
}
