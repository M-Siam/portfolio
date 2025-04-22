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
          setTimeout(() => setShowButton(true), 1500); // Suspense delay
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showButton) {
      gsap.fromTo(
        '.enter-button',
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }, [showButton]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-cyan-400 font-mono">
      <div className="text-center">
        <h1 className="text-5xl mb-6 glitch">System Initialization</h1>
        <div className="w-80 h-3 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan-400 transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-6 text-xl animate-pulse">Accessing [Your Name]'s Portfolio...</p>
        {showButton && (
          <button
            className="enter-button mt-8 px-8 py-3 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition glass-panel"
            onClick={onComplete}
          >
            Unlock System
          </button>
        )}
      </div>
    </div>
  );
};

export default BootSequence;