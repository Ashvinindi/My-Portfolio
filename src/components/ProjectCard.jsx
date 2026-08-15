import { FiArrowRight, FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

function ProjectCard({ project, featured = false, index = 0 }) {
  const actionClass =
    'focus-ring inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-200'

  return (
    <Reveal delay={index * 0.06}>
      <article
        className={`subtle-card overflow-hidden rounded-[2rem] ${
          featured ? 'lg:grid lg:grid-cols-[1.05fr_0.95fr]' : 'flex h-full flex-col'
        }`}
      >
        <div className={`relative ${featured ? 'min-h-[240px] lg:min-h-full' : 'min-h-[210px]'}`}>
          <img src={project.image} alt={project.alt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/20 via-transparent to-white/20" />
        </div>

        <div className={`flex h-full flex-col gap-5 p-6 ${featured ? 'lg:p-8' : ''}`}>
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-[0.2em] text-blue-700 uppercase">
              <span>{project.subtitle}</span>
              {featured ? <span className="rounded-full bg-blue-50 px-2 py-1">Featured project</span> : null}
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{project.summary}</p>
          </div>

          <div className="grid gap-3 text-sm text-slate-700 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">Problem</p>
              <p className="mt-2 leading-6 text-slate-700">{project.problem}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">Solution</p>
              <p className="mt-2 leading-6 text-slate-700">{project.solution}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">My contribution</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">{project.contribution}</p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">Technologies</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">Key features</p>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 rounded-2xl bg-slate-50 px-3 py-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-1">
            {project.caseStudy ? (
              <Link
                to={project.caseStudy}
                className={`${actionClass} bg-slate-950 text-white hover:bg-blue-700`}
              >
                View Case Study <FiArrowRight />
              </Link>
            ) : null}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={`${actionClass} border border-slate-300 bg-white text-slate-800 hover:border-blue-200 hover:text-blue-700`}
              >
                GitHub <FiExternalLink />
              </a>
            ) : null}
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className={`${actionClass} border border-slate-300 bg-white text-slate-800 hover:border-blue-200 hover:text-blue-700`}
              >
                Live Demo <FiExternalLink />
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default ProjectCard
