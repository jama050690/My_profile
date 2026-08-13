const LANGUAGE_COLORS = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  EJS: "#a91e50",
  C: "#555555",
  PLpgSQL: "#336790",
};

export default function GithubRepoCard({ repo }) {
  const languageColor = LANGUAGE_COLORS[repo.language] || "var(--accent)";

  return (
    <article className="repo-card">
      <div className="repo-card-bar">
        <span className="code-terminal-dot code-terminal-dot-red" />
        <span className="code-terminal-dot code-terminal-dot-yellow" />
        <span className="code-terminal-dot code-terminal-dot-green" />
        <span className="repo-card-path">
          <i className="fa-solid fa-code repo-card-glyph" />
          ~/ {repo.name}
        </span>
        {typeof repo.stars === "number" && (
          <span className="repo-card-stars">
            <i className="fa-solid fa-star" />
            {repo.stars}
          </span>
        )}
      </div>

      <div className="repo-card-body">
        <p className="repo-card-description">
          {repo.description || "Tavsif qo‘shilmagan."}
        </p>

        {repo.language && (
          <span className="repo-card-language">
            <span className="repo-card-language-dot" style={{ background: languageColor }} />
            {repo.language}
          </span>
        )}

        <a
          href={repo.url}
          target="_blank"
          rel="noreferrer"
          className="repo-card-source"
        >
          SOURCE
          <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
      </div>
    </article>
  );
}
