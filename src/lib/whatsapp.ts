import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/types";

const quoteMessages: Record<Locale, string> = {
  pt: "Olá, Francine! Vi seu site e gostaria de solicitar um orçamento para um projeto.",
  en: "Hi Francine! I saw your website and would like to request a quote for a project.",
};

const productMessages: Record<Locale, (product: string) => string> = {
  pt: (product) =>
    `Olá, Francine! Tenho interesse na solução "${product}" e gostaria de solicitar um orçamento.`,
  en: (product) =>
    `Hi Francine! I'm interested in the "${product}" solution and would like to request a quote.`,
};

export function getWhatsAppQuoteUrl(locale: Locale = "pt") {
  const phone = siteConfig.whatsapp.replace(/\D/g, "");
  const message = quoteMessages[locale];
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppProductUrl(locale: Locale, productName: string) {
  const phone = siteConfig.whatsapp.replace(/\D/g, "");
  const message = productMessages[locale](productName);
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
