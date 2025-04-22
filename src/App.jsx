import React, { useState, useEffect } from 'react';
import BootSequence from './components/BootSequence';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import DashboardSection from './components/DashboardSection';
import ContactSection from './components/ContactSection';
import './css/styles.css';

const App = () => {
  const [booted, setBooted] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Auto theme based on time
    const hour = new Date().getHours();
    setTheme(hour >= 6 && hour < 18 ? 'pastel' : 'dark');

    // Enhanced particle background
    particlesJS('particles-js', {
      particles: {
        number: { value: 120, density: { enable: true, value_area: 800 } },
        color: { value: '#00ffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.4, random: true },
        size: { value: 3, random: true },
        move: { enable: true, speed: 2, direction: 'none', random: true },
        line_linked: { enable: true, distance: 100, color: '#00ffff', opacity: 0.3, width: 1 },
      },
      interactivity: {
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
      },
    });
  }, []);

  if (!booted) {
    return <BootSequence onComplete={() => setBooted(true)} />;
  }

  return (
    <div className={`relative ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-gray-200 to-gray-400'}`}>
      <div id="particles-js" className="fixed inset-0 z-0"></div>
      <div className="relative z-10">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'pastel' : 'dark')}
          className="fixed top-4 right-4 px-4 py-2 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition z-20 glass-panel"
        >
          Toggle Theme
        </button>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <DashboardSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default App;
