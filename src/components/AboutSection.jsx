import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current.children, {
      opacity: 0,
      y: 120,
      stagger: 0.3,
      duration: 1.2,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
  }, []);

  return (
    <section id="about" className="min-h-screen bg-transparent text-white p-10">
      <div ref={sectionRef} className="max-w-5xl mx-auto">
        <h2 className="text-6xl font-bold text-cyan-400 text-center mb-12 glitch">Core Directive</h2>
        <div className="glass-panel p-10 rounded-lg">
          <div className="w-40 h-40 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto mb-8 hologram"></div>
          <p className="text-xl text-center">
            I am a digital architect, weaving code into immersive realities. My directive is to craft interfaces that pulse
            with life, pushing the frontier of human-machine interaction.
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'Node.js', 'Three.js', 'Tailwind'].map((skill) => (
              <div
                key={skill}
                className="p-6 bg-cyan-400 text-black rounded-lg text-center hover:scale-110 transition glass-panel"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
