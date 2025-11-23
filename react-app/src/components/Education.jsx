import { useEffect, useState, useRef } from 'react'
import '../App.css'

const Education = () => {
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
    <section id="education" ref={sectionRef} className="education-section">
      <h2 className="section-heading fade-in">Education</h2>
      <div className={`glass-panel fade-in ${isVisible ? 'visible' : ''}`}>
        <div className="education-content">
          <h3 className="education-degree">Bachelor of Technology (B.Tech)</h3>
          <p className="education-field">Computer Science & Engineering (CSE)</p>
          <p className="education-institution">Techno Engineering College, Banipur</p>
          <p className="education-status">Final Year Student</p>
        </div>
      </div>
    </section>
  )
}

export default Education


