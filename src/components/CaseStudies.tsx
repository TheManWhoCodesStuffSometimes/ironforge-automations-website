// src/components/CaseStudies.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'react-feather';
import type { CaseStudy } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

// Sample case studies data - you can expand this later
const featuredCaseStudies: CaseStudy[] = [
  {
    id: 'gold-spur-digitization',
    title: 'Weapon Service Form Digitization',
    company: 'Gold Spur Outfitters',
    description: 'Transformed handwritten weapon service forms into a digital system with AI-powered handwriting recognition and automated Excel data entry.',
    annualSavings: '$15,000+',
    category: 'digitization',
    highlights: ['5 different form types digitized', 'Automated data extraction', 'Searchable digital records'],
    demoAvailable: true
  },
  {
    id: 'soup-kitchen-inventory',
    title: 'Food Shipment Inventory System',
    company: 'Laramie Soup Kitchen',
    description: 'Replaced manual paper-based inventory tracking with a rapid digital recording system optimized for high-volume, time-sensitive operations.',
    annualSavings: '$8,000+',
    category: 'digitization',
    highlights: ['Real-time inventory tracking', 'Reduced data entry time by 75%', 'Improved accuracy'],
    demoAvailable: true
  },
  {
    id: 'cowboy-sales-tracker',
    title: 'Automated Sales Tracking System',
    company: 'The Cowboy Saloon',
    description: 'Built an automated financial performance monitoring and reporting system that eliminated manual spreadsheet work and provided real-time insights.',
    annualSavings: '$12,000+',
    category: 'automation',
    highlights: ['Automated daily reports', 'Real-time analytics', 'Accountant-ready exports'],
    demoAvailable: true
  }
];

const CaseStudies: React.FC = () => {
  const [containerRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="case-studies-preview" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Proven Results"
          subtitle="Real solutions delivering measurable ROI for Wyoming businesses"
        />
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCaseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700 hover:border-orange-500 transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{study.title}</h3>
                    <p className="text-orange-400 text-sm font-semibold">{study.company}</p>
                  </div>
                  <div className="bg-green-900/30 text-green-400 p-2 rounded-lg border border-green-800">
                    <TrendingUp size={20} />
                  </div>
                </div>
                
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {study.description}
                </p>
                
                <div className="border-t border-slate-700 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">Annual Savings</p>
                      <p className="text-2xl font-bold text-green-400">{study.annualSavings}</p>
                    </div>
                    {study.demoAvailable && (
                      <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full border border-orange-500/30">
                        Demo Available
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30"
          >
            View All Case Studies
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
