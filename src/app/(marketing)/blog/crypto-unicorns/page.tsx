import { Section } from "@/components/section";
import Blog from "@/components/sections/blog";
import { Github } from "lucide-react";
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
              <p className="text-base font-semibold leading-7 text-primary">Blog</p>
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
                  src="/cu-poster.jpeg"
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

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Key Achievements</h2>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-primary">1.</span>
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">
                      Crypto Unicorns sold $45M in digital assets 
                      </strong>{" "}
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-primary">2.</span>
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">
                      Successfully raised $26M through strategic token sale events.
                      </strong>{" "}
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-primary">3.</span>
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">
                        Achieved 50K daily active players at peak activity.
                      </strong>{" "}
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-primary">4.</span>
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">
                      Hit $100M TVL in The Dark Forest: Act One
                      </strong>{" "}

                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-primary">4.</span>
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">
                      Launched a token at a $2.5B FDV
                      </strong>{" "}
                    </span>
                  </li>
                  
                </ul>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Technical Implementation</h2>
                <p className="mt-6">
                  As the Lead Solidity Engineer on Crypto Unicorns, 
                  I designed and implemented a highly modular smart contract system that scaled across 
                  millions of transactions, multiple game loops, and a wide NFT ecosystem. 
                  The core of the architecture was built using the Diamond Standard (ERC-2535) to enable upgradable, gas-efficient, and extensible smart contracts.
                </p>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Economic Design</h2>
                <p className="mt-6">
                  Crypto Unicorns employed a multi-loop economic system blending core DeFi logic with casual and midcore gameplay.
                </p>

                {/* Economic Design Image */}
                <div className="mt-8 max-w-2xl">
                  <Image
                    src="/cu-game-economy.jpeg"
                    alt="Crypto Unicorns Economic Design"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>

                <div className="mt-8 space-y-6">
                  <details className="group">
                    <summary className="flex cursor-pointer items-center text-xl font-semibold">
                      <span>🧩 Composable Asset Design</span>
                      <span className="ml-2 text-muted-foreground transition-transform duration-700 group-open:rotate-180">▼</span>
                    </summary>
                    <div className="mt-4 pl-6 transition-all duration-700 ease-in-out">
                      <p>
                        Crypto Unicorns was built on a fully modular, composable asset system powered by the Diamond Standard (ERC-2535). 
                        All gameplay modules—farm loops, battle systems, or second-party games—interfaced with a shared set of core NFT assets managed through Diamond proxy hubs.
                        <br></br>
                      </p>
                      {/* CU Assets Image */}
                      <div className="mt-8 max-w-2xl">
                        <Image
                          src="/cu-asset.png"
                          alt="Crypto Unicorns Assets"
                          width={800}
                          height={400}
                          className="rounded-xl"
                        />
                      </div>

                      <ul className="list-disc pl-6 space-y-2">
                        <li>ERC-721
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Unicorns: The primary in-game characters used for farming, breeding, and PvP battles. Over 10,000 unique holders and 8M+ NFTs minted.</li>
                            <li>Shadowcorns: Faction-based dark counterparts to Unicorns, integral to Shadowforge combat and seasonal PvP loops.</li>
                            <li>Land: Yield-generating virtual real estate used for farming and Unicorn management, contributing to over 2,000 ETH in sales.</li>
                          </ul>
                        </li>
                        <li>ERC-1155: Items, consumables, crafting materials</li>
                        <li>ERC-20
                          <ul className="list-disc pl-6 space-y-2">
                            <li>$RBW and $UNIM: Core in-game currencies used for asset upgrades, marketplace trades, and gameplay rewards.</li>
                            <li>Dark Marks: PvP-exclusive currency tied to Shadowcorn combat and battle rewards.</li>
                          </ul>
                        </li>
                      </ul>
                      <p>
                        <br></br>
                        The entire asset layer was designed to be interoperable 
                        across midcore, casual, and 2nd-party games—maintaining a consistent economic backbone 
                        while allowing independent modules to plug into it seamlessly.
                      </p>
                    </div>
                  </details>
                  <details className="group">
                    <summary className="flex cursor-pointer items-center text-xl font-semibold">
                      <span>📦 Cross-Chain & Infrastructure Migration</span>
                      <span className="ml-2 text-muted-foreground transition-transform duration-700 group-open:rotate-180">▼</span>
                    </summary>
                    {/* Game Migration Image */}
                    <div className="mt-8 max-w-2xl">
                        <Image
                          src="/cu-migration.jpeg"
                          alt="Crypto Unicorns Game Migration"
                          width={800}
                          height={400}
                          className="rounded-xl"
                        />
                      </div>
                    <div className="mt-4 pl-6 transition-all duration-700 ease-in-out">
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Migrated 200+ smart contracts from Polygon to Xai (L3 Arbitrum)</li>
                        <li>Maintained 90%+ user retention and facilitated over 900K+ transactions</li>
                        <li>Used LayerZero for secure, trust-minimized bridging of $RBW and $UNIM</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex cursor-pointer items-center text-xl font-semibold">
                      <span>🧱 Core Modules Developed</span>
                      <span className="ml-2 text-muted-foreground transition-transform duration-700 group-open:rotate-180">▼</span>
                    </summary>

                     {/* Core Modules Image */}
                      <div className="mt-8 max-w-2xl">
                        <Image
                          src="/core-modules.jpeg"
                          alt="Crypto Unicorns Core Modules"
                          width={800}
                          height={400}
                          className="rounded-xl"
                        />
                      </div>
                    <div className="mt-4 pl-6 transition-all duration-700 ease-in-out">
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Game Bank:</strong> Onchain vault managing in-game currencies (RBW, UNIM) and item balances</li>
                        <li><strong>Shadowforge:</strong> Fully onchain PvP battle game with queue-based reward logic</li>
                        <li><strong>Satellite Bank:</strong> Cross-game asset manager for 2nd party games</li>
                        <li><strong>Onchain Marketplace:</strong> Peer-to-peer trading system for NFTs and items</li>
                        <li><strong>Presale Engine:</strong> Merkle Tree–based whitelisting + minting for new assets</li>
                        <li><strong>Land & Farming:</strong> NFT-based yield mechanics integrated with farming and asset generation</li>
                      </ul>
                    </div>
                  </details>
                </div>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Economic Design</h2>
                <p className="mt-6">
                  Crypto Unicorns employed a multi-loop economic system blending core DeFi logic with casual and midcore gameplay.
                </p>

                {/* Economic Design Image */}
                <div className="mt-8 max-w-2xl">
                  <Image
                    src="/cu-game-economy.jpeg"
                    alt="Crypto Unicorns Economic Design"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>

                <div className="mt-8 space-y-6">
                  <details className="group">
                    <summary className="flex cursor-pointer items-center text-xl font-semibold">
                      <span>🌾 Core Loop (Farm Economy)</span>
                      <span className="ml-2 text-muted-foreground transition-transform duration-700 group-open:rotate-180">▼</span>
                    </summary>
                    
                    {/* Economic Design Image */}
                    <div className="mt-8 max-w-2xl">
                      <Image
                        src="/cu-farm.jpeg"
                        alt="Crypto Unicorns Farm Economy"
                        width={800}
                        height={400}
                        className="rounded-xl"
                      />
                    </div>
                    <div className="mt-4 pl-6 transition-all duration-700 ease-in-out">
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Land NFTs are central to the ecosystem — players use them to breed, farm, and generate resources</li>
                        <li>Yield-generating gameplay contributes to the in-game resource economy managed by Game Bank</li>
                        <li>Backed by $RBW and $UNIM utility tokens</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex cursor-pointer items-center text-xl font-semibold">
                      <span>🏹 Midcore Skill-Based Games</span>
                      <span className="ml-2 text-muted-foreground transition-transform duration-700 group-open:rotate-180">▼</span>
                    </summary>
                    {/* Economic Design Image */}
                    <div className="mt-8 max-w-2xl">
                      <Image
                          src="/cu-battle-loop.avif"
                        alt="Crypto Unicorns Battle Loop"
                        width={800}
                        height={400}
                        className="rounded-xl"
                      />
                    </div>
                    <div className="mt-4 pl-6 transition-all duration-700 ease-in-out">
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Modules like Jousting, Racing, Tribes, and Team RPG added competitive, skill-driven loops</li>
                        <li>These games deepened player progression and created demand for upgraded NFTs and game items</li>
                        <li>Shadowforge PvP and Dark Forest (ERC-2535) expanded faction and PvE/PvP ecosystems</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex cursor-pointer items-center text-xl font-semibold">
                      <span>🎮 Casual & 2nd Party Games</span>
                      <span className="ml-2 text-muted-foreground transition-transform duration-700 group-open:rotate-180">▼</span>
                    </summary>
                    {/* Second Party Games Image */}
                    <div className="mt-8 max-w-2xl">
                      <Image
                          src="/cu-2p-games.jpeg"
                        alt="Crypto Unicorns Second Party Games"
                        width={800}
                        height={400}
                        className="rounded-xl"
                      />
                    </div>
                    <div className="mt-4 pl-6 transition-all duration-700 ease-in-out">
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Games like Unigatchi, Unicorn Party, Unicorn Trivia, Unicorn Bingo, Bumpercorns, Mob Run and Rainbow Rumble attracted casual players</li>
                        <li>Supported by Satellite Bank for isolated token balances and permissions</li>
                        <li>Connected back to the core economy through reward tokens and asset usage</li>
                      </ul>
                    </div>
                  </details>
                </div>
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