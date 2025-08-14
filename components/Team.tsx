// src/components/Team.tsx
import React, { useState } from 'react';
import type { TeamMember } from '../types';
import SectionHeader from './SectionHeader';

const teamMembers: TeamMember[] = [
  {
    name: 'Thayne Thatcher',
    role: 'Founder & AI Specialist',
    image: '/team-member-2.png',
    bio: `Thayne Thatcher is a Wyoming native who combines entrepreneurial expertise with cutting-edge AI innovation. Born and raised in Laramie, he helps traditional businesses unlock efficiency through practical automation solutions.

Thayne holds a Bachelor's degree in Marketing and Entrepreneurship and a Venture MBA from the University of Wyoming, where he was part of only the second cohort ever admitted to this entrepreneurial-focused program. This unique educational foundation, paired with his technical expertise in Python programming and AI development, gives him an uncommon ability to bridge complex technology with real business needs.

His technical journey began before AI became mainstream, building custom automation systems that solve actual problems for manufacturers and service businesses. Whether digitizing workflows, creating intelligent chatbots, or building sales automation systems, Thayne focuses on delivering measurable ROI rather than flashy demonstrations.

When not developing automation solutions, you'll find Thayne exploring Wyoming's outdoors through golf, fly fishing, and E-biking adventures.`
  },
  {
    name: 'Jesse McCormick',
    role: 'COO & Automation Specialist',
    image: '/team-member-1.png',
    bio: `A Casper, Wyoming native, Jesse McCormick brings a powerful combination of academic diligence and a passion for strategic thinking. After graduating from Kelly Walsh High School, he earned his Associate's in Business Administration from Casper College before advancing to the University of Wyoming. There, he achieved a Bachelor's degree in Economics with a minor in Entrepreneurship—completing his entire college education in three years. This accelerated path highlights his drive and sharp focus.

Jesse’s economic and entrepreneurial background gives him a unique lens for analyzing business challenges.

Outside of his professional interests, Jesse leads an active life. He enjoys the thrill of dirt biking, the strategy of tennis, and the discipline of Brazilian Jiu-Jitsu. He treasures his time with his girlfriend and their pug, Bean.`
  }
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="group h-[400px] w-full max-w-sm [perspective:1000px] cursor-pointer"
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
          title="Meet Our Team"
          subtitle="The minds behind the magic. We're a team of passionate builders and problem solvers."
        />
        <div className="flex flex-col md:flex-row justify-center items-start gap-12">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;