import { Link, NavLink } from "react-router-dom";

export default function PortfolioHeader({ isDark, toggleTheme }) {
  const navClass = ({ isActive }) =>
    `transition hover:text-cyan-500 ${isActive ? "text-cyan-600" : ""}`;

  return (
    <header className="container flex flex-col gap-6 rounded-[32px] glass-card px-6 py-5 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center justify-between gap-4">
        <Link to="/">
          <img className="logo h-[88px] w-[176px]" src="/logoa-2.png" alt="Logo" />
        </Link>
        <button
          type="button"
          onClick={toggleTheme}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg)] md:hidden"
          aria-label="Toggle theme"
        >
          <img
            src={isDark ? "/Sun_mode.svg" : "/Dark_mode.svg"}
            alt="Mode icon"
            className="h-6 w-6"
          />
        </button>
      </div>

      <nav className="flex flex-col gap-4 text-lg font-semibold md:flex-row md:items-center md:gap-8">
        <NavLink to="/" className={navClass} end>
          Home
        </NavLink>
        <NavLink to="/about" className={navClass}>
          About
        </NavLink>
        <NavLink to="/projects" className={navClass}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={navClass}>
          Contact
        </NavLink>
      </nav>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggleTheme}
          className="hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[var(--bg)] md:flex"
          aria-label="Toggle theme"
        >
          <img
            src={isDark ? "/Sun_mode.svg" : "/Dark_mode.svg"}
            alt="Mode icon"
            className="h-6 w-6"
          />
        </button>
        <Link
          to="/login"
          className="inline-flex items-center gap-3 rounded-full bg-[var(--login-color)] px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Login
          <i className="fa-solid fa-right-to-bracket" />
        </Link>
      </div>
    </header>
  );
}
