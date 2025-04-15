"use client";

import { Icons } from "@/components/icons";
import { Section } from "@/components/section";
import { BorderText } from "@/components/ui/border-number";
import { siteConfig } from "@/lib/config";
import ThreeDCardDemo from "@/components/3d-card-demo";
import Link from "next/link";

const stats = [
  {
    title: "250+",
    subtitle: "Smart Contracts Deployed",
    icon: <Icons.filetext className="h-5 w-5" />,
  },
  {
    title: "50K+",
    subtitle: "nSLOC of Solidity Code",
    icon: <Icons.code className="h-5 w-5" />,
  },
  {
    title: "$70M+",
    subtitle: "Onchain value secured",
    icon: <Icons.rocket className="h-5 w-5" />,
  },
];

export function GrowthSection() {
  const { items } = siteConfig.growthSection;

  return (
    <Section title="PREVIOUS PROJECTS" subtitle="Deployed. Trusted. Proven.">
      <div className="border-x border-t">
        {/* Statistics Section */}
        <div
          className="border-b"
          style={{
            backgroundImage:
              "radial-gradient(circle at bottom center, hsl(var(--secondary) / 0.4), hsl(var(--background)))",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {stats.map((stat, idx) => (
              <Link
                href="#"
                key={idx}
                className="flex flex-col items-center justify-center py-8 px-4 border-b sm:border-b-0 last:border-b-0 sm:border-r sm:last:border-r-0 [&:nth-child(-n+2)]:border-t-0 sm:[&:nth-child(-n+3)]:border-t-0 relative group overflow-hidden"
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
                <div className="text-center relative">
                  <BorderText text={stat.title} />
                  <div className="flex items-center justify-center gap-2 mt-2">
                    {stat.icon}
                    <p className="text-sm text-muted-foreground">
                      {stat.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Decorative borders */}
        <div className="relative">
          <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-gray-950/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-gray-950/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

          {/* 3D Cards Grid Layout */}
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
      </div>
    </Section>
  );
}
