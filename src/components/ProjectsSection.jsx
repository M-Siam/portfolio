import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ProjectsSection = () => {
  const sectionRef = useRefa1: useEffect(() => {
    gsap.from(sectionRef.current.children, {
      opacity: 0,
      x: -100,
      stagger: 0.3,
      duration: 1,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
  }, []);

  const projects = [
    {
      title: 'Project Alpha',
      desc: 'A futuristic web app with real-time 3D visualizations.',
      stack: ['React', 'Three.js'],
      link: '#',
      image: '/assets/images/project1.jpg',
    },
    {
      title: 'Project Beta',
      desc: 'A cyberpunk-inspired dashboard for data analytics.',
      stack: ['Node.js', 'Tailwind'],
      link: '#',
      image: '/assets/images/project2.jpg',
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-transparent text-white p-8">
      <div ref={sectionRef}>
        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-12 glitch">Code Vault</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-lg hover:scale-105 transition"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-cyan-400">{project.title}</h3>
              <p className="mt-2">{project.desc}</p>
              <p className="mt-2 text-sm">Stack: {project.stack.join(', ')}</p>
              <a
                href={project.link}
                className="mt-4 inline-block px-6 py-2 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition"
              >
                Explore
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;