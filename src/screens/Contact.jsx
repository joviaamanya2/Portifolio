import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${name || 'Website visitor'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:amanyajovia7@email.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact section" id="contact">
      <div className="contact-container container">
        <div className="section-heading">
          <span className="eyebrow">Start a conversation</span>
          <h2>Have something in mind?</h2>
          <p>I’m always glad to hear about thoughtful projects and new opportunities.</p>
        </div>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Your name<input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Name" autoComplete="name" required /></label>
            <label>Email address<input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="you@example.com" autoComplete="email" required /></label>
            <label>Your message<textarea value={message} onChange={(event) => setMessage(event.target.value)} rows="5" placeholder="Tell me a little about what you have in mind…" required /></label>
            <button type="submit" className="btn">Send an email <span aria-hidden="true">↗</span></button>
          </form>
          <aside className="contact-info">
            <h3>Get in touch</h3>
            <p>Prefer to reach out directly? I’d love to hear from you.</p>
            <div className="contact-detail"><span>Email</span><a href="mailto:amanyajovia7@email.com">amanyajovia7@email.com</a></div>
            <div className="contact-detail"><span>Phone</span><a href="tel:+256768883363">+256 768 883 363</a></div>
            <div className="contact-detail"><span>Based in</span>Uganda</div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Contact
