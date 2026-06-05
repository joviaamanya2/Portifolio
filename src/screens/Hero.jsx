import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content container">
        <h1>Hi, I'm <span style={{color:'#0f172a'}}>Jovia Amanya</span></h1>
        <p className="lead">Software Developer building responsive and accessible web apps with React.</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">View My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;