import PortfolioHeader from "../components/PortfolioHeader";
import PortfolioFooter from "../components/PortfolioFooter";
import { socialLinks } from "../data/social";
import { useTheme } from "../hooks/useTheme";

export default function ContactPage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="px-5 py-6 md:px-8">
      <PortfolioHeader isDark={isDark} toggleTheme={toggleTheme} />

      <main className="container mt-8">
        <section className="contact-panel rounded-[36px] px-7 py-8 text-black md:px-10 md:py-10">
          <div className="grid gap-8 md:grid-cols-[1.15fr_1fr] md:items-center">
            <div>
              <p className="section-kicker font-mono text-black/90">Contact</p>
              <h1 className="mt-3 text-3xl font-black md:text-5xl">Men bilan bog‘laning</h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-black/90">
                Hamkorlik, ish taklifi yoki loyiha bo‘yicha aloqaga chiqmoqchi
                bo‘lsangiz, quyidagi kontaktlar orqali bog‘lanishingiz mumkin.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a className="contact-method" href="tel:+998889239005">
                <span className="contact-method-icon">
                  <i className="fa-solid fa-phone" />
                </span>
                <span>
                  <span className="contact-method-label">Telefon</span>
                  <span className="contact-method-value">+998 88 923 90 05</span>
                </span>
              </a>

              <a className="contact-method" href="mailto:jbm050690@gmail.com">
                <span className="contact-method-icon">
                  <i className="fa-solid fa-envelope" />
                </span>
                <span>
                  <span className="contact-method-label">Email</span>
                  <span className="contact-method-value">jbm050690@gmail.com</span>
                </span>
              </a>

              <div className="mt-1 flex flex-wrap items-center gap-3">
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
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="stack-card">
            <span className="stack-card-icon">
              <i className="fa-solid fa-envelope" />
            </span>
            <p className="mt-4 text-lg font-black">Email</p>
            <a className="profile-copy mt-2 block text-base" href="mailto:jbm050690@gmail.com">
              jbm050690@gmail.com
            </a>
          </div>

          <div className="stack-card">
            <span className="stack-card-icon">
              <i className="fa-solid fa-location-dot" />
            </span>
            <p className="mt-4 text-lg font-black">Manzil</p>
            <p className="profile-copy mt-2 text-base">Toshkent, O‘zbekiston</p>
          </div>

          <div className="stack-card">
            <span className="stack-card-icon">
              <i className="fa-solid fa-circle-check" />
            </span>
            <p className="mt-4 text-lg font-black">Holat</p>
            <p className="profile-copy mt-2 text-base">Yangi loyihalar uchun ochiqman</p>
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </div>
  );
}
