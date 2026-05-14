import { useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { AppRoutes } from './routes'
import { ScrollToTop } from './components/ScrollToTop'
import { AvatarWidget } from './components/avatar'

function HashScrollHelper() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [location.pathname, location.hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HashScrollHelper />
      <AppRoutes />
      <AvatarWidget />
    </BrowserRouter>
  )
}
