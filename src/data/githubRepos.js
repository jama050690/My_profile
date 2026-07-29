export const githubUsername = "jama050690";

// Repos to feature in the GitHub Activity section. `owner`/`repo` are fetched
// live from the GitHub REST API at render time. A repo can instead ship a
// `manual` object (used as-is, no fetch) for cases the API can't serve —
// e.g. PrimeAvto.uz, which 404s on api.github.com/repos even though it's
// clonable over git (likely a GitHub-side indexing lag on their end).
export const githubRepos = [
  { owner: githubUsername, repo: "Mini_instagram_clone_monorope" },
  {
    owner: githubUsername,
    repo: "PrimeAvto.uz",
    manual: {
      name: "PrimeAvto.uz",
      description: "Avtomobil savdo/ijaraga olish platformasi",
      language: "TypeScript",
      stargazers_count: 0,
      html_url: `https://github.com/${githubUsername}/PrimeAvto.uz`,
    },
  },
];
