'use client';

import React from 'react';
import { FaLightbulb } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { TbTestPipe } from "react-icons/tb";

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
          <div className="flex h-[120px] w-[120px] items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/20">
            <FaLightbulb
              size={60}
              className="text-yellow-400"
            />
          </div>
        );
      case 'clock':
        return (
          <div className="flex h-[120px] w-[120px] items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400/20 to-blue-600/20">
            <BsCodeSlash
              size={60}
              className="text-blue-400"
            />
          </div>
        );
      case 'tasks':
        return (
          <div className="flex h-[120px] w-[120px] items-center justify-center rounded-2xl bg-gradient-to-br from-green-400/20 to-green-600/20">
            <TbTestPipe
              size={60}
              className="text-green-400"
            />
          </div>
        );
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0A0A] p-8 shadow-lg">
      {/* Content */}
      <div className="mb-8 flex justify-center">{getIcon()}</div>
      <h3 className="mb-4 text-2xl font-semibold text-white text-center">{title}</h3>
      <p className="text-lg text-white/60 text-center">{description}</p>
    </div>
  );
};

export default HowItWorksCard; 