import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds = ['hero', 'about', 'skills', 'projects', 'contact']) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);
      setShowBackToTop(scrollY > 400);

      const targetPosition = scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (targetPosition >= top && targetPosition < top + height) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return { activeSection, isScrolled, showBackToTop };
}
