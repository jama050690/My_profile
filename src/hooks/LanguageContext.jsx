import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getInitialLanguage, saveLanguage } from "../lib/storage";
import { translate } from "../i18n/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => getInitialLanguage());

  useEffect(() => {
    document.documentElement.lang = lang;
    saveLanguage(lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      toggleLanguage: () => setLang((current) => (current === "uz" ? "en" : "uz")),
      t: (key) => translate(lang, key),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
