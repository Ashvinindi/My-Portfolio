import Reveal from './Reveal'
import { education } from '../data/education'

function Education() {
  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="section-shell">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-700 uppercase">Education</p>
            <h2 className="section-heading mt-3">Academic foundation</h2>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4">
          {education.map((item) => (
            <Reveal key={item.institution}>
              <article className="subtle-card rounded-[1.75rem] p-6 sm:p-7">
                <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">Current study</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.program}</h3>
                <p className="mt-2 text-base font-medium text-blue-700">{item.institution}</p>
                <p className="mt-4 max-w-3xl leading-7 text-slate-600">{item.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
