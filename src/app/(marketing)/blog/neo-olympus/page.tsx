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
                Neo Olympus: Onchain Strategy Gaming
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                Neo Olympus reimagines mythological warfare in a futuristic setting, where players command 
                either Mecha Gods or Titan Kaiju in strategic battles. Built on Base network, the game 
                leverages multiple cutting-edge blockchain frameworks and standards.
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
              <h2 className="mt-16 text-2xl font-bold tracking-tight">💠 Prime Core Mechanics</h2>
                <p className="mt-6">
                  <strong>Prime Core</strong> is the foundational asset of Neo Olympus — a hybrid token built using the <strong>DN404</strong> standard, blending the composability of ERC-20 with the uniqueness of NFTs. Each Prime Core represents a playable identity, complete with onchain metadata for affinities, production traits, and reroll potential.
                </p>
                <ul className="mt-4 space-y-2">
                  <li>🔁 <strong>Dynamic Mint/Burn</strong> on buy/sell via Uniswap-like DEX</li>
                  <li>🧬 <strong>Encoded traits</strong> for Elemental, Production, and Luck Affinities</li>
                  <li>⚙️ <strong>No insider allocations</strong>, fully fair launch</li>
                  <li>🧠 <strong>Reroll system</strong> allows players to strategically reroll metadata for 1% fee</li>
                </ul>
                <p className="mt-4">
                  <strong>Supply:</strong> 7,777 total Prime Cores (30% Pre-Sale, 70% Public IDO)
                </p>

                <div className="mt-8">
                  <Image
                    src="/neo-olympus/neo-genesis-mint.jpeg"
                    alt="Prime Core Mint UI"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">⚙️ Technical Stack</h2>
                <ul className="mt-4 space-y-4 list-disc pl-6 marker:text-white">
                  <li>
                    <strong>DN404 + Diamond Standard:</strong><br />
                    Leveraged DN404 for hybrid NFT/FT mechanics; integrated with Diamond Standard for upgradeability and modularity.
                  </li>
                  <li>
                    <strong>Merkle-Proof Diamond Contracts:</strong><br />
                    Built an upgradable, facet-based <strong>Merkle presale validator</strong> to allow early registrants to mint Prime Cores gas-efficiently.
                  </li>
                  <li>
                    <strong>MUD Framework:</strong><br />
                    Used MUD for onchain game state and composable modular interactions (ECS pattern).
                  </li>
                  <li>
                    <strong>Uniswap-Driven Reroll Mechanics:</strong><br />
                    Reroll and affinity rebinding powered via Uniswap swaps, with onchain re-pricing and burn integration.
                  </li>
                  <li>
                    <strong>Queue-Based Leaderboard & Rewards System:</strong><br />
                    Designed a deterministic, onchain queue system to handle emission logic and player reward distribution.
                  </li>
                </ul>

                

                <h3 className="mt-8 text-xl font-semibold">🧾 Prime Core Mint</h3>
                {/* Neo Mint Image */}
                <div className="mt-10 max-w-2xl">
                  <Image
                    src="/neo-olympus/neo-mint.jpeg"
                    alt="Neo Olympus Game"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li><strong>7,777 total supply</strong>, launched via a fair and fully onchain mint</li>
                  <li>No pre-allocations, no whitelists — 30% presale, 70% public IDO</li>
                  <li>Minted using DN404, each Prime Core is <strong>ERC-20 tradable</strong> yet <strong>ERC-721 identifiable</strong></li>
                </ul>
              

                <h4 className="mt-6 text-lg font-semibold">💎 Diamond-Powered Merkle Proof Presale</h4>
                {/* Neo Mint Image */}
                <div className="mt-10 max-w-2xl">
                  <Image
                    src="/neo-olympus/neo-presale.jpeg"
                    alt="Neo Olympus Game"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <p className="mt-2">
                  Built a <strong>Merkle proof-based presale claim system</strong> using the <strong>Diamond Standard (ERC-2535)</strong>:
                </p>
                <ul className="mt-2 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Modular facet-based contract architecture</li>
                  <li>Enabled gas-optimized access for presale registrants</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold">🧠 Why DN404 for Neo Olympus?</h3>
                {/* Neo Mint Image */}
                <div className="mt-10 max-w-2xl">
                  <Image
                    src="/neo-olympus/neo-dn-404.jpeg"
                    alt="Neo Olympus Game"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <p className="mt-4">
                  Neo Olympus required an asset that:
                </p>
                <ul className="mt-2 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Is <strong>deeply liquid</strong> and supports fractional movement via DEXs</li>
                  <li>Still maintains <strong>identity-level uniqueness and traits</strong></li>
                  <li>Can be <strong>rerolled, upgraded, and used in contracts</strong> like NFTs</li>
                </ul>
                <p className="mt-4">
                  DN404 solved all of these — allowing for gas-optimized storage, Uniswap integration, and fully customizable onchain metadata.
                </p>

                <h3 className="mt-8 text-xl font-semibold">Onchain Metadata & Affinities</h3>
                {/* Neo Mint Image */}
                <div className="mt-10 max-w-2xl">
                  <Image
                    src="/neo-olympus/pc-affinity.png"
                    alt="Neo Olympus Game"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <p className="mt-4">
                  Each Prime Core encodes:
                </p>
                <ul className="mt-2 space-y-2 list-disc pl-6 marker:text-white">
                  <li><strong>Elemental Affinity:</strong> Fire, Water, Earth</li>
                  <li><strong>Production Affinity:</strong> Influences Forge output</li>
                  <li><strong>Luck Affinity:</strong> Boosts reroll success and summon quality</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold">🎲 Reroll System & Affinity Mechanics</h3>
                {/* Neo Mint Image */}
                <div className="mt-10 max-w-2xl">
                  <Image
                    src="/neo-olympus/neo-reroll.jpeg"
                    alt="Neo Olympus Game"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Every Prime Core can be <strong>rerolled</strong> using a built-in Uniswap swap logic</li>
                  <li>Rerolls charge a <strong>1% tax</strong> that is burned, keeping the economy deflationary</li>
                  <li>Metadata and affinities updated fully onchain</li>
                  <li>Introduces deflation + optional trait optimization</li>
                </ul>
                <p className="mt-4">
                  Cores have <strong>affinities</strong> across:
                </p>
                <ul className="mt-2 space-y-2 list-disc pl-6 marker:text-white">
                  <li><strong>Elemental</strong> (Fire, Water, Earth)</li>
                  <li><strong>Production</strong> (OLY yield)</li>
                  <li><strong>Luck</strong> (Reroll rarity boosts)</li>
                </ul>


                <h2 className="mt-16 text-2xl font-bold tracking-tight">🏭 Realm Forge System</h2>


                <div className="mt-8">
                  <Image
                    src="/neo-olympus/neo-prime-core.jpeg"
                    alt="Realm Forge Layout"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>

                <p className="mt-6">
                  After minting, players activate Realm Forges, which function like passive production nodes:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>⚙️ Up to 7 Prime Cores per Forge</li>
                  <li>🔥 Resource Types: Fire, Water, Earth</li>
                  <li>🔁 Core traits influence output yield, upgrade speed, and event eligibility</li>
                  <li>🔂 Generates $OLY (currency) and $VOID (leveling material)</li>
                </ul>
                <p className="mt-4"><strong>Core metrics:</strong></p>
                <ul className="mt-2 space-y-2 list-disc pl-6 marker:text-white">
                  <li>⚡ Prime Cores stacked = increased output</li>
                  <li>🔁 Elemental synergy = bonus production</li>
                  <li>⛏️ Passive $OLY yield = tied to leaderboard</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🧪 Material Factories + Summoning System</h2>
                <p className="mt-6">
                  Elemental resources flow into Factories, which refine them into usable materials and summon monsters, titans, and realm shards via altars:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>🏗️ Factory toggling enables advanced resource management</li>
                  <li>🎰 Gacha-style Summoning Altars use $OLY for RNG-based rarity rolls</li>
                  <li>🔥 Legendary, Epic, and Mythic Monsters can be summoned for combat advantages</li>
                </ul>

                <div className="mt-8">
                  <Image
                    src="/neo-olympus/neo-materials.jpeg"
                    alt="Summoning UI"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">💥 Titan Summoning Event</h2>
                <p className="mt-6">
                  A global competition to mint 777 Titans, the rarest assets in the game:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>🧿 One mint every hour for 32 days</li>
                  <li>⚔️ Titans divided into 5 rarity tiers</li>
                  <li>☠️ Permadeath mechanics create ongoing burn/mint cycles</li>
                  <li>🔁 Re-mint triggered when Titans die in battle</li>
                </ul>

                <div className="mt-8">
                  <Image
                    src="/neo-olympus/neo-summon.jpeg"
                    alt="Summoning UI"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>


                <h2 className="mt-16 text-2xl font-bold tracking-tight">🌍 Realm Shards & Map Gameplay</h2>
                <p className="mt-6">
                  Players craft Realm Shards—zones on a world map that offer yield and competitive benefits:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>🏞️ Territories act as Points of Interest (POIs)</li>
                  <li>🛡️ Defend vs. Hero Mecha</li>
                  <li>🧲 Passive rewards for popularity and strategic placement</li>
                </ul>

                <div className="mt-8">
                  <Image
                    src="/neo-olympus/neo-gameplay.jpeg"
                    alt="World Map"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🧬 Onchain Engine: MUD + B3</h2>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>⛓️ All smart contracts deployed on Arbitrum Orbit (B3 chain) with L1 (Ethereum) hosting Prime Cores</li>
                  <li>⚙️ Game logic lives entirely onchain</li>
                  <li>🧱 MUD (Entity Component System) used for composability</li>
                  <li>🔀 Cross-chain UX powered by Sygma and Base</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🏁 Launch Milestones</h2>
                <div className="mt-6 overflow-x-auto relative rounded-2xl">
                  <div className="absolute inset-0 bg-[url('/neo-olympus/neo-pfp.png')] bg-cover bg-center opacity-55"></div>
                  <table className="min-w-full divide-y divide-gray-200/20 relative z-10">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Milestone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Built</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200/20 bg-black/40">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Prime Core Mint</td>
                        <td className="px-6 py-4">DN404 token + dynamic reroll + trait system</td>
                        <td className="px-6 py-4">✅ Completed</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Tokenomics Engine</td>
                        <td className="px-6 py-4">Adaptive emissions, burn loops, LP routing</td>
                        <td className="px-6 py-4">✅ Completed</td>
                      </tr>

                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Realm Forge</td>
                        <td className="px-6 py-4">Resource generation, token flow, emissions</td>
                        <td className="px-6 py-4">✅ Completed</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Summoning Altar</td>
                        <td className="px-6 py-4">Gacha mechanics, Titans, RNG logic</td>
                        <td className="px-6 py-4">✅ Completed</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Cross-chain UX</td>
                        <td className="px-6 py-4">L1 Prime Cores ↔ B3 Orbit ↔ Base chain</td>
                        <td className="px-6 py-4">✅ Completed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🎖️ Impact & Innovation</h2>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>🛠 Built the entire protocol as a single engineer</li>
                  <li>🧠 Used DN404, Diamond Standard, and onchain RNG</li>
                  <li>📉 Embedded smart contract logic for emissions, reroll pricing, and deflation</li>
                  <li>🔒 No reliance on off-chain infrastructure</li>
                  <li>✅ Delivered one of the most advanced, fully onchain GameFi protocols</li>
                </ul>
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