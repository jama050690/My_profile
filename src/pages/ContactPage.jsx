import PortfolioHeader from "../components/PortfolioHeader";
import { useTheme } from "../hooks/useTheme";

const socialLinks = [
  {
    href: "https://t.me/Jama_9133",
    icon: "fa-brands fa-telegram",
    label: "Telegram",
  },
  {
    href: "https://www.linkedin.com/in/jamshiddin-babajonov-168705382/",
    icon: "fa-brands fa-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/jama050690",
    icon: "fa-brands fa-square-github",
    label: "GitHub",
  },
  {
    href: "https://wa.me/998957990034",
    icon: "fa-brands fa-whatsapp",
    label: "WhatsApp",
  },
];

export default function ContactPage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="px-5 py-6 md:px-8">
      <PortfolioHeader isDark={isDark} toggleTheme={toggleTheme} />

      <main className="container mt-8">
        <section className="contact-panel rounded-[36px] px-7 py-8 text-black md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker text-black/70">Contact</p>
              <h1 className="mt-3 text-3xl font-black md:text-5xl">Men bilan bog‘laning</h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-black/75">
                Hamkorlik, ish taklifi yoki loyiha bo‘yicha aloqaga chiqmoqchi
                bo‘lsangiz, quyidagi kontaktlar orqali bog‘lanishingiz mumkin.
              </p>
            </div>

            <a className="text-3xl font-black no-underline" href="tel:+998957990034">
              +998 95 799 00 34
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
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
        </section>
      </main>
    </div>
  );
}
