function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-brand"><h2>Jovia Amanya</h2><p>Application developer · Uganda</p></div>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="footer-bottom container">© {new Date().getFullYear()} Jovia Amanya</div>
    </footer>
  )
}

export default Footer
