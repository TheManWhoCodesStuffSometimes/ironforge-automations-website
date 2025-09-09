// src/pages/CaseStudiesPage.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Clock, Users, Zap, Database, BarChart } from 'react-feather';
import type { CaseStudy } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const allCaseStudies: CaseStudy[] = [
  // Gold Spur Outfitters Projects
  {
    id: 'gold-spur-digitization',
    title: 'Weapon Service Form Digitization',
    company: 'Gold Spur Outfitters',
    description: 'Transformed handwritten weapon service forms into a digital system with AI-powered handwriting recognition and automated Excel data entry. This solution eliminates hours of manual data entry while creating searchable digital records for better customer service.',
    annualSavings: '$1,500+',
    category: 'digitization',
    highlights: [
      '5 different form types digitized',
      'AI-powered handwriting recognition',
      'Automated Excel data population',
      '90% reduction in data entry time',
      'Searchable digital archive'
    ],
    demoAvailable: true
  },

  // Laramie Soup Kitchen
  {
    id: 'soup-kitchen-inventory',
    title: 'Food Shipment Inventory System',
    company: 'Laramie Soup Kitchen',
    description: 'Developed a rapid digital inventory recording system optimized for high-volume, time-sensitive food shipment processing. The system dramatically reduces the time needed to log incoming donations while improving accuracy and reporting capabilities.',
    annualSavings: '$2,800+',
    category: 'digitization',
    highlights: [
      '75% reduction in inventory logging time',
      'Real-time inventory levels',
      'Automated shortage alerts',
      'Donation tracking and reporting',
      'Expiration date management'
    ],
    demoAvailable: true
  },

  // The Cowboy Saloon Projects
  {
    id: 'cowboy-sales-tracker',
    title: 'Automated Sales Tracking System',
    company: 'The Cowboy Saloon',
    description: 'Built an automated financial performance monitoring and reporting system that eliminates manual spreadsheet work. The system automatically compiles daily sales data and generates accountant-ready reports.',
    annualSavings: '$750+',
    category: 'automation',
    highlights: [
      'Automated daily sales reports',
      'Real-time performance metrics',
      'Accountant-ready exports',
      'Historical trend analysis',
      'Multi-location support'
    ],
    demoAvailable: true
  },
  {
    id: 'cowboy-music-queue',
    title: 'Song Queue Management System',
    company: 'The Cowboy Saloon',
    description: 'Created an intelligent music request system that allows customers to request songs while preventing repetitive playlists. The system manages queue fairness and provides analytics on popular music choices.',
    annualSavings: '$2,000+',
    category: 'automation',
    highlights: [
      'Customer self-service requests',
      'Duplicate prevention logic',
      'Fair queue management',
      'Music preference analytics',
      'DJ override capabilities'
    ],
    demoAvailable: true
  },
  {
    id: 'cowboy-band-management',
    title: 'Band Management & Recruitment System',
    company: 'The Cowboy Saloon',
    description: 'Automated band recruitment and evaluation system that searches through emails, finds bands, researches them on the internet, finds relevant information, and ranks them. Eliminates manual review of numerous band inquiry emails and provides easy access to highest tier talent.',
    annualSavings: '$2,800+',
    category: 'automation',
    highlights: [
      'Automated email parsing and band identification',
      'Web research on band social media and reviews',
      'Intelligent ranking algorithm based on location, genre, experience',
      'Dashboard presentation for easy decision-making',
      '75% reduction in band evaluation time'
    ],
    demoAvailable: true
  },

  // Internal IronForge Automations
  {
    id: 'ironforge-email-agent',
    title: 'Automated Email Sales Agent',
    company: 'IronForge Automations',
    description: 'Built an AI-powered email automation system that qualifies leads, sends personalized follow-ups, and nurtures prospects through the sales funnel without manual intervention.',
    annualSavings: '$800+',
    category: 'ai',
    highlights: [
      'AI-powered email personalization',
      'Lead scoring and qualification',
      'Automated follow-up sequences',
      'CRM integration',
      '40% increase in response rates'
    ],
    demoAvailable: true
  },
  {
    id: 'ironforge-financial-calendar',
    title: 'Intelligent Financial Calendar',
    company: 'IronForge Automations',
    description: 'Created an automated financial tracking and forecasting system that monitors cash flow, predicts future financial positions, and alerts to potential issues before they become critical.',
    annualSavings: '$3,120+',
    category: 'automation',
    highlights: [
      'Automated invoice tracking',
      'Cash flow forecasting',
      'Payment reminder automation',
      'Financial health alerts',
      'Integration with accounting software'
    ],
    demoAvailable: true
  },
  {
    id: 'ironforge-project-tracker',
    title: 'Client Project Management System',
    company: 'IronForge Automations',
    description: 'Developed an internal system that tracks project progress, automates client updates, manages deadlines, and provides real-time visibility into all active engagements.',
    annualSavings: '$2,500+',
    category: 'automation',
    highlights: [
      'Real-time project dashboards',
      'Automated client updates',
      'Deadline management',
      'Resource allocation optimization',
      'Profitability tracking'
    ],
    demoAvailable: true
  },
  {
    id: 'ironforge-ai-chatbot',
    title: 'AI Customer Support Chatbot',
    company: 'IronForge Automations',
    description: 'Intelligent chatbot deployed on our website that handles repetitive customer inquiries, provides instant responses about services, and qualifies leads 24/7. Reduces time spent on answering common questions and improves customer engagement.',
    annualSavings: '$650+',
    category: 'ai',
    highlights: [
      '24/7 automated customer support',
      'Instant responses to common questions',
      'Lead qualification and routing',
      'Integration with company knowledge base',
      'Reduces repetitive support tasks by 80%'
    ],
    demoAvailable: true
  }
];

const categories = [
  { id: 'all', label: 'All Solutions', icon: Zap },
  { id: 'automation', label: 'Process Automation', icon: Zap },
  { id: 'digitization', label: 'Digital Transformation', icon: Database },
  { id: 'ai', label: 'AI Integration', icon: BarChart },
];

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCompany, setSelectedCompany] = useState('all');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const companies = ['all', ...Array.from(new Set(allCaseStudies.map(cs => cs.company)))];
  
  const filteredCaseStudies = allCaseStudies.filter(study => {
    const categoryMatch = selectedCategory === 'all' || study.category === selectedCategory;
    const companyMatch = selectedCompany === 'all' || study.company === selectedCompany;
    return categoryMatch && companyMatch;
  });

  const totalSavings = allCaseStudies.reduce((sum, study) => {
    const amount = parseInt(study.annualSavings.replace(/[^0-9]/g, ''));
    return sum + amount;
  }, 0);

  return (
    <div className="bg-slate-900 text-slate-300 font-sans antialiased min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Our <span className="text-orange-400">Case Studies</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mb-8">
            Real-world automation solutions delivering measurable results for Wyoming businesses and beyond.
          </p>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="flex items-center gap-3">
                <div className="bg-green-900/30 p-3 rounded-lg">
                  <TrendingUp className="text-green-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Total Annual Savings</p>
                  <p className="text-2xl font-bold text-green-400">${totalSavings.toLocaleString()}+</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="flex items-center gap-3">
                <div className="bg-orange-900/30 p-3 rounded-lg">
                  <Users className="text-orange-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Clients Served</p>
                  <p className="text-2xl font-bold text-orange-400">{companies.length - 1}</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="flex items-center gap-3">
                <div className="bg-blue-900/30 p-3 rounded-lg">
                  <Clock className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Solutions Delivered</p>
                  <p className="text-2xl font-bold text-blue-400">{allCaseStudies.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters - No longer sticky */}
      <section className="py-8 bg-slate-800 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="text-sm text-slate-400 mb-2 block">Filter by Solution Type</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                      selectedCategory === cat.id
                        ? 'bg-orange-500 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    <cat.icon size={16} />
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Company Filter */}
            <div className="flex-1 lg:max-w-xs">
              <label className="text-sm text-slate-400 mb-2 block">Filter by Company</label>
              <select
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {companies.map((company) => (
                  <option key={company} value={company}>
                    {company === 'all' ? 'All Companies' : company}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-orange-400 text-sm font-semibold">{study.company}</p>
                    </div>
                    <div className="bg-green-900/30 text-green-400 p-2 rounded-lg border border-green-800 ml-3">
                      <TrendingUp size={20} />
                    </div>
                  </div>
                  
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    {study.description}
                  </p>
                  
                  {study.highlights && (
                    <ul className="space-y-2 mb-4">
                      {study.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-500">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                
                <div className="border-t border-slate-700 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">Annual Savings</p>
                      <p className="text-2xl font-bold text-green-400">{study.annualSavings}</p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full border ${
                      study.category === 'ai' 
                        ? 'bg-purple-900/30 text-purple-400 border-purple-800'
                        : study.category === 'digitization'
                        ? 'bg-blue-900/30 text-blue-400 border-blue-800'
                        : 'bg-orange-900/30 text-orange-400 border-orange-800'
                    }`}>
                      {study.category === 'ai' ? 'AI Integration' : 
                       study.category === 'digitization' ? 'Digital Transformation' : 
                       'Process Automation'}
                    </span>
                  </div>
                  
                  {study.demoAvailable && (
                    <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-all duration-200 text-sm font-semibold cursor-not-allowed">
                      Test Demo Unavailable
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No case studies found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Join these success stories. Let's discuss how automation can drive efficiency and savings for your organization.
          </p>
          
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                // If we're on the case studies page and contact doesn't exist, go to home page contact
                window.location.href = '/#contact';
              }
            }}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30"
          >
            Start Your Automation Journey
            <Zap size={20} />
          </a>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default CaseStudiesPage;
