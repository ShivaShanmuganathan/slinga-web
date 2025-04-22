'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CaseStudy } from '@/data/case-studies';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { RainbowButton } from "@/components/magicui/rainbow-button";


interface CaseStudyCardProps {
  study: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  return (
    <Link href={study.slug} className="block w-full">
      <CardContainer className="w-full">
        <CardBody className="relative w-full overflow-hidden rounded-3xl border border-white/[0.2] bg-gradient-to-b from-[#0A0A0A] to-[#0A0A0A]/90 p-8 shadow-xl transition-colors hover:border-white/[0.3]">
          <div className="flex w-full gap-8">
            {/* Left side - Image */}
            <div className="relative w-1/2">
              <CardItem
                translateZ={150}
                className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black"
              >
                <Image
                  src={study.imageUrl} 
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </CardItem>
            </div>

            {/* Right side - Content */}
            <div className="flex w-1/2 flex-col justify-between">
              <div>
                <CardItem translateZ={100}>
                  <h3 className="text-4xl font-semibold text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.2)]">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-lg text-white/80">
                    {study.role}
                  </p>
                </CardItem>
                
                {/* Description */}
                <CardItem translateZ={80} className="mt-4">
                  <p className="text-sm text-white/70">
                    {study.description}
                  </p>
                </CardItem>

                {/* Metrics */}
                <CardItem translateZ={60} className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {study.metrics.map((metric, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white/90"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </CardItem>

                {/* Built Items */}
                <CardItem translateZ={40} className="mt-4">
                  <p className="text-sm font-medium text-white/60 mb-2">Built:</p>
                  <div className="flex flex-wrap gap-2">
                    {study.builtItems.map((item, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardItem>

                {/* Tags */}
                <CardItem translateZ={20} className="mt-4">
                  <p className="text-sm font-medium text-white/60 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardItem>
              </div>

              {/* CTA */}
              <CardItem translateZ={120} className="mt-6">
                <RainbowButton
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                </RainbowButton>
              </CardItem>
            </div>
          </div>

          {/* Hover gradient effect */}
          <div className="pointer-events-none absolute inset-0 h-full w-full rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </CardBody>
      </CardContainer>
    </Link>
  );
};

export default CaseStudyCard; 