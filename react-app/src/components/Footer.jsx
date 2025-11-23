import '../App.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="tel:+918207012343" className="neon-link">Phone</a>
          <a href="mailto:rivokhara@gmail.com" className="neon-link">Email</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="neon-link">LinkedIn</a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="neon-link">X</a>
          <a href="https://github.com/RivoKhara" target="_blank" rel="noopener noreferrer" className="neon-link">GitHub</a>
        </div>
        <div className="footer-text">
          <p>&copy; {currentYear} Rivo Khara. All rights reserved.</p>
          <p>Built with React & ❤️</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


