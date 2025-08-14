// src/components/Hero.tsx
import React from 'react';
import ParticleCanvas from './ParticleCanvas';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
         <ParticleCanvas />
      </div>
      <div className="absolute inset-0 bg-slate-900/50"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4" style={{ textShadow: '0 0 20px rgba(251, 146, 60, 0.7)' }}>
          <span className="text-orange-400">Forging</span> the Future of Your Business
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
          We build custom automation solutions that streamline your operations, boost efficiency, and drive growth.
        </p>
        <a
          href="#contact"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30"
        >
          Automate Your Success
        </a>
      </div>
    </section>
  );
};

export default Hero;