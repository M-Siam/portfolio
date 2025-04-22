import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ContactSection = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current.children, {
      opacity: 0,
      y: 60,
      stagger: 0.3,
      duration: 1.2,
      scrollTrigger: { trigger: formRef.current, start: 'top 80%' },
    });

    // Cursor glow effect
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      gsap.to(cursor, { x: e.clientX - 12, y: e.clientY - 12, duration: 0.1 });
    };
    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  const handleSubmit = () => {
    gsap.to(formRef.current, {
      opacity: 0,
      scale: 0.7,
      duration: 1.2,
      onComplete: () => alert('Signal Transmitted!'),
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-transparent text-white p-10">
      <div ref={formRef} className="max-w-xl mx-auto">
        <h2 className="text-6xl font-bold text-cyan-400 text-center mb-12 glitch">Signal Relay</h2>
        <div className="glass-panel p-10 rounded-lg">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 bg-transparent border border-cyan-400 rounded-lg focus:outline-none focus:border-cyan-300 text-white"
            />
          </div>
          <div className="mb-8">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-transparent border border-cyan-400 rounded-lg focus:outline-none focus:border-cyan-300 text-white"
            />
          </div>
          <div className="mb-8">
            <textarea
              placeholder="Message"
              className="w-full p-4 bg-transparent border border-cyan-400 rounded-lg focus:outline-none focus:border-cyan-300 text-white"
              rows="6"
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full px-10 py-4 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition glass-panel"
          >
            Transmit Signal
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
