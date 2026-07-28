export default function ThemeToggleButton({ isDark, toggleTheme, className = "" }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Mavzuni almashtirish"
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
