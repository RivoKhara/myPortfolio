import { useEffect, useState, useRef } from 'react'
import '../App.css'

const ContactDetails = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="contact-details" ref={sectionRef} className="contact-details-section">
      <h2 className="section-heading fade-in">Contact</h2>
      <div className={`contact-details-container fade-in ${isVisible ? 'visible' : ''}`}>
        <div className="contact-details-grid">
          <div className="contact-item glass-panel">
            <div className="contact-icon">📞</div>
            <h3 className="contact-label">Phone</h3>
            <a href="tel:+918207012343" className="contact-link">+91-8207012343</a>
          </div>
          <div className="contact-item glass-panel">
            <div className="contact-icon">✉️</div>
            <h3 className="contact-label">Email</h3>
            <a href="mailto:rivokhara@gmail.com" className="contact-link">rivokhara@gmail.com</a>
          </div>
          <div className="contact-item glass-panel">
            <div className="contact-icon">💼</div>
            <h3 className="contact-label">LinkedIn</h3>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn Profile</a>
          </div>
          <div className="contact-item glass-panel">
            <div className="contact-icon">🐦</div>
            <h3 className="contact-label">X (Twitter)</h3>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="contact-link">@rivokhara</a>
          </div>
          <div className="contact-item glass-panel">
            <div className="contact-icon">💻</div>
            <h3 className="contact-label">GitHub</h3>
            <a href="https://github.com/RivoKhara" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/RivoKhara</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactDetails


