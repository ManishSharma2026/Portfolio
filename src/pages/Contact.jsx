// pages/Contact.jsx
// Clean contact page with:
//   - Email / LinkedIn / GitHub / Resume download links
//   - A simple "send a message" mailto form (no backend needed)

import './Contact.css'

// ── Replace with your real contact info ───────────────────────
const CONTACT_INFO = {
  email:    'manishm.sharma91@gmail.com',
  linkedin: 'https://linkedin.com/in/manishsharma0826',
  github:   'https://github.com/manishsharma0826',
  resume:   '/resume.pdf',
}
// ──────────────────────────────────────────────────────────────

import { useState } from 'react'

export default function Contact() {
  // Simple controlled inputs for the mailto form
  const [name,    setName]    = useState('')
  const [message, setMessage] = useState('')

  // Build a mailto: link so clicking "Send" opens the user's email client
  const handleSend = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body    = encodeURIComponent(message)
    window.open(`mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`)
  }

  return (
    <main className="contact-page page">
      <div className="section">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">// let's connect</p>

        <div className="contact-grid">
          {/* Left: quick links */}
          <div className="contact-links-col">
            <p className="contact-intro">
              I'm currently open to internship and new-grad opportunities.
              Whether you have a role, a project idea, or just want to chat —
              feel free to reach out.
            </p>

            <div className="contact-cards">
              <a href={`mailto:${CONTACT_INFO.email}`} className="contact-card card">
                <span className="contact-card-icon">@</span>
                <div>
                  <span className="contact-card-label">Email</span>
                  <span className="contact-card-value">{CONTACT_INFO.email}</span>
                </div>
              </a>

              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="contact-card card">
                <span className="contact-card-icon">in</span>
                <div>
                  <span className="contact-card-label">LinkedIn</span>
                  <span className="contact-card-value">linkedin.com/in/manishsharma0826</span>
                </div>
              </a>

              <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="contact-card card">
                <span className="contact-card-icon">⌥</span>
                <div>
                  <span className="contact-card-label">GitHub</span>
                  <span className="contact-card-value">github.com/manishsharma0826</span>
                </div>
              </a>

              <a href={CONTACT_INFO.resume} target="_blank" rel="noreferrer" className="contact-card card">
                <span className="contact-card-icon">↓</span>
                <div>
                  <span className="contact-card-label">Resume</span>
                  <span className="contact-card-value">Download PDF</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: simple message form */}
          <div className="contact-form-col">
            <div className="contact-form card">
              <h3 className="contact-form-title">
                <span className="contact-form-prefix">&gt; </span>
                Send a Message
              </h3>

              <div className="contact-field">
                <label className="contact-label" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  className="contact-input"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="contact-input contact-textarea"
                  placeholder="What's on your mind?"
                  rows={6}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </div>

              <button
                className="btn btn-primary contact-send-btn"
                onClick={handleSend}
                disabled={!name || !message}
              >
                Open in Email Client ↗
              </button>

              <p className="contact-note">
                * This opens your default email app pre-filled with your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
