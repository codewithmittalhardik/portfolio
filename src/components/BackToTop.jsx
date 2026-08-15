import React from 'react';

export function BackToTop({ visible }) {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#hero"
      id="back-to-top"
      className={`back-to-top ${visible ? 'visible' : ''}`}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </a>
  );
}
