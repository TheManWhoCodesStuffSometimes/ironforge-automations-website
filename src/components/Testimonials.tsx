// src/components/Testimonials.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import type { Testimonial } from '../types';
import SectionHeader from './SectionHeader';

const testimonials: Testimonial[] = [
  {
    quote: "We had the pleasure of working with Thayne during his internship with Manufacturing Works, where he took on the ambitious project of designing and developing an AI chatbot for our website. From day one, Thayne demonstrated a strong grasp of AI and machine learning concepts, along with an impressive ability to work independently and drive solutions forward. Thayne not only delivered a fully functional and well-integrated chatbot that aligned with our organizational goals, but he also brought creativity, technical precision, and a deep understanding of user experience to the project. His work significantly improved how we use our website to engage with manufacturers and clients online, by providing timely information and streamlining inquiries through an intuitive, responsive interface. Throughout the project, Thayne was professional, proactive, and collaborative. He regularly communicated progress, incorporated feedback thoughtfully, and ensured the final product exceeded our expectations. His contributions have made a lasting impact on our digital presence, and we are incredibly grateful for his work. I wholeheartedly recommend Thayne and his company to any organization looking for a capable, innovative, and dedicated developer.",
    author: "Alyssa Elaine Ernste",
    company: "Manufacturing Works",
  },
  {
    quote: "I’ve really enjoyed working with the IronForge team. They made the automation process simple and approachable, even for someone who’s not a tech expert. The tools they built made a noticeable impact on how we manage operations.",
    author: "Lloyd Baker",
    company: "Gold Spur",
  },
  {
    quote: "⭐️⭐️⭐️⭐️⭐️\nIronForge has been a game-changer for us! They developed a custom lighting system that not only saves time but also ensures our light shows aren’t just repeating themselves night after night. It’s added a level of professionalism and variety that really elevates the experience at our bar.\n\nThey also streamlined our end-of-night reporting process by creating a spreadsheet system that automatically compiles our data, no more manually inputting numbers every day. Our accountant can now easily access and review the reports, saving us both time and headaches. IronForge has been responsive, innovative, and truly understands how to make tech work for a business like ours. Highly recommend!",
    author: "Trinity Thatcher",
    company: "The Cowboy",
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    const sliderInterval = setInterval(nextSlide, 7000); // Auto-slide every 7 seconds
    return () => clearInterval(sliderInterval);
  }, [nextSlide]);

  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="We are proud to have the trust of our clients. Here's what they have to say about us."
        />
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.author} className="w-full flex-shrink-0 p-8 md:p-12">
                  <div className="flex flex-col items-center text-center">
                    <p className="text-slate-400 leading-relaxed mb-6 text-base italic">"{testimonial.quote}"</p>
                    <div>
                      <h3 className="text-xl font-bold text-white">{testimonial.author}</h3>
                      <p className="text-orange-400 font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 p-2 bg-slate-700/50 hover:bg-slate-700 rounded-full text-white transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 p-2 bg-slate-700/50 hover:bg-slate-700 rounded-full text-white transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Navigation Dots */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-orange-500' : 'bg-slate-600 hover:bg-slate-500'}`}
                aria-label={`Go to testimonial ${slideIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
