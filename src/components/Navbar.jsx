import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a className="logo" href="#home">Jovia<span>.</span></a>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-controls="site-navigation"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="site-navigation" className={`nav-links ${open ? 'open' : ''}`}>
          <li><a onClick={() => setOpen(false)} href="#about">About</a></li>
          <li><a onClick={() => setOpen(false)} href="#skills">Skills</a></li>
          <li><a onClick={() => setOpen(false)} href="#projects">Projects</a></li>
          <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
