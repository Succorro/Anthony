import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
]

function MenuIcon({ open, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {open ? (
        <path d="M18 6 6 18M6 6l12 12" />
      ) : (
        <>
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </>
      )}
    </svg>
  )
}

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Don't hide the nav while the mobile menu is open
      if (!isMenuOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      }

      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isMenuOpen])

  // Close the mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <div
      id="Navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible || isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled || isMenuOpen ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-white'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <img
              src="/log.png"
              alt="Affordable Junk Removal / Rent A Bin logo"
              className="h-11 w-11 object-contain sm:h-12 sm:w-12"
            />
            <span className="hidden text-base font-bold text-slate-700 transition-colors hover:text-green-700 sm:block sm:text-lg lg:text-xl">
              Affordable Junk Removal | Rent A Bin
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`group relative text-lg font-bold transition-colors duration-200 ${
                    active ? 'text-green-700' : 'text-slate-700 hover:text-green-700'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-green-500 transition-all duration-200 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
            <a
              href="tel:+12094479020"
              className="transform rounded-full bg-green-700 px-4 py-2 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-green-500 hover:shadow-lg"
            >
              Call Now
            </a>
          </div>

          {/* Mobile: call button + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:+12094479020"
              className="transform rounded-full bg-green-700 px-3 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-green-500 hover:shadow-lg"
            >
              Call Now
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              className="rounded-md p-2 text-slate-700 hover:bg-gray-100 hover:text-green-700"
            >
              <MenuIcon open={isMenuOpen} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen ? 'max-h-60 border-t border-gray-100 py-3' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`rounded-md px-3 py-2.5 text-lg font-bold transition-colors ${
                    active
                      ? 'bg-green-50 text-green-700'
                      : 'text-slate-700 hover:bg-gray-50 hover:text-green-700'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation