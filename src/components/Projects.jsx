import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import { featuredProject, projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="section-shell">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-700 uppercase">Featured projects</p>
            <h2 className="section-heading mt-3">Projects that show both product thinking and technical execution.</h2>
            <p className="section-copy mt-3 leading-7">
              I prefer project presentations that explain the problem, the solution, and the contribution rather than only listing tools.
            </p>
          </div>
        </Reveal>

        <div className="mt-8">
          <ProjectCard project={featuredProject} featured />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
