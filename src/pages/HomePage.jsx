import { Link } from "react-router-dom";
import PortfolioHeader from "../components/PortfolioHeader";
import { useTheme } from "../hooks/useTheme";

export default function HomePage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="px-5 py-6 md:px-8">
      <PortfolioHeader isDark={isDark} toggleTheme={toggleTheme} />

      <main className="container mt-8">
        <section className="project-card-strong px-7 py-8 md:px-10 md:py-12">
          <p className="section-kicker text-cyan-300">Portfolio</p>
          <h1 className="relative z-10 mt-5 max-w-4xl text-4xl font-black leading-tight md:text-7xl">
            Frontend developer portfolio
          </h1>
          <p className="relative z-10 mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Bu portfolio alohida sahifalarga bo‘lingan. Men haqimda, loyihalarim
            va bog‘lanish ma’lumotlari tartibli va qulay ko‘rinishda joylashtirilgan.
          </p>

          <div className="relative z-10 mt-8 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              About Me
              <i className="fa-solid fa-arrow-right" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              My Projects
              <i className="fa-solid fa-layer-group" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
