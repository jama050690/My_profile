import { socialLinks } from "../data/social";

export default function PortfolioFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="container mt-16 pb-8">
      <div className="editorial-card flex flex-col gap-6 rounded-[32px] px-7 py-7 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black">Jamshiddin Babajonov</p>
          <p className="profile-copy mt-1 text-sm">
            Frontend Developer &middot; Toshkent, O‘zbekiston
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              className="social"
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
      <p className="profile-copy mt-6 text-center text-sm">
        © {year} Jamshiddin Babajonov. Barcha huquqlar himoyalangan.
      </p>
    </footer>
  );
}
