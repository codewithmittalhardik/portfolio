import React from 'react';

const STATS = [
  { icon: 'fa-solid fa-code', value: '200+', label: 'LeetCode Solved' },
  { icon: 'fa-solid fa-graduation-cap', value: '8.25', label: 'CGPA @ JUIT' },
  { icon: 'fa-solid fa-laptop-code', value: '6+', label: 'ML & Web Projects' },
  { icon: 'fa-solid fa-brain', value: '∞', label: 'Learning Mindset' },
];

export function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">
            <i className="fa-solid fa-user"></i> Get to know me
          </p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I am an analytical and results-driven <strong>Computer Science & Engineering student</strong> at <strong>Jaypee University of Information Technology (JUIT), Solan</strong> (CGPA: 8.25).
            </p>
            <p>
              I specialize in backend engineering using <strong>Python & Django</strong> and data science workflows using <strong>Scikit-Learn, Pandas, and NumPy</strong>. I have developed machine learning pipelines, predictive models, and full-stack web applications.
            </p>
            <p>
              Driven by a continuous <strong>learning mindset</strong> and a passion for solving complex algorithmic challenges, I constantly explore new technologies in AI, Machine Learning, and software engineering.
            </p>
          </div>
          <div className="about-stats reveal reveal-delay-1">
            {STATS.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-info">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
