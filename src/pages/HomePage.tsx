// src/pages/HomePage.tsx
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import CaseStudies from '../components/CaseStudies';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

function HomePage() {
  return (
    <>
      <Header />
      <main id="main" role="main">
        <Hero />
        <Services />
        <Process />
        <CaseStudies />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default HomePage;
