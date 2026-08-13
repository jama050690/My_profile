import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/LanguageContext";

export default function ProjectCard({ project, strong = false }) {
  const { lang, t } = useLanguage();
  const [from, to] = project.accent;

  return (
    <article
      className={
        strong
          ? "project-card-strong flex h-full flex-col px-7 py-7"
          : "editorial-card flex h-full flex-col rounded-[32px] px-7 py-7"
      }
    >
      {strong && <span className="featured-badge">{t("project.featured")}</span>}

      <div className="project-thumb" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
        <i className={project.icon} />
      </div>

      <p className={`mt-5 section-kicker font-mono ${strong ? "text-cyan-300" : "text-cyan-600"}`}>
        {project.stack[lang]}
      </p>
      <h3 className="mt-3 text-2xl font-black">{project.title}</h3>
      <p
        className={
          strong
            ? "mt-3 max-w-xl text-base leading-7 text-slate-200"
            : "profile-copy mt-3 max-w-xl text-base leading-7"
        }
      >
        {project.description[lang]}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className={`tag-pill font-mono ${strong ? "on-dark" : ""}`}>
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <Link to={`/projects/${project.slug}`} className="btn-primary group relative z-10">
          {t("project.viewCaseStudy")}
          <i className="fa-solid fa-arrow-right transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
