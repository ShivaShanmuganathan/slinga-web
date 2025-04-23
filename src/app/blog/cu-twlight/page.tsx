import { Section } from "@/components/section";
import Blog from "@/components/sections/blog";
import Image from "next/image";
import { Suspense } from "react";

export default function CUTwilight() {
  return (
    <article className="relative">
      {/* Hero Section */}
      <Section>
        <div className="border-x border-t">
          <div className="px-4 py-10 sm:px-6 lg:px-8 pb-24">
            <div className="mx-auto max-w-3xl text-base leading-7">
              <p className="text-base font-semibold leading-7 text-primary">Case Study</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Twilight Tactics & Shadowforge
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                A deep dive into Crypto Unicorns&apos; seasonal PvP system, Twilight Tactics, and the mechanics behind Shadowforge-driven minion warfare.
              </p>

              {/* Hero Image */}
              <div className="mt-10 max-w-2xl">
                <Image
                  src="/cu-twilight-tactics.webp"
                  alt="Crypto Unicorns Twilight Tactics"
                  width={800}
                  height={400}
                  className="rounded-xl"
                />
              </div>

              {/* Article Content */}
              <div className="mt-10 max-w-2xl">
                <h2 className="mt-16 text-2xl font-bold tracking-tight">🌘 Twilight Tactics & Shadowforge</h2>
                <p className="mt-6">
                  <strong>Twilight Tactics</strong> is the flagship seasonal PvP event in the Crypto Unicorns ecosystem. 
                  It introduces large-scale, onchain battles between <strong>Unicorns</strong> and <strong>Shadowcorns</strong>, 
                  marking the first-ever implementation of NFT death mechanics and squad-based combat in the CU universe.
                </p>
                <p className="mt-4">
                  This system pits Unicorn holders against Shadowcorn factions in an eternal struggle for resources and dominance.
                  At its core, Twilight Tactics is fueled by the <strong>Shadowforge</strong> — a minion-generation engine that allows 
                  Shadowcorns to breed and lead powerful squads into the Dark Forest, where Unicorns rise to challenge them across five contested regions.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🚀 Gameplay Outcome Snapshot – Season 1</h2>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li><strong>$1.5M+ in rewards distributed</strong></li>
                  <li><strong>+70% daily wallet retention</strong></li>
                  <li><strong>Thousands of Minions burned</strong> during battle</li>
                  <li><strong>Hundreds of Unicorn Souls minted</strong> as Guides were defeated</li>
                  <li><strong>Millions of Domination Points</strong> generated</li>
                  <li>Supported strategic PvP on a live, composable economy with <strong>$3M+ TVL</strong> and over <strong>8M+ NFT assets</strong></li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">💻 Technical Implementation</h2>
                <h3 className="mt-8 text-xl font-semibold">🔧 Diamond Standard (ERC-2535)</h3>
                <p className="mt-4">
                  Entire system was built using a <strong>modular Diamond architecture</strong>, enabling <strong>facet-level upgrades</strong> and <strong>gas optimization</strong>.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">⚔️ Shadowforge: Breeding the War Machine</h2>
                <p className="mt-6">
                  The <strong>Shadowforge</strong> is a production contract where Shadowcorns breed <strong>Minions</strong>, who are later deployed into <strong>squads</strong> for Twilight Tactics.
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Each Minion Squad can include <strong>up to 10 minions + 1 Shadowcorn</strong></li>
                  <li>Shadowcorns can lead <strong>unlimited squads</strong> simultaneously</li>
                  <li>Minions inherit traits from parent Shadowcorns</li>
                  <li><strong>Dark Mark Integration</strong>: PvP-exclusive currency for forging operations</li>
                </ul>

                <div className="mt-8">
                  <Image
                    src="/cu-shadowforge.jpg"
                    alt="Shadowforge"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🗺️ Twilight Tactics</h2>
                <p className="mt-6">
                  Twilight Tactics unfolds across <strong>5 regions</strong>, each tied to a Shadowcorn class:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li><strong>Slime</strong>, <strong>Volt</strong>, <strong>Soul</strong>, <strong>Fire</strong>, <strong>Nebula</strong></li>
                </ul>
                <p className="mt-4">
                  Each region introduces unique <strong>stat limitations</strong> and <strong>combat bonuses</strong> based on Unicorn class alignment.
                </p>

                <div className="mt-8">
                  <Image
                    src="/cu-twilight-tactics.webp"
                    alt="Twilight Tactics"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold">🧠 Squad Composition</h3>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li><strong>Unicorn Squads</strong>: 1 Guide + 2 Companions</li>
                  <li><strong>Shadowcorn Squads</strong>: 1 Shadowcorn + up to 10 Minions</li>
                  <li><strong>Power Calculation</strong>: Complex formulas considering class advantages, traits, and regional bonuses</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">💎 Economic Model</h2>
                <h3 className="mt-8 text-xl font-semibold">Territory Control Benefits</h3>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li><strong>75/25 Split</strong>: Winning faction receives 75% of regional rewards</li>
                  <li><strong>Resource Multipliers</strong>: Control bonuses for specific resource types</li>
                  <li>Unicorns Rewards: $UNIM + Rift Crystals</li>
                  <li>Shadowcorns Rewards: Dark Marks + $UNIM + Rift Crystals</li>
                  <li>Each deployed Minion = 10 Domination Points</li>
                  <li>Points fuel daily and seasonal rewards</li>
                  <li>Calculated per region and faction performance</li>
                </ul>

                <div className="mt-8">
                  <Image
                    src="/cu-twilight-bonus.webp"
                    alt="Economic Flow"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🔄 Seasonal Cycles</h2>
                <p className="mt-6">
                  Each season of Twilight Tactics follows a structured pattern:
                </p>

                <h3 className="mt-8 text-xl font-semibold">1. Preparation Phase</h3>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Shadowcorn holders forge minion armies</li>
                  <li>Unicorn holders form defensive squads</li>
                  <li>Alliance formation and strategy planning</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold">2. Battle Phase</h3>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Territory control contests</li>
                  <li>Daily reward distribution</li>
                  <li>Dynamic difficulty adjustments</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold">3. Resolution Phase</h3>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Final rewards calculation</li>
                  <li>Territory reset</li>
                  <li>Season-end leaderboard prizes</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🦄 Unicorn vs Shadowcorn Combat</h2>
                <h3 className="mt-8 text-xl font-semibold">🎯 Unicorn Players</h3>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Create 3-Unicorn squads: <strong>1 Guide + 2 Companions</strong></li>
                  <li>Only the Guide must be airlocked; Companions can multitask in core game</li>
                  <li>Battle cooldown: <strong>1 hour per Unicorn squad</strong></li>
                  <li>If defeated, the <strong>Unicorn Guide can be killed</strong>, minting a <strong>Unicorn Soul</strong> NFT</li>
                </ul>

                <div className="mt-8">
                  <Image
                    src="/cu-twilight-squad.webp"
                    alt="Squad"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold">💀 Death & Burn Mechanics</h3>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Minions can die even in victory; <strong>all Minions in losing squads are burned</strong></li>
                  <li>Unicorn Companions are always safe; only <strong>Guides are at risk</strong></li>
                  <li>Introduces <strong>asset burn</strong> to balance inflation and drive strategic risk-taking</li>
                </ul>

                <div className="mt-8">
                  <Image
                    src="/cu-twilight-combat.webp"
                    alt="Combat"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🧪 Combat Formula</h2>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Each squad&apos;s <strong>stats are converted into total Damage</strong></li>
                  <li>The squad with the <strong>most remaining Stamina wins</strong></li>
                  <li><strong>Domination Points</strong> awarded to both sides, with more for the victor</li>
                </ul>

                <div className="mt-8">
                  <Image
                    src="/cu-twilight-attack.webp"
                    alt="Combat"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">💰 End-of-Season Rewards</h2>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Player reward share is calculated proportionally based on their Domination Points vs their faction total</li>
                  <li>Engineered a scalable system to distribute <strong>lootboxes</strong>, <strong>seasonal tokens</strong>, and <strong>leaderboard rewards</strong></li>
                  <li>Integrated <strong>queue-based processing</strong> with <strong>Merkle proof claims</strong>, ensuring fair and gas-efficient reward execution</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🛡️ Leaderboards & Badges</h2>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Top <strong>100 Unicorn</strong> and <strong>50 Shadowcorn</strong> players earn seasonal <strong>Twilight Tactics Badges</strong></li>
                  <li>Rankings go live once Unicorn deployment begins</li>
                </ul>

                <div className="mt-8">
                  <Image
                    src="/cu-twilight-leaderboard.webp"
                    alt="Leaderboard"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🎯 Game Design Goals of Twilight Tactics</h2>
                <ol className="mt-4 space-y-2 list-decimal pl-6 marker:text-white">
                  <li><strong>Player Agency:</strong> Unicorn players choose their opponents</li>
                  <li><strong>Death Control:</strong> Users decide which Unicorn may be burned</li>
                  <li><strong>Low Unlock Requirements:</strong> Only 1 airlocked Unicorn per squad</li>
                  <li><strong>Accessibility:</strong> No fees beyond gas (reimbursed)</li>
                  <li><strong>Squad PvP at Scale:</strong> Full onchain coordination</li>
                </ol>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🏁 Conclusion</h2>
                <p className="mt-6">
                  <strong>Twilight Tactics</strong> redefined what fully onchain PvP could look like — combining <strong>real-time coordination</strong>, 
                  <strong>economic incentives</strong>, and <strong>decentralized game logic</strong> into a seasonal, competitive experience.
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