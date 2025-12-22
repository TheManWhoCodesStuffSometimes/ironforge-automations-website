// src/components/Services.tsx
import React from 'react';
import { FileText, MessageSquare, TrendingUp } from 'react-feather';
import type { Service } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const services: Service[] = [
  {
    icon: FileText,
    title: 'Document Digitization & Data Extraction',
    description: 'Turn paper-based processes into digital workflows. AI-powered handwriting recognition converts forms, notes, and records into searchable data that populates your spreadsheets and databases automatically. No manual data entry required.',
  },
  {
    icon: MessageSquare,
    title: 'Custom AI Chatbots & Knowledge Assistants',
    description: 'Chatbots trained on your actual business documentation. Your customers get instant answers about your products and services. Your employees get a searchable knowledge base that actually understands your operations.',
  },
  {
    icon: TrendingUp,
    title: 'Business Process & Sales Automation',
    description: 'Automated reporting, CRM integrations, and sales pipeline workflows that run without babysitting. Daily reports generate themselves, leads get nurtured automatically, and you get dashboards that show what matters.',
  },
];

const Services: React.FC = () => {
  const [containerRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="What We Do"
          subtitle="Practical automation that solves real problems. No buzzwords, just results."
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
