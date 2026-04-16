import '../styles/About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        {/* Left Side - Image */}
        <div className="about-image">
          <img 
            src="/profile.PNG" 
            alt="Profile" 
          />
        </div>

        {/* Right Side - Content */}
        <div className="about-content">
          <h2>About Me</h2>

          <p>
            Hi, I'm <span>Jovia Amanya</span>, a passionate Applications developer who loves
            building clean, responsive, and user-friendly  applications and systems.
          </p>

          <p>
            I specialize in creating modern interfaces using React and enjoy
            turning ideas into real, functional products. I’m constantly learning
            new technologies and improving my skills.
          </p>

          <p>
            When I’m not coding, I enjoy exploring new tech, solving problems,
            and working on personal projects that challenge me to grow.
          </p>

          {/* Skills */}
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>HTML & CSS</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          {/* Button */}
          <a href="/cv.pdf" className="btn" download>
            Download CV
          </a>
        </div>

      </div>
    </section>
  )
}

export default About