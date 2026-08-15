import React from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

import { SpotlightGlow } from './components/SpotlightGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export function App() {
  const { activeSection, isScrolled, showBackToTop } = useScrollSpy();
  useIntersectionObserver('.reveal');

  return (
    <>
      <SpotlightGlow />
      <Navbar activeSection={activeSection} isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop visible={showBackToTop} />
    </>
  );
}

export default App;
