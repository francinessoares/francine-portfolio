import { en } from "@/i18n/locales/en";
import { pt } from "@/i18n/locales/pt";
import type { Dictionary, Locale } from "@/i18n/types";

export const defaultLocale: Locale = "pt";

export const locales = ["pt", "en"] as const satisfies readonly Locale[];

export const htmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
};

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "pt" || value === "en";
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary, Locale };
