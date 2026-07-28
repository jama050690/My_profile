import { Link } from "react-router-dom";
import PortfolioHeader from "../components/PortfolioHeader";
import PortfolioFooter from "../components/PortfolioFooter";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";
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

        <section className="mt-8">
          <p className="section-kicker text-cyan-600">Texnologiyalar</p>
          <h2 className="mt-2 text-3xl font-black">Mening Stackim</h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label} className="stack-card">
                <span className="stack-card-icon">
                  <i className={group.icon} />
                </span>
                <p className="mt-4 text-lg font-black">{group.label}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker text-cyan-600">Featured Work</p>
              <h2 className="mt-2 text-3xl font-black">Loyihalarimdan namunalar</h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-500"
            >
              Barcha loyihalar
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>

          <div className="project-shelf mt-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="cta-panel mt-8 px-7 py-9 text-center md:px-10">
          <p className="relative z-10 section-kicker text-cyan-300">Hamkorlik</p>
          <h2 className="relative z-10 mt-3 text-2xl font-black md:text-4xl">
            Loyihangiz bormi? Birga ishlaylik.
          </h2>
          <Link
            to="/contact"
            className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Bog‘lanish
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </section>
      </main>

      <PortfolioFooter />
    </div>
  );
}
