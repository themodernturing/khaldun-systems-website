import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { Products } from '@/pages/Products'
import { Industries } from '@/pages/Industries'
import { Ecosystem } from '@/pages/Ecosystem'
import { Technology } from '@/pages/Technology'
import { About } from '@/pages/About'
import { Resources } from '@/pages/Resources'
import { Contact } from '@/pages/Contact'
import { AIPlan } from '@/pages/AIPlan'
import { AIPlanResults } from '@/pages/AIPlanResults'

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
      <div>
        <div className="text-6xl font-bold text-slate-700 mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-2">Page not found</h1>
        <p className="text-slate-400 mb-6">This page doesn't exist.</p>
        <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors">← Back to home</a>
      </div>
    </div>
  )
}

export function AppRoutes() {
  return (
    <Routes>
      {/* AI Plan — full-screen, no footer */}
      <Route path="/ai-plan" element={<AIPlan />} />
      <Route path="/ai-plan/results" element={<AIPlanResults />} />

      {/* Main site layout */}
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/products" element={<Layout><Products /></Layout>} />
      <Route path="/industries" element={<Layout><Industries /></Layout>} />
      <Route path="/ecosystem" element={<Layout><Ecosystem /></Layout>} />
      <Route path="/technology" element={<Layout><Technology /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/resources" element={<Layout><Resources /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  )
}
