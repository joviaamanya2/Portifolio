import '../styles/projects.css'

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <h2>My Projects</h2>
        <p>Here are some of the projects I’ve worked on:</p>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">
            

            <div className="project-info">
              <h3>Portfolio Website</h3>
              <p>
                A personal portfolio website built using React to showcase my skills and projects.
              </p>

              <div className="tech">
                <span>React</span>
                <span>CSS</span>
              </div>

              <div className="links">
                <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                <a href="#" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">

            <div className="project-info">
              <h3>Todo App</h3>
              <p>
                A simple todo application that allows users to add, delete, and manage tasks.
              </p>

              <div className="tech">
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>

              <div className="links">
                <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                <a href="#" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">

            <div className="project-info">
              <h3>Fruit Design Website</h3>
              <p>
                Helps fruitdesign business to enhance its online presence to its online customers in order to increase sales as well as the growth of the business in this competetive world.
              </p>

              <div className="tech">
                <span>React</span>
                <span>API</span>
              </div>

              <div className="links">
                <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                <a href="#" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects