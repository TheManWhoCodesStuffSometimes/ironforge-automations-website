// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#team', label: 'Team' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-3">
              <img src="/logo.png" alt="Ironforge Automations Logo" className="h-10 w-10" loading="lazy" decoding="async" />
              <span className="text-white font-bold tracking-wider">IRONFORGE AUTOMATIONS</span>
            </a>
            <p className="text-slate-400 mt-3 max-w-md">
              Custom automation, RPA, and AI integrations that streamline operations and grow your business.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-slate-300 hover:text-orange-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© {year} Ironforge Automations. All rights reserved.</p>
          <div className="text-slate-500 text-sm">
            <a href="#contact" className="hover:text-orange-400">Contact</a>
            <span className="mx-2">•</span>
            <a href="#services" className="hover:text-orange-400">Get a quote</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;