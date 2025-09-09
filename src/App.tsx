// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans antialiased">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
      </Routes>
      <ChatWidget />
    </div>
  );
}

export default App;
