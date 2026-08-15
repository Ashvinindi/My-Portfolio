import Reveal from './Reveal'

function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="section-shell">
        <Reveal className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white/80 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-700 uppercase">About me</p>
            <h2 className="section-heading mt-3">I build with both business context and technical clarity.</h2>
          </div>

          <div className="grid gap-4 text-slate-600">
            <p className="leading-7">
              I am a Computing and Information Systems undergraduate at Sabaragamuwa University of Sri Lanka. My main interest is the
              space where business problems, requirements, and software decisions meet.
            </p>
            <p className="leading-7">
              I enjoy work around business analysis, information systems, requirements analysis, system design, problem solving, and
              technology-driven solutions that make processes more practical and easier to manage.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
