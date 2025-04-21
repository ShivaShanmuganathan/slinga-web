import React from 'react';
import MarqueeRow from './MarqueeRow';
import { projects } from '@/data/projects';

const MarqueeGallery: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-gray-900">
      <div className="py-16">
        <div className="space-y-16">
          <MarqueeRow projects={projects} direction="left" />
          <MarqueeRow projects={projects} direction="right" />
        </div>
      </div>
    </div>
  );
};

export default MarqueeGallery; 