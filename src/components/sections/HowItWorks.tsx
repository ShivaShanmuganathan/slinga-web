'use client';

import React from 'react';
import HowItWorksCard from '@/components/HowItWorksCard';

const HowItWorks: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background with particle effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,24,0.8),rgba(0,0,0,0))]" />
      
      <div className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <h2 className="text-6xl font-bold text-white sm:text-7xl md:text-8xl">
            Supafast, supaeasy
          </h2>
        </div>

        {/* Cards Container */}
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <HowItWorksCard
              title="Subscribe or Request"
              description="Subscription: For ongoing design. One-Off Project: Perfect for a single high-impact deliverable"
              icon="lightning"
            />
            <HowItWorksCard
              title="48-Hour Updates"
              description="We move at lightning speed. We provide drafts, revisions, or final assets, usually within 48 hours."
              icon="clock"
            />
            <HowItWorksCard
              title="Approval & Repeat"
              description="We complete each project to your satisfaction. Approve and move on, or stack tasks for constant growth."
              icon="tasks"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 