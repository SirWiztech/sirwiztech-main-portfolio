import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaUsers,
  FaUserPlus,
  FaFolderOpen,
  FaLocationDot,
  FaArrowUpRightFromSquare,
  FaCodeFork,
} from "react-icons/fa6";

const GITHUB_USERNAME = "sirwiztech";
const PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;
const API_PROFILE = `https://api.github.com/users/${GITHUB_USERNAME}`;
const API_REPOS = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`;

// Cache API responses in localStorage (TTL 1h) so repeat visits render
// instantly and we don't exhaust GitHub's unauthenticated rate limit (60/hr).
const CACHE_KEY = `github-${GITHUB_USERNAME}`;
const CACHE_TTL = 60 * 60 * 1000;

const readCache = () => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (Date.now() - cached.fetchedAt > CACHE_TTL) return null;
    return cached;
  } catch {
    return null;
  }
};

const writeCache = (profile, repos) => {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ fetchedAt: Date.now(), profile, repos })
    );
  } catch {
    /* storage full/blocked — ignore */
  }
};

// Dot colors for common languages (fallback grey for anything else)
const languageColors = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  PHP: "#4F5D95",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  Java: "#b07219",
  Dart: "#00B4AB",
  Vue: "#41b883",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  Shell: "#89e051",
  Go: "#00ADD8",
  Rust: "#dea584",
  Ruby: "#701516",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Markdown: "#083fa1",
};

const formatNumber = (n) => new Intl.NumberFormat("en-US").format(n ?? 0);

const GitHubMain = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [totalStars, setTotalStars] = useState(0);
  const [status, setStatus] = useState("loading"); // "loading" | "ready" | "error"

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      // Serve a fresh cached snapshot instantly, then fetch in the background
      // to keep it current.
      const cached = readCache();
      if (cached) {
        setProfile(cached.profile);
        setRepos(cached.repos);
        setTotalStars(
          cached.repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0)
        );
        setStatus("ready");
      }

      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(API_PROFILE, { signal: controller.signal }),
          fetch(API_REPOS, { signal: controller.signal }),
        ]);
        if (!userRes.ok) throw new Error("GitHub API unavailable");

        const user = await userRes.json();
        const reposData = reposRes.ok ? await reposRes.json() : [];
        const stars = reposData.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);

        setProfile(user);
        setRepos(reposData);
        setTotalStars(stars);
        setStatus("ready");
        writeCache(user, reposData);
      } catch (err) {
        // Keep showing cached data if we had it; otherwise fall back.
        if (err.name !== "AbortError" && !cached) setStatus("error");
      }
    };

    load();
    return () => controller.abort();
  }, []);

  const topRepos = [...repos]
    .sort(
      (a, b) =>
        (b.stargazers_count || 0) - (a.stargazers_count || 0) ||
        new Date(b.pushed_at) - new Date(a.pushed_at)
    )
    .slice(0, 3);

  const stats = [
    { label: "Repositories", value: profile?.public_repos ?? repos.length, Icon: FaFolderOpen },
    { label: "Followers", value: profile?.followers, Icon: FaUsers },
    { label: "Following", value: profile?.following, Icon: FaUserPlus },
    { label: "Stars", value: totalStars, Icon: FaStar },
  ];

  return (
    <section id="github" className="container-portfolio section-pad">
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-12 text-center"
      >
        <span className="eyebrow justify-center">
          <FaGithub />
          Open Source
        </span>
        <h2 className="section-title mt-3">GitHub</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lightGrey">
          Clean code, real projects — explore my public repositories and see what I’m building.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="card-portfolio relative overflow-hidden"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />

        {status === "loading" && <GitHubSkeleton />}
        {status === "error" && <GitHubFallback />}
        {status === "ready" && profile && (
          <div className="relative grid w-full grid-cols-1 gap-12 p-6 sm:p-8 md:p-12 lg:grid-cols-[auto_1fr] lg:gap-16">
            {/* Identity */}
            <div className="flex min-w-0 flex-col items-center gap-6 lg:items-start">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 animate-spin-slow rounded-full bg-gradient-to-tr from-cyan via-transparent to-orange" />
                <img
                  src={profile.avatar_url}
                  alt={`${profile.name} GitHub avatar`}
                  loading="lazy"
                  width={112}
                  height={112}
                  className="relative h-28 w-28 rounded-full border-2 border-surface-2 object-cover"
                />
              </div>

              <div className="text-center lg:text-left">
                <h3 className="font-special text-2xl font-bold">{profile.name}</h3>
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-cyan transition-colors hover:text-lightCyan"
                >
                  @{profile.login}
                </a>
                {profile.bio && (
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-lightGrey">
                    {profile.bio}
                  </p>
                )}
                {profile.location && (
                  <p className="mt-3 flex items-center justify-center gap-2 text-sm text-lightGrey lg:justify-start">
                    <FaLocationDot className="text-orange" />
                    {profile.location}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-darkCyan px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:shadow-glowCyan"
                >
                  Follow on GitHub
                  <FaArrowUpRightFromSquare />
                </a>
                <a
                  href={`${profile.html_url}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-orange/60 px-6 py-3 text-sm font-bold text-orange transition-all duration-300 hover:bg-orange hover:text-black hover:shadow-glowAmber"
                >
                  View Repos
                </a>
              </div>
            </div>

            {/* Stats + top repos */}
            <div className="flex min-w-0 flex-col gap-8">
              <div className="grid w-full min-w-0 grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {stats.map(({ label, value, Icon }) => (
                  <div
                    key={label}
                    className="flex min-w-0 flex-col items-center gap-2 rounded-xl border border-white/10 bg-surface-2/60 px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-glowCyan sm:px-4"
                  >
                    <Icon className="text-2xl text-cyan" />
                    <span className="font-special text-2xl font-bold sm:text-3xl">
                      {formatNumber(value)}
                    </span>
                    <span className="text-xs uppercase tracking-wide text-lightGrey">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest2 text-white/50">
                  Top Repositories
                </h4>
                <ul className="mt-4 flex w-full min-w-0 flex-col gap-3">
                  {topRepos.map((repo) => (
                    <li key={repo.id} className="min-w-0">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex w-full min-w-0 items-center justify-between gap-4 rounded-xl border border-white/10 bg-surface-2/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/40 hover:bg-surface-2"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <FaCodeBranch className="shrink-0 text-orange" />
                          <div className="min-w-0">
                            <p className="truncate font-semibold text-white transition-colors group-hover:text-cyan">
                              {repo.name}
                            </p>
                            {repo.description && (
                              <p className="truncate text-sm text-lightGrey">
                                {repo.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex shrink-0 items-center gap-4 text-sm text-lightGrey">
                          {repo.language && (
                            <span className="hidden items-center gap-1.5 md:flex">
                              <span
                                className="h-2.5 w-2.5 rounded-full"
                                style={{
                                  backgroundColor:
                                    languageColors[repo.language] || "#8b949e",
                                }}
                              />
                              {repo.language}
                            </span>
                          )}
                          <span className="flex items-center gap-1" title="Stars">
                            <FaStar className="text-lightOrange" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1" title="Forks">
                            <FaCodeFork />
                            {repo.forks_count}
                          </span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

/* ---------- Loading skeleton ---------- */
const GitHubSkeleton = () => (
  <div className="relative grid w-full animate-pulse gap-12 p-6 sm:p-8 md:p-12 lg:grid-cols-[auto_1fr] lg:gap-16">
    <div className="flex min-w-0 flex-col items-center gap-6 lg:items-start">
      <div className="h-28 w-28 rounded-full bg-surface-2" />
      <div className="flex w-full max-w-[220px] flex-col items-center gap-3 lg:items-start">
        <div className="h-5 w-40 rounded-full bg-surface-2" />
        <div className="h-4 w-24 rounded-full bg-surface-2" />
        <div className="h-3 w-full rounded-full bg-surface-2" />
        <div className="h-3 w-2/3 rounded-full bg-surface-2" />
      </div>
      <div className="h-11 w-44 rounded-full bg-surface-2" />
    </div>
    <div className="flex min-w-0 flex-col gap-8">
      <div className="grid w-full min-w-0 grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-28 rounded-xl bg-surface-2" />
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-16 rounded-xl bg-surface-2" />
        ))}
      </div>
    </div>
  </div>
);

/* ---------- Fallback when the API is unreachable ---------- */
const GitHubFallback = () => (
  <div className="relative flex flex-col items-center gap-6 p-10 text-center md:p-14">
    <FaGithub className="text-6xl text-cyan" />
    <div>
      <h3 className="font-special text-2xl font-bold">Explore my GitHub</h3>
      <p className="mt-2 max-w-md text-lightGrey">
        Live stats are temporarily unavailable — head over to my profile to see my
        repositories and contributions.
      </p>
    </div>
    <a
      href={PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-darkCyan px-7 py-3 font-bold text-black transition-all duration-300 hover:shadow-glowCyan"
    >
      <FaGithub />
      github.com/{GITHUB_USERNAME}
    </a>
  </div>
);

export default GitHubMain;
