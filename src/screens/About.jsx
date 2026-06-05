import '../styles/About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <img src="/profile.PNG" alt="Jovia Amanya" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p className="lead">
            I’m <span>Jovia Amanya</span>, an Application Developer building
            modern, accessible, and performant web applications with React.
          </p>

          <p>
            I focus on delivering clean interfaces, thoughtful UX, and
            well-tested code. My work spans single-page apps, component
            libraries, and responsive layouts that perform across devices.
          </p>

          <p>
            I’m curious by nature and continuously learning new tools and
            patterns to improve product quality and developer experience.
          </p>

          <div className="skills">
            <h3>Core Skills</h3>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React & Hooks</li>
              <li>Responsive UI / CSS</li>
              <li>Git, Testing & CI</li>
            </ul>
          </div>

          <a href="/cv.pdf" className="btn" download>
            Download CV
          </a>
        </div>

      </div>
    </section>
  )
}

export default About