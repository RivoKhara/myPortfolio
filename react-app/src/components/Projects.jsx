import { useEffect, useState, useRef } from 'react'
import '../App.css'

const Projects = () => {
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

  const projects = [
    {
      title: 'AI Text Summarizer Web App',
      description: 'Built an AI-based text summarization web app that converts long paragraphs into concise summaries.',
      tech: ['React', 'CSS', 'FastAPI', 'Groq API'],
      frontend: 'Vercel',
      backend: 'Render',
      liveLink: 'https://gistify.vercel.app',
      gitLink: 'https://github.com/RivoKhara/Gistify.git',
      status: 'completed'
    },
    {
      title: 'Online Real-time File Sharing Web App',
      description: 'Building a real-time online file sharing web app with modern responsive frontend (React + Tailwind) and Express + Node.js backend.',
      tech: ['React', 'Tailwind CSS', 'Express', 'Node.js'],
      status: 'ongoing'
    }
  ]

  return (
    <section id="projects" ref={sectionRef} className="projects-section">
      <h2 className="section-heading fade-in">Projects</h2>
      <div className={`projects-grid fade-in ${isVisible ? 'visible' : ''}`}>
        {projects.map((project, index) => (
          <div key={index} className="glass-panel project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              {project.status === 'ongoing' && (
                <span className="project-status">Ongoing</span>
              )}
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              <strong>Technologies:</strong>
              <div className="tech-tags">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            {project.frontend && (
              <div className="project-deployment">
                <span><strong>Frontend:</strong> {project.frontend}</span>
                <span><strong>Backend:</strong> {project.backend}</span>
              </div>
            )}
            <div className="project-links">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="neon-button">
                  Live Demo
                </a>
              )}
              {project.gitLink && (
                <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="neon-button">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects


