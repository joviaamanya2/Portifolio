function About() {
  return (
    <section className="about section" id="about">
      <div className="about-container container">
        <div className="about-content">
          <span className="eyebrow">A little about me</span>
          <h2>Curious by nature.<br />Developer by craft.</h2>
          <p className="lead">I’m Jovia Amanya, an application developer building modern, accessible web experiences with React.</p>
          <p>I care about clean interfaces, thoughtful details, and responsive layouts that feel natural to use across devices.</p>
          <p>I’m always learning and looking for ways to make digital products clearer, more useful, and more enjoyable.</p>
          <div className="skills">
            <h3>Core skills</h3>
            <ul><li>JavaScript</li><li>React</li><li>Responsive UI</li><li>Git & GitHub</li></ul>
          </div>
          <a href="/CV.pdf" className="btn" download>Download my CV <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  )
}

export default About
