import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">

        <div className="footer-brand">
          <h2>Amanya Jovia</h2>
          <p>Application Developer</p>
        </div>

        <nav className="footer-links" aria-label="Footer Navigation">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="footer-socials">
          <h3>Follow Me</h3>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">Twitter</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Amanya Jovia. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer