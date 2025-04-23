import { Suspense } from "react";
import { Section } from "@/components/section";
import Blog from "@/components/sections/blog";
import Image from "next/image";

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

            <h2>🌑 Shadowcorns</h2>
            <p>
              <strong>Shadowcorns</strong>, also ERC-721 NFTs, are rarer and have a unique gene structure focused on PvP and raid specialization. Their genes also use bit manipulation, with additional attributes like <strong>Dark Class</strong>, <strong>Aura Type</strong>, and <strong>Minion Proficiency</strong>.
            </p>

            <Image
              src="/shadowcorns.jpeg"
              alt="Shadowcorns"
              width={1200}
              height={600}
              className="rounded-xl"
            />

            <h2>🏞️ Land NFTs</h2>
            <p>
              There are <strong>9 unique Land types</strong> in Crypto Unicorns, each classified by rarity and associated with different Unicorn classes.
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

            <Image
              src="/cu-unim-2.jpeg"
              alt="UNIM Economy Loop"
              width={1200}
              height={600}
              className="rounded-xl"
            />

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

            <h2>🧬 Minions</h2>
            <p>
              Minions are onchain units spawned by Shadowcorns through the <strong>Shadow Forge</strong>. These are used for territory raids, leaderboard competitions, and event-driven faction warfare.
            </p>

            <Image
              src="/cu-minions.webp"
              alt="Minions"
              width={1200}
              height={600}
              className="rounded-xl"
            />

            <h2>💠 Gems</h2>
            <p>
              Gems are special consumable NFTs that boost Unicorn or Shadowcorn stats. These are socketed onto characters and influence gameplay outcomes.
            </p>

            <Image
              src="/cu-gems.gif"
              alt="Gems"
              width={1200}
              height={600}
              className="rounded-xl"
            />

            <h2>🎁 Lootboxes</h2>
            <p>
              Smart contract-based randomized reward crates:
            </p>

            <Image
              src="/cu-lootbox.avif"
              alt="Lootbox"
              width={1200}
              height={600}
              className="rounded-xl"
            />

            <h2>🔐 Keystones</h2>
            <p>
              ERC-1155 tokens used to mint Land NFTs via the <strong>Land Vending Machine</strong>:
            </p>

            <Image
              src="/cu-trading.png"
              alt="Keystone"
              width={1200}
              height={600}
              className="rounded-xl"
            />
          </div>
        </div>
      </Section>
      <Suspense fallback={<div>Loading...</div>}>
        <Blog />
      </Suspense>
    </>
  );
} 