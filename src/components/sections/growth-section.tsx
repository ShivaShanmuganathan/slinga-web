"use client";

import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/config";
import { Section } from "@/components/section";
import ThreeDCardDemo from "@/components/3d-card-demo";

export function GrowthSection() {
  const { title, description, items } = siteConfig.growthSection;

  return (
    <Section id="growth" title="">
      <div className="border-x border-t">
        {/* Decorative borders */}
        <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-gray-950/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
        <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-gray-950/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

        {/* Section Header */}
        <SectionHeader>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            {title}
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            {description}
          </p>
        </SectionHeader>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-x md:divide-y-0">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-stretch justify-stretch"
            >
              <ThreeDCardDemo />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
