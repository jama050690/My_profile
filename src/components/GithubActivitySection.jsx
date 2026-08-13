import { useEffect, useState } from "react";
import { githubRepoCount, githubUsername, isFeaturedRepo } from "../data/githubRepos";
import GithubRepoCard from "./GithubRepoCard";
import RevealOnScroll from "./motion/RevealOnScroll";
import { useLanguage } from "../hooks/LanguageContext";

function toCardData(repo) {
  return {
    name: repo.name,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count,
    url: repo.html_url,
  };
}

export default function GithubActivitySection() {
  const { t } = useLanguage();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let cancelled = false;

    fetch(
      `https://api.github.com/users/${githubUsername}/repos?type=public&sort=pushed&direction=desc&per_page=20`
    )
      .then((res) => (res.ok ? res.json() : []))
      .then((repos) => {
        if (cancelled || !Array.isArray(repos)) return;
        setCards(repos.filter(isFeaturedRepo).slice(0, githubRepoCount).map(toCardData));
      })
      .catch(() => {
        if (!cancelled) setCards([]);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (cards.length === 0) return null;

  return (
    <section className="mt-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-kicker font-mono text-cyan-600">{t("github.activityKicker")}</p>
          <h2 className="mt-2 text-3xl font-black">{t("github.myReposTitle")}</h2>
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <RevealOnScroll key={card.url} delay={index * 40}>
            <GithubRepoCard repo={card} />
          </RevealOnScroll>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary btn-secondary-onlight"
        >
          {t("github.viewAll")}
          <i className="fa-solid fa-arrow-right" />
        </a>
      </div>
    </section>
  );
}
