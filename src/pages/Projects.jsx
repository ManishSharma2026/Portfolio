// pages/Projects.jsx
import { useState } from "react";
import "./Projects.css";

const PROJECTS = [
  {
    id: "employee-dashboard",
    title: "Employee Management Dashboard",
    subtitle: "Full-Stack Enterprise Web Application",
    status: "Completed",
    tags: ["React", "Node.js", "MySQL", "REST API", "Role-Based Access"],
    description:
      "A comprehensive full-stack dashboard for managing employee records, teams, and organizational data — with role-based access control and real-time database integration.",
    problem:
      "Managing employee data through spreadsheets created errors, slow lookups, and inconsistent access across teams.",
    solution:
      "Built a full-stack CRUD application using React (frontend), Node.js/Express (API layer), and MySQL (relational database) with JWT-based role-based access control.",
    role: "Lead Developer — designed the relational DB schema with indexing, built all API endpoints, and built the React frontend with dynamic data tables and reporting views.",
    challenges:
      "Optimizing SQL query performance under large datasets using indexing and efficient join strategies; managing role-based UI state cleanly in React.",
    future:
      "CSV export, email notifications for HR events, and an analytics dashboard for headcount and performance trends.",
    github: "https://github.com/manishsharma0826/employee-dashboard",
    demo: null,
    image: null,
  },
  {
    id: "haven",
    title: "Haven",
    subtitle: "AI Misinformation Detection System",
    status: "In Progress",
    tags: ["Node.js", "Express", "Python", "LLM APIs", "Prompt Engineering"],
    description:
      "An end-to-end LLM-powered system that ingests real-world claims, aggregates signals from multiple data sources, and flags misinformation with structured confidence outputs.",
    problem:
      "Misinformation spreads quickly online. Users need a fast, reliable way to verify claims without manually cross-referencing sources.",
    solution:
      "Built a scalable Python backend with API orchestration across multiple data sources, multi-source comparison logic, and optimized low-latency response pipelines.",
    role: "Full-Stack & Backend Lead — designed the data pipeline, LLM prompt strategy, API orchestration layer, and Node.js/Express routing.",
    challenges:
      "Balancing latency vs. accuracy when aggregating multiple API sources in real time; refining prompt strategies for consistent, reliable LLM outputs.",
    future:
      "Browser extension integration, user history tracking, and a confidence-score visualization dashboard.",
    github: "https://github.com/manishsharma0826/haven",
    demo: null,
    image: null,
  },
  {
    id: "parentai",
    title: "ParentAI",
    subtitle: "Mental Health Chatbot — Hackathon Winner & Student Favorite",
    status: "Completed",
    tags: ["React", "Flask", "Python", "Azure", "LLM Integration"],
    description:
      "A full-stack AI chatbot supporting real-time mental health conversations for parents — built end-to-end under hackathon constraints. Won both Hackathon Winner and Student Favorite awards.",
    problem:
      "Parents navigating postpartum or early parenting mental health challenges lack accessible, judgment-free support tools.",
    solution:
      "Built a React + Flask chatbot with an LLM backend, optimized prompt strategies for consistent responses, and deployed scalable cloud infrastructure on Azure.",
    role: "Full-Stack Developer — built the React UI, Flask backend, LLM integration, prompt engineering, and Azure deployment. Presented to judges.",
    challenges:
      "Delivering a polished, production-quality product in a single hackathon session; optimizing LLM response latency under Azure infrastructure constraints.",
    future:
      "Therapist referral integration, session history, and mood tracking over time.",
    github: "https://github.com/manishsharma0826/parentai",
    demo: null,
    image: null,
  },
  {
    id: "web-scraper-analyzer",
    title: "Web Scraper + Data Analyzer",
    subtitle: "Multithreaded Java Crawler & Content Analysis Engine",
    status: "Completed",
    tags: [
      "Java 17",
      "CompletableFuture",
      "jsoup",
      "TF-IDF",
      "Design Patterns",
      "Maven",
    ],
    description:
      "A concurrent web crawler and content analysis engine built in Java 17. Crawls any seed URL using BFS across a thread pool, then runs a pluggable analysis pipeline — word frequency, TF-IDF scoring, link graph structure, and crawl performance stats — exported as JSON and CSV.",
    problem:
      "Most web scraping tools are black boxes. I wanted to build one from scratch that demonstrates real concurrency, rate limiting, and data analysis at the architecture level.",
    solution:
      "Built a multithreaded BFS crawler using CompletableFuture and a fixed thread pool, with a Semaphore-based rate limiter, robots.txt parsing, and a Strategy-pattern analysis pipeline that can be extended with new analyzers without touching existing code.",
    role: "Sole Developer — designed the full architecture including the Builder-pattern config, immutable Java 17 records for data models, Stream-based TF-IDF scoring, and dual JSON/CSV export.",
    challenges:
      "Coordinating BFS wave synchronization across CompletableFuture tasks without blocking individual threads; implementing fair rate limiting shared across all crawler threads using a single Semaphore.",
    future:
      "Sentiment analysis module, a visual link-graph output using D3.js, and a REST API wrapper so it can be triggered and queried remotely.",
    github: "https://github.com/ManishSharma2026/web-scraper-analyzer",
    demo: null,
    image: null,
  },
  {
    id: "nova",
    title: "Nova",
    subtitle: "Personal AI Voice Assistant — Built from Scratch",
    status: "In Progress",
    tags: [
      "Python",
      "LLM APIs",
      "Speech Recognition",
      "TTS",
      "NLP",
      "System Integration",
    ],
    description:
      "Nova is a fully custom personal voice assistant built from the ground up — no Alexa, no Siri shortcuts. It listens, understands context, and executes tasks using LLM-powered intent recognition and a modular skill architecture that I design and own entirely.",
    problem:
      "Existing voice assistants are closed ecosystems with no real flexibility. I wanted a fully programmable assistant I actually own and can extend with any capability I need.",
    solution:
      "Designing a pipeline: speech-to-text input → LLM intent parsing with context memory → modular skill dispatcher → text-to-speech output. Each skill is a self-contained module making the system infinitely extensible.",
    role: "Sole Developer — responsible for the full pipeline architecture, LLM prompt engineering for intent classification, context memory design, and all skill modules.",
    challenges:
      "Minimizing end-to-end latency across the speech → LLM → speech pipeline; building reliable intent classification that gracefully handles ambiguous or multi-step commands.",
    future:
      "Calendar and email integration, proactive reminders, local model fallback for offline use, and a lightweight GUI dashboard.",
    github: null,
    demo: null,
    image: null,
  },
  {
    id: "amogh-constructions",
    title: "Amogh Constructions Website",
    subtitle: "Business Marketing Site — Live in Production",
    status: "Live",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "UX"],
    description:
      "A professional marketing and portfolio website for a construction business — built from scratch with responsive design, redesigned navigation, and measurable engagement improvements.",
    problem:
      "The business had no web presence, losing potential clients who searched for contractors online.",
    solution:
      "Designed and built a mobile-first, cross-device site with optimized content structure, improved navigation flows, and a project gallery — driving a 10x increase in monthly views (5 → 50+).",
    role: "Sole Developer & Product Intern — conducted stakeholder interviews, designed the site architecture, built all features, and managed delivery via Jira.",
    challenges:
      "Making the site fast and visually polished without a framework; translating non-technical stakeholder needs into clear UX decisions.",
    future:
      "CMS integration so the team can update project galleries without developer involvement.",
    github: null,
    demo: null,
    image: null,
  },
];

const STATUS_COLOR = {
  Live: "#00ff41",
  Completed: "#00cc33",
  "In Progress": "#ffaa00",
};

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const toggle = (id) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <main className="projects-page page">
      <div className="section">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">// what I've built</p>

        <div className="projects-list">
          {PROJECTS.map((project) => {
            const isOpen = expandedId === project.id;
            return (
              <div
                key={project.id}
                className={`project-card card ${isOpen ? "project-card--open" : ""}`}
              >
                {/* Card Header — always visible */}
                <div
                  className="project-header"
                  onClick={() => toggle(project.id)}
                >
                  {/* Screenshot placeholder */}
                  <div className="project-thumb">
                    {project.image ? (
                      <img src={project.image} alt={project.title} />
                    ) : (
                      <span className="project-thumb-placeholder">
                        [ screenshot ]
                      </span>
                    )}
                  </div>

                  <div className="project-meta">
                    <div className="project-meta-top">
                      <span
                        className="project-status"
                        style={{
                          color: STATUS_COLOR[project.status] || "#888",
                        }}
                      >
                        ● {project.status}
                      </span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <p className="project-desc">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className="project-links"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>

                  {/* Expand toggle */}
                  <button
                    className="project-toggle"
                    aria-label="Toggle details"
                  >
                    <span
                      className={`project-toggle-icon ${isOpen ? "project-toggle-icon--open" : ""}`}
                    >
                      ›
                    </span>
                  </button>
                </div>

                {/* Expanded detail section */}
                {isOpen && (
                  <div className="project-detail">
                    <div className="project-detail-grid">
                      {[
                        { label: "Problem", text: project.problem },
                        { label: "Solution", text: project.solution },
                        { label: "My Role", text: project.role },
                        { label: "Challenges", text: project.challenges },
                        { label: "Future Plans", text: project.future },
                      ].map((item) => (
                        <div key={item.label} className="project-detail-item">
                          <span className="project-detail-label">
                            {item.label}
                          </span>
                          <p className="project-detail-text">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
