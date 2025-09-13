import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'
import logoImage from '../../LOGO.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    const header = document.querySelector('.header')
    if (element && header) {
      const headerHeight = header.offsetHeight
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerHeight - 20 // 20px extra spacing
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-actions">
          <button 
            onClick={toggleMenu}
            className="menu-toggle"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><button onClick={() => scrollToSection('hero')} className="nav-link">خانه</button></li>
            <li><button onClick={() => scrollToSection('about')} className="nav-link">درباره</button></li>
            <li><button onClick={() => scrollToSection('gallery')} className="nav-link">گالری</button></li>
            <li><button onClick={() => scrollToSection('video')} className="nav-link">ویدیو</button></li>
            <li><button onClick={() => scrollToSection('prototypes')} className="nav-link">نمونه‌ها</button></li>
            <li><button onClick={() => scrollToSection('features')} className="nav-link">ویژگی‌ها</button></li>
          </ul>
        </nav>

        <div className="logo">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="logo-button"
            aria-label="Go to home"
          >
            <img src={logoImage} alt="فیلم‌نت" className="logo-image" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
