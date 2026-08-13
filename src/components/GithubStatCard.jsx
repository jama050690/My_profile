import { useEffect, useState } from "react";
import { githubUsername } from "../data/githubRepos";
import { useLanguage } from "../hooks/LanguageContext";

export default function GithubStatCard() {
  const { t } = useLanguage();
  const [count, setCount] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.github.com/users/${githubUsername}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.public_repos) setCount(data.public_repos);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <div className="github-stat-card">
      <span className="github-stat-icon">
        <i className="fa-brands fa-github" />
      </span>
      <p className="mt-4 text-4xl font-black text-white">{count}+</p>
      <p className="mt-1 font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
        {t("github.repos")}
      </p>
    </div>
  );
}
