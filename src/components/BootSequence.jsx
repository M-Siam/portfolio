import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const BootSequence = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowButton(true), 2000); // Increased suspense
          return 100;
        }
        return prev + 1.5;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showButton) {
      gsap.fromTo(
        '.enter-button',
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
      );
    }
  }, [showButton]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-cyan-400 font-mono">
      <div className="text-center glass-panel p-8 rounded-lg">
        <h1 className="text-6xl mb-6 glitch">System Core Activation</h1>
        <div className="w-96 h-4 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan-400 transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-6 text-2xl hologram">Initializing [Your Name]'s Portfolio...</p>
        {showButton && (
          <button
            className="enter-button mt-10 px-10 py-4 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition glass-panel"
            onClick={onComplete}
          >
            Access Core
          </button>
        )}
      </div>
    </div>
  );
};

export default BootSequence;
