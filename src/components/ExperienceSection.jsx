import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ExperienceSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current.children, {
      opacity: 0,
      x: 100,
      stagger: 0.3,
      duration: 1,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
  }, []);

  const experiences = [
    {
      title: 'Senior Developer at TechCorp',
      period: '2022 - Present',
      desc: 'Led development of a real-time analytics platform.',
    },
    {
      title: 'Frontend Engineer at Innovate',
      period: '2020 - 2022',
      desc: 'Built interactive web applications with React and Three.js.',
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-transparent text-white p-8">
      <div ref={sectionRef}>
        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-12 glitch">Chrono-Path</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-panel p-6 mb-6 rounded-lg hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-cyan-400">{exp.title}</h3>
              <p className="text-sm text-gray-300">{exp.period}</p>
              <p className="mt-2">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;