import { useEffect, useState } from "react";
import { githubRepos, githubUsername } from "../data/githubRepos";
import GithubRepoCard from "./GithubRepoCard";
import RevealOnScroll from "./motion/RevealOnScroll";

function toCardData(repo, apiData) {
  if (repo.manual) {
    return {
      name: repo.manual.name,
      description: repo.manual.description,
      language: repo.manual.language,
      stars: repo.manual.stargazers_count,
      url: repo.manual.html_url,
    };
  }
  if (!apiData) return null;
  return {
    name: apiData.name,
    description: apiData.description,
    language: apiData.language,
    stars: apiData.stargazers_count,
    url: apiData.html_url,
  };
}

export default function GithubActivitySection() {
  const [cards, setCards] = useState(() =>
    githubRepos.map((repo) => toCardData(repo, null)).filter(Boolean)
  );

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      githubRepos.map(async (repo) => {
        if (repo.manual) return toCardData(repo, null);
        try {
          const res = await fetch(`https://api.github.com/repos/${repo.owner}/${repo.repo}`);
          if (!res.ok) return null;
          const data = await res.json();
          return toCardData(repo, data);
        } catch {
          return null;
        }
      })
    ).then((results) => {
      if (!cancelled) setCards(results.filter(Boolean));
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
          <p className="section-kicker font-mono text-cyan-600">GitHub Activity</p>
          <h2 className="mt-2 text-3xl font-black">Repolarim</h2>
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
          Barcha repolarni ko'rish
          <i className="fa-solid fa-arrow-right" />
        </a>
      </div>
    </section>
  );
}
