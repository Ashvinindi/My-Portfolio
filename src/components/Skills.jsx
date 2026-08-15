import Reveal from './Reveal'
import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="section-shell">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-700 uppercase">Skills</p>
            <h2 className="section-heading mt-3">Grouped by how I actually use them.</h2>
            <p className="section-copy mt-3 leading-7">
              I avoid inflated percentage bars. These are the tools and areas that are most relevant to my coursework, projects, and the
              kinds of roles I want to grow into.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <article className="subtle-card h-full rounded-[1.75rem] p-5">
                <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
