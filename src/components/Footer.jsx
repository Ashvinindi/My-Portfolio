import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { site } from '../data/site'

function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70 py-8 backdrop-blur">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-md">
          <p className="text-lg font-semibold text-slate-950">{site.name}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Computing and Information Systems undergraduate focused on practical software and business-aware technology solutions.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
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
      </div>

      <div className="section-shell mt-6 border-t border-slate-200/70 pt-6 text-sm text-slate-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Designed for internships, projects, and professional introductions.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
