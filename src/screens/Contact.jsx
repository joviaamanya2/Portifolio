import { useState } from 'react'
import '../styles/contact.css'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const to = 'amanyajovia7@email.com'
    const subject = encodeURIComponent(`Portfolio message from ${name || 'Website Visitor'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container container">

        <h2>Contact Me</h2>
        <p>If you’d like to work together or just say hello, feel free to reach out!</p>

        <div className="contact-content">

          <form className="contact-form" onSubmit={handleSubmit}>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Your Name" required />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Your Email" required />
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows="5" placeholder="Your Message" required />

            <button type="submit" className="btn">Send Message</button>
          </form>

          <aside className="contact-info">
            <h3>Get in Touch</h3>

            <p><strong>Email:</strong> <a href="mailto:amanyajovia7@email.com">amanyajovia7@email.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+256768883363">+256 768 883 363</a></p>

            <div className="socials">
              <h4>Follow Me</h4>

              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </aside>

        </div>
      </div>
    </section>
  )
}

export default Contact