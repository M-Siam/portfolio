import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current.children, {
      opacity: 0,
      y: 100,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
  }, []);

  return (
    <section id="about" className="min-h-screen bg-transparent text-white p-8">
      <div ref={sectionRef} className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-12 glitch">Mission Core</h2>
        <div className="glass-panel p-8 rounded-lg">
          <img
            src="/assets/images/avatar.jpg"
            alt="Developer Avatar"
            className="w-32 h-32 rounded-full mx-auto mb-6 hologram"
          />
          <p className="text-lg text-center">
            I am a visionary developer, forging immersive digital experiences that transcend reality. My mission is to
            redefine the boundaries of code, crafting interfaces that feel alive.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React', 'Node.js', 'Three.js', 'Tailwind'].map((skill) => (
              <div
                key={skill}
                className="p-4 bg-cyan-400 text-black rounded-lg text-center hover:scale-110 transition glass-panel"
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