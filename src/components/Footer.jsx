// components/Footer.jsx
// Minimal footer with copyright and quick social links.

import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-copy">
          <span className="footer-green">&lt;</span>
          Manish Sharma
          <span className="footer-green">/&gt;</span>
          {' '}— {new Date().getFullYear()}
        </span>
        <div className="footer-links">
          <a href="https://github.com/manishsharma0826" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/manishsharma0826" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
    </footer>
  )
}
