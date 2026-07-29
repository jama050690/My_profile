import { Link } from "react-router-dom";
import PortfolioHeader from "../components/PortfolioHeader";
import PortfolioFooter from "../components/PortfolioFooter";
import ProjectCard from "../components/ProjectCard";
import CodeTerminal from "../components/motion/CodeTerminal";
import FadeInUp from "../components/motion/FadeInUp";
import RevealOnScroll from "../components/motion/RevealOnScroll";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";
import { useTheme } from "../hooks/useTheme";

export default function HomePage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="px-5 py-6 md:px-8">
      <PortfolioHeader isDark={isDark} toggleTheme={toggleTheme} />

      <main className="container mt-8">
        <section className="hero-card grid gap-10 px-7 py-8 md:grid-cols-[1.1fr_auto] md:items-center md:px-10 md:py-12">
          <div className="relative z-10">
            <FadeInUp>
              <p className="section-kicker font-mono text-cyan-300">Portfolio</p>
            </FadeInUp>
            <FadeInUp delay={80}>
              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-0.02em] md:text-7xl md:tracking-[-0.03em]">
                Frontend developer portfolio
              </h1>
            </FadeInUp>
            <FadeInUp delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-slate-200">
                Bu portfolio alohida sahifalarga bo‘lingan. Men haqimda, loyihalarim
                va bog‘lanish ma’lumotlari tartibli va qulay ko‘rinishda joylashtirilgan.
              </p>
            </FadeInUp>
            <FadeInUp delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/about" className="btn-primary group">
                  About Me
                  <i className="fa-solid fa-arrow-right transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link to="/projects" className="btn-secondary group">
                  My Projects
                  <i className="fa-solid fa-layer-group transition-transform duration-200 group-hover:scale-110" />
                </Link>
              </div>
            </FadeInUp>
          </div>

          <FadeInUp delay={200} className="relative z-10 justify-self-center md:justify-self-end">
            <CodeTerminal />
          </FadeInUp>
        </section>

        <section className="mt-8">
          <p className="section-kicker font-mono text-cyan-600">Texnologiyalar</p>
          <h2 className="mt-2 text-3xl font-black">Mening Stackim</h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group, groupIndex) => (
              <RevealOnScroll key={group.label} delay={groupIndex * 120} className="h-full">
                <div className="stack-card flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <span className="stack-card-icon">
                      <i className={group.icon} />
                    </span>
                    <p className="font-mono text-sm font-bold uppercase tracking-wider text-fg-tertiary">
                      {group.label}
                    </p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item, itemIndex) => (
                      <span
                        key={item}
                        className="stack-pill"
                        style={{ transitionDelay: `${itemIndex * 30}ms` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker text-cyan-600">Featured Work</p>
              <h2 className="mt-2 text-3xl font-black">Loyihalarimdan namunalar</h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-500"
            >
              Barcha loyihalar
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>

          <div className="project-shelf mt-6">
            {projects.map((project, index) => (
              <RevealOnScroll key={project.slug} delay={index * 80}>
                <ProjectCard project={project} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="cta-panel mt-8 px-7 py-9 text-center md:px-10">
          <p className="relative z-10 section-kicker text-cyan-300">Hamkorlik</p>
          <h2 className="relative z-10 mt-3 text-2xl font-black md:text-4xl">
            Loyihangiz bormi? Birga ishlaylik.
          </h2>
          <Link
            to="/contact"
            className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Bog‘lanish
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </section>
      </main>

      <PortfolioFooter />
    </div>
  );
}
