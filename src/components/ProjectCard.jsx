import { Link } from "react-router-dom";

export default function ProjectCard({ project, strong = false }) {
  const [from, to] = project.accent;

  return (
    <article className={strong ? "project-card-strong px-7 py-7" : "editorial-card rounded-[32px] px-7 py-7"}>
      <div className="project-thumb" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
        <i className={project.icon} />
      </div>

      <p className={`mt-5 section-kicker ${strong ? "text-cyan-300" : "text-cyan-600"}`}>
        {project.stack}
      </p>
      <h3 className="mt-3 text-2xl font-black">{project.title}</h3>
      <p
        className={
          strong
            ? "mt-3 max-w-xl text-base leading-7 text-slate-200"
            : "profile-copy mt-3 text-base leading-7"
        }
      >
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className={`tag-pill ${strong ? "on-dark" : ""}`}>
            {tag}
          </span>
        ))}
      </div>

      <Link
        to={`/projects/${project.slug}`}
        className={
          strong
            ? "mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            : "mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-semibold text-white transition hover:opacity-90"
        }
      >
        View Case Study
        <i className="fa-solid fa-arrow-right" />
      </Link>
    </article>
  );
}
