import React from 'react';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: 'fa-solid fa-code',
    delay: '',
    skills: [
      { name: 'Python', icon: 'fa-brands fa-python' },
      { name: 'SQL', icon: 'fa-solid fa-database' },
      { name: 'C++', icon: 'fa-solid fa-code' },
      { name: 'JavaScript', icon: 'fa-brands fa-js' },
      { name: 'HTML5', icon: 'fa-brands fa-html5' },
      { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
    ]
  },
  {
    title: 'Data Science & AI',
    icon: 'fa-solid fa-brain',
    delay: 'reveal-delay-1',
    skills: [
      { name: 'Scikit-Learn', icon: 'fa-solid fa-chart-line' },
      { name: 'Pandas', icon: 'fa-solid fa-table' },
      { name: 'NumPy', icon: 'fa-solid fa-calculator' },
      { name: 'Matplotlib', icon: 'fa-solid fa-chart-pie' },
    ]
  },
  {
    title: 'Frameworks',
    icon: 'fa-solid fa-layer-group',
    delay: 'reveal-delay-2',
    skills: [
      { name: 'Django', icon: 'fa-solid fa-fire' },
      { name: 'Flask', icon: 'fa-solid fa-flask-vial' },
      { name: 'Streamlit', icon: 'fa-solid fa-display' },
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: 'fa-solid fa-screwdriver-wrench',
    delay: 'reveal-delay-3',
    skills: [
      { name: 'Git', icon: 'fa-brands fa-git-alt' },
      { name: 'GitHub', icon: 'fa-brands fa-github' },
      { name: 'Vercel', icon: 'fa-solid fa-triangle-exclamation' },
      { name: 'Render', icon: 'fa-solid fa-server' },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">
            <i className="fa-solid fa-wand-magic-sparkles"></i> Technical Arsenal
          </p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="skills-categories">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className={`skill-category reveal ${cat.delay}`}>
              <h3 className="category-title">
                <i className={cat.icon}></i> {cat.title}
              </h3>
              <div className="skills-grid">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-card">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
