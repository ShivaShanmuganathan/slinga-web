import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';

interface MarqueeRowProps {
  projects: Project[];
  direction: 'left' | 'right';
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ projects, direction }) => {
  // Duplicate the projects array more times for smoother infinite scroll
  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <div className="group relative flex w-full overflow-hidden">
      <div
        className={`flex animate-marquee gap-8 ${
          direction === 'right' ? 'animate-marquee-reverse' : ''
        } hover:pause will-change-transform`}
        style={{ '--gap': '2rem' } as React.CSSProperties}
      >
        {duplicatedProjects.map((project, index) => (
          <Link
            key={`${project.id}-${index}`}
            href={project.link}
            className="relative h-[360px] w-[520px] flex-shrink-0 overflow-hidden rounded-2xl transform transition-all duration-700 ease-out hover:scale-[1.02]"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
              priority={index < 4} // Prioritize loading first few images
            />
          </Link>
        ))}
      </div>
      {/* Create a second identical div for seamless looping */}
      <div
        className={`flex animate-marquee gap-8 ${
          direction === 'right' ? 'animate-marquee-reverse' : ''
        } hover:pause will-change-transform`}
        style={{ '--gap': '2rem' } as React.CSSProperties}
        aria-hidden="true"
      >
        {duplicatedProjects.map((project, index) => (
          <Link
            key={`${project.id}-${index}-clone`}
            href={project.link}
            className="relative h-[360px] w-[520px] flex-shrink-0 overflow-hidden rounded-2xl transform transition-all duration-700 ease-out hover:scale-[1.02]"
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