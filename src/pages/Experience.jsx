// pages/Experience.jsx
// Vertical timeline of internships, consulting, peer coaching,
// and relevant coursework.
// Edit EXPERIENCES and COURSES arrays below.

import './Experience.css'

// ── Edit with your real experience ───────────────────────────
const EXPERIENCES = [
  {
    id: 1,
    type: 'Internship',
    title: 'Software Engineer Intern',
    company: 'Quadrant Technologies',
    dates: 'Jun 2025 – Aug 2025',
    location: 'Redmond, WA',
    description: [
      'Built and integrated 15+ RESTful APIs using Node.js, Express, and SQL supporting scalable data-driven workflows in production systems.',
      'Optimized SQL queries and backend data access patterns, improving data retrieval efficiency by 25% and reducing response latency.',
      'Handled concurrent API requests and asynchronous backend processing, improving system stability under multi-user workloads.',
      'Collaborated with engineers to deliver 3+ production features from design through deployment in Agile development cycles.',
      'Applied data structures and algorithmic techniques to ensure correctness and scalability across workflows.',
    ],
    tools: ['Node.js', 'Express', 'MySQL', 'REST APIs', 'Jira', 'Agile', 'Git'],
    impact: '15+ APIs shipped; 25% query efficiency improvement in production systems.',
  },
  {
    id: 2,
    type: 'Internship',
    title: 'Product & Web Intern',
    company: 'Amogh Constructions',
    dates: 'Jan 2026 – Present',
    location: 'Remote',
    description: [
      'Analyzed user behavior and competitor platforms to identify opportunities, driving a 10x increase in monthly views (5 → 50+) through targeted content and navigation improvements.',
      'Redesigned site layout and content visibility, improving ease of navigation and directly increasing user engagement and time-on-page.',
      'Developed and optimized responsive web features using HTML, CSS, and JavaScript ensuring consistent cross-device performance.',
      'Translated stakeholder requirements into technical implementations aligned with business and brand goals.',
      'Used Jira to track tasks, manage workflows, and support consistent feature delivery in a remote team environment.',
    ],
    tools: ['HTML', 'CSS', 'JavaScript', 'Jira', 'UX Research', 'Figma'],
    impact: '10x growth in monthly site views; measurably improved user engagement metrics.',
  },
  {
    id: 3,
    type: 'Leadership',
    title: 'Software Lead',
    company: 'Google Developer Club, UW Bothell',
    dates: 'Nov 2024 – Mar 2026',
    location: 'Bothell, WA',
    description: [
      'Led 10+ technical workshops on machine learning, LLM applications, and data processing pipelines reaching 75+ students.',
      'Guided teams in building real-world applications involving data processing, analysis, and AI/ML workflows.',
      'Collaborated on 2+ technical projects spanning ML integration, system design, and intelligent agent workflows.',
      'Mentored developers on software engineering principles, debugging practices, and API-driven architectures.',
    ],
    tools: ['Python', 'LLM APIs', 'ML Concepts', 'System Design', 'Public Speaking'],
    impact: '75+ students reached; guided 2+ cross-functional technical projects to completion.',
  },
  {
    id: 4,
    type: 'Leadership',
    title: 'Peer Coach',
    company: 'University of Washington Bothell',
    dates: 'Nov 2024 – Dec 2025',
    location: 'Bothell, WA',
    description: [
      'Mentored 40+ students on algorithms, data structures, and computational problem-solving strategies.',
      'Analyzed student performance trends and guided individuals in improving time management and academic outcomes.',
      'Simplified complex technical topics — recursion, complexity analysis, system design — into clear, actionable explanations.',
    ],
    tools: ['Communication', 'Curriculum Design', 'DSA', 'Academic Coaching'],
    impact: 'Mentored 40+ students; recognized for consistently improving student understanding in technical courses.',
  },
]

const COURSES = [
  'Data Structures & Algorithms',
  'Database Systems (Relational Design, Indexing, Query Optimization)',
  'Software Engineering',
  'Operating Systems',
  'Cloud Computing',
  'Machine Learning',
  'Human-Computer Interaction',
  'Science, Technology & Society (Minor)',
]
// ──────────────────────────────────────────────────────────────

const TYPE_COLOR = {
  'Internship': '#00ff41',
  'Consulting':  '#00ccff',
  'Leadership':  '#ffaa00',
  'Project':     '#aa88ff',
}

export default function Experience() {
  return (
    <main className="experience-page page">
      <div className="section">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">// work, leadership & coursework</p>

        {/* Timeline */}
        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <div key={exp.id} className="timeline-item">
              {/* Connector line + dot */}
              <div className="timeline-connector">
                <div
                  className="timeline-dot"
                  style={{ borderColor: TYPE_COLOR[exp.type] || 'var(--green)' }}
                />
                {i < EXPERIENCES.length - 1 && <div className="timeline-line" />}
              </div>

              {/* Card */}
              <div className="timeline-card card">
                <div className="timeline-card-top">
                  <div>
                    <span
                      className="timeline-type"
                      style={{ color: TYPE_COLOR[exp.type] || 'var(--green)' }}
                    >
                      {exp.type}
                    </span>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-dates">{exp.dates}</span>
                    <span className="timeline-location">{exp.location}</span>
                  </div>
                </div>

                <ul className="timeline-bullets">
                  {exp.description.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>

                <div className="timeline-footer">
                  <div className="timeline-tools">
                    {exp.tools.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <p className="timeline-impact">
                    <span className="timeline-impact-label">Impact: </span>
                    {exp.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Relevant coursework */}
        <div className="courses-wrap">
          <h3 className="courses-title section-title" style={{ marginTop: 60 }}>
            Relevant Coursework
          </h3>
          <div className="courses-grid">
            {COURSES.map(course => (
              <div key={course} className="course-item">
                <span className="course-arrow">›</span>
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
