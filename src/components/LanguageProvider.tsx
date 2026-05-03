"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { translations, type Language, type Translation } from "@/lib/site";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("utech-language");

    if (savedLanguage === "ar" || savedLanguage === "en") {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const direction = language === "ar" ? "rtl" : "ltr";

    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.documentElement.dataset.language = language;
    window.localStorage.setItem("utech-language", language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    const setLanguage = (nextLanguage: Language) => setLanguageState(nextLanguage);
    const toggleLanguage = () =>
      setLanguageState((currentLanguage) => (currentLanguage === "en" ? "ar" : "en"));

    return {
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language]
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
