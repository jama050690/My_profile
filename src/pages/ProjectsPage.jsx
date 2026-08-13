import { Link } from "react-router-dom";
import PortfolioHeader from "../components/PortfolioHeader";
import PortfolioFooter from "../components/PortfolioFooter";
import ProjectCard from "../components/ProjectCard";
import GithubActivitySection from "../components/GithubActivitySection";
import RevealOnScroll from "../components/motion/RevealOnScroll";
import { projects } from "../data/projects";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/LanguageContext";

export default function ProjectsPage() {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="px-5 py-6 md:px-8">
      <PortfolioHeader isDark={isDark} toggleTheme={toggleTheme} />

      <main className="container mt-8 space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker text-cyan-600">{t("projects.kicker")}</p>
            <h1 className="mt-3 text-3xl font-black md:text-5xl">{t("projects.title")}</h1>
          </div>
          <p className="profile-copy max-w-xl text-base leading-7">{t("projects.description")}</p>
        </div>

        <div className="project-shelf">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.slug} delay={index * 80}>
              <ProjectCard project={project} strong={index === 0} />
            </RevealOnScroll>
          ))}
        </div>

        <GithubActivitySection />

        <div className="cta-panel px-7 py-9 text-center md:px-10">
          <p className="relative z-10 section-kicker text-cyan-300">{t("projects.collabKicker")}</p>
          <h2 className="relative z-10 mt-3 text-2xl font-black md:text-4xl">
            {t("projects.collabTitle")}
          </h2>
          <Link
            to="/contact"
            className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {t("projects.collabBtn")}
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </main>

      <PortfolioFooter />
    </div>
  );
}
