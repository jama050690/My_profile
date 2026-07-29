import { Link, Navigate, useParams } from "react-router-dom";
import Logo from "../components/Logo";
import PortfolioFooter from "../components/PortfolioFooter";
import { getProjectBySlug } from "../data/projects";
import { useTheme } from "../hooks/useTheme";

export default function ProjectPage() {
  const { slug } = useParams();
  const { isDark, toggleTheme } = useTheme();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="px-5 py-6 md:px-8">
      <header className="container flex flex-col gap-6 rounded-[32px] glass-card px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Logo />
          <div>
            <p className="section-kicker text-cyan-600">Project Case Study</p>
            <h1 className="mt-2 text-3xl font-black md:text-4xl">{project.title}</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg)]"
            aria-label="Toggle theme"
          >
            <img
              src={isDark ? "/Sun_mode.svg" : "/Dark_mode.svg"}
              alt="Mode icon"
              className="h-6 w-6"
            />
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-semibold"
          >
            Back Home
            <i className="fa-solid fa-arrow-left" />
          </Link>
        </div>
      </header>

      <main className="container mt-8 space-y-8">
        <section className="project-card-strong px-7 py-8 md:px-10 md:py-10">
          <p className="section-kicker text-cyan-300">{project.stack}</p>
          <h2 className="relative z-10 mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            {project.summary}
          </h2>
          <p className="relative z-10 mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            {project.description}
          </p>

          <div className="relative z-10 mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill on-dark">
                {tag}
              </span>
            ))}
          </div>

          <div className="relative z-10 mt-8 flex flex-wrap gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Open Live Project
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Repository
                <i className="fa-brands fa-github" />
              </a>
            ) : null}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="editorial-card rounded-[32px] px-7 py-8">
            <p className="section-kicker text-cyan-600">Project Info</p>
            <div className="mt-6 space-y-5 text-lg">
              <p>
                <b>Project Name:</b>
                <br />
                <span>{project.title}</span>
              </p>
              <p>
                <b>Role:</b>
                <br />
                <span>{project.role}</span>
              </p>
              <p>
                <b>Year:</b>
                <br />
                <span>{project.year}</span>
              </p>
              <p>
                <b>Stack:</b>
                <br />
                <span>{project.stack}</span>
              </p>
            </div>
          </article>

          <article className="editorial-card rounded-[32px] px-7 py-8">
            <p className="section-kicker text-cyan-600">Highlights</p>
            <h3 className="mt-3 text-3xl font-black">What makes this project stand out</h3>
            <div className="mt-6 space-y-4">
              {project.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-slate-200 px-5 py-4"
                >
                  <p className="text-base leading-7">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>

      <PortfolioFooter />
    </div>
  );
}
