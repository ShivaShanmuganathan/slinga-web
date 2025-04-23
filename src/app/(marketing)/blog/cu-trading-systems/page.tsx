import { Section } from "@/components/section";
import Blog from "@/components/sections/blog";
import { Github } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

export default function CUTradingSystems() {
  return (
    <article className="relative">
      {/* Hero Section */}
      <Section>
        <div className="border-x border-t">
          <div className="px-4 py-10 sm:px-6 lg:px-8 pb-24">
            <div className="mx-auto max-w-3xl text-base leading-7">
              <p className="text-base font-semibold leading-7 text-primary">Blog</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Crypto Unicorns: Trading & Distribution Systems
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                A technical deep dive into Crypto Unicorns&apos; innovative marketplace and AMM-powered land distribution systems.
              </p>

              {/* Hero Image */}
              <div className="mt-10 max-w-2xl">
                <Image
                  src="/cu-trading.png"
                  alt="Crypto Unicorns Trading Systems"
                  width={800}
                  height={400}
                  className="rounded-xl"
                />
              </div>

              {/* Article Content */}
              <div className="mt-10 max-w-2xl">
                <h2 className="mt-16 text-2xl font-bold tracking-tight">Trading & Distribution Systems</h2>
                <p className="mt-6">
                  Crypto Unicorns has implemented two systems for asset trading and distribution: a specialized NFT Marketplace and an AMM-powered Land Vending Machine. 
                  Together, these systems create a robust economy for both primary and secondary market activities.
                </p>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Technical Implementation</h2>
                <p className="mt-6">
                  The battle loop is powered by the below diamond standard smart contracts:
                </p>
                <ul className="mt-4 space-y-2 list-none pl-6">
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-marketplace" className="text-primary hover:underline">Marketplace</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-items" className="text-primary hover:underline">Unicorn & Shadowcorn Items</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-land" className="text-primary hover:underline">Land NFTs</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-osc-rituals" className="text-primary hover:underline">Rituals</a></li>
                  <li className="flex items-center gap-2"><Github className="w-4 h-4" /><a href="https://github.com/Laguna-Games/cu-public" className="text-primary hover:underline">CU Token</a></li>
                </ul>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🏪 NFT Marketplace</h2>
                <p className="mt-6">
                  The Crypto Unicorns Marketplace enables efficient trading of all game assets while maintaining economic balance through specialized mechanisms.
                </p>

                <div className="mt-8">
                  <Image
                    src="/cu-marketplace.jpeg"
                    alt="Crypto Unicorns Marketplace"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold">Key Features</h3>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li><strong>Multi-Token Support:</strong> Seamless trading of ERC721 and ERC1155 assets</li>
                  <li><strong>Dynamic Fees:</strong> Market-responsive fee structure</li>
                  <li><strong>Auction Systems:</strong> Dutch and English auction mechanisms</li>
                  <li><strong>Batch Operations:</strong> Efficient bulk trading capabilities</li>
                </ul>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h3 className="mt-8 text-xl font-semibold">🎁 Marketplace Bundles</h3>
                <div className="mt-8">
                  <Image
                    src="/cu-marketplace-bundles.jpeg"
                    alt="Marketplace Bundles"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <p className="mt-6">
                  One standout feature was <strong>Marketplace Bundles</strong>, allowing players to group multiple assets (e.g., Unicorn + Land + Berries) into a single listing. 
                  This provided convenience for sellers and composability for buyers looking to acquire synergistic sets of NFTs in one transaction. 
                  Bundles were especially useful for onboarding new players looking for a &quot;ready-to-play&quot; setup.
                </p>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🏧 Land Vending Machine</h2>
                <p className="mt-6">
                  The <strong>Land Vending Machine (LVM)</strong> is a fully onchain minting mechanism in the Crypto Unicorns ecosystem that allowed players to purchase Land NFTs using a combination of <strong>Keystones</strong>, <strong>ETH</strong>, <strong>$RBW</strong>, and <strong>$UNIM</strong>.
                </p>
                <p className="mt-4">
                  Deployed as a smart contract-powered vending interface, the LVM replaced traditional whitelist-based NFT drops with a <strong>craft-to-mint model</strong>. 
                  Players crafted <strong>Keystones</strong> &mdash; ERC-1155 tokens &mdash; from in-game class materials or obtained them via Lootboxes. 
                  Each <strong>Keystone</strong> corresponded to a specific land class (e.g., Mythic, Rare Wonder, Common Cloud), making land minting both skill- and luck-driven.
                </p>

                <div className="mt-8">
                  <Image
                    src="/cu-lvm.webp"
                    alt="Land Vending Machine"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold">💡 Key Features</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <strong>Keystone-Gated Minting</strong><br />
                    Each land type required its matching Keystone, making mints dependent on gameplay or lootbox RNG.
                  </li>
                  <li>
                    <strong>Bonding Curve Pricing</strong><br />
                    Mint prices followed a dynamic bonding curve, beginning at pre-sale rates and scaling with demand.
                  </li>
                  <li>
                    <strong>Onchain Crafting + Bridging</strong><br />
                    Keystones were crafted in-game, then &quot;unlocked&quot; to player wallets for use in the vending machine — creating a seamless bridge between in-game assets and onchain utility.
                  </li>
                  <li>
                    <strong>Gas-Optimized Architecture</strong><br />
                    Designed for scale, the LVM processed thousands of transactions with low gas costs and instant asset transfers to wallets.
                  </li>
                  <li>
                    <strong>Liquidity Pools</strong><br />
                    Tier-specific pools for different land types
                  </li>
                  <li>
                    <strong>Slippage Protection</strong><br />
                    Built-in price impact calculations
                  </li>
                </ul>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h2 className="mt-16 text-2xl font-bold tracking-tight">💰 Economic Impact</h2>
                <p className="mt-6">
                  The combined systems have achieved significant milestones:
                </p>

                <h3 className="mt-8 text-xl font-semibold">Primary Market</h3>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>10,000+ land NFTs distributed</li>
                  <li>2,000+ ETH in primary sales</li>
                  <li>Sustainable price discovery</li>
                  <li>Reduced price volatility</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold">Secondary Market</h3>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>$10M+ in trading volume</li>
                  <li>100,000+ successful trades</li>
                  <li>1,000+ daily active traders</li>
                  <li>Efficient price discovery</li>
                </ul>

                <div className="my-8 h-[1px] w-full bg-zinc-800" />

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🏁 Conclusion</h2>
                <p className="mt-6">
                  By combining an AMM-powered distribution system with a specialized marketplace, Crypto Unicorns has created a comprehensive trading ecosystem that ensures fair distribution, and efficient trading.
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