import { FiArrowLeft, FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import { featuredProject } from '../data/projects'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
]

function HallSync() {
  return (
    <div>
      <Navbar links={navLinks} homeHref="/" />

      <main className="py-10 sm:py-14">
        <div className="section-shell">
          <Reveal>
            <Link
              to="/"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
            >
              <FiArrowLeft /> Back to home
            </Link>
          </Reveal>

          <Reveal delay={0.05} className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <div className="subtle-card overflow-hidden rounded-[2rem]">
              <img src={featuredProject.image} alt={featuredProject.alt} className="h-full w-full object-cover" />
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-blue-700 uppercase">Case study</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                {featuredProject.title}
              </h1>
              <p className="mt-3 text-xl font-medium text-slate-700">{featuredProject.subtitle}</p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">{featuredProject.summary}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {featuredProject.github ? (
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
                  >
                    GitHub <FiExternalLink />
                  </a>
                ) : null}
                {featuredProject.live ? (
                  <a
                    href={featuredProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
                  >
                    Live Demo <FiExternalLink />
                  </a>
                ) : null}
                <a
                  href="/"
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Explore the portfolio
                </a>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Reveal>
              <article className="subtle-card h-full rounded-[1.75rem] p-6">
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">Problem</p>
                <p className="mt-3 leading-7 text-slate-700">{featuredProject.problem}</p>
              </article>
            </Reveal>
            <Reveal delay={0.06}>
              <article className="subtle-card h-full rounded-[1.75rem] p-6">
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">Solution</p>
                <p className="mt-3 leading-7 text-slate-700">{featuredProject.solution}</p>
              </article>
            </Reveal>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <Reveal>
              <article className="subtle-card h-full rounded-[1.75rem] p-6">
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">My role</p>
                <p className="mt-3 leading-7 text-slate-700">{featuredProject.contribution}</p>
              </article>
            </Reveal>
            <Reveal delay={0.06}>
              <article className="subtle-card h-full rounded-[1.75rem] p-6">
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">What I learned</p>
                <p className="mt-3 leading-7 text-slate-700">{featuredProject.learnings}</p>
              </article>
            </Reveal>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <article className="subtle-card h-full rounded-[1.75rem] p-6">
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">Technologies</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featuredProject.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.06}>
              <article className="subtle-card h-full rounded-[1.75rem] p-6">
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">Key features</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {featuredProject.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 rounded-2xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default HallSync
