import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import Reveal from './Reveal'
import { site } from '../data/site'
import avatar from '../assets/profile/ashvinindi-avatar.svg'

function Hero() {
  return (
    <section id="home" className="pt-12 sm:pt-16 lg:pt-20">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <Reveal className="max-w-2xl">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-blue-700 uppercase">
            Business + Technology focus
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-slate-700 sm:text-xl">
            {site.headline}
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            {site.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-blue-700 bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              View My Projects <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 transition hover:border-blue-200 hover:text-blue-700"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 transition hover:border-blue-200 hover:text-blue-700"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 transition hover:border-blue-200 hover:text-blue-700"
            >
              <FiMail /> Email
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="subtle-card relative overflow-hidden rounded-[2rem] p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300" />
            <div className="grid gap-5">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50">
                  <img src={avatar} alt="Ashvinindi Uthkarsha profile illustration" className="h-12 w-12" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500">Profile</p>
                  <p className="text-base font-semibold text-slate-950">Business-aware problem solver</p>
                </div>
              </div>

              <div className="grid gap-3 rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
                <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">
                  What I focus on
                </p>
                <div className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                  <span className="rounded-2xl bg-white px-3 py-2 shadow-sm shadow-slate-200/70">Business analysis</span>
                  <span className="rounded-2xl bg-white px-3 py-2 shadow-sm shadow-slate-200/70">Information systems</span>
                  <span className="rounded-2xl bg-white px-3 py-2 shadow-sm shadow-slate-200/70">Requirements analysis</span>
                  <span className="rounded-2xl bg-white px-3 py-2 shadow-sm shadow-slate-200/70">Software design</span>
                </div>
              </div>

              <p className="text-sm leading-6 text-slate-600">
                {site.intro} Interested in building practical solutions that make business processes easier to understand and improve.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
