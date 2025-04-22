import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const DashboardSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current.children, {
      opacity: 0,
      scale: 0.7,
      stagger: 0.3,
      duration: 1.2,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
  }, []);

  const stats = [
    { label: 'Hours Coded', value: '10,000+' },
    { label: 'Commits', value: '5,000+' },
    { label: 'Projects', value: '50+' },
  ];

  return (
    <section id="dashboard" className="min-h-screen bg-transparent text-white p-10">
      <div ref={sectionRef}>
        <h2 className="text-6xl font-bold text-cyan-400 text-center mb-12 glitch">System Hub</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="glass-panel p-8 rounded-lg text-center hover:scale-105 transition">
              <p className="text-5xl font-bold text-cyan-400">{stat.value}</p>
              <p className="mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
