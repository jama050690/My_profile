import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/LanguageContext";

export default function Logo({ className = "" }) {
  const { t } = useLanguage();

  return (
    <Link
      to="/"
      className={`logo-lockup ${className}`}
      aria-label={t("nav.logoAriaLabel")}
    >
      <span className="logo-wordmark hidden sm:inline">
        Jama<span className="text-[var(--accent)]">.dev</span>
      </span>
      <img
        className="logo-avatar"
        src="/photo_2025-11-21_19-33-24.jpg"
        alt=""
        aria-hidden="true"
      />
    </Link>
  );
}
