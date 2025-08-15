// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans antialiased">
      <Header />
      <main id="main" role="main">
        <Hero />
        <Services />
        <Process />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ChatWidget />
    </div>
  );
}

export default App;
