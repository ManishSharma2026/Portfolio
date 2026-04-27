// pages/About.jsx
// Two-column layout: photo on the left, bio + interests on the right.
// Replace placeholder photo and text with your real content.

import './About.css'

// ── Edit these values ─────────────────────────────────────────
const BIO_PARAGRAPHS = [
  `I'm a senior Applied Computing student at the University of Washington Bothell (GPA: 3.56),
   graduating June 2026. I build backend systems and full-stack applications that are fast,
   reliable, and built to scale — with hands-on experience shipping production features at
   Quadrant Technologies and leading technical initiatives at the Google Developer Club.`,
  `My core strength is backend and API development: at Quadrant Technologies I built and integrated
   15+ RESTful APIs using Node.js, Express, and MySQL, optimized SQL queries to cut data retrieval
   time by 25%, and handled concurrent request loads in production Agile workflows. I approach
   every system with the same question: how do I make this performant, maintainable, and actually
   useful to the people relying on it?`,
  `Beyond engineering, I led AI/ML workshops for 75+ students as Software Lead of the Google
   Developer Club, and coached 40+ students as a UW Bothell Peer Coach. I'm actively seeking
   Summer 2026 internship roles in software engineering, backend systems, or full-stack development
   where I can contribute to meaningful, user-facing products.`,
]

const INTERESTS = [
  'Backend Systems & APIs',
  'Full-Stack Development',
  'AI & LLM Integration',
  'SQL & Query Optimization',
  'React Ecosystem',
  'System Design',
  'Product Thinking',
  'Agile Development',
  'Peer Mentoring',
  'Cloud (Azure / AWS)',
]
// ──────────────────────────────────────────────────────────────

export default function About() {
  return (
    <main className="about-page page">
      <div className="section">
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">// who I am</p>

        <div className="about-grid">
          {/* Photo column */}
          <div className="about-photo-col">
            <div className="about-photo-frame">
              {/*
                Replace this div with an <img> tag once you have your photo:
                <img src="/photo.jpg" alt="Your Name" className="about-photo" />
              */}
              <div className="about-photo-placeholder">
                <span className="about-photo-icon">{ '[ photo ]' }</span>
                <p>Replace with your photo</p>
              </div>
            </div>

            {/* Quick facts card */}
            <div className="about-facts card">
              {[
                { label: 'University', value: 'UW Bothell' },
                { label: 'Degree',     value: 'B.A. Applied Computing' },
                { label: 'GPA',        value: '3.56 / 4.0' },
                { label: 'Minor',      value: 'Science, Technology & Society' },
                { label: 'Graduating', value: 'June 2026' },
                { label: 'Status',     value: 'Open to Summer 2026 ✓' },
              ].map(fact => (
                <div key={fact.label} className="about-fact">
                  <span className="about-fact-label">{fact.label}</span>
                  <span className="about-fact-value">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bio column */}
          <div className="about-bio-col">
            <div className="about-bio">
              {BIO_PARAGRAPHS.map((p, i) => (
                <p key={i} className="about-para">{p}</p>
              ))}
            </div>

            <div className="about-interests-wrap">
              <h3 className="about-interests-title">
                <span className="about-interests-prefix">&gt; </span>
                Interests &amp; Focus Areas
              </h3>
              <div className="about-interests">
                {INTERESTS.map(interest => (
                  <span key={interest} className="tag">{interest}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
