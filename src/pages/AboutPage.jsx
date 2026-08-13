import PortfolioHeader from "../components/PortfolioHeader";
import PortfolioFooter from "../components/PortfolioFooter";
import FadeInSide from "../components/motion/FadeInSide";
import { skills } from "../data/skills";
import { useTheme } from "../hooks/useTheme";

export default function AboutPage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="px-5 py-6 md:px-8">
      <PortfolioHeader isDark={isDark} toggleTheme={toggleTheme} />

      <main className="container mt-8 landing-grid items-stretch">
        <FadeInSide side="left">
          <article className="editorial-card h-full rounded-[36px] px-7 py-8 md:px-10 md:py-10">
            <p className="section-kicker font-mono text-cyan-600">About Me</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.02em] md:text-6xl md:tracking-[-0.03em]">
              Jamshiddin Babajonov
            </h1>
            <p className="mt-4 text-xl font-semibold text-cyan-700">
              Frontend &amp; Backend Developer
            </p>
            <p className="profile-copy mt-8 max-w-2xl text-lg leading-[1.7]">
              Salom! Men Jamshiddin — g‘oyalarni real ishlaydigan mahsulotga
              aylantirishni yaxshi ko‘radigan frontend va backend dasturchiman.
              Foydalanuvchi ko‘radigan interfeysni ham (React, Tailwind CSS),
              uni ishga soluvchi serverni ham (Node.js, NestJS, PostgreSQL)
              o‘zim quraman — kerak bo‘lsa, Flutter’da mobil ilova tomonini
              ham qo‘shib ketaman.
            </p>
            <p className="profile-copy mt-5 max-w-2xl text-lg leading-[1.7]">
              Eng ko‘p zavq oladigan ishim — murakkab muammoni topib, uni
              ortiqcha murakkablashtirmasdan, sodda va aniq yechim bilan hal
              qilish. Menimcha, yaxshi kod — ishlaydigan, tushunarli va
              odamlarga real foyda beradigan koddir.
            </p>
            <p className="profile-copy mt-5 max-w-2xl text-lg leading-[1.7]">
              Har bir loyiha men uchun yangi narsa o‘rganish imkoniyati,
              shuning uchun to‘xtamay o‘rganaman va har safar avvalgisidan
              yaxshiroq natija berishga harakat qilaman. Loyihangiz bormi?
              Keling, uni birga hayotga tatbiq qilaylik.
            </p>

            <p className="mt-8 section-kicker font-mono text-cyan-600">
              Texnologiyalar
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>

            <a
              href="/Babajonov_Jamshiddin_Maxsudovich_FlowCV_Resume_2026-06-09.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--login-color)] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              CV'ni ko‘rish
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
          </article>
        </FadeInSide>

        <FadeInSide side="right" delay={120}>
          <article className="portrait-frame editorial-card h-full rounded-[36px] p-4">
            <img
              className="h-full min-h-[460px] w-full rounded-[28px] object-cover"
              style={{ objectPosition: "50% 22%" }}
              src="/photo_2025-11-21_19-33-24.jpg"
              alt="Jamshiddin portrait"
            />
          </article>
        </FadeInSide>
      </main>

      <PortfolioFooter />
    </div>
  );
}
