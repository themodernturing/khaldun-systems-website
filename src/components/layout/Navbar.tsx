import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { label: 'Home', path: '/' },
  { 
    label: 'Products', 
    path: '/products',
    items: [
      { name: 'ORBITAL', hash: 'orbital', desc: 'Diagnostic Intelligence', meta: 'Used in: Healthcare, Finance, Education, Enterprise Strategy' },
      { name: 'MAGNUS', hash: 'magnus', desc: 'Forensic Intelligence', meta: 'Used in: Finance, Due Diligence, Enterprise Risk' },
      { name: 'SIMFORE', hash: 'simfore', desc: 'Simulation Intelligence', meta: 'Used in: Healthcare, Finance, Agriculture, Enterprise Strategy' },
      { name: 'ECL Foresight', hash: 'ecl-foresight', desc: 'IFRS 9 expected credit loss intelligence', meta: 'Used in: Finance, Banking, Lending' },
      { name: 'CLINOS', hash: 'clinos', desc: 'Clinical Intelligence for Diagnostic Labs', meta: 'Used in: Diagnostic Labs, Lab Networks, Imaging Centers' },
      { name: 'MindMatch', hash: 'mindmatch', desc: 'Leadership readiness and decision-culture assessment', meta: 'Used in: Education, Leadership, HR' },
      { name: 'LexFlow AI', hash: 'lexflow-ai', desc: 'Legal reasoning and workflow intelligence', meta: 'Used in: Legal, Compliance, Professional Services' },
      { name: 'EmissIQ Carbon', hash: 'emissiq-carbon', desc: 'Carbon and ESG intelligence system', meta: 'Used in: Climate, Sustainability, ESG' },
    ]
  },
  { 
    label: 'Industries', 
    path: '/industries',
    items: [
      { name: 'Diagnostic Labs', hash: 'diagnostic-labs', desc: 'Clinical and operational diagnostic intelligence', meta: 'Products: CLINOS, Diagnostic Intelligence Dashboard' },
      { name: 'Finance & Compliance', hash: 'finance-compliance', desc: 'Risk, provisioning, reporting, and decision intelligence', meta: 'Products: ECL Foresight, ConsolidateAI' },
      { name: 'Education & Assessment', hash: 'education-assessment', desc: 'Learning, assessment, and institutional intelligence', meta: 'Products: AI Seekho, SchoolIQ, UniAssist' },
      { name: 'Legal & Professional Services', hash: 'legal-professional-services', desc: 'Reasoning, compliance, and workflow intelligence', meta: 'Products: LexFlow AI, Tax Law Agent' },
      { name: 'Real Estate & Property', hash: 'real-estate-property', desc: 'Portfolio, feasibility, rental, and investment intelligence', meta: 'Products: PropertyIQ, SiteSignal' },
      { name: 'Manufacturing & Industrial Operations', hash: 'manufacturing-industrial', desc: 'Production, capacity, cost, and operational intelligence', meta: 'Products: FactoryIQ, CostLeak AI' },
      { name: 'Retail & Consumer Businesses', hash: 'retail-consumer', desc: 'Outlet, inventory, customer, and expansion intelligence', meta: 'Products: RetailIQ, StockSense AI' },
      { name: 'Restaurants & Hospitality', hash: 'restaurants-hospitality', desc: 'Branch performance, demand, cost, and customer experience intelligence', meta: 'Products: RestaurantIQ, MenuSense AI' },
      { name: 'Agriculture & Food Systems', hash: 'agriculture-food', desc: 'Farm, food production, yield, traceability, and supply-chain intelligence', meta: 'Products: FarmIQ, PoultryIQ' },
      { name: 'Climate & Sustainability', hash: 'climate-sustainability', desc: 'Carbon, ESG, and reporting intelligence', meta: 'Products: EmissIQ Carbon, ESGFlow' },
      { name: 'Business Operations & Strategy', hash: 'business-operations-strategy', desc: 'General business diagnostics, expansion, performance, and decision intelligence', meta: 'Products: BusinessIQ, OpsSignal' },
    ]
  },
  { label: 'AI Plan', path: '/assessments' },
  { label: 'Founders', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

function DesktopNavItem({ link, pathname }: { link: any, pathname: string }) {
  const [open, setOpen] = useState(false)
  const isActive = pathname === link.path || (link.items && pathname.startsWith(link.path))
  const isDropdown = !!link.items

  if (!isDropdown) {
    return (
      <Link
        to={link.path}
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'text-blue-300 bg-blue-500/10'
            : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
        }`}
      >
        {link.label}
      </Link>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={link.path}
        className={`px-3 py-2 flex items-center gap-1 rounded-lg text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'text-blue-300 bg-blue-500/10'
            : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
        }`}
        onClick={() => setOpen(!open)}
      >
        {link.label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-[480px] bg-[#050d1f]/95 backdrop-blur-xl border border-blue-500/20 rounded-xl shadow-2xl overflow-hidden z-50"
          >
            <div className="p-4 grid grid-cols-2 gap-2">
              {link.items.map((item: any) => (
                <Link
                  key={item.name}
                  to={`${link.label === 'Products' ? '/products' : '/industries'}#${item.hash}`}
                  className="group flex flex-col gap-1 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-white text-sm font-bold group-hover:text-blue-300 transition-colors">{item.name}</span>
                  <span className="text-slate-400 text-xs leading-tight">{item.desc}</span>
                  <span className="text-slate-500 text-[10px] uppercase tracking-wider mt-1">{item.meta}</span>
                </Link>
              ))}
            </div>
            <div className="border-t border-blue-500/10 bg-white/[0.02] p-3 flex justify-center">
              <Link
                to={link.label === 'Products' ? '/products' : '/industries'}
                className="text-blue-400 text-xs font-semibold hover:text-blue-300 flex items-center gap-1"
                onClick={() => setOpen(false)}
              >
                View all {link.label.toLowerCase()} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileNavItem({ link, pathname, closeMenu }: { link: any, pathname: string, closeMenu: () => void }) {
  const [open, setOpen] = useState(false)
  const isActive = pathname === link.path
  const isDropdown = !!link.items

  if (!isDropdown) {
    return (
      <Link
        to={link.path}
        onClick={closeMenu}
        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'text-blue-300 bg-blue-500/10'
            : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
        }`}
      >
        {link.label}
      </Link>
    )
  }

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setOpen(!open)}
        className={`px-4 py-3 flex items-center justify-between rounded-lg text-sm font-medium transition-all duration-200 ${
          isActive || open
            ? 'text-blue-300 bg-blue-500/10'
            : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
        }`}
      >
        {link.label}
        <ChevronDown size={16} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pr-2 py-2 space-y-1">
              {link.items.map((item: any) => (
                <Link
                  key={item.name}
                  to={`${link.label === 'Products' ? '/products' : '/industries'}#${item.hash}`}
                  onClick={closeMenu}
                  className="block px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <div className="font-semibold text-white">{item.name}</div>
                  <div className="text-xs mt-0.5">{item.desc}</div>
                </Link>
              ))}
              <Link
                to={link.label === 'Products' ? '/products' : '/industries'}
                onClick={closeMenu}
                className="block px-4 py-3 mt-2 rounded-lg text-xs font-semibold text-blue-400 hover:text-blue-300 bg-blue-500/5 transition-colors"
              >
                View all {link.label.toLowerCase()} →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#020817]/90 backdrop-blur-xl border-b border-blue-500/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="Khaldun Systems home">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">K</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">
              Khaldun <span className="text-blue-400">Systems</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <DesktopNavItem key={link.label} link={link} pathname={location.pathname} />
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Button to="/ai-plan" size="sm">
              Get Your AI Plan
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#050d1f]/95 backdrop-blur-xl border-b border-blue-500/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <MobileNavItem key={link.label} link={link} pathname={location.pathname} closeMenu={() => setMenuOpen(false)} />
              ))}
              <div className="pt-2 pb-1">
                <Button to="/ai-plan" size="md" className="w-full">
                  Get Your AI Plan
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
