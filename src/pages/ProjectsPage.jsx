import { Link } from "react-router-dom";
import PortfolioHeader from "../components/PortfolioHeader";
import { projects } from "../data/projects";
import { useTheme } from "../hooks/useTheme";

export default function ProjectsPage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="px-5 py-6 md:px-8">
      <PortfolioHeader isDark={isDark} toggleTheme={toggleTheme} />

      <main className="container mt-8 space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker text-cyan-600">Projects</p>
            <h1 className="mt-3 text-3xl font-black md:text-5xl">Loyihalarim</h1>
          </div>
          <p className="profile-copy max-w-xl text-base leading-7">
            Bu sahifada mening loyihalarim alohida case-study formatida jamlangan.
            Har bir kartani bosganda faqat o‘sha loyiha sahifasi ochiladi.
          </p>
        </div>

        <div className="project-shelf">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className={
                index === 0
                  ? "project-card-strong px-7 py-7"
                  : "editorial-card rounded-[32px] px-7 py-7"
              }
            >
              <p
                className={
                  index === 0
                    ? "section-kicker text-cyan-300"
                    : "section-kicker text-cyan-600"
                }
              >
                {project.stack}
              </p>
              <h2 className="mt-4 text-3xl font-black">{project.title}</h2>
              <p
                className={
                  index === 0
                    ? "mt-5 max-w-xl text-base leading-7 text-slate-200"
                    : "profile-copy mt-5 text-base leading-7"
                }
              >
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to={`/projects/${project.slug}`}
                  className={
                    index === 0
                      ? "inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                      : "inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-semibold text-white transition hover:opacity-90"
                  }
                >
                  View Case Study
                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
