import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ExperienceSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current.children, {
      opacity: 0,
      x: 120,
      stagger: 0.4,
      duration: 1.2,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
  }, []);

  const experiences = [
    {
      title: 'Senior Developer at TechCorp',
      period: '2022 - Present',
      desc: 'Architected a real-time analytics platform with cutting-edge UI.',
    },
    {
      title: 'Frontend Engineer at Innovate',
      period: '2020 - 2022',
      desc: 'Developed interactive web apps using React and WebGL.',
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-transparent text-white p-10">
      <div ref={sectionRef}>
        <h2 className="text-6xl font-bold text-cyan-400 text-center mb-12 glitch">Temporal Log</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-panel p-8 mb-8 rounded-lg hover:scale-105 transition">
              <h3 className="text-3xl font-bold text-cyan-400">{exp.title}</h3>
              <p className="text-sm text-gray-300">{exp.period}</p>
              <p className="mt-3">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
