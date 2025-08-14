// src/components/Services.tsx
import React from 'react';
import { Cpu, Code, Zap } from 'react-feather';
import type { Service } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const services: Service[] = [
  {
    icon: Code,
    title: 'Custom Automation Solutions',
    description: 'We design and build bespoke automation scripts and software tailored to your unique business challenges, eliminating repetitive tasks and freeing up your team for more valuable work.',
  },
  {
    icon: Cpu,
    title: 'Robotic Process Automation (RPA)',
    description: 'Our experts implement intelligent RPA bots to handle complex workflows, data entry, and system interactions, ensuring high accuracy and 24/7 productivity.',
  },
  {
    icon: Zap,
    title: 'AI & System Integration',
    description: 'We leverage the power of AI and machine learning to create smarter automations and seamlessly integrate disparate systems, creating a unified and efficient operational flow.',
  },
];

const Services: React.FC = () => {
  const [containerRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="What We Offer"
          subtitle="From simple task automation to complex AI-driven workflows, we provide solutions that deliver results."
        />
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-slate-800 p-8 rounded-lg shadow-lg text-center flex flex-col items-center transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-slate-900 text-orange-400 p-4 rounded-full mb-6 inline-block border-2 border-slate-700">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;