"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { siteTitle } from "@/config/site";
import {
  defaultLocale,
  getDictionary,
  htmlLang,
  isLocale,
  type Dictionary,
  type Locale,
} from "@/i18n";

const STORAGE_KEY = "portfolio-locale";

type LocaleContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  const stored = localStorage.getItem(STORAGE_KEY);
  if (isLocale(stored)) return stored;

  if (navigator.language.toLowerCase().startsWith("pt")) return "pt";

  return defaultLocale;
}

function applyDocumentLocale(locale: Locale, dictionary: Dictionary) {
  document.documentElement.lang = htmlLang[locale];
  document.title = siteTitle;

  const metaDescription = document.querySelector('meta[name="description"]');
  metaDescription?.setAttribute("content", dictionary.meta.description);
}

type LocaleProviderProps = {
  children: React.ReactNode;
};

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = readStoredLocale();
    setLocaleState(stored);
    applyDocumentLocale(stored, getDictionary(stored));
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
    applyDocumentLocale(next, getDictionary(next));
  }, []);

  const dictionary = useMemo(() => getDictionary(locale), [locale]);

  const value = useMemo(
    () => ({ locale, dictionary, setLocale }),
    [locale, dictionary, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}

export function useTranslations() {
  return useLocale().dictionary;
}
