// src/components/Team.tsx
import React, { useState } from 'react';
import type { TeamMember } from '../types';
import SectionHeader from './SectionHeader';

const founder: TeamMember = {
  name: 'Thayne Thatcher',
  role: 'Founder & AI Specialist',
  image: '/team-member-2.png',
  bio: `Wyoming native combining entrepreneurial expertise with hands-on AI development. Born and raised in Laramie, now helping traditional businesses unlock efficiency through practical automation.

Bachelor's in Marketing and Entrepreneurship plus a Venture MBA from the University of Wyoming, where I was part of only the second cohort admitted to this entrepreneurial-focused program. This foundation, paired with technical expertise in Python and AI development, lets me bridge complex technology with real business needs.

My technical journey began before AI became mainstream, building custom automation systems that solve actual problems for manufacturers and service businesses. Digitizing workflows, creating intelligent chatbots, building sales automation. The focus is always on measurable ROI, not flashy demos.

When not building automation solutions, you'll find me exploring Wyoming's outdoors through golf, fly fishing, and E-biking.`
};

const FounderCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="group h-[450px] w-full max-w-md [perspective:1000px] cursor-pointer"
      onClick={handleFlip}
    >
      <div
        className={`relative h-full w-full rounded-lg transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        } shadow-lg shadow-orange-500/20`}
      >
        {/* Front of the card */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="bg-slate-800 rounded-lg p-6 w-full h-full text-center flex flex-col items-center justify-center">
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              decoding="async"
              className="w-60 h-60 rounded-full mx-auto mb-4 border-[6px] border-orange-500 object-cover"
            />
            <h3 className="text-2xl font-bold text-white">{member.name}</h3>
            <p className="text-orange-400 font-semibold mb-3">{member.role}</p>
            <p className="text-slate-400 text-sm italic mt-1">Click for more info</p>
          </div>
        </div>
        {/* Back of the card */}
        <div className="absolute inset-0 h-full w-full rounded-lg bg-slate-800 p-6 text-slate-400 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col justify-center items-center h-full text-center">
            <h3 className="text-2xl font-bold text-white mb-3">{member.name}</h3>
            <p className="text-sm overflow-y-auto h-full">{member.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Meet the Founder"
          subtitle="Direct access, personal accountability, and real investment in your success."
        />
        <div className="flex justify-center">
          <FounderCard member={founder} />
        </div>
      </div>
    </section>
  );
};

export default Team;
