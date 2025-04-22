'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CaseStudy } from '@/data/case-studies';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

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
                </CardItem>
                
                {/* Stack Icons */}
                <CardItem translateZ={80} className="mt-4 flex gap-2">
                  {study.stackIcons.map((icon, index) => (
                    <div
                      key={index}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-lg backdrop-blur-sm transition-colors hover:bg-white/20"
                      title={icon.name}
                    >
                      {icon.icon}
                    </div>
                  ))}
                </CardItem>

                {/* Tags */}
                <CardItem translateZ={60} className="mt-6 flex flex-wrap gap-2">
                  {study.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur-sm transition-colors hover:bg-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </CardItem>
              </div>

              {/* Industry Tags and CTA */}
              <div className="mt-8">
                <CardItem translateZ={90}>
                  <p className="mb-3 text-sm font-medium text-white/60">Industry</p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {study.industryTags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardItem>
                
                <CardItem translateZ={120}>
                  <Button
                    className="group/button mt-4 w-full gap-2 border-white/[0.2] bg-black/50 text-white backdrop-blur-sm transition-all hover:border-white/[0.3] hover:bg-white/10 hover:scale-105 hover:shadow-xl"
                    variant="outline"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                  </Button>
                </CardItem>
              </div>
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