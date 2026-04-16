import '../styles/contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <h2>Contact Me</h2>
        <p>If you’d like to work together or just say hello, feel free to reach out!</p>

        <div className="contact-content">

          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>

            <button type="submit">Send Message</button>
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get in Touch</h3>

            <p><strong>Email:</strong> amanyajovia7@email.com</p>
            <p><strong>Phone:</strong> +256 768883363/0709455855</p>

            <div className="socials">
              <h4>Follow Me</h4>

              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
                LinkedIn
              </a>

              <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
                Twitter
              </a>

              <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact