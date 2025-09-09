// src/types.ts
import React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  description: string;
  annualSavings: string;
  category: 'automation' | 'digitization' | 'ai' | 'integration';
  highlights?: string[];
  demoAvailable: boolean;
}
