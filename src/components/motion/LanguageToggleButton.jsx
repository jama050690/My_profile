import { useLanguage } from "../../hooks/LanguageContext";

export default function LanguageToggleButton({ className = "" }) {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t("nav.switchLanguage")}
      className={`language-toggle ${className}`}
    >
      {lang === "uz" ? "EN" : "UZ"}
    </button>
  );
}
