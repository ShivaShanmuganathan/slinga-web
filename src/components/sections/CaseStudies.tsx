'use client';

import React from 'react';
import { caseStudies } from '@/data/case-studies';
import CaseStudyCard from '@/components/CaseStudyCard';

const CaseStudies: React.FC = () => {
  return (
    <section className="relative z-0 bg-black">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      {/* Content wrapper */}
      <div className="relative z-10">
        <div className="px-4 py-24 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="mb-24 text-center">
            <p className="text-lg font-medium text-white/60">Case Study</p>
            <h2 className="mt-4 text-6xl font-bold text-white sm:text-7xl md:text-8xl">
              Our Success stories
            </h2>
          </div>

          {/* Cards Section */}
          <div className="mx-auto max-w-7xl">
            <div className="space-y-16">
              {caseStudies.map((study) => (
                <div key={study.id} className="relative transform-gpu transition-all duration-500 hover:translate-y-[-4px]">
                  <CaseStudyCard study={study} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 