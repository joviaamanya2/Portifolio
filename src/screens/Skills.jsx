
function Skills() {
  return (
    <section className="skills-section section" id="skills">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">What I work with</span>
          <h2>Skills & tools</h2>
          <p>A practical toolkit for building polished, accessible experiences from idea to launch.</p>
        </div>

        <div className="skills-grid">

          {/* Frontend */}
          <div className="skill-card">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Flutter , dart</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="skill-card">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Laravel,php</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="skill-card">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
            </ul>
          </div>

          {/* Embedded systems */}
          <div className="skill-card">
            <h3>Embedded Systems</h3>
            <ul>
              <li>Embedded systems development</li>
              <li>Microcontroller programming</li>
              <li>Hardware and software integration</li>
            </ul>
          </div>

          {/* Others */}
          <div className="skill-card">
            <h3>Other Skills</h3>
            <ul>
              <li>Responsive Design</li>
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills
