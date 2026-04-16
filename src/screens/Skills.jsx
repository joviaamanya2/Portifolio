import '../styles/skills.css'

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <h2>My Skills</h2>
        <p>Here are the technologies and tools I work with:</p>

        <div className="skills-grid">

          {/* Frontend */}
          <div className="skill-card">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="skill-card">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
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