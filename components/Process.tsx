// src/components/Process.tsx
import React from 'react';
import type { ProcessStep } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const steps: ProcessStep[] = [
  { step: 1, title: 'Discovery & Analysis', description: 'We start by understanding your business, identifying bottlenecks, and mapping out processes ripe for automation.' },
  { step: 2, title: 'Solution Design', description: 'Our experts design a custom automation strategy, selecting the right tools and technologies for a seamless fit.' },
  { step: 3, title: 'Development & Integration', description: 'We build and configure your automation solution, rigorously testing it to ensure reliability and performance.' },
  { step: 4, title: 'Deployment & Support', description: 'We deploy the solution into your live environment and provide ongoing support and optimization to maximize your ROI.' },
];

const Process: React.FC = () => {
  const [containerRef, isVisible] = useScrollAnimation();

  return (
    <section id="process" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Our Proven Process"
          subtitle="A clear, collaborative, and effective path to your automation success."
        />
        <div ref={containerRef} className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2">
             <div className={`h-full bg-slate-700 transition-all duration-1000 ${isVisible ? 'w-full' : 'w-0'}`}></div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className={`bg-slate-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center border-t-4 border-transparent hover:border-orange-500 transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-slate-800 text-orange-400 font-bold text-2xl rounded-full mb-6 border-4 border-slate-700 z-10">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;