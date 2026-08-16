import React, { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ activeSection, isScrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const itemRefs = useRef({});

  const updatePill = () => {
    const currentEl = itemRefs.current[activeSection];
    if (currentEl) {
      setPillStyle({
        left: currentEl.offsetLeft,
        width: currentEl.offsetWidth,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    updatePill();
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [activeSection]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id="navbar" className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="nav-logo">
          Hardik<span className="logo-dot"></span>
        </a>
        <button
          id="nav-toggle"
          className={`nav-toggle ${mobileOpen ? 'active' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul id="nav-menu" className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
          {/* Instant Responsive Elastic Pill Indicator */}
          <span
            className="nav-sliding-pill"
            style={{
              transform: `translateX(${pillStyle.left}px)`,
              width: `${pillStyle.width}px`,
              opacity: pillStyle.opacity,
            }}
          />
          {NAV_ITEMS.map((item) => (
            <li
              key={item.id}
              ref={(el) => (itemRefs.current[item.id] = el)}
              style={{ position: 'relative', zIndex: 2 }}
            >
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
