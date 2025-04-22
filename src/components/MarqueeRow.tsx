'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';

interface MarqueeRowProps {
  projects: Project[];
  direction: 'left' | 'right';
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ projects, direction }) => {
  const [isSlowed, setIsSlowed] = useState(false);
  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <div className="relative flex w-full overflow-hidden">
      <div
        className={`flex gap-8 transition-[animation-duration] duration-50000 ease-linear will-change-transform ${
          direction === 'right' 
            ? 'animate-marquee-reverse'
            : 'animate-marquee'
        }`}
        style={{ '--gap': '2rem' } as React.CSSProperties}
      >
        {duplicatedProjects.map((project, index) => (
          <Link
            key={`${project.id}-${index}`}
            href={project.link}
            className="relative h-[360px] w-[520px] flex-shrink-0 overflow-hidden rounded-2xl transform transition-all duration-700 ease-out hover:scale-[1.02]"
            onMouseEnter={() => setIsSlowed(true)}
            onMouseLeave={() => setIsSlowed(false)}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
              priority={index < 4}
            />
          </Link>
        ))}
      </div>
      <div
        className={`flex gap-8 transition-[animation-duration] duration-1000 ease-linear will-change-transform ${
          direction === 'right' 
            ? isSlowed ? 'animate-marquee-reverse-slow' : 'animate-marquee-reverse'
            : isSlowed ? 'animate-marquee-slow' : 'animate-marquee'
        }`}
        style={{ '--gap': '2rem' } as React.CSSProperties}
        aria-hidden="true"
      >
        {duplicatedProjects.map((project, index) => (
          <Link
            key={`${project.id}-${index}-clone`}
            href={project.link}
            className="relative h-[360px] w-[520px] flex-shrink-0 overflow-hidden rounded-2xl transform transition-all duration-700 ease-out hover:scale-[1.02]"
            onMouseEnter={() => setIsSlowed(true)}
            onMouseLeave={() => setIsSlowed(false)}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MarqueeRow; 