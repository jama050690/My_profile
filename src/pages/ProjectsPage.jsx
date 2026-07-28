import { Link } from "react-router-dom";
import PortfolioHeader from "../components/PortfolioHeader";
import PortfolioFooter from "../components/PortfolioFooter";
import ProjectCard from "../components/ProjectCard";
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
            <ProjectCard key={project.slug} project={project} strong={index === 0} />
          ))}
        </div>

        <div className="cta-panel px-7 py-9 text-center md:px-10">
          <p className="relative z-10 section-kicker text-cyan-300">Hamkorlik</p>
          <h2 className="relative z-10 mt-3 text-2xl font-black md:text-4xl">
            Loyiha bo‘yicha hamkorlik qilishni xohlaysizmi?
          </h2>
          <Link
            to="/contact"
            className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Bog‘lanish
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </main>

      <PortfolioFooter />
    </div>
  );
}
