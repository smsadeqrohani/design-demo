import React, { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Filmnete</span>
          <span className="logo-version">V2</span>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><button onClick={() => scrollToSection('hero')} className="nav-link">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
            <li><button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button></li>
            <li><button onClick={() => scrollToSection('video')} className="nav-link">Video</button></li>
            <li><button onClick={() => scrollToSection('prototypes')} className="nav-link">Prototypes</button></li>
            <li><button onClick={() => scrollToSection('features')} className="nav-link">Features</button></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button 
            onClick={toggleDarkMode}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            onClick={toggleMenu}
            className="menu-toggle"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
