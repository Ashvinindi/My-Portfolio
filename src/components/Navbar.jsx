import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi'
import { site } from '../data/site'

function Navbar({ links, homeHref = '/' }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/85 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between gap-4 py-4">
        <a
          href={homeHref}
          className="focus-ring inline-flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-slate-900 uppercase"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[0.65rem] font-bold text-blue-600 shadow-sm shadow-slate-200/60">
            AU
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="focus-ring text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex" aria-label="Social links">
          <a
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition duration-200 hover:border-blue-200 hover:text-blue-600"
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition duration-200 hover:border-blue-200 hover:text-blue-600"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition duration-200 hover:border-blue-200 hover:text-blue-600"
            href={`mailto:${site.email}`}
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm shadow-slate-200/60 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div className={`${isOpen ? 'max-h-96 border-t border-slate-200/80' : 'max-h-0'} overflow-hidden transition-all duration-300 lg:hidden`}>
        <div className="section-shell grid gap-5 py-4">
          <nav className="grid gap-2" aria-label="Mobile primary">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="focus-ring rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2" aria-label="Mobile social links">
            <a
              className="focus-ring inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-700"
              href={site.github}
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub /> GitHub
            </a>
            <a
              className="focus-ring inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-700"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              className="focus-ring inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-700"
              href={`mailto:${site.email}`}
            >
              <FiMail /> Email
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
