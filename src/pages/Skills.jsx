// pages/Skills.jsx
// Grid of skill cards, each showing:
//   - Skill name + category
//   - Proficiency bar
//   - How/where it was used in a real project
// Edit SKILLS array below to update your stack.

import './Skills.css'

// ── Edit this data with your actual skills ────────────────────
const SKILLS = [
  {
    name:        'Node.js / Express',
    category:    'Backend',
    level:       90,
    icon:        '⬡',
    description: 'Built and integrated 15+ RESTful APIs at Quadrant Technologies supporting scalable data-driven workflows. Handled concurrent requests and async backend processing in production.',
    projects:    ['Quadrant Technologies', 'Employee Dashboard', 'Haven'],
  },
  {
    name:        'SQL / MySQL',
    category:    'Database',
    level:       88,
    icon:        '⊞',
    description: 'Optimized SQL queries and data access patterns at Quadrant, improving retrieval efficiency by 25%. Designed relational schemas with indexing, joins, aggregations, and filtering for the Employee Dashboard.',
    projects:    ['Quadrant Technologies', 'Employee Dashboard'],
  },
  {
    name:        'React',
    category:    'Frontend',
    level:       85,
    icon:        '⚛',
    description: 'Built the Employee Management Dashboard — a full-stack SPA with role-based access, real-time data, and 30% improved load times. Also used in ParentAI and Haven frontends.',
    projects:    ['Employee Dashboard', 'ParentAI', 'Haven'],
  },
  {
    name:        'JavaScript / TypeScript',
    category:    'Language',
    level:       87,
    icon:        'JS',
    description: 'Primary language across all web projects. Used TypeScript for stronger type safety in API contracts and React components.',
    projects:    ['All Web Projects', 'Amogh Constructions'],
  },
  {
    name:        'Python',
    category:    'Language',
    level:       82,
    icon:        '🐍',
    description: 'Used for backend logic in Haven (data pipeline & API orchestration), LLM integration in ParentAI via Flask, and AI/ML workshops at Google Developer Club.',
    projects:    ['Haven', 'ParentAI', 'GDC Workshops'],
  },
  {
    name:        'Flask',
    category:    'Backend',
    level:       78,
    icon:        '⌁',
    description: 'Built the ParentAI chatbot backend with Flask — handling real-time user input, LLM API calls, and response generation under hackathon constraints.',
    projects:    ['ParentAI'],
  },
  {
    name:        'HTML / CSS',
    category:    'Frontend',
    level:       90,
    icon:        '✦',
    description: 'Built responsive, cross-device web features at Amogh Constructions, driving a 10x increase in monthly views (5 → 50+) through redesigned layouts and navigation.',
    projects:    ['Amogh Constructions', 'All Web Projects'],
  },
  {
    name:        'AI / LLM Integration',
    category:    'AI',
    level:       76,
    icon:        '◈',
    description: 'Integrated LLM APIs into Haven for misinformation detection and ParentAI for mental health support. Led 10+ ML/LLM workshops for 75+ students at GDC.',
    projects:    ['Haven', 'ParentAI', 'GDC Workshops'],
  },
  {
    name:        'Git / GitHub',
    category:    'DevOps',
    level:       88,
    icon:        '⌥',
    description: 'Version control on all projects. Experienced with feature branching, PR reviews, and collaborative Agile workflows across internship and student teams.',
    projects:    ['All Projects'],
  },
  {
    name:        'Azure / AWS',
    category:    'Cloud',
    level:       68,
    icon:        '☁',
    description: 'Deployed ParentAI on Azure cloud infrastructure during the hackathon. Familiar with AWS services from Cloud Computing coursework and production work at Quadrant.',
    projects:    ['ParentAI', 'Quadrant Technologies'],
  },
  {
    name:        'Java',
    category:    'Language',
    level:       80,
    icon:        '☕',
    description: 'Used in coursework for Data Structures & Algorithms, Operating Systems, and Software Engineering. Strong foundation in OOP and algorithmic problem-solving.',
    projects:    ['Coursework / DSA'],
  },
  {
    name:        'Jira / Agile',
    category:    'DevOps',
    level:       82,
    icon:        '◫',
    description: 'Used Jira for task management at Amogh Constructions and within Agile sprint cycles at Quadrant Technologies. Comfortable with standups, sprints, and iterative delivery.',
    projects:    ['Quadrant Technologies', 'Amogh Constructions'],
  },
]
// ──────────────────────────────────────────────────────────────

// Unique categories for filtering
const CATEGORIES = ['All', ...new Set(SKILLS.map(s => s.category))]

import { useState } from 'react'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory)

  return (
    <main className="skills-page page">
      <div className="section">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">// technical stack & how I've used each</p>

        {/* Category filter tabs */}
        <div className="skills-filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`skills-filter-btn ${activeCategory === cat ? 'skills-filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill cards grid */}
        <div className="skills-grid">
          {filtered.map(skill => (
            <div key={skill.name} className="skill-card card">
              <div className="skill-card-header">
                <span className="skill-icon">{skill.icon}</span>
                <div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="tag">{skill.category}</span>
                </div>
                <span className="skill-level-pct">{skill.level}%</span>
              </div>

              {/* Proficiency bar */}
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* How it was used */}
              <p className="skill-description">{skill.description}</p>

              {/* Project tags */}
              <div className="skill-projects">
                {skill.projects.map(p => (
                  <span key={p} className="tag">{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
