import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const DashboardSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current.children, {
      opacity: 0,
      scale: 0.8,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
  }, []);

  const stats = [
    { label: 'Hours Coded', value: '10,000+' },
    { label: 'Commits', value: '5,000+' },
    { label: 'Projects', value: '50+' },
  ];

  return (
    <section id="dashboard" className="min-h-screen bg-transparent text-white p-8">
      <div ref={sectionRef}>
        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-12 glitch">Command Center</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="glass-panel p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-cyan-400">{stat.value}</p>
              <p className="mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;