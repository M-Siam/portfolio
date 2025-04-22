import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(nameRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5 })
      .fromTo(taglineRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 }, '-=0.5')
      .fromTo(buttonRef.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 }, '-=0.5');
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-transparent text-white relative">
      <div className="text-center glass-panel p-10 rounded-lg">
        <h1 ref={nameRef} className="text-7xl font-bold text-cyan-400 glitch">[Your Name]</h1>
        <p ref={taglineRef} className="text-3xl mt-4 hologram">Architect of Digital Realms</p>
        <a
          ref={buttonRef}
          href="#about"
          className="mt-8 inline-block px-8 py-3 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition"
        >
          Enter the Matrix
        </a>
      </div>
    </section>
  );
};

export default HeroSection;