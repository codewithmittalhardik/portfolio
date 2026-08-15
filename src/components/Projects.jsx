import React, { useState } from 'react';

const CATEGORIES = ['All', 'ML / DS', 'AI & LLM'];

const PROJECTS = [
  {
    title: 'Diabetes Prediction Model',
    category: 'ML / DS',
    icon: 'fa-solid fa-heart-pulse',
    description: 'Developed a machine learning pipeline using Random Forest classifier to predict likelihood of diabetes with 92.16% accuracy.',
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
    liveUrl: 'https://github.com/Codewithmittalhardik/',
  },
  {
    title: 'Car Price Prediction Model',
    category: 'ML / DS',
    icon: 'fa-solid fa-car',
    description: 'Engineered a Linear Regression model with data preprocessing pipelines to predict used car resale values based on vehicle features.',
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
    liveUrl: 'https://car-price-predictor-sp86.onrender.com/',
  },
  {
    title: 'Movie Recommendation System',
    category: 'ML / DS',
    icon: 'fa-solid fa-film',
    description: 'Developed a content-based recommendation engine leveraging text vectorization and content similarity to suggest movies.',
    tags: ['Python', 'Streamlit', 'Scikit-Learn', 'Pandas'],
    liveUrl: 'https://movie-recommendation-system-unz6.onrender.com',
  },
  {
    title: 'Spam Detector',
    category: 'ML / DS',
    icon: 'fa-solid fa-shield-halved',
    description: 'Real-time SMS/Email Spam Classifier built with Python, Scikit-Learn NLP algorithms, and Streamlit.',
    tags: ['ML', 'Scikit-Learn', 'NLP'],
    liveUrl: 'https://email-sms-spamdetection.onrender.com/',
  },
  {
    title: 'BioGenerator',
    category: 'AI & LLM',
    icon: 'fa-solid fa-robot',
    description: 'AI‑powered Instagram caption & bio generator that helps users craft engaging content quickly.',
    tags: ['Python', 'AI', 'Streamlit'],
    liveUrl: 'https://biogenerator-euia.onrender.com',
  },
  {
    title: 'Chat PDF Reader',
    category: 'AI & LLM',
    icon: 'fa-solid fa-file-pdf',
    description: 'DocuGPT — An AI-powered document assistant that transforms static PDFs into interactive conversations.',
    tags: ['AI', 'LLM', 'HuggingFace'],
    liveUrl: 'https://mittalhardik-chatpdf.hf.space',
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = PROJECTS.filter(
    (proj) => activeCategory === 'All' || proj.category === activeCategory
  );

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">
            <i className="fa-solid fa-folder-open"></i> My technical work
          </p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="projects-filter reveal">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((proj, idx) => (
            <div key={idx} className="project-card reveal">
              <div className="project-header-row">
                <div className="project-icon">
                  <i className={proj.icon}></i>
                </div>
                <span className="project-category-badge">{proj.category}</span>
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>
              <div className="project-tags">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Demo / Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
