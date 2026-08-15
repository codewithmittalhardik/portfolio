import React from 'react';

export function Footer() {
  const scrollToHero = (e) => {
    e.preventDefault();
    const hero = document.getElementById('hero');
    if (hero) hero.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a href="#hero" onClick={scrollToHero} className="footer-logo">
            Hardik<span className="logo-dot">.</span>
          </a>
          <p>&copy; {new Date().getFullYear()} Hardik Mittal. All rights reserved.</p>
          <div className="footer-socials">
            <a
              href="https://github.com/Codewithmittalhardik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:mittalhardik2007@gmail.com" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
