import { useEffect } from 'react';

export function useIntersectionObserver(selector = '.reveal', options = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, options);

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [selector, JSON.stringify(options)]);
}
