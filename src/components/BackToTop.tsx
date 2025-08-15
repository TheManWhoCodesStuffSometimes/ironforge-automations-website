// src/components/BackToTop.tsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'react-feather';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Go to top"
          className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
