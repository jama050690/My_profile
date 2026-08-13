import { Link } from "react-router-dom";
import { socialLinks } from "../data/social";
import Logo from "./Logo";

const FOOTER_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function PortfolioFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer container mt-16 pb-8 pt-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="profile-copy mt-3 max-w-xs text-sm leading-6">
            Frontend &amp; Backend Developer &middot; Toshkent, O‘zbekiston
          </p>
        </div>

        <nav className="flex flex-col gap-3 text-sm font-semibold md:flex-row md:items-center md:gap-8">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              className="footer-social"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              <i className={link.icon} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2 text-center md:flex-row md:justify-between md:text-left">
        <p className="profile-copy text-sm">
          © {year} Jamshiddin Babajonov. Barcha huquqlar himoyalangan.
        </p>
        <p className="font-mono text-xs text-[color:var(--text-color-2)]">
          Built with React &amp; Tailwind
        </p>
      </div>
    </footer>
  );
}
