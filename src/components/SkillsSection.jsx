import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const SkillsSection = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current.children, {
      opacity: 0,
      scale: 0.7,
      stagger: 0.3,
      duration: 1.2,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, 500);
    camera.position.z = 12;

    const skills = [
      { name: 'React', pos: [0, 0, 0] },
      { name: 'Node.js', pos: [5, 2, 0] },
      { name: 'Three.js', pos: [-5, -2, 0] },
      { name: 'Tailwind', pos: [3, -4, 0] },
    ];

    const spheres = skills.map((skill) => {
      const geometry = new THREE.SphereGeometry(1.2, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(...skill.pos);
      scene.add(sphere);
      return sphere;
    });

    const animate = () => {
      requestAnimationFrame(animate);
      spheres.forEach((sphere, i) => {
        sphere.rotation.y += 0.03 * (i + 1);
        sphere.position.y += Math.sin(Date.now() * 0.002 + i) * 0.15;
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => renderer.dispose();
  }, []);

  return (
    <section id="skills" className="min-h-screen bg-transparent text-white p-10">
      <div ref={sectionRef}>
        <h2 className="text-6xl font-bold text-cyan-400 text-center mb-12 glitch">Tech Nexus</h2>
        <canvas ref={canvasRef} className="w-full h-[500px] mx-auto"></canvas>
      </div>
    </section>
  );
};

export default SkillsSection;
