import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi'
import Reveal from './Reveal'
import { site } from '../data/site'

const introMailSubject = encodeURIComponent('Portfolio inquiry')
const introMailBody = encodeURIComponent(
  'Hi Ashvinindi, I saw your portfolio and I would like to talk about business-aware software or information systems opportunities.',
)

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="section-shell">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-700 uppercase">Contact</p>
            <h2 className="section-heading mt-3">Open to internship conversations and project discussions.</h2>
            <p className="section-copy mt-3 leading-7">
              If you want to discuss opportunities, collaboration, or a project brief that needs both business and technical thinking,
              reach out through any of the links below.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <article className="subtle-card rounded-[1.75rem] p-6 sm:p-7">
              <h3 className="text-xl font-semibold text-slate-950">Direct links</h3>
              <div className="mt-5 grid gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="focus-ring flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                >
                  <span className="inline-flex items-center gap-2"><FiMail /> Email</span>
                  <FiArrowRight />
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                >
                  <span className="inline-flex items-center gap-2"><FiGithub /> GitHub</span>
                  <FiArrowRight />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                >
                  <span className="inline-flex items-center gap-2"><FiLinkedin /> LinkedIn</span>
                  <FiArrowRight />
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="subtle-card h-full rounded-[1.75rem] p-6 sm:p-7">
              <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">Preferred introduction</p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Hi Ashvinindi, I saw your portfolio and I’d like to talk about {""}
                <span className="font-semibold text-slate-950">business-aware software / information systems opportunities</span>.
              </p>
              <div className="mt-6 grid gap-3">
                <a
                  href={`mailto:${site.email}?subject=${introMailSubject}&body=${introMailBody}`}
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Send this message to {site.email} <FiArrowRight />
                </a>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                  Clicking the button opens your email app and sends the message to {site.email}.
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
