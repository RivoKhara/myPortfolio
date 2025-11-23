import { useEffect, useState, useRef } from 'react'
import '../App.css'

const Help = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
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

  const faqs = [
    {
      question: "How can I contact you?",
      answer: "You can reach me through the Contact section below, or directly via email at rivokhara@gmail.com, phone at +91-8207012343, or through my social media profiles (LinkedIn, GitHub, X). I typically respond within 24-48 hours."
    },
    {
      question: "Do you work on freelance projects?",
      answer: "Yes, I'm open to freelance opportunities and collaborative projects."
    },
    {
      question: "What technologies do you work with?",
      answer: "I work with a wide range of technologies including React, JavaScript, Python, Flask, FastAPI, Express, MySQL, HTML, CSS, and various data analysis tools like NumPy and Pandas. I'm also continuously learning new technologies to stay current with industry trends."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Absolutely! I can help with debugging, feature additions, code refactoring, performance optimization, and maintenance of existing projects. Just share the details and I'll assess how I can assist."
    },
    {
      question: "What is your availability?",
      answer: "Now I am in B.Tech final year, so I am fully available for any opportunity."
    }
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section id="help" ref={sectionRef} className="help-section">
      <h2 className="section-heading fade-in">Help & Support</h2>
      
      <div className={`help-intro fade-in ${isVisible ? 'visible' : ''}`}>
        <div className="glass-panel help-intro-panel">
          <h3 className="help-intro-title">Need Help?</h3>
          <p className="help-intro-text">
            Welcome to the Help & Support section! Here you'll find answers to common questions, 
            information about my services, and ways to get in touch. I'm here to help with any 
            questions or project inquiries you may have.
          </p>
        </div>
      </div>

      <div className={`help-faq fade-in ${isVisible ? 'visible' : ''}`}>
        <h3 className="help-subheading">Frequently Asked Questions</h3>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item glass-panel ${openFaq === index ? 'open' : ''}`}>
              <button 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`help-contact-cta fade-in ${isVisible ? 'visible' : ''}`}>
        <div className="glass-panel help-cta-panel">
          <h3 className="help-cta-title">Still Have Questions?</h3>
          <p className="help-cta-text">
            If you couldn't find what you're looking for, feel free to reach out through the Contact section below. 
            I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
          </p>
          <a 
            href="#contact" 
            className="neon-button help-cta-button"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Help

