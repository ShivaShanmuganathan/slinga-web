import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import Blog from "@/components/sections/blog";
import Image from "next/image";
import { Suspense } from "react";

export default function NeoOlympus() {
  return (
    <article className="relative">
      {/* Hero Section */}
      <Section>
        <div className="border-x border-t">
          <div className="px-4 py-10 sm:px-6 lg:px-8 pb-24">
            <div className="mx-auto max-w-3xl text-base leading-7">
              <p className="text-base font-semibold leading-7 text-primary">Case Study</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Neo Olympus: Next-Gen Onchain Strategy Gaming
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                Exploring the development of a groundbreaking strategy game that brings mythological warfare 
                to the blockchain using cutting-edge frameworks and standards.
              </p>

              {/* Hero Image */}
              <div className="mt-10 max-w-2xl">
                <Image
                  src="/neo-olympus.png"
                  alt="Neo Olympus Game"
                  width={800}
                  height={400}
                  className="rounded-xl"
                />
              </div>

              {/* Article Content */}
              <div className="mt-10 max-w-2xl">
                <h2 className="mt-16 text-2xl font-bold tracking-tight">Project Overview</h2>
                <p className="mt-6">
                  Neo Olympus reimagines mythological warfare in a futuristic setting, where players command 
                  either Mecha Gods or Titan Kaiju in strategic battles. Built on Base network, the game 
                  leverages multiple cutting-edge blockchain frameworks and standards.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Technical Stack</h2>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-primary">1.</span>
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">
                        DN404 Standard
                      </strong>{" "}
                      Implementation of the innovative DN404 token standard for efficient onchain operations.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-primary">2.</span>
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">
                        Diamond Standard
                      </strong>{" "}
                      Utilizing the Diamond pattern for upgradeable and modular smart contracts.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-primary">3.</span>
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">
                        MUD Framework
                      </strong>{" "}
                      Leveraging MUD for efficient onchain state management and game mechanics.
                    </span>
                  </li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Game Mechanics</h2>
                <p className="mt-6">
                  The game features a complex battle system where players strategically position their units,
                  manage resources, and execute tactical maneuvers. All game logic runs entirely onchain,
                  ensuring complete transparency and fairness.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Blockchain Integration</h2>
                <p className="mt-6">
                  Built on Base network, Neo Olympus integrates seamlessly with Uniswap for in-game
                  asset trading and utilizes advanced smart contract patterns for optimal gas efficiency
                  and user experience.
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