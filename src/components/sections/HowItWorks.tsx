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
          From idea to mainnet
          </h2>
        </div>

        {/* Cards Container */}
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <HowItWorksCard
              title="Know Your Vision"
              description="Whether it's a DeFi protocol, an NFT game, or something completely new, share your vision. We'll align on scope, priorities, and what success looks like."
              icon="lightning"     
            />
            <HowItWorksCard
              title="Build the Core Contracts"
              description="From architecture to deployment, I handle every part of the smart contract lifecycle — following best practices in gas optimization, upgradability, and security."
              icon="clock"
            />
            <HowItWorksCard
              title="Test. Ship. Support."
              description="Your contracts are rigorously tested, audited-ready, and shipped to mainnet. I support integrations, upgrades, and documentation so you're launch-ready."
              icon="tasks"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 