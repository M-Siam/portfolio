import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ContactSection = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: { trigger: formRef.current, start: 'top 80%' },
    });
  }, []);

  const handleSubmit = () => {
    gsap.to(formRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      onComplete: () => alert('Message Transmitted!'),
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-transparent text-white p-8">
      <div ref={formRef} className="max-w-lg mx-auto">
        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-12 glitch">Transmission Hub</h2>
        <div className="glass-panel p-8 rounded-lg">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 bg-transparent border border-cyan-400 rounded-lg focus:outline-none focus:border-cyan-300 text-white"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-transparent border border-cyan-400 rounded-lg focus:outline-none focus:border-cyan-300 text-white"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Message"
              className="w-full p-4 bg-transparent border border-cyan-400 rounded-lg focus:outline-none focus:border-cyan-300 text-white"
              rows="5"
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full px-8 py-3 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition"
          >
            Transmit Signal
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;