import { useEffect, useState } from 'react'
import '../App.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : ''}`}>
      <div className="nav-container">
        <ul className="nav-menu">
          <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}>Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
          <li><a href="#contact-details" onClick={(e) => { e.preventDefault(); scrollToSection('contact-details') }}>Contact</a></li>
          <li><a href="#help" onClick={(e) => { e.preventDefault(); scrollToSection('help') }}>Help</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>Project</a></li>
          <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education') }}>Education</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Connect Us</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

