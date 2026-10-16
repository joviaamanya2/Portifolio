
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-layout container">
        <div className="hero-content">
          <span className="hero-kicker">Application developer · Uganda</span>
          <h1>Thoughtful<br />digital work,<br /><span>built with care.</span></h1>
          <p className="lead">Hi, I’m Jovia Amanya. I create clear, responsive web experiences that make everyday tasks feel easier.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">Explore my work <span aria-hidden="true">↗</span></a>
            <a href="#contact" className="btn secondary">Let’s talk</a>
          </div>
          <p className="hero-note">Currently open to thoughtful collaborations.</p>
        </div>
        <div className="hero-portrait"><img src="/profile.PNG" alt="Jovia Amanya" /><div className="hero-caption">Jovia Amanya<small>Application developer</small></div></div>
      </div>
    </section>
  )
}

export default Hero
