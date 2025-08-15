// src/components/SectionHeader.tsx
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
    </div>
  );
};

export default SectionHeader;
