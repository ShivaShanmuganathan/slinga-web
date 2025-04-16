import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { Blog } from "@/components/sections/blog";
import Image from "next/image";
import { Suspense } from "react";

export default function CryptoUnicorns() {
  return (
    <article className="relative">
      {/* Hero Section */}
      <Section>
        <div className="border-x border-t">
          <div className="px-4 py-10 sm:px-6 lg:px-8 pb-24">
            <div className="mx-auto max-w-3xl text-base leading-7">
              <p className="text-base font-semibold leading-7 text-primary">Case Study</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Crypto Unicorns: Building a Fully On-Chain Gaming Ecosystem
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                A deep dive into how we built one of the most successful blockchain games, combining NFTs, 
                tokenomics, and engaging gameplay mechanics to create a thriving virtual economy.
              </p>

              {/* Hero Image */}
              <div className="mt-10 max-w-2xl">
                <Image
                  src="/cu.jpg"
                  alt="Crypto Unicorns Game"
                  width={800}
                  height={400}
                  className="rounded-xl"
                />
              </div>

              {/* Article Content */}
              <div className="mt-10 max-w-2xl">
                <h2 className="mt-16 text-2xl font-bold tracking-tight">Project Overview</h2>
                <p className="mt-6">
                  Crypto Unicorns is a blockchain-based game where players collect, breed, and battle mythical unicorns.
                  The game features multiple gameplay modes including farming, crafting, and PvP battles, all powered by
                  blockchain technology.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Key Achievements</h2>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-primary">1.</span>
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">
                        NFT Success
                      </strong>{" "}
                      Generated over $45M in NFT trading volume through unique unicorn collectibles.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-primary">2.</span>
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">
                        Token Sale
                      </strong>{" "}
                      Successfully raised $26M through strategic token sale events.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-primary">3.</span>
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">
                        Player Engagement
                      </strong>{" "}
                      Achieved 50K daily active players at peak activity.
                    </span>
                  </li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Technical Implementation</h2>
                <p className="mt-6">
                  The game utilizes a sophisticated system of smart contracts to handle breeding mechanics,
                  battle logic, and economic balance. Our implementation includes advanced genetic algorithms
                  for unicorn traits and a carefully designed tokenomics model.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Economic Design</h2>
                <p className="mt-6">
                  The game&apos;s economy is built on a dual-token model with deflationary mechanics and
                  carefully balanced sink/source dynamics. This design has proven crucial for long-term
                  sustainability and player engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Articles */}
      <div className="mb-24">
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading related articles...</div>}>
          <Blog />
        </Suspense>
      </div>
    </article>
  );
} 