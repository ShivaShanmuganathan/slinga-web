import { Section } from "@/components/section";
import Blog from "@/components/sections/blog";
import Image from "next/image";
import { Suspense } from "react";

export default function CUBattleLoop() {
  return (
    <article className="relative">
      {/* Hero Section */}
      <Section>
        <div className="border-x border-t">
          <div className="px-4 py-10 sm:px-6 lg:px-8 pb-24">
            <div className="mx-auto max-w-3xl text-base leading-7">
              <p className="text-base font-semibold leading-7 text-primary">Case Study</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Crypto Unicorns: The Evolution of Skill-Based Gaming
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                Exploring how Crypto Unicorns revolutionized blockchain gaming with its skill-based competitive modes and PvP systems.
              </p>

              {/* Hero Image */}
              <div className="mt-10 max-w-2xl">
                <Image
                  src="/cu-battle-loop.avif"
                  alt="Crypto Unicorns Battle Loop"
                  width={800}
                  height={400}
                  className="rounded-xl"
                />
              </div>

              {/* Article Content */}
              <div className="mt-10 max-w-2xl">
                <h2 className="mt-16 text-2xl font-bold tracking-tight">The Evolution of Skill-Based Gaming</h2>
                <p className="mt-6">
                  Blending strategy, skill, and onchain ownership to redefine competitive gaming in Web3.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">💻 Technical Implementation</h2>
                <p className="mt-6">
                  The battle loop is powered by the below diamond standard smart contracts:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li><a href="https://github.com/Laguna-Games/cu-osc-shadowforge" className="text-primary hover:underline">Shadowforge</a></li>
                  <li><a href="https://github.com/Laguna-Games/cu-osc-unicorns" className="text-primary hover:underline">Crypto Unicorns</a></li>
                  <li><a href="https://github.com/Laguna-Games/cu-osc-shadowcorns" className="text-primary hover:underline">Shadowcorns</a></li>
                  <li><a href="https://github.com/Laguna-Games/cu-osc-items" className="text-primary hover:underline">Shadowcorn Items</a></li>
                  <li><a href="https://github.com/Laguna-Games/cu-osc-rituals" className="text-primary hover:underline">Rituals</a></li>
                  <li><a href="https://github.com/Laguna-Games/cu-osc-dark-marks" className="text-primary hover:underline">Dark Marks Token</a></li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Game Modes Breakdown</h2>

                <h3 className="mt-8 text-xl font-semibold">1. Jousting</h3>
                <div className="mt-8">
                  <Image
                    src="/cu-jousting-banner.jpeg"
                    alt="Jousting"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <p className="mt-4">
                  A strategic combat system where players:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Build custom Unicorn teams</li>
                  <li>Develop unique battle strategies</li>
                  <li>Compete in ranked and casual matches</li>
                  <li>Earn special Jousting-specific rewards</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold">2. Racing</h3>
                <div className="mt-8">
                  <Image
                    src="/cu-racing.jpg"
                    alt="Racing"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <p className="mt-4">
                  A high-speed competitive mode featuring:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Track customization</li>
                  <li>Unicorn breeding for speed traits</li>
                  <li>Time trials and multiplayer races</li>
                  <li>Special racing equipment and upgrades</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold">3. Tribes</h3>
                <div className="mt-8">
                  <Image
                    src="/cu-tribes.jpg"
                    alt="Tribes"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <p className="mt-4">
                  A team-based strategy game where players:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Form or join tribes</li>
                  <li>Compete in territory control</li>
                  <li>Participate in tribe wars</li>
                  <li>Earn collective rewards</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold">4. Team RPG</h3>
                <div className="mt-8">
                  <Image
                    src="/cu-team-rpg.jpg"
                    alt="Team RPG"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <p className="mt-4">
                  A cooperative adventure mode with:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Dungeon crawling</li>
                  <li>Boss battles</li>
                  <li>Team composition strategy</li>
                  <li>Unique loot and rewards</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Economic Impact</h2>
                <p className="mt-6">
                  The skill-based games have significantly contributed to the ecosystem:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li><strong>$26M in Tournament Prizes:</strong> Distributed through various competitive events</li>
                  <li><strong>50K Daily Active Players:</strong> At peak activity in competitive modes</li>
                  <li><strong>$100M TVL:</strong> In The Dark Forest: Act One tournament series</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Player Progression System</h2>
                <p className="mt-6">
                  The game features a comprehensive progression system:
                </p>
                <ol className="mt-4 space-y-2 list-decimal pl-6 marker:text-white">
                  <li><strong>Skill Rating:</strong> Players earn ratings based on performance</li>
                  <li><strong>Achievements:</strong> Special milestones and challenges</li>
                  <li><strong>Rewards:</strong> Exclusive NFTs and tokens for top performers</li>
                  <li><strong>Leaderboards:</strong> Global and seasonal rankings</li>
                </ol>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🏁 Conclusion</h2>
                <p className="mt-6">
                  Crypto Unicorns&apos; midcore skill-based games represent a significant advancement in blockchain gaming. 
                  By combining traditional competitive gaming mechanics with blockchain technology, the project has created a sustainable and engaging competitive ecosystem that appeals to both casual and hardcore gamers.
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