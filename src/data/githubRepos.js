export const githubUsername = "jama050690";

// How many repo cards to show in the "Repolarim" grid.
export const githubRepoCount = 6;

// This portfolio site's own repo — excluded so the site doesn't list
// itself as one of "my projects".
const excludedRepoNames = new Set(["My_profile", "My_profile-main"]);

// Decides whether a repo returned by the GitHub API should be featured:
// forks and the portfolio's own repo are filtered out, everything else
// (already public + already sorted by push date by the API call) qualifies.
export function isFeaturedRepo(repo) {
  return !repo.fork && !excludedRepoNames.has(repo.name);
}
