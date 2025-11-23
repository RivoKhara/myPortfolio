import { useEffect, useState } from 'react'
import '../App.css'

const changingTexts = [
  'Welcome to My Portfolio',
  'Full Stack Developer',
  'Problem Solver',
  'Creative Thinker',
  'Tech Enthusiast'
]

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % changingTexts.length)
        setTimeout(() => {
          setIsAnimating(false)
        }, 50)
      }, 500) // Fade out duration
    }, 3000) // Change text every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className={`hero-section ${isVisible ? 'visible' : ''}`}>
      <div className="hero-container">
        <div className="hero-left">
          <div className="welcome-message" style={{ opacity: 1, visibility: 'visible' }}>
            <div className="welcome-greeting">
              <span className="welcome-icon">👋</span>
              <p className="hello-text" style={{ opacity: 1, visibility: 'visible' }}>Hello, I'm</p>
            </div>
            <div className="welcome-text-container">
              <span className={`changing-text-inner ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                {changingTexts[currentTextIndex]}
              </span>
            </div>
            <div className="welcome-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dot"></div>
              <div className="decoration-line"></div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <h1 className="hero-title">
            <span className="gradient-text">RIVO KHARA</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer | Proficient with Data Analysis Tools</p>
          <div className="hero-description-wrapper">
            <p className="hero-description">
              <span className="description-highlight">Passionate</span> about <span className="description-highlight">problem-solving</span>, <span className="description-highlight">clean code practices</span>, and building <span className="description-highlight">innovative web applications</span>
            </p>
          </div>
          <div className="hero-cta">
            <a href="#projects" className="neon-button" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>View My Work</a>
          </div>
        </div>
      </div>
      <div className="hero-animation">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

