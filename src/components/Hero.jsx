import React from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';

const PHRASES = [
  'CS & Engineering Student',
  'Python & Django Developer',
  'Data Science Explorer',
  'AI / ML Explorer',
];

export function Hero() {
  const typedText = useTypingEffect(PHRASES, 80, 40, 1800);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content reveal">
          <p className="hero-greeting">👋 Hello, I'm</p>
          <h1 className="hero-title">
            Hardik <span className="gradient-text">Mittal</span>
          </h1>
          <p className="hero-subtitle">
            <span className="typing-wrapper">
              <span id="typed-text" className="typed-text">{typedText}</span>
              <span className="cursor">|</span>
            </span>
          </p>
          <p className="hero-description">
            Computer Science & Engineering student at JUIT specializing in Python, Django, and Machine Learning. Experienced in building full-stack applications, data-driven tools, and ML pipelines.
          </p>
          <div className="hero-cta">
            <a href="#projects" onClick={scrollTo('projects')} className="btn btn-primary">
              <i className="fa-solid fa-rocket"></i> View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="fa-solid fa-file-pdf"></i> Resume PDF
            </a>
          </div>
          <div className="hero-socials">
            <a
              href="https://github.com/Codewithmittalhardik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/mittalhardik"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="mailto:mittalhardik2007@gmail.com"
              aria-label="Email"
              className="social-link"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              href="tel:9817068911"
              aria-label="Phone"
              className="social-link"
            >
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay-1">
          <div className="code-window">
            <div className="window-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="window-title">hardik.py</span>
            </div>
            <pre className="window-body">
              <code>
                <span className="kw">class</span> <span className="cls">Developer</span>:<br />
                {"    "}<span className="kw">def</span> <span className="fn">__init__</span>(<span class="param">self</span>):<br />
                {"        "}<span className="param">self</span>.name = <span className="str">"Hardik Mittal"</span><br />
                {"        "}<span className="param">self</span>.degree = <span className="str">"B.Tech CSE @ JUIT"</span><br />
                {"        "}<span className="param">self</span>.cgpa = <span className="str">"8.25"</span><br />
                {"        "}<span className="param">self</span>.skills = [<br />
                {"            "}<span className="str">"Python"</span>, <span className="str">"Django"</span>,<br />
                {"            "}<span className="str">"ML / Scikit-Learn"</span>, <span className="str">"SQL"</span><br />
                {"        "}]<br />
                {"        "}<span className="param">self</span>.leetcode = <span className="str">"200+ Solved"</span><br />
                <br />
                {"    "}<span className="kw">def</span> <span className="fn">say_hello</span>(<span class="param">self</span>):<br />
                {"        "}<span className="kw">return</span> <span className="str">"Let's build intelligent systems!"</span>
              </code>
            </pre>
          </div>
        </div>
      </div>

      <a href="#about" onClick={scrollTo('about')} className="scroll-indicator" aria-label="Scroll down">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </a>
    </section>
  );
}
