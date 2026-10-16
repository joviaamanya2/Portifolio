
const projects = [
  { title: 'Personal portfolio', description: 'A responsive home for selected work, skills, and ways to get in touch.', tech: ['React', 'CSS', 'Responsive design'], mark: 'JA' },
  { title: 'Task manager concept', description: 'A focused productivity app concept for organizing tasks and keeping daily plans clear.', tech: ['JavaScript', 'HTML', 'CSS'], mark: '01' },
  { title: 'Local business website', description: 'A bright marketing site concept designed to help a small business reach new customers.', tech: ['React', 'UI design', 'Accessibility'], mark: '02' },
]

function ProjectCard({ title, description, tech, mark }) {
  return (
    <article className="project-card">
      <div className="project-media" aria-hidden="true"><span className="project-placeholder">{mark}</span></div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech">{tech.map((item) => <span key={item}>{item}</span>)}</div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="projects-container container">
        <div className="section-heading">
          <span className="eyebrow">Selected work</span>
          <h2>Made with intention</h2>
          <p>A few examples of the kind of useful, welcoming digital experiences I enjoy building.</p>
        </div>
        <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.title} {...project} />)}</div>
      </div>
    </section>
  )
}

export default Projects
