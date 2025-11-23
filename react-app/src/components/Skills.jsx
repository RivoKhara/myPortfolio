import { useEffect, useState, useRef } from 'react'
import '../App.css'

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Python', 'JavaScript']
    },
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind (learning)']
    },
    {
      title: 'Backend',
      skills: ['Flask', 'FastAPI', 'Express (learning)']
    },
    {
      title: 'Data Analysis',
      skills: ['Python', 'NumPy', 'Pandas']
    },
    {
      title: 'Database',
      skills: ['MySQL']
    },
    {
      title: 'Tools & Platforms',
      skills: ['GitHub', 'Groq API', 'Render', 'Vercel']
    }
  ]

  return (
    <section id="skills" ref={sectionRef} className="skills-section">
      <h2 className="section-heading fade-in">Technical Skills</h2>
      <div className={`skills-pipeline-container fade-in ${isVisible ? 'visible' : ''}`}>
        <div className="main-pipeline-line"></div>
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-node" style={{ '--index': index }}>
            <div className="category-connector-up"></div>
            <div className="category-node">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item-wrapper">
                    <div className="skill-connector-up"></div>
                    <span className="skill-badge">{skill}</span>
                    <div className="skill-connector-down"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="category-connector-down"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

