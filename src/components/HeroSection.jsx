import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(nameRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.8 })
      .fromTo(taglineRef.current, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 1.2 }, '-=0.6')
      .fromTo(buttonRef.current, { opacity: 0, x: -120 }, { opacity: 1, x: 0, duration: 1 }, '-=0.6');
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-transparent text-white relative">
      <div className="text-center glass-panel p-12 rounded-lg">
        <h1 ref={nameRef} className="text-8xl font-bold text-cyan-400 glitch">[Your Name]</h1>
        <p ref={taglineRef} className="text-3xl mt-6 hologram">Sculptor of Digital Dimensions</p>
        <a
          ref={buttonRef}
          href="#about"
          className="mt-10 inline-block px-10 py-4 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition glass-panel"
        >
          Unlock the Void
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
