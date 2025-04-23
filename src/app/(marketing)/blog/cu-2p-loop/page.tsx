import { Section } from "@/components/section";
import Blog from "@/components/sections/blog";
import { Github } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

export default function CU2PLoop() {
  return (
    <article className="relative">
      {/* Hero Section */}
      <Section>
        <div className="border-x border-t">
          <div className="px-4 py-10 sm:px-6 lg:px-8 pb-24">
            <div className="mx-auto max-w-3xl text-base leading-7">
              <p className="text-base font-semibold leading-7 text-primary">Blog</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Crypto Unicorns: Expanding the Universe with Casual & 2nd Party Games
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                Exploring how Crypto Unicorns created an inclusive gaming ecosystem through casual games and second-party integrations.
              </p>

              {/* Hero Image */}
              <div className="mt-10 max-w-2xl">
                <Image
                  src="/cu-2p-games.jpeg"
                  alt="Crypto Unicorns 2P Games"
                  width={800}
                  height={400}
                  className="rounded-xl"
                />
              </div>

              {/* Article Content */}
              <div className="mt-10 max-w-2xl">
                <h2 className="mt-16 text-2xl font-bold tracking-tight">Casual & 2nd Party Games powered by Satellite Bank</h2>
                <p className="mt-6">
                  Crypto Unicorns has successfully created a diverse gaming ecosystem by incorporating casual games and second-party integrations. 
                  This approach has helped the project reach a broader audience while maintaining the integrity of its core economy.
                </p>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Technical Implementation</h2>

                <p className="mt-4">
                The casual games were built with the Satellite Bank system, which is a modular contract system, built using the Diamond Standard (ERC-2535), designed to support 2nd-party games and applications within the Crypto Unicorns ecosystem.
                It enables secure, scalable, and customizable in-game economies while maintaining full composability with the core game.
                </p>

                <ul className="mt-4 space-y-2 list-none pl-6">
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-satbank" className="text-primary hover:underline">Satellite Bank</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-game-bank" className="text-primary hover:underline">Game Bank</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-common-tokens" className="text-primary hover:underline">Common Tokens</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-common" className="text-primary hover:underline">Common Contracts in CU</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-public" className="text-primary hover:underline">CU Token</a></li>
                </ul>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🛰️ Satellite Bank System</h2>
                <p className="mt-6">
                  The Satellite Bank is a modular contract system, built using the Diamond Standard (ERC-2535), designed to support 2nd-party games and applications within the Crypto Unicorns ecosystem.
                </p>

                <h3 className="mt-8 text-xl font-semibold">🔑 Key Features</h3>
                <ul className="mt-4 space-y-4 list-disc pl-6 marker:text-white">
                  <li>
                    <strong>Isolated Token Balances</strong><br />
                    Each integrated game or app maintains its own asset balances, ensuring data separation and game-specific logic.
                  </li>
                  <li>
                    <strong>Permission-Based Asset Usage</strong><br />
                    Fine-grained controls allow only authorized modules to access or modify token balances.
                  </li>
                  <li>
                    <strong>Cross-Game Reward Distribution</strong><br />
                    Enables shared reward logic across multiple games while preserving asset isolation.
                  </li>
                  <li>
                    <strong>Secure Asset Management</strong><br />
                    Ensures reliable tracking, movement, and verification of assets within secondary ecosystems.
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold">🔐 Advanced Capabilities</h3>
                <ul className="mt-4 space-y-4  list-disc pl-6 marker:text-white">
                  <li>
                    <strong>Queue + Server-Side Signing</strong><br />
                    Onchain queue system with server-side signature validation to enable fair, tamper-proof reward claims.
                  </li>
                  <li>
                    <strong>Role-Based Permissions</strong><br />
                    Introduces hierarchical role structures for access control and operational security.
                  </li>
                  <li>
                    <strong>App Economy Integration</strong><br />
                    Supports publisher-specific logic such as fee handling for in-app purchases.
                  </li>
                </ul>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h2 className="mt-16 text-2xl font-bold tracking-tight">The Casual Gaming Experience</h2>

                <h3 className="mt-8 text-xl font-semibold">Unicorn Party</h3>
                <div className="mt-8">
                  <Image
                    src="/unicorn-party.jpeg"
                    alt="Unicorn Party"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <p className="mt-4">
                  A social gaming experience featuring:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Mini-games and party activities</li>
                  <li>Social interaction mechanics</li>
                  <li>Event-based rewards</li>
                  <li>Community building features</li>
                </ul>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h3 className="mt-8 text-xl font-semibold">Unigatchi</h3>
                <div className="mt-8">
                  <Image
                    src="/unigatchi.png"
                    alt="Unicorn Gatchi"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <p className="mt-4">
                  A virtual pet simulation game where players:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Care for and train their Unicorns</li>
                  <li>Complete daily tasks and challenges</li>
                  <li>Earn rewards through consistent play</li>
                  <li>Socialize with other players&apos; Unicorns</li>
                </ul>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h3 className="mt-8 text-xl font-semibold">Rainbow Rumble</h3>
                <div className="mt-8">
                  <Image
                    src="/rainbow-rumble.jpg"
                    alt="Rainbow Rumble"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <p className="mt-4">
                  An arcade-style game with:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Quick-play mechanics</li>
                  <li>Skill-based challenges</li>
                  <li>Daily tournaments</li>
                  <li>Special power-ups and abilities</li>
                </ul>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h3 className="mt-8 text-xl font-semibold">Unicorn Bingo</h3>
                <div className="mt-8">
                  <Image
                    src="/cu-bingo.jpeg"
                    alt="Unicorn Bingo"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Social bingo game with special patterns</li>
                  <li>Community events and tournaments</li>
                  <li>Shared rewards pool with main game</li>
                </ul>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h3 className="mt-8 text-xl font-semibold">Bumpercorns</h3>
                <div className="mt-8">
                  <Image
                    src="/cu-bumpercorns.jpeg"
                    alt="Bumpercorns"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Arcade racing game</li>
                  <li>Custom Unicorn skins and abilities</li>
                  <li>Integrated leaderboard system</li>
                </ul>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h3 className="mt-8 text-xl font-semibold">Mob Run</h3>
                <div className="mt-8">
                  <Image
                    src="/mob-run.webp"
                    alt="Mob Run"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Cooperative survival game</li>
                  <li>Team-based challenges</li>
                  <li>Shared resource pool with main game</li>
                </ul>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h2 className="mt-16 text-2xl font-bold tracking-tight">💰 Economic Integration</h2>
                <p className="mt-6">
                  The casual and second-party games contribute to the ecosystem through:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li><strong>Cross-Game Utility:</strong> Assets and resources can be used across different games</li>
                  <li><strong>Reward Systems:</strong> Consistent reward mechanisms across all games</li>
                  <li><strong>Player Retention:</strong> Multiple entry points for different types of players</li>
                  <li><strong>Economic Growth:</strong> Additional utility for core game assets</li>
                </ul>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🕹️ Player Benefits</h2>

                <h3 className="mt-8 text-xl font-semibold">1. Accessibility</h3>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Lower entry barriers for new players</li>
                  <li>Multiple ways to earn rewards</li>
                  <li>Varied gameplay experiences</li>
                </ul>



                <h3 className="mt-8 text-xl font-semibold">2. Progression</h3>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Cross-game progression systems</li>
                  <li>Shared achievement systems</li>
                  <li>Unified reward structures</li>
                </ul>



                <h3 className="mt-8 text-xl font-semibold">3. Community</h3>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Larger player base</li>
                  <li>Diverse player interactions</li>
                  <li>Community events across games</li>
                </ul>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🏁 Conclusion</h2>
                <p className="mt-6">
                  Crypto Unicorns&apos; approach to casual and second-party games represents a significant innovation in blockchain gaming. 
                  By creating an inclusive ecosystem that caters to different types of players, the project has successfully expanded its reach while maintaining the integrity of its core economy.
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