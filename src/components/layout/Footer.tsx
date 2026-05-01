import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const footerLinks = {
  Platform: [
    { label: 'Products', path: '/applications' },
    { label: 'AI Plan', path: '/assessments' },
    { label: 'Industries', path: '/industries' },
  ],
  Company: [
    { label: 'Founders', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-blue-500/10 bg-[#020817]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4" aria-label="Khaldun Systems home">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">K</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Khaldun <span className="text-blue-400">Systems</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              AI systems that analyze business data, simulate outcomes, and guide better decisions.
            </p>
            <div className="mt-6">
              <Link
                to="/ai-plan"
                className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors"
              >
                Get Your AI Plan <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-white text-sm font-semibold mb-4">{group}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-slate-400 text-sm hover:text-slate-200 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-blue-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Khaldun Systems. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Decision infrastructure for the intelligent enterprise.
          </p>
        </div>
      </div>
    </footer>
  )
}
