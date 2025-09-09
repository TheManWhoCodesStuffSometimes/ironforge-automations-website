// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import type { NavLink } from '../types';

const navLinks: NavLink[] = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Our Process' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '#team', label: 'Our Team' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact Us' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Ironforge Automations Logo" className="h-10 w-10" decoding="async" />
            <span className="text-xl font-bold text-white tracking-wider hidden sm:inline">IRONFORGE AUTOMATIONS</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8" aria-label="Primary" role="navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-300 hover:text-orange-400 transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} aria-controls="mobile-menu" className="text-slate-300 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4" id="mobile-menu">
            <nav className="flex flex-col space-y-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-orange-400 transition-colors duration-300 text-center py-2 rounded-md bg-slate-800">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
