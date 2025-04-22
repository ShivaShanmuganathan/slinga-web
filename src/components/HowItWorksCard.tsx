'use client';

import React from 'react';
import { IconClock, IconBolt, IconList } from '@tabler/icons-react';

interface HowItWorksCardProps {
  title: string;
  description: string;
  icon: 'lightning' | 'clock' | 'tasks';
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  title,
  description,
  icon,
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'lightning':
        return (
          <IconBolt
            size={120}
            className="text-yellow-400"
            stroke={1.5}
          />
        );
      case 'clock':
        return (
          <div className="relative flex h-[120px] w-[120px] items-center justify-center rounded-2xl bg-neutral-900">
            <span className="text-5xl font-bold text-neutral-400">48</span>
          </div>
        );
      case 'tasks':
        return (
          <div className="flex h-[120px] w-[120px] flex-col gap-2 rounded-2xl bg-neutral-900 p-4">
            <div className="flex items-center gap-2">
              <IconBolt size={16} className="text-red-400" />
              <span className="text-sm text-white">Design Queue</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-neutral-800 px-3 py-2">
                <span className="text-sm text-white">Brand Guide</span>
                <span className="text-sm text-neutral-400">Done</span>
              </div>
              <div className="rounded-lg bg-red-400/20 px-3 py-2">
                <span className="text-sm text-red-400">Hero Section</span>
              </div>
              <div className="rounded-lg bg-neutral-800 px-3 py-2">
                <span className="text-sm text-white">Landing Page</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0A0A] p-8 shadow-lg">
      {/* Content */}
      <div className="mb-8 flex justify-center">{getIcon()}</div>
      <h3 className="mb-4 text-2xl font-semibold text-white">{title}</h3>
      <p className="text-lg text-white/60">{description}</p>
    </div>
  );
};

export default HowItWorksCard; 