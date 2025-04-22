'use client';

import React, { useEffect, useRef, useState } from 'react';
import { services } from '@/data/services';
import { useInView } from 'react-intersection-observer';

interface ServiceItemProps {
  service: typeof services[0];
  index: number;
  isActive: boolean;
  setActiveIndex: (index: number) => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, index, isActive, setActiveIndex }) => {
  const { ref } = useInView({
    threshold: 0.7,
    rootMargin: '-20% 0px',
    onChange: (inView: boolean) => {
      if (inView) {
        setActiveIndex(index);
      }
    },
  });

  return (
    <div
      ref={ref}
      data-index={index}
      className="relative flex items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <h3
        className={`text-3xl transition-all duration-300 sm:text-4xl md:text-5xl lg:text-6xl ${
          isActive
            ? 'text-white scale-100 opacity-100 translate-x-0'
            : 'text-gray-500 scale-95 opacity-40 -translate-x-4'
        }`}
      >
        {service.title}
      </h3>
      <div
        className={`ml-4 flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full transition-all duration-300 ${
          isActive ? 'bg-yellow-400 scale-100' : 'bg-yellow-400/50 scale-90'
        }`}
      >
        <svg
          className={`h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 transform transition-transform duration-300 ${
            isActive ? 'scale-100' : 'scale-90'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
    </div>
  );
};

const StickyScrollLayout: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8">
          {/* Left Column - Sticky Content */}
          <div className="sticky top-0 h-[100vh] flex items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl lg:text-5xl">
              Designed for clarity.  
              </h2>
              <p className="mt-2 sm:mt-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              Engineered for audits.
              </p>
            </div>
          </div>

          {/* Right Column - Scrolling List */}
          <div ref={containerRef} className="py-12 sm:py-16 lg:py-24">
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {services.map((service, index) => (
                <ServiceItem
                  key={service.id}
                  service={service}
                  index={index}
                  isActive={activeIndex === index}
                  setActiveIndex={setActiveIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyScrollLayout; 