import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const SkillsSection = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current.children, {
      opacity: 0,
      scale: 0.8,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, 400);
    camera.position.z = 10;

    const skills = [
      { name: 'React', pos: [0, 0, 0], icon: '/assets/icons/react.svg' },
      { name: 'Node.js', pos: [4, 2, 0], icon: '/assets/icons/nodejs.svg' },
      { name: 'Three.js', pos: [-4, -2, 0], icon: '/assets/icons/threejs.svg' },
      { name: 'Tailwind', pos: [2, -3, 0], icon: '/assets/icons/tailwind.svg' },
    ];

    const spheres = skills.map((skill) => {
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(...skill.pos);
      scene.add(sphere);
      return sphere;
    });

    const animate = () => {
      requestAnimationFrame(animate);
      spheres.forEach((sphere, i) => {
        sphere.rotation.y += 0.02 * (i + 1);
        sphere.position.y += Math.sin(Date.now() * 0.001 + i) * 0.1;
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => renderer.dispose();
  }, []);

  return (
    <section id="skills" className="min-h-screen bg-transparent text-white p-8">
      <div ref={sectionRef}>
        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-12 glitch">Tech Matrix</h2>
        <canvas ref={canvasRef} className="w-full h-96 mx-auto"></canvas>
      </div>
    </section>
  );
};

export default SkillsSection;