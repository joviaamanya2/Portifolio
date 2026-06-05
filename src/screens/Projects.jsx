import '../styles/projects.css'

function ProjectCard({ image, title, children, tech = [], live = '#', repo = '#' }) {
  return (
    <article className="project-card" aria-label={title}>
      {image && (
        <div className="project-media">
          <img src={image} alt={`${title} screenshot`} />
        </div>
      )}

      <div className="project-info">
        <h3>{title}</h3>
        <p>{children}</p>

        <div className="tech">
          {tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="links">
          <a href={live} target="_blank" rel="noreferrer">Live Demo</a>
          <a href={repo} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container container">

        <h2>My Projects</h2>
        <p>Here are a few projects that show my approach to front-end development and UX.</p>

        <div className="projects-grid">
          <ProjectCard
            image="/src/assets/hero.png"
            title="Portfolio Website"
            tech={["React", "CSS"]}
            live="#"
            repo="#"
          >
            A personal portfolio built with React to showcase projects, accessibility, and responsive design.
          </ProjectCard>

          <ProjectCard
            image="/src/assets/hero.png"
            title="Todo App"
            tech={["JavaScript", "HTML", "CSS"]}
            live="#"
            repo="#"
          >
            A small productivity app demonstrating state management and local persistence.
          </ProjectCard>

          <ProjectCard
            image="/src/assets/hero.png"
            title="Fruit Design Website"
            tech={["React", "API"]}
            live="#"
            repo="#"
          >
            A small marketing site built to help a local business improve online presence and conversions.
          </ProjectCard>

        </div>

      </div>
    </section>
  )
}

export default Projects