import { useEffect, useState, useRef } from 'react'
import '../App.css'

const About = () => {
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
    <section id="about" ref={sectionRef} className="about-section">
      <h2 className="section-heading fade-in">About Me</h2>
      <div className={`glass-panel fade-in ${isVisible ? 'visible' : ''}`}>
        <div className="about-content">
          <h3 className="about-title">Objective</h3>
          <p className="about-text">
            Full Stack Developer with a strong foundation in JavaScript and Python, specializing in building 
            end-to-end web applications. While my primary focus is full stack development, I'm also proficient 
            with data analysis tools and techniques. Passionate about problem-solving, clean code practices, 
            and developing innovative web solutions. Highly adaptable, with a proven ability to learn and work 
            with new technologies, tools, and programming languages rapidly.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

