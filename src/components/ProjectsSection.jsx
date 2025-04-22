import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current.children, {
      opacity: 0,
      x: -120,
      stagger: 0.4,
      duration: 1.2,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
  }, []);

  const projects = [
    {
      title: 'Project Alpha',
      desc: 'A real-time 3D visualization platform for immersive data exploration.',
      stack: ['React', 'Three.js'],
      link: '#',
    },
    {
      title: 'Project Beta',
      desc: 'A cyberpunk-inspired dashboard for advanced analytics.',
      stack: ['Node.js', 'Tailwind'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-transparent text-white p-10">
      <div ref={sectionRef}>
        <h2 className="text-6xl font-bold text-cyan-400 text-center mb-12 glitch">Code Archives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-panel p-8 rounded-lg hover:scale-105 transition"
            >
              <div className="w-full h-48 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg mb-6"></div>
              <h3 className="text-3xl font-bold text-cyan-400">{project.title}</h3>
              <p className="mt-3">{project.desc}</p>
              <p className="mt-3 text-sm">Stack: {project.stack.join(', ')}</p>
              <a
                href={project.link}
                className="mt-6 inline-block px-8 py-3 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition"
              >
                Access Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
