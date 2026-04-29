// pages/Home.jsx
// Hero landing page.
// - Large display name in Orbitron
// - Animated subtitle (CSS typing effect)
// - CTA buttons: Resume, Projects, GitHub, LinkedIn
// - Decorative terminal code block on the right

import { Link } from 'react-router-dom'
import './Home.css'

// ── Replace these values with your real info ──────────────────
const INFO = {
  name: "Manish Sharma",
  role: "Applied Computing Student",
  university: "University of Washington Bothell",
  tagline:
    "Building full-stack systems at the intersection of AI, backend engineering, and real-world product impact.",
  github: "https://github.com/ManishSharma2026",
  linkedin: "https://linkedin.com/in/manishsharma0826",
  resume: "/resume.pdf",
};
// ──────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="home-page page">
      {/* Subtle grid background */}
      <div className="home-grid-bg" aria-hidden="true" />

      <div className="home-content section">
        <div className="home-text">
          {/* Mono label above name */}
          <p className="home-label">
            <span className="home-label-dot" />
            ONLINE — UWB 2025
          </p>

          {/* Name */}
          <h1 className="home-name">{INFO.name}</h1>

          {/* Animated subtitle */}
          <p className="home-role">
            <span className="home-role-prefix">&gt; </span>
            <span className="home-role-text">{INFO.role} @ {INFO.university}</span>
            <span className="home-role-cursor" aria-hidden="true" />
          </p>

          {/* Tagline */}
          <p className="home-tagline">{INFO.tagline}</p>

          {/* CTA buttons */}
          <div className="home-buttons">
            <a href={INFO.resume} target="_blank" rel="noreferrer" className="btn btn-primary">
              <span className="btn-icon">↓</span> Resume
            </a>
            <Link to="/projects" className="btn">
              Projects
            </Link>
            <a href={INFO.github} target="_blank" rel="noreferrer" className="btn">
              GitHub
            </a>
            <a href={INFO.linkedin} target="_blank" rel="noreferrer" className="btn">
              LinkedIn
            </a>
          </div>

          {/* Quick stats row */}
         
        </div>

        {/* Decorative terminal code block */}
        <div className="home-terminal" aria-hidden="true">
          <div className="home-terminal-header">
            <span className="home-terminal-dot home-terminal-dot--red"   />
            <span className="home-terminal-dot home-terminal-dot--yellow"/>
            <span className="home-terminal-dot home-terminal-dot--green" />
            <span className="home-terminal-filename">profile.json</span>
          </div>
          <pre className="home-terminal-code">{`{
  "name": "Manish Sharma",
  "role": "Software Engineer",
  "gpa": 3.56,
  "focus": [
    "Node.js / Express / APIs",
    "React & Full-Stack",
    "MySQL & Query Optimization",
    "AI & LLM Integration"
  ],
  "university": "UW Bothell",
  "degree": "B.A. Applied Computing",
  "graduating": "June 2026",
  "status": "open_to_work",
  "email": "manishm.sharma91@gmail.com"
}`}</pre>
        </div>
      </div>
    </main>
  )
}
