import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Hide/show on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      // Background opacity on scroll
      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div 
      id="Navbar" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img 
                src="/log.png" 
                alt="Company Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="hidden sm:block font-bold text-xl text-slate-700 hover:text-green-500 transition-colors">
                Rent A Bin
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="font-bold text-lg text-slate-700 hover:text-green-500 transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-200"></span>
            </Link>
            
            <Link 
              to="/services" 
              className="font-bold text-lg text-slate-700 hover:text-green-500 transition-colors duration-200 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-200"></span>
            </Link>
            
            {/* Call Button */}
            <a 
              href="tel:+12094479020"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:shadow-lg transform hover:scale-105 hidden md:block"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Call Button */}
          <a 
            href="tel:+12094479020"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-2 rounded-full transition-all duration-200 hover:shadow-lg transform hover:scale-105 md:hidden text-sm"
          >
            Call
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navigation