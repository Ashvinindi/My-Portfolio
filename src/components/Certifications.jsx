import { achievements } from '../data/certifications'
import Reveal from './Reveal'

function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-20">
      <div className="section-shell">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-700 uppercase">Certifications / achievements</p>
            <h2 className="section-heading mt-3">A practical record of learning and delivery.</h2>
            <p className="section-copy mt-3 leading-7">
              I do not have formal certifications listed here yet, so this section highlights what I have built and learned so far.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="subtle-card h-full rounded-[1.75rem] p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">Achievement</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
