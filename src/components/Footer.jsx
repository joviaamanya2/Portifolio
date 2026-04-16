import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left - Name */}
        <div className="footer-brand">
          <h2>Your Name</h2>
          <p>Frontend Developer</p>
        </div>

        {/* Middle - Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right - Socials */}
        <div className="footer-socials">
          <h3>Follow Me</h3>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer