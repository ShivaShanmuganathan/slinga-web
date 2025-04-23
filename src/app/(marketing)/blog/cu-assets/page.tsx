import { Suspense } from "react";
import { Section } from "@/components/section";
import Blog from "@/components/sections/blog";
import Image from "next/image";
import { Github } from "lucide-react";

export const metadata = {
  title: "Crypto Unicorn Assets | Slinga",
  description: "A comprehensive look into the onchain assets powering the Crypto Unicorns ecosystem — from NFTs to tokens and loot systems.",
};

export default function CryptoUnicornAssets() {
  return (
    <>
      <Section className="relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-20 lg:px-8 lg:pt-20 lg:pb-28">
          <div className="mx-auto max-w-prose text-lg">
          <p className="text-base font-semibold leading-7 text-primary">Blog</p>
            <h1 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-zinc-100 sm:text-4xl">
              🧬 Crypto Unicorn Assets
            </h1>
            <p className="mt-8 text-xl leading-8 text-zinc-400">
              The Crypto Unicorns ecosystem is powered by a deeply interconnected web of NFTs, tokens, and smart contract-driven systems. Each asset — whether a Unicorn, a piece of Land, or a Lootbox — is not just cosmetic but functional, programmable, and deeply composable onchain.
            </p>
          </div>
          <div className="prose prose-invert mx-auto mt-12">
            <Image
              src="/cu.jpg"
              alt="Crypto Unicorns"
              width={1200}
              height={600}
              className="rounded-xl"
            />

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Technical Implementation</h2>
                <p className="mt-6">
                  The Crypto Unicorns ecosystem is powered by the below diamond standard smart contracts:
                </p>
                <ul className="mt-4 space-y-2 list-none pl-6">
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-unicorns" className="text-primary hover:underline">Unicorns NFT</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-shadowcorns" className="text-primary hover:underline">Shadowcorns NFT</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-land" className="text-primary hover:underline">Land NFT</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-public" className="text-primary hover:underline">CU Token</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-unim" className="text-primary hover:underline">Unicorn Milk</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-staking-badges" className="text-primary hover:underline">Staking Badges</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-dark-marks" className="text-primary hover:underline">Dark Marks Token</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-gems" className="text-primary hover:underline">Gems</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-items" className="text-primary hover:underline">Unicorn & Shadowcorn Items</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-rituals" className="text-primary hover:underline">Rituals</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-common-tokens" className="text-primary hover:underline">Common Tokens</a></li>
                </ul>

            <h2>🦄 Unicorns</h2>
            <p>
              Each <strong>Unicorn</strong> is an ERC-721 NFT with unique genetic traits that influence gameplay, farming efficiency, breeding, and PvP. These genetics are encoded directly onchain using <strong>bit manipulation</strong> — allowing for gas-efficient storage and retrieval.
            </p>
            <ul>
              <li><strong>8 Primary Classes</strong>: Cloud, Rainbow, Heart, Crystal, Star, Candy, Moon, Flower</li>
              <li><strong>Genetic Inheritance</strong>: Traits passed down through breeding</li>
            </ul>

            <h3>🔬 Bit Manipulation Structure</h3>
            <p>
              Unicorn genetics are stored in a 256-bit integer, where:
            </p>
            <ul>
              <li>Each gene occupies a fixed number of bits (e.g., 5–8 bits)</li>
              <li>Genes include traits like <strong>color</strong>, <strong>horn type</strong>, <strong>body</strong>, <strong>mane</strong>, <strong>tail</strong>, and <strong>class</strong></li>
              <li>Extracted using bitwise operations like shifts ({'>>'}) and masks (<code>&</code>)</li>
            </ul>

            <Image
              src="/cu-genetics.png"
              alt="Unicorn Genetics Bit Map"
              width={1200}
              height={600}
              className="rounded-xl"
            />
            <h3>🎮 Gameplay Integration</h3>

            <p>
              Unicorns serve as the core playable characters. Their genes determine their eligibility and effectiveness in farming, questing, and skill-based game modes like Jousting and Racing. Certain gene combinations also unlock synergy bonuses on specific Land types.
            </p>

            {/* Add a divider here */}
            <div className="my-8 h-[1px] w-full bg-zinc-800" />

            <h2>🌑 Shadowcorns</h2>
            <p>
              <strong>Shadowcorns</strong>, also ERC-721 NFTs, are rarer and have a unique gene structure focused on PvP and raid specialization. Their genes also use bit manipulation, with additional attributes like <strong>Dark Class</strong>, <strong>Aura Type</strong>, and <strong>Minion Proficiency</strong>.
            </p>

            <ul>
              <li><span className="font-bold text-white">5 Primary Types</span>: Slime, Volt, Soul, Fire, Nebula</li>
              <li><span className="font-bold text-white">Corruption Levels</span>: Affects minion breeding capabilities</li>
              <li><span className="font-bold text-white">Void Signatures</span>: Unique traits for special abilities</li>
            </ul>

            <Image
              src="/shadowcorns.jpeg"
              alt="Shadowcorns"
              width={1200}
              height={600}
              className="rounded-xl"
            />

            <h3>⚙️ Genetic Encoding</h3>
            <p>
              Uses the same 256-bit format as Unicorns
              More weight given to PvP-aligned genes (e.g., power type, combat cooldown)
              Affects Shadowforge minion output and raid strategy
            </p>

            <h3>🧨 Shadowcorn Roles</h3>
            <p>
              Shadowcorns act as dark PvP units. They do not participate in farming but instead breed minions, which are deployed in factional PvP (e.g., Twilight Tactics). Shadowcorns influence minion strength, cooldown, and class traits.
            </p>

            {/* Add a divider here */}
            <div className="my-8 h-[1px] w-full bg-zinc-800" />

            <h2>🏞️ Land NFTs</h2>
            <p>
              There are <strong>9 unique Land types</strong> in Crypto Unicorns, each classified by rarity and associated with different Unicorn classes.
            </p>
            <ul>
              <li>Common Lands: Cloud, Heart, Rainbow, Flower, Candy, OmNom, Crystal, Moon, Star</li>
              <li>Rare & Mythic Lands: Special editions designed for high-yield and advanced gameplay.</li>
            </ul>

            <p>
              Each Land NFT impacts resource yield, farming mechanics, and breeding efficiency. Certain Unicorn and Shadowcorn traits perform better on land types aligned with their class genetics.
            </p>

            <Image
              src="/cu-land-2.jpeg"
              alt="Land-Class Alignment"
              width={1200}
              height={600}
              className="rounded-xl"
            />

            <h2>💎 $CU (Crypto Unicorns Token)</h2>
            <p>
              $CU is the <strong>governance and premium utility token</strong> of the ecosystem:
            </p>
            <ul>
              <li>Used for staking, breeding, crafting, and marketplace fees</li>
              <li>ERC-20 token with capped supply</li>
              <li>Earned through gameplay and tournament rewards</li>
              <li>Spent in lootboxes, land sales, PvP entry, and other premium systems</li>
            </ul>

            <Image
              src="/cu-token-2.webp"
              alt="CU Token"
              width={1200}
              height={600}
              className="rounded-xl"
            />

            <h2>🍃 $UNIM (Unicorn Milk)</h2>
            <p>
              $UNIM is the <strong>primary in-game soft currency</strong>:
            </p>

            <ul>
              <li>Used for crafting, farming, questing, and building upgrades</li>
              <li>Burned in breeding, production, and progression systems</li>
              <li>Earned from land-based activities</li>
              <li>Highly deflationary with ongoing burn loops</li>
            </ul>

            <Image
              src="/cu-unim-2.jpeg"
              alt="UNIM Economy Loop"
              width={1200}
              height={600}
              className="rounded-xl"
            />

            <div className="my-8 h-[1px] w-full bg-zinc-800" />

            <h2>🩸 Dark Marks</h2>
            <p>
              Dark Marks are a PvP-exclusive, non-tradable token:
            </p>
            <ul>
              <li>Earned via faction battles and Shadowforge raids</li>
              <li>Required to summon, upgrade, and deploy Shadowcorn minions</li>
              <li>Integral to seasonal reward cycles and competitive PvP events</li>
            </ul>
            
            
            <div className="my-8 h-[1px] w-full bg-zinc-800" />


            <h2>🛡️ Shadowcorn Items</h2>
            <p>
              ERC-1155 items that include:
            </p>
            <ul>
              <li><strong>Minion crafting materials</strong></li>
              <li><strong>Dark potions</strong> and <strong>raid scrolls</strong></li>
              <li>Rewarded through PvP events and lootboxes</li>
              <li>Burned in Shadowforge-based gameplay</li>
            </ul>

            <Image
              src="/cu-shadow-items-2.jpg"
              alt="Shadowcorn Items"
              width={1200}
              height={600}
              className="rounded-xl"
            />
            <div className="my-8 h-[1px] w-full bg-zinc-800" />

            <h2>🌈 Unicorn Items</h2>
            <p>
              ERC-1155 assets used in the farming and crafting loop:
            </p>
            <ul>
              <li>Berries, building materials, class scrolls, and potions</li>
              <li>Crafted through farming gameplay</li>
              <li>Used in quests, upgrades, and Keystone creation</li>
            </ul>

            <Image
              src="/cu-items.jpeg"
              alt="Unicorn Items"
              width={1200}
              height={600}
              className="rounded-xl"
            />

            <div className="my-8 h-[1px] w-full bg-zinc-800" />

            <h2>🧬 Minions</h2>
            <p>
              Minions are onchain units spawned by Shadowcorns through the Shadow Forge. These are used for territory raids, leaderboard competitions, and event-driven faction warfare.
            </p>

            <h3>Minion Traits</h3>
            <ul>
              <li>Inherit partial genetics from their parent Shadowcorn</li>
              <li>Carry time-limited cooldowns</li>
              <li>Can be upgraded or sacrificed for Dark Marks and seasonal progress</li>
            </ul>

            <Image
              src="/cu-minions.webp"
              alt="Minions"
              width={1200}
              height={600}
              className="rounded-xl"
            />
            <div className="my-8 h-[1px] w-full bg-zinc-800" />

            <h2>💠 Gems</h2>
            <p>
              Gems are special consumable NFTs that boost Unicorn or Shadowcorn stats. These are socketed onto characters and influence gameplay outcomes.
            </p>

            <ul>
              <li>Gems provide passive bonuses in PvP, Jousting, and Racing</li>
              <li>Limited supply; often earned via seasonal events or crafting</li>
              <li>Stored as ERC-1155 tokens and burned on use</li>
            </ul>

            <Image
              src="/cu-gems.gif"
              alt="Gems"
              width={1200}
              height={600}
              className="rounded-xl"
            />
            <div className="my-8 h-[1px] w-full bg-zinc-800" />

            <h2>🎁 Lootboxes</h2>
            <p>
              Smart contract-based randomized reward crates:
            </p>
            <ul>
              <li>Contain items, crafting materials, and rare drops</li>
              <li>Opened via Chainlink VRF or similar verifiable randomness tools</li>
              <li>Include chances to receive Keystones, Land shards, or PvP materials</li>
            </ul>

            <Image
              src="/cu-lootbox.avif"
              alt="Lootbox"
              width={1200}
              height={600}
              className="rounded-xl"
            />

            <div className="my-8 h-[1px] w-full bg-zinc-800" />

            <h2>🔐 Keystones</h2>
            <p>
              ERC-1155 tokens used to mint Land NFTs via the <strong>Land Vending Machine</strong>:
            </p>
            <ul>
              <li>Each Keystone corresponds to a specific Land type</li>
              <li>Crafted from Unicorn items or randomly found in lootboxes</li>
              <li>Must be unlocked (bridged to wallet) for use in onchain vending</li>
            </ul>

            <Image
              src="/cu-trading.png"
              alt="Keystone"
              width={1200}
              height={600}
              className="rounded-xl"
            />

            <div className="my-8 h-[1px] w-full bg-zinc-800" />

            <h2>🏁 Conclusion </h2>
            <p>
              The Crypto Unicorns ecosystem is a fully onchain game with deep, interconnected systems. Each asset is not just cosmetic but functional, programmable, and deeply composable onchain.
            </p>
          </div>
        </div>
      </Section>
      <Suspense fallback={<div>Loading...</div>}>
        <Blog />
      </Suspense>
    </>
  );
} 