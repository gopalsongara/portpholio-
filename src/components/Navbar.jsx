import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold text-white flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-black font-bold">
              G
            </span>
            <span>Gopal</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="pink-gradient-button text-sm rounded-lg"
            >
              Reach Out
            </a>
          </div>

          {/* Mobile Menu Button - Centered */}
          <div className="md:hidden flex-1 flex justify-center">
            <button
              className="text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Reach Out Button */}
          <div className="md:hidden">
            <a
              href="#contact"
              className="pink-gradient-button text-sm rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reach Out
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4 animate-slide-up">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block gradient-button text-sm text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reach Out
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
