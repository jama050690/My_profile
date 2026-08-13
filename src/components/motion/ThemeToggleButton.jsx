import { useLanguage } from "../../hooks/LanguageContext";

export default function ThemeToggleButton({ isDark, toggleTheme, className = "" }) {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t("profile.toggleTheme")}
      aria-pressed={isDark}
      className={`theme-toggle ${className}`}
    >
      <span className="theme-toggle-icon" data-visible={!isDark}>
        <img src="/Dark_mode.svg" alt="" aria-hidden="true" />
      </span>
      <span className="theme-toggle-icon" data-visible={isDark}>
        <img src="/Sun_mode.svg" alt="" aria-hidden="true" />
      </span>
    </button>
  );
}
