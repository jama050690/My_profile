import { Navigate, useParams } from "react-router-dom";
import PortfolioHeader from "../components/PortfolioHeader";
import PortfolioFooter from "../components/PortfolioFooter";
import { getProjectBySlug } from "../data/projects";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/LanguageContext";

export default function ProjectPage() {
  const { slug } = useParams();
  const { isDark, toggleTheme } = useTheme();
  const { lang, t } = useLanguage();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="px-5 py-6 md:px-8">
      <PortfolioHeader isDark={isDark} toggleTheme={toggleTheme} />

      <main className="container mt-8 space-y-8">
        <div>
          <p className="section-kicker text-cyan-600">{t("project.caseStudy")}</p>
          <h1 className="mt-2 text-3xl font-black md:text-4xl">{project.title}</h1>
        </div>

        <section className="project-card-strong px-7 py-8 md:px-10 md:py-10">
          <p className="section-kicker text-cyan-300">{project.stack[lang]}</p>
          <h2 className="relative z-10 mt-4 max-w-3xl break-words text-4xl font-black leading-tight md:text-6xl">
            {project.summary[lang]}
          </h2>
          <p className="relative z-10 mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            {project.description[lang]}
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
              {t("project.openLive")}
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                {t("project.viewRepo")}
                <i className="fa-brands fa-github" />
              </a>
            ) : null}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="editorial-card rounded-[32px] px-7 py-8">
            <p className="section-kicker text-cyan-600">{t("project.infoKicker")}</p>
            <div className="mt-6 space-y-5 text-lg">
              <p>
                <b>{t("project.nameLabel")}</b>
                <br />
                <span>{project.title}</span>
              </p>
              <p>
                <b>{t("project.roleLabel")}</b>
                <br />
                <span>{project.role[lang]}</span>
              </p>
              <p>
                <b>{t("project.yearLabel")}</b>
                <br />
                <span>{project.year}</span>
              </p>
              <p>
                <b>{t("project.stackLabel")}</b>
                <br />
                <span>{project.stack[lang]}</span>
              </p>
            </div>
          </article>

          <article className="editorial-card rounded-[32px] px-7 py-8">
            <p className="section-kicker text-cyan-600">{t("project.highlightsKicker")}</p>
            <h3 className="mt-3 text-3xl font-black">{t("project.standoutTitle")}</h3>
            <div className="mt-6 space-y-4">
              {project.highlights.map((item) => (
                <div
                  key={item.uz}
                  className="rounded-[24px] border border-[color-mix(in_srgb,var(--text-color)_8%,transparent)] px-5 py-4"
                >
                  <p className="text-base leading-7">{item[lang]}</p>
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
