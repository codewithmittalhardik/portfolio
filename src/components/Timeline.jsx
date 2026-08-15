import React from 'react';

const TIMELINE_EVENTS = [
  {
    period: '2025 — Present',
    title: 'Exploring Artificial Intelligence & Machine Learning',
    role: 'AI / ML Explorer',
    description: 'Developing data-driven applications including document interaction with LLMs (DocuGPT/ChatPDF), predictive machine learning tools (Car Price Predictor), and real-time NLP classification models (Spam Detector).',
    badge: 'Current Focus',
    icon: 'fa-solid fa-brain',
    tech: ['Python', 'Scikit-Learn', 'LLMs', 'HuggingFace', 'Streamlit']
  },
  {
    period: '2024 — 2025',
    title: 'Django & Scalable Web Architecture',
    role: 'Backend Developer',
    description: 'Mastered Django web framework and relational database modeling (MySQL). Designed backend architectures, security best practices, and cloud deployment pipelines on Render & Vercel.',
    badge: 'Backend Core',
    icon: 'fa-solid fa-fire',
    tech: ['Django', 'Flask', 'MySQL', 'MongoDB', 'REST APIs']
  },
  {
    period: '2023 — 2024',
    title: 'Software Development Foundations',
    role: 'Python Developer',
    description: 'Built foundational expertise in Python data structures, Object-Oriented Programming (OOP), web technology fundamentals (HTML5, CSS3, JavaScript), and Git/GitHub workflows.',
    badge: 'Foundations',
    icon: 'fa-brands fa-python',
    tech: ['Python', 'JavaScript', 'Git', 'GitHub', 'HTML/CSS']
  }
];

export function Timeline() {
  return (
    <section id="timeline" className="timeline section">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">
            <i className="fa-solid fa-timeline"></i> My Growth & Milestones
          </p>
          <h2 className="section-title">
            Coding <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          {TIMELINE_EVENTS.map((item, idx) => (
            <div key={idx} className={`timeline-item reveal ${idx % 2 === 1 ? 'right' : 'left'}`}>
              <div className="timeline-dot">
                <i className={item.icon}></i>
              </div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <span className="timeline-period">{item.period}</span>
                  <span className="timeline-badge">{item.badge}</span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-role">{item.role}</p>
                <p className="timeline-desc">{item.description}</p>
                <div className="timeline-tech">
                  {item.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
