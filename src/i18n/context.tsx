"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

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

const localeListeners = new Set<() => void>();

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  const stored = localStorage.getItem(STORAGE_KEY);
  if (isLocale(stored)) return stored;

  if (navigator.language.toLowerCase().startsWith("pt")) return "pt";

  return defaultLocale;
}

function subscribeLocale(listener: () => void) {
  localeListeners.add(listener);
  return () => localeListeners.delete(listener);
}

function getLocaleSnapshot(): Locale {
  return readStoredLocale();
}

function getServerLocaleSnapshot(): Locale {
  return defaultLocale;
}

function notifyLocaleChange() {
  localeListeners.forEach((listener) => listener());
}

function applyDocumentLocale(locale: Locale, dictionary: Dictionary) {
  document.documentElement.lang = htmlLang[locale];

  const metaDescription = document.querySelector('meta[name="description"]');
  metaDescription?.setAttribute("content", dictionary.meta.description);
}

type LocaleProviderProps = {
  children: React.ReactNode;
};

export function LocaleProvider({ children }: LocaleProviderProps) {
  const locale = useSyncExternalStore(
    subscribeLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot,
  );

  useEffect(() => {
    applyDocumentLocale(locale, getDictionary(locale));
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem(STORAGE_KEY, next);
    notifyLocaleChange();
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
