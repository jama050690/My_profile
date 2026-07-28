import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import FadeInUp from "./motion/FadeInUp";
import ThemeToggleButton from "./motion/ThemeToggleButton";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function PortfolioHeader({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <FadeInUp>
      <header
        className={`site-header container glass-card flex flex-col gap-2 rounded-[var(--radius-token-xl)] px-6 md:flex-row md:items-center md:justify-between md:gap-6 ${
          scrolled ? "site-header-scrolled py-3" : "py-5"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Logo />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            className="mobile-menu-button md:hidden"
          >
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
            <span className="sr-only">Menyu</span>
          </button>
        </div>

        <nav id="primary-nav" className="primary-nav" data-open={menuOpen}>
          <div className="primary-nav-inner flex flex-col gap-4 pt-2 text-lg font-semibold md:flex-row md:items-center md:gap-8 md:pt-0 md:text-base">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={closeMenu}
                className="nav-link"
              >
                {link.label}
              </NavLink>
            ))}

            <div className="flex items-center gap-3 pt-2 md:hidden">
              <ThemeToggleButton isDark={isDark} toggleTheme={toggleTheme} />
              <Link to="/login" className="login-button flex-1" onClick={closeMenu}>
                Login
                <i className="fa-solid fa-right-to-bracket" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggleButton isDark={isDark} toggleTheme={toggleTheme} />
          <Link to="/login" className="login-button">
            Login
            <i className="fa-solid fa-right-to-bracket" />
          </Link>
        </div>
      </header>
    </FadeInUp>
  );
}
